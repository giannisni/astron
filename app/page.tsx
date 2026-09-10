import { posters } from "./data";
import OrbitField from "./components/OrbitField";
import ProjectHeader from "./components/ProjectHeader";
import PageFooter from "./components/PageFooter";

function nextEvent() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return posters
    .map((poster) => {
      const [day, month, year] = poster.date.split(".").map(Number);
      return { ...poster, when: new Date(2000 + year, month - 1, day).getTime() };
    })
    .filter((poster) => poster.when >= today)
    .sort((a, b) => a.when - b.when)[0];
}

export default function Home() {
  const upcoming = nextEvent();
  return (
    <main className="td-home">
      <ProjectHeader title="Home" />
      <section className="td-stage" aria-label="Astron Club, Athens">
        <div className="td-sculpture" aria-hidden="true"><OrbitField compact /><img src="/astron-logo-exact.png" alt="" /></div>
        <h1 className="td-stage-wordmark">Astron</h1>
      {upcoming && (
        <a
          className="td-next-event"
          href={upcoming.raUrl ?? "/events"}
          target={upcoming.raUrl ? "_blank" : undefined}
          rel={upcoming.raUrl ? "noreferrer" : undefined}
        >
          <p>Next event</p>
          <img src={upcoming.src} alt={`Poster for ${upcoming.title}`} />
          <span>{upcoming.date} · {upcoming.title}</span>
        </a>
      )}
      </section>
      <PageFooter />
    </main>
  );
}
