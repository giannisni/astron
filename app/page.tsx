import OrbitField from "./components/OrbitField";
import { posters } from "./data";

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

const navigation = [
  ["Events", "/events"],
  ["Sets", "/sets"],
  ["Archive", "/archive"],
  ["About", "/about"],
  ["Visit", "/visit"],
] as const;

export default function Home() {
  const upcoming = nextEvent();
  return (
    <main className="home-screen">
      <OrbitField />
      <div className="grain" aria-hidden="true" />
      <a className="home-wordmark" href="/" aria-label="Astron Club home">Astron</a>
      <nav className="home-top-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <img className="home-symbol" src="/astron-logo-exact.png" alt="Astron spiral symbol" />
      {upcoming && (
        <a
          className="home-next-event"
          href={upcoming.raUrl ?? "/events"}
          target={upcoming.raUrl ? "_blank" : undefined}
          rel={upcoming.raUrl ? "noreferrer" : undefined}
        >
          <p>Next event</p>
          <img src={upcoming.src} alt={`Poster for ${upcoming.title}`} />
          <span>{upcoming.date} · {upcoming.title}</span>
        </a>
      )}
      <div className="home-meta">
        <p>Athens · 121 Konstantinoupoleos</p>
        <p>Electronic music &amp; club culture</p>
      </div>
      <div className="home-socials">
        <a href="https://www.instagram.com/astronclub/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://soundcloud.com/astron-bar" target="_blank" rel="noreferrer">SoundCloud ↗</a>
      </div>
    </main>
  );
}
