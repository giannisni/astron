import PageFooter from "../components/PageFooter";
import ProjectHeader from "../components/ProjectHeader";
import EventCatalog from "../components/EventCatalog";
import { pageMetadata } from "../siteMetadata";
import { athensToday } from "../data";

export const metadata = pageMetadata("Events", "Upcoming nights and lineups at Astron Club in Athens.");

export default function EventsPage() {
  const today = athensToday();
  return (
    <main className="events-projects-page">
      <ProjectHeader title="Events" />

      <EventCatalog today={today} />

      <nav className="events-page-nav" aria-label="Site navigation">
        <a href="/sets">Sets</a>
        <a href="/about">About</a>
        <a href="/visit">Visit</a>
      </nav>
      <PageFooter />
    </main>
  );
}
