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
      const t = reduceMotion ? 0.7 : now * 0.00035;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#080809";
      context.fillRect(0, 0, width, height);
      const mobile = width < 700;
      const regionWidth = mobile ? width * 0.60 : Math.min(width * 0.41, height * 0.64);
      const regionHeight = height;
      const regionLeft = mobile ? width * 0.08 : width * 0.13;
      const regionTop = 0;
      const lines = mobile ? 52 : 78;
      const steps = mobile ? 130 : 165;
      const fieldX = regionLeft + regionWidth * (0.64 + Math.sin(t * 0.38) * 0.035);
      const fieldY = regionTop + regionHeight * (0.28 + Math.cos(t * 0.31) * 0.045);

      context.lineWidth = width < 700 ? 0.7 : 0.82;
      context.lineJoin = "round";
      context.shadowColor = "rgba(214,207,230,.28)";
      context.shadowBlur = width < 700 ? 2 : 3.5;
      context.globalCompositeOperation = "screen";

      for (let line = 0; line < lines; line += 1) {
        const n = line / (lines - 1);
        const baseX = regionLeft - regionWidth * 0.06 + n * regionWidth * 1.12;
        const linePhase = line * 0.12;
        context.beginPath();
        for (let step = 0; step <= steps; step += 1) {
          const progress = step / steps;
          const y = -12 + progress * (regionHeight + 24);
          const ny = (y - regionTop) / regionHeight;
          const dx = (baseX - fieldX) / (regionWidth * 0.43);
          const dy = (y - fieldY) / (regionHeight * 0.37);
          const influence = Math.exp(-(dx * dx + dy * dy) * 1.25);
          const middleBand = Math.exp(-Math.pow((y - (regionTop + regionHeight * 0.6)) / (regionHeight * 0.16), 2));
          const upperFold = Math.exp(-Math.pow((y - (regionTop + regionHeight * 0.18)) / (regionHeight * 0.22), 2));
          const longWave = Math.sin(ny * Math.PI * 2.8 + t * 1.05 + linePhase) * 17;
          const fineWave = Math.sin(ny * Math.PI * 7 - t * 0.7 + linePhase * 0.42) * 7;
          const foldPhase = ny * 8 + t * 1.2 + linePhase * 0.72;
          const liquidFold = influence * (Math.sin(foldPhase) * 66 + Math.cos(foldPhase * 0.55) * 22);
          const current = middleBand * Math.sin(linePhase * 0.9 - t * 1.3) * 18;
          const split = upperFold * Math.sin(linePhase * 1.7 + t * 0.8) * Math.max(0, dx) * 54;
          const x = baseX + longWave + fineWave + liquidFold + current + split;
          const displacedY = y + influence * Math.cos(foldPhase * 0.8) * 16 + middleBand * Math.sin(linePhase + t) * 7;
          if (step === 0) context.moveTo(x, displacedY);
          else context.lineTo(x, displacedY);
        }
        context.strokeStyle = `rgba(241,240,235,${0.48 + (line % 4) * 0.11})`;
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
