"use client";

import { useEffect, useState } from "react";
import { instagram, residentAdvisor } from "../data";
import EventPoster from "./EventPoster";

export default function ArchiveGallery({ posters }: { posters: { src: string; title: string; date: string; raUrl?: string }[] }) {
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
  }, [active, posters]);

  return (
    <>
      <div className="archive-grid">
        {posters.map((poster, index) => (
          <article className="archive-entry" key={poster.src}>
            <button type="button" className="archive-item" onClick={() => setActive(index)} aria-label={`View poster for ${poster.title}`}>
              <EventPoster src={poster.src} title={poster.title} date={poster.date} />
            </button>
            <div className="archive-entry-details">
              <b>{poster.title}</b>
              <i>Date: {poster.date}</i>
              <em>Venue: Astron Club, Athens</em>
              <div className="event-external-links">
                <a href={poster.raUrl ?? residentAdvisor} target="_blank" rel="noreferrer">{poster.raUrl ? "Event on RA ↗" : "Astron on RA ↗"}</a>
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
            <a href={posters[active].raUrl ?? residentAdvisor} target="_blank" rel="noreferrer">
              <EventPoster key={posters[active].src} src={posters[active].src} title={posters[active].title} date={posters[active].date} />
            </a>
            <figcaption><span>{posters[active].title}</span><span>{posters[active].date}</span></figcaption>
          </figure>
          <button className="modal-arrow modal-next" type="button" aria-label="Next poster" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % posters.length); }}>→</button>
        </div>
      )}
    </>
  );
}
