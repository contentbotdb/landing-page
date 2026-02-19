import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

function getCalendarClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}";
  const credentials = JSON.parse(raw);

  if (credentials.private_key) {
    credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!credentials.client_email || !calendarId) {
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar.events"],
  });

  const calendar = google.calendar({ version: "v3", auth });
  return { calendar, calendarId };
}

// GET /api/book?date=YYYY-MM-DD — returns booked hours for a given date
export async function GET(req: NextRequest) {
  try {
    const date = req.nextUrl.searchParams.get("date");
    if (!date) {
      return NextResponse.json({ error: "Date is required." }, { status: 400 });
    }

    const client = getCalendarClient();
    if (!client) {
      return NextResponse.json({ bookedSlots: [] });
    }

    const { calendar, calendarId } = client;

    const timeMin = `${date}T00:00:00-05:00`;
    const timeMax = `${date}T23:59:59-05:00`;

    const events = await calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: "startTime",
      timeZone: "America/New_York",
    });

    const bookedSlots: string[] = [];
    for (const event of events.data.items || []) {
      const start = event.start?.dateTime;
      if (start) {
        const hour = new Date(start).toLocaleString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          hour12: false,
        });
        bookedSlots.push(`${hour}:00`);
      }
    }

    return NextResponse.json({ bookedSlots });
  } catch (error: unknown) {
    console.error("Fetch booked slots error:", error);
    return NextResponse.json({ bookedSlots: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, address, date, time } = await req.json();

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Name, phone, date, and time are required." },
        { status: 400 }
      );
    }

    const client = getCalendarClient();
    if (!client) {
      return NextResponse.json(
        { error: "Booking service is not configured." },
        { status: 500 }
      );
    }

    const { calendar, calendarId } = client;

    // Build start and end times (1-hour appointment)
    const startDateTime = `${date}T${time}:00`;
    const [hours, minutes] = time.split(":").map(Number);
    const endHours = String(hours + 1).padStart(2, "0");
    const endDateTime = `${date}T${endHours}:${String(minutes).padStart(2, "0")}:00`;

    // Check if the slot is already booked
    const existing = await calendar.events.list({
      calendarId,
      timeMin: `${startDateTime}-05:00`,
      timeMax: `${endDateTime}-05:00`,
      singleEvents: true,
      timeZone: "America/New_York",
    });

    if (existing.data.items && existing.data.items.length > 0) {
      return NextResponse.json(
        { error: "This time slot is already booked. Please choose another time." },
        { status: 409 }
      );
    }

    const event = {
      summary: `FIE Energy Evaluation — ${name}`,
      description: [
        `Customer: ${name}`,
        `Phone: ${phone}`,
        address ? `Address: ${address}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      start: {
        dateTime: startDateTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/New_York",
      },
    };

    const created = await calendar.events.insert({
      calendarId,
      requestBody: event,
    });

    return NextResponse.json({
      success: true,
      eventId: created.data.id,
      message: "Appointment booked successfully!",
    });
  } catch (error: unknown) {
    const err = error as { message?: string; code?: number; status?: number; errors?: unknown[] };
    console.error("Booking error:", JSON.stringify({
      message: err.message,
      code: err.code,
      status: err.status,
      errors: err.errors,
    }));
    return NextResponse.json(
      {
        error: "Failed to create booking. Please try again.",
        debug: {
          message: err.message,
          code: err.code,
          status: err.status,
          errors: err.errors,
        },
      },
      { status: 500 }
    );
  }
}
