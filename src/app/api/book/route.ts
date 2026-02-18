import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, address, date, time } = await req.json();

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Name, phone, date, and time are required." },
        { status: 400 }
      );
    }

    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}"
    );

    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!credentials.client_email || !calendarId) {
      console.error("Missing Google Calendar credentials or calendar ID");
      return NextResponse.json(
        { error: "Booking service is not configured." },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/calendar.events"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Build start and end times (1-hour appointment)
    const startDateTime = `${date}T${time}:00`;
    const endDate = new Date(`${startDateTime}`);
    endDate.setHours(endDate.getHours() + 1);
    const endDateTime = endDate.toISOString();

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
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to create booking. Please try again." },
      { status: 500 }
    );
  }
}
