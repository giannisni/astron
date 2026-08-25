import PageFooter from "../components/PageFooter";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("About", "Astron is a room for adventurous electronic music and Athens club culture.");

export default function AboutPage() {
  return (
    <main className="events-projects-page about-projects-page">
      <header className="events-projects-header">
        <a className="events-projects-wordmark" href="/">Astron</a>
        <p>About</p>
        <a className="events-projects-home" href="/" aria-label="Astron Club home">
          <img src="/astron-logo-exact.png" alt="" />
        </a>
      </header>

      <section className="selected-events about-selected-events">
        <h1>About Astron</h1>
        <div className="about-editorial-grid">
          <article className="about-lead-card">
            <p>01 / The room</p>
            <h2>A room in motion.</h2>
            <p>Astron is a venue for electronic music and club culture—built around adventurous programming, a powerful system and the collective energy of the floor.</p>
          </article>
          <article className="about-copy-card">
            <p>02 / History</p>
            <h2>From Psiri to Votanikos</h2>
            <p>After sixteen formative years at Taki 3 in Psiri, Astron moved into its present home in Votanikos. The scale changed; the intent did not.</p>
          </article>
          <article className="about-copy-card">
            <p>03 / Programme</p>
            <h2>Local and international currents</h2>
            <p>Selectors meet across techno, electro, experimental sound and the spaces between. Come as you are. Stay for the whole arc.</p>
          </article>
          <figure className="about-symbol-card">
            <img src="/astron-logo-exact.png" alt="Astron spiral symbol" />
            <figcaption><span>Astron Club</span><span>Athens, Greece</span></figcaption>
          </figure>
        </div>
      </section>

      <nav className="events-page-nav" aria-label="Site navigation">
        <a href="/events">Events</a>
        <a href="/sets">Sets</a>
        <a href="/archive">Archive</a>
        <a href="/visit">Visit</a>
      </nav>
      <PageFooter />
    </main>
  );
}
