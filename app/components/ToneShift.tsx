"use client";

import { useEffect } from "react";

const STOPS: Record<string, string[]> = {
  "--paper": ["#d5d3c8", "#dcd3bf", "#cdd0c8", "#c3beaf"],
  "--deep": ["#080809", "#0d0a10", "#0b100d", "#13100a"],
  "--night": ["#0c0c0b", "#100d13", "#0e1310", "#161209"],
};

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function sample(stops: string[], t: number): string {
  const scaled = Math.min(Math.max(t, 0), 1) * (stops.length - 1);
  const index = Math.min(Math.floor(scaled), stops.length - 2);
  const local = scaled - index;
  const from = hexToRgb(stops[index]);
  const to = hexToRgb(stops[index + 1]);
  const mixed = from.map((channel, i) => Math.round(channel + (to[i] - channel) * local));
  return `rgb(${mixed[0]},${mixed[1]},${mixed[2]})`;
}

export default function ToneShift() {
  useEffect(() => {
    const root = document.documentElement;
    let current = 0;
    let target = 0;
    let frame = 0;

    const readTarget = () => {
      const range = root.scrollHeight - window.innerHeight;
      target = range > 0 ? window.scrollY / range : 0;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const tick = () => {
      current += (target - current) * 0.07;
      if (Math.abs(target - current) < 0.001) current = target;
      for (const [name, stops] of Object.entries(STOPS)) {
        root.style.setProperty(name, sample(stops, current));
      }
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };

    readTarget();
    window.addEventListener("scroll", readTarget, { passive: true });
    window.addEventListener("resize", readTarget);
    return () => {
      window.removeEventListener("scroll", readTarget);
      window.removeEventListener("resize", readTarget);
      if (frame) cancelAnimationFrame(frame);
      for (const name of Object.keys(STOPS)) root.style.removeProperty(name);
    };
  }, []);

  return null;
}
