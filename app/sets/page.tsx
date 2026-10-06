import PageFooter from "../components/PageFooter";
import ProjectHeader from "../components/ProjectHeader";
import { soundcloud } from "../data";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Sets", "Live recordings and sessions from the Astron sound archive.");

export default function SetsPage() {
  return (
    <main className="events-projects-page sets-projects-page">
      <ProjectHeader title="Sets" />

      <section className="selected-events sets-selected-events">
        <h1>Recorded Sets</h1>
        <div className="sets-projects-grid">
          <div className="sets-player">
            <iframe
              title="Astron sets on SoundCloud"
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="lazy"
              src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F29135206&show_artwork=true&maxheight=450&color=d5d3c8"
            />
          </div>
          <article className="set-note">
            <p>01</p>
            <h2>Constantine</h2>
            <p>02.02.19<br />Bedouin Records at Astron Bar</p>
          </article>
          <article className="set-note">
            <p>02</p>
            <h2>Makaton Live</h2>
            <p>17.02.18<br />Astron Bar</p>
          </article>
          <article className="set-note set-note-intro">
            <p>Archive</p>
            <h2>From the room</h2>
            <p>Recordings from nights past. Press play and return to the floor.</p>
          </article>
          <a className="set-note set-note-link" href={soundcloud} target="_blank" rel="noreferrer">
            <p>External</p>
            <h2>SoundCloud ↗</h2>
            <p>Listen to the complete Astron archive.</p>
          </a>
        </div>
      </section>

      <nav className="events-page-nav" aria-label="Site navigation">
        <a href="/events">Events</a>
        <a href="/about">About</a>
        <a href="/visit">Visit</a>
      </nav>
      <PageFooter />
    </main>
  );
}
