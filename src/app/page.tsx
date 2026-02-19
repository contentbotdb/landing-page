"use client";

import { useState, useEffect, useCallback } from "react";

/* =============================================
   SVG Icons
   ============================================= */

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* =============================================
   Starburst badge (like the Sunbright orange star)
   ============================================= */
function StarburstBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        <polygon
          fill="currentColor"
          points="50,0 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35"
        />
      </svg>
      <span className="absolute text-white font-black text-[10px] leading-tight text-center px-2 uppercase">
        {text}
      </span>
    </div>
  );
}

/* =============================================
   Navigation
   ============================================= */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <ShieldIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              FIE
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs font-bold tracking-wider transition-colors ${
                  i === 0 ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact button — hand-drawn oval style */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative text-primary font-bold text-sm tracking-wider px-6 py-2"
            >
              <span className="relative z-10">CONTACT</span>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 120 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="60"
                  cy="22"
                  rx="56"
                  ry="18"
                  stroke="#F9593B"
                  strokeWidth="2"
                  strokeDasharray="2 0"
                  transform="rotate(-3 60 22)"
                  style={{ strokeLinecap: "round" }}
                />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white"
          >
            {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white hover:text-primary py-2 text-sm font-bold tracking-wider"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary text-white text-center py-2.5 rounded-lg font-bold text-sm tracking-wider"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* =============================================
   Hero Section — Full-screen with overlay
   ============================================= */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image placeholder with blue/orange overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      {/* Simulated photo overlay — technician working */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Orange tint overlay like Sunbright */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-navy/80" />

      {/* Content centered */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 italic">
          Revolutionizing Your Home&apos;s Energy Efficiency
        </h1>
        <p className="text-lg sm:text-xl text-white/50 tracking-[0.3em] uppercase font-semibold mb-10">
          For a Brighter Tomorrow
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105"
        >
          SCHEDULE EVALUATION
          <ChevronRightIcon className="w-4 h-4" />
          <ChevronRightIcon className="w-4 h-4 -ml-3" />
        </a>
      </div>

      {/* Bottom left badge */}
      <div className="absolute bottom-8 left-8 bg-white rounded-lg p-3 shadow-xl hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="text-primary font-black text-lg">FIE</div>
          <div className="text-[10px] leading-tight text-dark">
            <div className="font-bold">ENERGY</div>
            <div className="text-primary font-black">CERTIFIED</div>
            <div className="font-bold">2025</div>
          </div>
        </div>
      </div>

      {/* Bottom right social icons */}
      <div className="absolute bottom-8 right-8 flex gap-4 hidden sm:flex">
        <a href="#" className="text-white/70 hover:text-primary transition-colors">
          <FacebookIcon className="w-5 h-5" />
        </a>
        <a href="#" className="text-white/70 hover:text-primary transition-colors">
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a href="#" className="text-white/70 hover:text-primary transition-colors">
          <YoutubeIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

/* =============================================
   About Section — with accordion cards
   ============================================= */
function About() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: "Unlock the Potential of Your Home with Our Energy Evaluation",
      content:
        "Scheduling a home energy evaluation with our licensed professionals is the first step toward understanding what's causing your electric bill to rise. We have access to all the energy efficiency programs and incentives available in the state of Florida, and you may qualify to have all out-of-pocket costs covered for brand-new energy efficiency upgrades.",
    },
    {
      title: "Empowering Your Home with the Inflation Reduction Act",
      content:
        "Thanks to the Inflation Reduction Act of 2022, which allocated $1.1 trillion toward enhancing our nation's energy efficiency, there are more opportunities than ever to make your home more energy-efficient while lowering your energy costs. Learn more about how this legislation can benefit you and your home.",
    },
    {
      title: "What You Can Expect from Our Service",
      content:
        "When you schedule an evaluation with us, we'll provide a 2-hour arrival window for our technicians, who are committed to serving as many homes as possible. The inspection can take anywhere from 20 minutes to an hour. To ensure a thorough evaluation, we recommend clearing a path to your attic, where adding extra insulation can save you an average of 15% on heating and cooling costs, according to the EPA.",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob-1 -top-20 -left-20" />
      <div className="blob-2 -bottom-16 -right-16" />
      <div className="blob-1 top-1/3 -right-32 rotate-45" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — About text */}
          <div className="pt-8">
            <h2 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-6">
              At FIE, we&apos;re dedicated to helping you enhance your home&apos;s energy
              efficiency and reduce your electric bill.
            </h2>
            <p className="text-gray leading-relaxed mb-8">
              Our expert team is here to guide you through the journey of transforming
              your home into an energy-efficient haven. Here&apos;s what we offer:
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-primary/30"
            >
              SCHEDULE EVALUATION
              <ChevronRightIcon className="w-4 h-4" />
              <ChevronRightIcon className="w-4 h-4 -ml-3" />
            </a>
          </div>

          {/* Right — Accordion cards */}
          <div className="space-y-4">
            {accordionItems.map((item, i) => (
              <div
                key={i}
                className="bg-navy rounded-xl overflow-hidden cursor-pointer border-l-4 border-primary transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <h3 className="text-white font-bold text-sm sm:text-base pr-4">
                    {item.title}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === i ? (
                      <MinusIcon className="w-5 h-5 text-primary" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
                {openIndex === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   Why Choose FIE — Orange background section
   ============================================= */
function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-white/20 rounded-2xl overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy italic leading-tight mb-6">
              Why Choose FIE Energy Services?
            </h2>
            <div className="space-y-4 text-navy/80">
              <p>
                We specialize in all energy efficiency upgrades for your home, including
                HVAC upgrades, insulation, smart water heaters, solar panels, and
                energy-efficient appliances.
              </p>
              <p>
                Our goal is to find you a program that costs nothing out of your pocket
                and can instantly start saving you money on your electric bill.
              </p>
              <p>
                As a leader in Florida Home Energy Efficiency, we have helped thousands
                successfully get approved for Energy Efficiency programs, and we&apos;re
                excited to help you and your family lower your monthly expenses forever.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-xl"
              >
                SCHEDULE EVALUATION
                <ChevronRightIcon className="w-4 h-4" />
                <ChevronRightIcon className="w-4 h-4 -ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   Google Maps Icon
   ============================================= */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/* =============================================
   Testimonials — Dark blue background with Google Reviews
   ============================================= */
function Testimonials() {
  const reviews = [
    {
      name: "Erik Ellingwood",
      reviewCount: "2 reviews · 1 photo",
      timeAgo: "6 months ago",
      text: "I am in the middle of a total remodel and Ernesto and his group were extremely helpful and professional. Will they be the cheapest in cost or the highest? These guys will return to complete the other phase of my AC job and I know the job will be completed fast and professionally. Quality, art and dedication to the task at hand and there has not been anyone like this around in a long time! Thank you ProTek!",
      initial: "E",
      initialBg: "bg-blue-600",
      link: "https://maps.app.goo.gl/VrUFRajBoF9mSwYV8",
    },
    {
      name: "Jeremy Knipe",
      reviewCount: "Local Guide · 23 reviews",
      timeAgo: "1 month ago",
      text: "Awesome job. Great price. Seamless installation. Tito and his crew did great",
      initial: "",
      initialBg: "",
      hasAvatar: true,
      link: "https://maps.app.goo.gl/wVNcj4mxjfsReKhd9",
    },
    {
      name: "Karalee Smiley",
      reviewCount: "9 reviews",
      timeAgo: "7 months ago",
      text: "I was extremely impressed with Protek! TJ was awesome! very knowledgeable, thorough, honest and explained everything in detail. I would recommend them to anyone if you're looking for a top notch professional, honest company!",
      initial: "K",
      initialBg: "bg-purple-600",
      link: "https://maps.app.goo.gl/GcN9A99kzAVAfKFc8",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-gradient-to-b from-navy-light to-navy overflow-hidden">
      {/* Decorative wavy lines */}
      <div className="wavy-line top-20 right-10" />
      <div className="wavy-line top-32 right-24" />
      <div className="wavy-line bottom-20 left-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white italic uppercase leading-tight">
              Testimonials
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent italic uppercase leading-tight"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              Testimonials
            </h3>
          </div>

          {/* Starburst badge */}
          <div className="mt-6 lg:mt-0">
            <StarburstBadge
              text="OVER 2,500 FAMILIES HELPED"
              className="w-24 h-24 sm:w-28 sm:h-28"
            />
          </div>
        </div>

        {/* Google Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <a
              key={i}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
            >
              {/* Header: avatar + name + google icon */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  {review.hasAvatar ? (
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-sm">
                        J
                      </div>
                    </div>
                  ) : (
                    <div className={`w-10 h-10 rounded-full ${review.initialBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{review.initial}</span>
                    </div>
                  )}
                  <div>
                    <div className="text-dark font-semibold text-sm">{review.name}</div>
                    <div className="text-gray text-xs">{review.reviewCount}</div>
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 flex-shrink-0" />
              </div>

              {/* Stars + time */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray text-xs">{review.timeAgo}</span>
              </div>

              {/* Review text */}
              <p className="text-dark text-sm leading-relaxed">
                {review.text}
              </p>
            </a>
          ))}
        </div>

        {/* Bottom — Rating & repeated text */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <StarburstBadge text="" className="w-12 h-12" />
            <span className="text-4xl font-black text-white">4.9</span>
            <span className="text-white/60 text-sm">
              Out of <span className="text-primary font-bold">1,000+</span> Reviews
            </span>
          </div>
          <div className="mt-6 sm:mt-0 text-right">
            <h3
              className="text-3xl sm:text-4xl font-black text-transparent italic uppercase"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              Testimonials
            </h3>
            <h4
              className="text-2xl sm:text-3xl font-black text-transparent italic uppercase"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
            >
              Testimonials
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   Helper: generate available time slots
   ============================================= */
function getTimeSlots() {
  const slots: string[] = [];
  for (let h = 8; h <= 20; h++) {
    const hour = h > 12 ? h - 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    const value = `${h.toString().padStart(2, "0")}:00`;
    slots.push(value);
    // label is for display but we store the 24h value
    void `${hour}:00 ${ampm}`;
  }
  return slots;
}

function formatTimeLabel(value: string) {
  const h = parseInt(value.split(":")[0]);
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  const ampm = h >= 12 ? "PM" : "AM";
  return `${hour}:00 ${ampm}`;
}

function getNowEST() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}

function getMinDate() {
  const d = getNowEST();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getAvailableSlots(allSlots: string[], selectedDate: string) {
  const now = getNowEST();
  const todayStr = getMinDate();
  if (selectedDate !== todayStr) return allSlots;
  const currentHour = now.getHours();
  return allSlots.filter((slot) => {
    const slotHour = parseInt(slot.split(":")[0]);
    return slotHour > currentHour;
  });
}

/* =============================================
   Calendar Icon
   ============================================= */
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* =============================================
   Contact / Booking Form Section
   ============================================= */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    date: "",
    time: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const timeSlots = getTimeSlots();

  const fetchBookedSlots = useCallback(async (date: string) => {
    if (!date) { setBookedSlots([]); return; }
    try {
      const res = await fetch(`/api/book?date=${date}`);
      const data = await res.json();
      setBookedSlots(data.bookedSlots || []);
    } catch {
      setBookedSlots([]);
    }
  }, []);

  useEffect(() => {
    fetchBookedSlots(formData.date);
  }, [formData.date, fetchBookedSlots]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", address: "", phone: "", date: "", time: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to book. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full px-5 py-4 bg-navy text-white placeholder-white/50 rounded-lg border-none outline-none focus:ring-2 focus:ring-primary transition-all";

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left — Image */}
        <div className="relative bg-navy min-h-[300px] lg:min-h-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-light-warm/10" />
        </div>

        {/* Right — Booking Form */}
        <div className="bg-light-warm flex items-center py-16 px-6 sm:px-12 lg:px-16">
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <CalendarIcon className="w-8 h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-black text-navy italic leading-tight">
                Book Your Evaluation
              </h2>
            </div>
            <p className="text-gray mb-8">
              Pick a date and time that works for you. We&apos;ll confirm your
              appointment right away.
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
                Appointment booked! We&apos;ll see you then.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-center font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Your Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={inputClass}
              />

              {/* Date & Time row */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  required
                  min={getMinDate()}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value, time: "" })
                  }
                  className={`${inputClass} ${!formData.date ? "text-white/50" : ""}`}
                />
                <select
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className={`${inputClass} ${!formData.time ? "text-white/50" : ""}`}
                >
                  <option value="" disabled>
                    Select Time
                  </option>
                  {getAvailableSlots(timeSlots, formData.date)
                    .filter((slot) => !bookedSlots.includes(slot))
                    .map((slot) => (
                    <option key={slot} value={slot} className="text-dark bg-white">
                      {formatTimeLabel(slot)}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-black text-sm tracking-widest uppercase rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? "BOOKING..." : "BOOK EVALUATION"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   Footer — Dark navy with navigation
   ============================================= */
function Footer() {
  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "PRIVACY POLICY", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-navy to-navy-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
              <ShieldIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-white text-xs leading-tight">
              <div className="font-bold tracking-wider">FIE</div>
              <div className="text-white/50 text-[10px]">FOR A BRIGHTER TOMORROW</div>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {links.map((l, i) => (
              <a
                key={l.href + i}
                href={l.href}
                className={`text-[11px] font-bold tracking-wider transition-colors ${
                  i === 0 ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact button */}
          <a
            href="#contact"
            className="relative text-primary font-bold text-sm tracking-wider px-6 py-2"
          >
            <span className="relative z-10">CONTACT</span>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 120 44"
              fill="none"
            >
              <ellipse
                cx="60"
                cy="22"
                rx="56"
                ry="18"
                stroke="#F9593B"
                strokeWidth="2"
                transform="rotate(-3 60 22)"
                style={{ strokeLinecap: "round" }}
              />
            </svg>
          </a>
        </div>

        {/* Address */}
        <div className="mt-6 text-center text-white/40 text-xs">
          6920 E Chelsea St, Tampa, FL 33610
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   Main Page
   ============================================= */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
