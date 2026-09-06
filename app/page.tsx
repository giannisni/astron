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
    <main className="mirror-home">
      <div className="mirror-collage" aria-hidden="true">
        <div className="mirror-panel smoke-panel"><img src="/hero-smoke-texture.png" alt="" /></div>
        <div className="mirror-panel symbol-panel"><img src="/astron-logo-exact.png" alt="" /></div>
        <div className="mirror-panel symbol-panel reverse-symbol"><img src="/astron-logo-exact.png" alt="" /></div>
        <div className="mirror-panel smoke-panel reflected-smoke"><img src="/hero-smoke-texture.png" alt="" /></div>
      </div>
      <header className="mirror-home-header"><a href="/" aria-label="Astron Club home">ASTRON_CLUB</a><span>ATHENS, GR · 37°58′ N</span></header>
      <section className="mirror-entrance" aria-labelledby="entrance-title">
        <p className="mirror-kicker">Electronic music &amp; club culture</p>
        <h1 id="entrance-title"><span>ASTRON</span><em>After dark.</em></h1>
        <a className="mirror-enter" href="/events">Enter the club <span aria-hidden="true">↗</span></a>
        <p className="mirror-address">121 Konstantinoupoleos<br />Athens, Greece</p>
      </section>
      {upcoming && (
        <a
          className="mirror-next-event"
          href={upcoming.raUrl ?? "/events"}
          target={upcoming.raUrl ? "_blank" : undefined}
          rel={upcoming.raUrl ? "noreferrer" : undefined}
        >
          <img src={upcoming.src} alt={`Poster for ${upcoming.title}`} />
          <span><small>Next transmission · {upcoming.date}</small>{upcoming.title}<b>View event ↗</b></span>
        </a>
      )}
      <footer className="mirror-home-footer">
        <nav aria-label="Main navigation">{navigation.map(([label, href], index) => <a href={href} key={href}><small>0{index + 1}</small>{label}</a>)}</nav>
        <a href="https://www.instagram.com/astronclub/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
}
