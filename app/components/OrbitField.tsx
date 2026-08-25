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

    const draw = (now: number) => {
      const t = reduceMotion ? 0.7 : now * 0.00055;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#080809";
      context.fillRect(0, 0, width, height);
      const cx = width * 0.42;
      const cy = height * 0.52;
      const pulse = 1 + Math.sin(t * 1.8) * 0.035;
      const radius = Math.min(width, height) * (width < 700 ? 0.33 : 0.36) * pulse;
      const rings = width < 700 ? 48 : 68;
      const steps = width < 700 ? 210 : 320;

      context.lineWidth = width < 700 ? 0.92 : 1.12;
      context.lineJoin = "round";
      context.shadowColor = "rgba(205,190,232,.3)";
      context.shadowBlur = width < 700 ? 3 : 5;
      context.globalCompositeOperation = "screen";

      for (let ring = 1; ring <= rings; ring += 1) {
        const n = ring / rings;
        const spiral = (1 - n) * 2.5 + t * 1.15;
        context.beginPath();
        for (let step = 0; step <= steps; step += 1) {
          const theta = (step / steps) * Math.PI * 2;
          const lobe = Math.cos(theta * 3 + spiral);
          const ripple = Math.sin(theta * 6 - spiral * 0.7);
          const deformation = 1 + lobe * (0.055 + n * 0.19) + ripple * 0.018 * n;
          const r = radius * n * deformation;
          const angle = theta + spiral * (0.14 + (1 - n) * 0.34) + t * 0.38;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r * 1.04;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.closePath();
        context.strokeStyle = `rgba(241,240,235,${0.5 + n * 0.42})`;
        context.stroke();
      }
      context.globalCompositeOperation = "source-over";
      context.shadowBlur = 0;
      if (!reduceMotion) animation = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="orbit-field" aria-hidden="true" />;
}
