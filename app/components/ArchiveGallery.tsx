"use client";

import { useEffect, useState } from "react";
import { instagram, posters, residentAdvisor } from "../data";

export default function ArchiveGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % posters.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + posters.length) % posters.length);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="archive-grid">
        {posters.map((poster, index) => (
          <article className="archive-entry" key={poster.src}>
            <button type="button" className="archive-item" onClick={() => setActive(index)} aria-label={`View poster for ${poster.title}`}>
              <img src={poster.src} alt={`${poster.title}, ${poster.date}`} loading={index > 5 ? "lazy" : "eager"} />
            </button>
            <div className="archive-entry-details">
              <b>{poster.title}</b>
              <i>Date: {poster.date}</i>
              <em>Venue: Astron Club, Athens</em>
              <div className="event-external-links">
                <a href={residentAdvisor} target="_blank" rel="noreferrer">Resident Advisor ↗</a>
                <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {active !== null && (
        <div className="poster-modal" role="dialog" aria-modal="true" aria-label="Poster viewer" onClick={() => setActive(null)}>
          <button className="modal-close" type="button" onClick={() => setActive(null)}>Close ×</button>
          <button className="modal-arrow modal-prev" type="button" aria-label="Previous poster" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + posters.length) % posters.length); }}>←</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={posters[active].src} alt={`${posters[active].title}, ${posters[active].date}`} />
            <figcaption><span>{posters[active].title}</span><span>{posters[active].date}</span></figcaption>
          </figure>
          <button className="modal-arrow modal-next" type="button" aria-label="Next poster" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % posters.length); }}>→</button>
        </div>
      )}
    </>
  );
}
