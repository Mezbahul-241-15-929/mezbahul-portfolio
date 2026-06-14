'use client';

import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const SIZE = 56;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2 - 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function GoToTopButton() {
  const { progress, visible } = useScrollProgress(300);
  const strokeOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  const isComplete = progress >= 99.5;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Go to top"
          initial={{ opacity: 0, scale: 0.75, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 24 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-6 right-6 z-40 cursor-pointer"
        >
          <div
            className={`relative flex items-center justify-center rounded-full transition-shadow duration-300 ${
              isComplete
                ? 'shadow-[0_0_28px_rgba(34,211,238,0.45)]'
                : 'shadow-[0_8px_24px_rgba(59,130,246,0.25)] group-hover:shadow-[0_12px_32px_rgba(34,211,238,0.35)]'
            }`}
            style={{ width: SIZE, height: SIZE }}
          >
            <svg
              className="absolute inset-0 -rotate-90"
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              aria-hidden="true"
            >
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={STROKE}
              />
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke="url(#goToTopGradient)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeOffset}
                className="transition-[stroke-dashoffset] duration-150 ease-out"
              />
              <defs>
                <linearGradient id="goToTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-[5px] rounded-full border border-white/10 bg-black/70 backdrop-blur-xl" />
            <div className="absolute inset-[5px] rounded-full bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <ChevronUp
              className={`relative z-10 h-5 w-5 transition-colors duration-300 ${
                isComplete ? 'text-cyan-300' : 'text-white group-hover:text-cyan-200'
              }`}
              strokeWidth={2.5}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
