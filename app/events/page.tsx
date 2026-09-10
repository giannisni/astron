import PageFooter from "../components/PageFooter";
import ProjectHeader from "../components/ProjectHeader";
import EventCatalog from "../components/EventCatalog";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Events", "Upcoming nights and lineups at Astron Club in Athens.");

export default function EventsPage() {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Athens", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return (
    <main className="events-projects-page">
      <ProjectHeader title="Events" />

      <EventCatalog today={today} />

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
