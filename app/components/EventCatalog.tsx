"use client";

import { useState } from "react";
import { instagram, posters, residentAdvisor } from "../data";

const selectedEvents = [posters[3], posters[0], posters[1], posters[2]];
const eventDay = (date: string) => {
  const [day, month, year] = date.split(".");
  return `20${year}-${month}-${day}`;
};

export default function EventCatalog({ today }: { today: string }) {
  const [filter, setFilter] = useState("All events");
  const visible = selectedEvents.filter(event => filter === "All events" ||
    (filter === "Upcoming" ? eventDay(event.date) >= today : eventDay(event.date) < today));

  return (
    <section className="td-catalog" aria-label="Event catalog">
      <aside className="td-catalog-side">
        <h1>Events</h1>
        <p>Programme</p>
        {["All events", "Upcoming", "Past events"].map(label => <button type="button" key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}
        <a href="/archive">Complete poster archive</a>
      </aside>
      <div className="td-catalog-results">
        <p role="status">{visible.length} {visible.length === 1 ? "event" : "events"}</p>
        {visible.length ? <div className="selected-events-grid">
          {visible.map(event => <article key={event.src}>
            <a className="selected-event-poster" href={event.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer" aria-label={`View ${event.title} on Resident Advisor`}><img src={event.src} alt={`${event.title} poster`} /></a>
            <div className="selected-event-details">
              <div className="td-event-meta"><span>ACN</span><span>{event.date}</span><span>Athens</span></div>
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
