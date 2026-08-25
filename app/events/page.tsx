import InnerHeader from "../components/InnerHeader";
import PageFooter from "../components/PageFooter";
import { instagram, posters } from "../data";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Events", "Upcoming nights and lineups at Astron Club in Athens.");

export default function EventsPage() {
  return (
    <main className="inner-page">
      <InnerHeader />
      <section className="page-intro">
        <p className="page-index">01 / Events</p>
        <h1>Next at<br />Astron</h1>
        <p>Doors at 23:00. The night ends when the signal does.</p>
      </section>
      <section className="event-list">
        {posters.slice(0, 4).map((event, index) => (
          <article className="event-row" key={event.src}>
            <p>{String(index + 1).padStart(2, "0")}</p>
            <p>{event.date}</p>
            <h2>{event.title}</h2>
            <img src={event.src} alt={`${event.title} poster`} />
            <a href={instagram} target="_blank" rel="noreferrer">Details ↗</a>
          </article>
        ))}
      </section>
      <PageFooter />
    </main>
  );
}
