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

    // Static orb position (top right, half visible)
    const orb = {
      x: canvas.width * 0.85,
      y: canvas.height * 0.25,
      radius: 250,
    };

    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Clear canvas with dark background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(10, 5, 15, 1)');
      bgGradient.addColorStop(0.5, 'rgba(5, 5, 20, 1)');
      bgGradient.addColorStop(1, 'rgba(10, 5, 15, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle stars
      drawStars(ctx, canvas.width, canvas.height, frameCount);

      // Draw the red glowing sphere with pulsing effect
      const pulseScale = 1 + 0.05 * Math.sin(frameCount * 0.01);

      // Outer glow (largest)
      const outerGlow = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.radius * 2.5
      );
      outerGlow.addColorStop(0, 'rgba(220, 50, 50, 0.2)');
      outerGlow.addColorStop(0.3, 'rgba(200, 30, 30, 0.1)');
      outerGlow.addColorStop(0.7, 'rgba(150, 20, 20, 0.03)');
      outerGlow.addColorStop(1, 'rgba(100, 10, 10, 0)');

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Middle glow
      const midGlow = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.radius * 1.8
      );
      midGlow.addColorStop(0, 'rgba(255, 100, 80, 0.4)');
      midGlow.addColorStop(0.4, 'rgba(220, 60, 60, 0.2)');
      midGlow.addColorStop(1, 'rgba(150, 30, 30, 0)');

      ctx.fillStyle = midGlow;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Main sphere
      const sphereGradient = ctx.createRadialGradient(
        orb.x - orb.radius * 0.3,
        orb.y - orb.radius * 0.3,
        0,
        orb.x,
        orb.y,
        orb.radius * pulseScale
      );
      sphereGradient.addColorStop(0, 'rgba(255, 150, 100, 0.9)');
      sphereGradient.addColorStop(0.3, 'rgba(220, 80, 60, 0.7)');
      sphereGradient.addColorStop(0.7, 'rgba(180, 40, 40, 0.5)');
      sphereGradient.addColorStop(1, 'rgba(100, 20, 20, 0.3)');

      ctx.fillStyle = sphereGradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius * pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // Bright rim light (edge highlight)
      const rimGradient = ctx.createLinearGradient(
        orb.x - orb.radius,
        orb.y - orb.radius * 0.5,
        orb.x + orb.radius * 0.2,
        orb.y + orb.radius * 0.2
      );
      rimGradient.addColorStop(0, 'rgba(255, 180, 150, 0.8)');
      rimGradient.addColorStop(0.5, 'rgba(255, 140, 100, 0.3)');
      rimGradient.addColorStop(1, 'rgba(200, 80, 60, 0)');

      ctx.fillStyle = rimGradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius * pulseScale, 0, Math.PI * 2);
      ctx.fill();

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
