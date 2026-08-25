import ArchiveGallery from "../components/ArchiveGallery";
import PageFooter from "../components/PageFooter";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Archive", "A visual archive of past Astron Club nights and posters.");

export default function ArchivePage() {
  return (
    <main className="events-projects-page archive-projects-page">
      <header className="events-projects-header">
        <a className="events-projects-wordmark" href="/">Astron</a>
        <p>Archive</p>
        <a className="events-projects-home" href="/" aria-label="Astron Club home">
          <img src="/astron-logo-exact.png" alt="" />
        </a>
      </header>

      <section className="selected-events archive-selected-events">
        <h1>Past Events</h1>
        <ArchiveGallery />
      </section>

      <nav className="events-page-nav" aria-label="Site navigation">
        <a href="/events">Events</a>
        <a href="/sets">Sets</a>
        <a href="/about">About</a>
        <a href="/visit">Visit</a>
      </nav>
      <PageFooter />
    </main>
  );
}
