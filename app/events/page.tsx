import PageFooter from "../components/PageFooter";
import ProjectHeader from "../components/ProjectHeader";
import { instagram, posters, residentAdvisor } from "../data";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Events", "Upcoming nights and lineups at Astron Club in Athens.");

const selectedEvents = [posters[3], posters[0], posters[1], posters[2]];

export default function EventsPage() {
  return (
    <main className="events-projects-page">
      <ProjectHeader title="Events" />

      <section className="selected-events">
        <h1>Selected Events</h1>
        <div className="selected-events-grid">
          {selectedEvents.map((event) => (
            <article key={event.src}>
              <a className="selected-event-poster" href={event.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer" aria-label={`Resident Advisor event page for ${event.title}`}>
                <img src={event.src} alt={`${event.title} poster`} />
              </a>
              <div className="selected-event-details">
                <h2>{event.title}</h2>
                <p>Date: {event.date}</p>
                <p>Doors: 23:00 — 07:00</p>
                <p>Venue: Astron Club, Athens</p>
                <div className="event-external-links">
                  <a href={event.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer">Event on RA ↗</a>
                  <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="events-page-nav" aria-label="Site navigation">
        <a href="/sets">Sets</a>
        <a href="/archive">Archive</a>
        <a href="/about">About</a>
        <a href="/visit">Visit</a>
      </nav>
      <PageFooter />
    </main>
  );
}
