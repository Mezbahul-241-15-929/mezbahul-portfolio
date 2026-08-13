'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative px-0 py-3 sm:py-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
     <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020] shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="relative flex flex-col items-center justify-center gap-2 px-6 py-5 text-center sm:flex-row sm:gap-3 sm:px-10 sm:py-6">
            <p className="text-sm font-medium tracking-wide text-slate-400 sm:text-base">
              &copy; {currentYear} <span className="font-semibold text-slate-200">Md. Mezbahul Islam</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
