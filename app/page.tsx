import { upcomingEvents, residentAdvisor } from "./data";
import EventPoster from "./components/EventPoster";
import OrbitField from "./components/OrbitField";
import ProjectHeader from "./components/ProjectHeader";
import PageFooter from "./components/PageFooter";

export default function Home() {
  const upcoming = upcomingEvents()[0];
  return (
    <main className="td-home">
      <ProjectHeader title="Home" />
      <section className="td-stage" aria-label="Astron Club, Athens">
        <div className="td-sculpture" aria-hidden="true"><OrbitField compact /></div>
      {upcoming ? (
        <a
          className="td-next-event"
          href={upcoming.raUrl ?? "/events"}
          target={upcoming.raUrl ? "_blank" : undefined}
          rel={upcoming.raUrl ? "noreferrer" : undefined}
        >
          <p>Next event</p>
          <EventPoster src={upcoming.src} title={upcoming.title} date={upcoming.date} />
          <span>{upcoming.date} · {upcoming.title}</span>
          <span>Event on RA</span>
        </a>
      ) : (
        <a className="td-next-event" href={residentAdvisor} target="_blank" rel="noreferrer">
          <p>Next event</p><span>New dates to be announced</span><span>Check Resident Advisor</span>
        </a>
      )}
      </section>
      <PageFooter />
    </main>
  );
}
