"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { SectionIntro } from "@/components/section-intro";
import { events } from "@/content/site";
import AnniversaryRSVP from "@/components/AnniversaryRSVP";

// Categorize events
function categorizeEvents(events) {
  const today = new Date();

  const upcoming = [];
  const past = [];

  events.forEach((event) => {
    const eventDate = new Date(event.date);

    if (eventDate >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
  past.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { upcoming, past };
}

export default function EventsClient() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false); // ✅ modal state

  const { upcoming, past } = categorizeEvents(events);

  const selectedEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() ===
      selectedDate.toDateString()
  );

  const currentYear = new Date().getFullYear();
  const anniversaryDate = new Date(`${currentYear}-12-06`);

  return (
    <main className="section-stack">

      {/* Calendar Section */}
      <section className="page-banner">
        <div className="shell events-hero">

          {/* LEFT */}
          <div className="events-hero__content">
            <p className="page-banner__eyebrow">Events</p>
            <h1 className="events-title">
              Church Events <span>Calendar</span>
            </h1>

            <div className="selected-events">
              <h3 className="selected-date">{selectedDate.toDateString()}</h3>

              {selectedEvents.length ? (
                selectedEvents.map((event) => (
                  <div className="event-card premium" key={event.title}>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <span>{event.location}</span>
                  </div>
                ))
              ) : (
                <p className="empty-state">No events on this day</p>
              )}
            </div>
          </div>

          {/* RIGHT - Calendar */}
          <div className="events-hero__calendar">
            <div className="calendar-wrapper premium-calendar">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={({ date }) => {
                  const hasEvent = events.some(
                    (event) =>
                      new Date(event.date).toDateString() ===
                      date.toDateString()
                  );
                  return hasEvent ? <span className="calendar-dot" /> : null;
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming + Past Events */}
      <section className="section events-section">
        <div className="shell split-grid">

          {/* Upcoming */}
          <div>
            <SectionIntro eyebrow="Upcoming" title="Don’t miss what’s coming" />
            {upcoming.length > 0 ? (
              upcoming.map((event) => (
                <div className="event-card premium" key={event.title}>
                  <h3>{event.title}</h3>
                  <p className="event-date">{new Date(event.date).toDateString()}</p>
                  <p>{event.description}</p>
                  <span className="event-location">{event.location}</span>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h4>No upcoming events</h4>
                <p>Check back later for our future gatherings and services.</p>
              </div>
            )}
          </div>

          {/* Past */}
          <div>
            <SectionIntro eyebrow="Past" title="Previously held events" />
            {past.length > 0 ? (
              past.map((event) => (
                <div className="event-card" key={event.title}>
                  <h3>{event.title}</h3>
                  <p className="event-date">{new Date(event.date).toDateString()}</p>
                  <p>{event.description}</p>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h4>No past events</h4>
                <p>It looks like there haven’t been any events yet. Stay tuned!</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Anniversary Section */}
      <section className="section section--tinted anniversary-section">
        <div className="shell anniversary-shell">

          <SectionIntro eyebrow="Annual Celebration" title="Church Anniversary" />

          <div className="anniversary-card">
            <div className="anniversary-bg-layer"></div>
            <div className="anniversary-content">
              <h2>🎉 Anniversary Service</h2>
              <p><strong>Date:</strong> {anniversaryDate.toDateString()}</p>
              <p>Join us as we celebrate God’s faithfulness and the growth of the ministry.</p>

              {/* Button triggers modal */}
              <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                RSVP Now
              </button>
            </div>
          </div>

          {/* Modal overlay rendered at top-level */}
          <AnniversaryRSVP isOpen={isOpen} setIsOpen={setIsOpen} />

        </div>
      </section>

    </main>
  );
}