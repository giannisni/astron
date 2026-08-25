import ArchiveGallery from "../components/ArchiveGallery";
import PageFooter from "../components/PageFooter";
import ProjectHeader from "../components/ProjectHeader";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Archive", "A visual archive of past Astron Club nights and posters.");

export default function ArchivePage() {
  return (
    <main className="events-projects-page archive-projects-page">
      <ProjectHeader title="Archive" />

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
