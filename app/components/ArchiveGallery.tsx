"use client";

import { useEffect, useState } from "react";
import { posters } from "../data";

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
          <button type="button" className="archive-item" key={poster.src} onClick={() => setActive(index)}>
            <img src={poster.src} alt={`${poster.title}, ${poster.date}`} loading={index > 5 ? "lazy" : "eager"} />
            <span><b>{poster.title}</b><i>{poster.date}</i></span>
          </button>
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
