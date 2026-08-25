"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/astronclub/";

const posters = [
  { src: "/posters/91f9c5ccabd43800.jpg", date: "04.09.26", title: "Persephonic Sirens Night" },
  { src: "/posters/f83b3239b5fe3df9.jpg", date: "05.09.26", title: "ACN · Jorkes" },
  { src: "/posters/2cfa4007769823bc.jpg", date: "12.09.26", title: "KAOS × Astron · Oliver Ho" },
  { src: "/posters/878bd7db6c7448b3.jpg", date: "29.08.26", title: "Cotton · Oreta" },
  { src: "/posters/d5adb300bd48b0de.jpg", date: "05.08.26", title: "Astron Archive" },
  { src: "/posters/ebde989a9ea1464e.jpg", date: "29.07.26", title: "Astron Archive" },
  { src: "/posters/12f197070d6fada0.jpg", date: "29.07.26", title: "Astron Archive" },
  { src: "/posters/cbcce0c5d972f25a.jpg", date: "21.07.26", title: "ACN · Eleusinia Mysteria" },
  { src: "/posters/0aac3ae954afce0b.jpg", date: "24.07.26", title: "ACN · 3.14 / Katra" },
  { src: "/posters/ec3f3fb50e29c3e7.jpg", date: "25.07.26", title: "ACN · Mavridis / Re-Act" },
  { src: "/posters/c762c7dfbb4d7419.jpg", date: "22.07.26", title: "Astron Archive" },
  { src: "/posters/66b19365edeca1ec.jpg", date: "18.01.26", title: "Astron Club Night" },
];

const upcoming = posters.slice(0, 3);

export default function Home() {
  const [activePoster, setActivePoster] = useState<number | null>(null);

  useEffect(() => {
    if (activePoster === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePoster(null);
      if (event.key === "ArrowRight") setActivePoster((activePoster + 1) % posters.length);
      if (event.key === "ArrowLeft") setActivePoster((activePoster - 1 + posters.length) % posters.length);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [activePoster]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Astron Club home">
          <img src="/astron-logo-exact.png" alt="" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#next">Next</a>
          <a href="#sets">Sets</a>
          <a href="#archive">Archive</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-smoke" aria-hidden="true">
          <span className="smoke-layer smoke-one" />
          <span className="smoke-layer smoke-two" />
          <span className="smoke-layer smoke-three" />
        </div>
        <img className="hero-mark" src="/astron-logo-exact.png" alt="" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <p className="eyebrow">Athens · 121 Konstantinoupoleos</p>
        <p className="hero-side">Electronic music<br />&amp; club culture</p>
        <h1><span>Astron</span><span>Club</span></h1>
        <p className="hero-copy">Sound, bodies<br />&amp; space in motion.</p>
        <a className="enter-link" href="#next">Enter <span aria-hidden="true">↓</span></a>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>ASTRON CLUB · ATHENS · NO PHOTO POLICY · 121 KONSTANTINOUPOLEOS ·&nbsp;</div>
        <div>ASTRON CLUB · ATHENS · NO PHOTO POLICY · 121 KONSTANTINOUPOLEOS ·&nbsp;</div>
      </div>

      <section className="next-section" id="next">
        <div className="section-label"><span>01</span><p>Next at Astron</p></div>
        <div className="next-list">
          {upcoming.map((event, index) => (
            <article className="next-event" key={event.src}>
              <p className="next-date">{event.date}</p>
              <h2>{event.title}</h2>
              <p className="next-meta">23:00 — 07:00<br />Athens, GR</p>
              <button type="button" className="poster-peek" onClick={() => setActivePoster(index)} aria-label={`View poster for ${event.title}`}>
                <img src={event.src} alt="" />
              </button>
              <a href={instagram} target="_blank" rel="noreferrer">Details ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="sets-section" id="sets">
        <div className="section-label"><span>02</span><p>Recorded at Astron</p></div>
        <div className="sets-intro">
          <h2>Sets from<br />the room.</h2>
          <p>Live recordings and sessions from the Astron archive. Press play without leaving the signal.</p>
        </div>
        <div className="soundcloud-shell">
          <iframe
            title="Astron sets on SoundCloud"
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            loading="lazy"
            src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F29135206&show_artwork=true&maxheight=450&color=ed70b8"
          />
        </div>
        <div className="sets-footer">
          <p>Constantine · 02.02.19<br />Bedouin Records at Astron Bar</p>
          <p>Makaton Live · 17.02.18<br />Astron Bar</p>
          <a href="https://soundcloud.com/astron-bar" target="_blank" rel="noreferrer">All sets on SoundCloud ↗</a>
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-label"><span>03</span><p>Past events / visual archive</p></div>
        <div className="archive-intro">
          <h2>Every night<br />leaves a trace.</h2>
          <p>A growing collection of posters from the Astron orbit. Select any piece to view it full size.</p>
        </div>
        <div className="poster-grid">
          {posters.map((poster, index) => (
            <button className="archive-card" type="button" key={poster.src} onClick={() => setActivePoster(index)}>
              <span className="poster-image"><img src={poster.src} alt={`${poster.title}, ${poster.date}`} loading={index > 4 ? "lazy" : "eager"} /></span>
              <span className="poster-info"><b>{poster.title}</b><i>{poster.date}</i></span>
            </button>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-label"><span>04</span><p>The club</p></div>
        <div className="about-copy">
          <h2>A room for the<br />Athens underground.</h2>
          <p className="lead">Astron is a venue dedicated to electronic music and club culture—built around adventurous programming, a powerful system, and the collective energy of the floor.</p>
          <div className="about-columns">
            <p>After sixteen formative years at Taki 3 in Psiri, Astron moved into its present home in Votanikos. The scale changed; the intent did not.</p>
            <p>Local currents meet international selectors across techno, electro, experimental sound and the spaces between. Come as you are. Stay for the whole arc.</p>
          </div>
        </div>
        <img className="about-mark" src="/astron-logo-exact.png" alt="Astron spiral mark" />
      </section>

      <section className="visit-section" id="visit">
        <div className="section-label"><span>05</span><p>Find the signal</p></div>
        <h2>121<br />Konstantinoupoleos</h2>
        <div className="visit-details">
          <p>Votanikos<br />Athens 104 47<br />Greece</p>
          <div>
            <a href="https://maps.google.com/?q=121+Konstantinoupoleos+Athens" target="_blank" rel="noreferrer">Get directions ↗</a>
            <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://ra.co/clubs/169696" target="_blank" rel="noreferrer">Resident Advisor ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#top">Astron</a>
        <p>Electronic music &amp; club culture<br />Athens, Greece</p>
        <p>© 2026 Astron Club<br /><a href={instagram} target="_blank" rel="noreferrer">@astronclub ↗</a></p>
      </footer>

      {activePoster !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Event poster viewer" onClick={() => setActivePoster(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActivePoster(null)} aria-label="Close poster">Close ×</button>
          <button className="lightbox-arrow prev" type="button" onClick={(e) => { e.stopPropagation(); setActivePoster((activePoster - 1 + posters.length) % posters.length); }} aria-label="Previous poster">←</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={posters[activePoster].src} alt={`${posters[activePoster].title}, ${posters[activePoster].date}`} />
            <figcaption><span>{posters[activePoster].title}</span><span>{posters[activePoster].date}</span></figcaption>
          </figure>
          <button className="lightbox-arrow next" type="button" onClick={(e) => { e.stopPropagation(); setActivePoster((activePoster + 1) % posters.length); }} aria-label="Next poster">→</button>
        </div>
      )}
    </main>
  );
}
