"use client";

import { useState } from "react";
import { eventDay, instagram, posters, residentAdvisor } from "../data";
import EventPoster from "./EventPoster";

const selectedEvents = posters.filter(event => event.raUrl);

export default function EventCatalog({ today }: { today: string }) {
  const [filter, setFilter] = useState("All events");
  const visible = selectedEvents.filter(event => filter === "All events" ||
    (filter === "Upcoming" ? eventDay(event.date) >= today : eventDay(event.date) < today))
    .sort((a, b) => {
      const aUpcoming = eventDay(a.date) >= today;
      const bUpcoming = eventDay(b.date) >= today;
      if (aUpcoming !== bUpcoming) return aUpcoming ? -1 : 1;
      return aUpcoming ? eventDay(a.date).localeCompare(eventDay(b.date)) : eventDay(b.date).localeCompare(eventDay(a.date));
    });

  return (
    <section className="td-catalog" aria-label="Event catalog">
      <aside className="td-catalog-side">
        <h1>Events</h1>
        <p>Programme</p>
        {["All events", "Upcoming", "Past events"].map(label => <button type="button" key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}
      </aside>
      <div className="td-catalog-results">
        <p role="status">{visible.length} {visible.length === 1 ? "event" : "events"}</p>
        {visible.length ? <div className="selected-events-grid">
          {visible.map(event => <article key={event.src}>
            <a className="selected-event-poster" href={event.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer" aria-label={`View ${event.title} on Resident Advisor`}><EventPoster src={event.src} title={event.title} date={event.date} /></a>
            <div className="selected-event-details">
              <div className="td-event-meta"><span>{eventDay(event.date) >= today ? "Upcoming" : "Past event"}</span><span>{event.date}</span><span>Athens</span></div>
              <h2>{event.title}</h2>
              <p>Astron Club</p>
              <div className="event-external-links"><a href={event.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer">Event on RA</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></div>
            </div>
          </article>)}
        </div> : <p className="td-empty">No events in this selection. <a href={residentAdvisor} target="_blank" rel="noreferrer">Check Resident Advisor for the latest programme.</a></p>}
      </div>
    </section>
  );
}
