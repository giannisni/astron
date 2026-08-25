"use client";

import { useEffect, useRef } from "react";

export default function OrbitField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let animation = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX = 0;
    let pointerY = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / width - 0.5;
      pointerY = event.clientY / height - 0.5;
    };

    const draw = (now: number) => {
      const t = reduceMotion ? 0 : now * 0.00016;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#d5d3c8";
      context.fillRect(0, 0, width, height);
      const cx = width * (0.45 + pointerX * 0.025);
      const cy = height * (0.52 + pointerY * 0.025);
      const radius = Math.min(width, height) * 0.38;
      const count = width < 700 ? 86 : 142;
      context.lineWidth = 0.7;

      for (let i = 0; i < count; i += 1) {
        const phase = i / count;
        const angle = phase * Math.PI * 2 + t;
        const twist = t * 1.6 + phase * Math.PI * 9;
        const inner = radius * (0.25 + Math.sin(twist) * 0.035);
        const outer = radius * (0.94 + Math.cos(twist * 0.72) * 0.16);
        const x1 = cx + Math.cos(angle) * inner;
        const y1 = cy + Math.sin(angle) * inner;
        const offset = angle + 1.22 + Math.sin(t * 2 + phase * 6) * 0.2;
        const x2 = cx + Math.cos(offset) * outer;
        const y2 = cy + Math.sin(offset) * outer;
        context.beginPath();
        context.moveTo(x1, y1);
        context.quadraticCurveTo(
          cx + Math.cos(angle + twist * 0.08) * radius * 0.63,
          cy + Math.sin(angle + twist * 0.08) * radius * 0.63,
          x2,
          y2,
        );
        context.strokeStyle = i % 3 === 0 ? "rgba(16,16,14,.46)" : "rgba(16,16,14,.2)";
        context.stroke();
      }
      if (!reduceMotion) animation = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="orbit-field" aria-hidden="true" />;
}
