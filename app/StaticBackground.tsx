'use client';

import { useEffect, useRef } from 'react';

export default function StaticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Homepage-style dark background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(2, 4, 12, 1)');
      bgGradient.addColorStop(0.5, 'rgba(5, 9, 28, 1)');
      bgGradient.addColorStop(1, 'rgba(16, 3, 38, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const pageGlow = ctx.createRadialGradient(
        canvas.width * 0.72,
        canvas.height * 0.45,
        0,
        canvas.width * 0.72,
        canvas.height * 0.45,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      pageGlow.addColorStop(0, 'rgba(25, 16, 119, 0.85)');
      pageGlow.addColorStop(0.25, 'rgba(7, 8, 45, 0.6)');
      pageGlow.addColorStop(0.55, 'rgba(7, 8, 45, 0.16)');
      pageGlow.addColorStop(1, 'rgba(7, 8, 45, 0)');

      ctx.fillStyle = pageGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid overlay to match the homepage card background
      ctx.strokeStyle = 'rgba(72, 111, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 42) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 42) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw subtle stars
      drawStars(ctx, canvas.width, canvas.height, frameCount);

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawStars = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      frame: number
    ) => {
      // Seed for consistent star positions
      const seedRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };

      ctx.fillStyle = 'rgba(200, 200, 255, 0.6)';
      for (let i = 0; i < 100; i++) {
        const x = seedRandom(i * 12.9898) * width;
        const y = seedRandom(i * 78.233) * height;
        const size = seedRandom(i * 45.164) * 1.2;
        const twinkle = 0.4 + 0.6 * Math.sin(frame * 0.02 + i);

        ctx.globalAlpha = twinkle * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
