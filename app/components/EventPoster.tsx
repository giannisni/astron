"use client";

import { useState } from "react";

export default function EventPoster({ src, title, date }: { src: string; title: string; date: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="event-poster-unavailable"><span>{date}</span><strong>{title}</strong><span>View flyer on RA</span></span>
  ) : (
    <img src={src} alt={`${title} poster`} onError={() => setFailed(true)} />
  );
}
