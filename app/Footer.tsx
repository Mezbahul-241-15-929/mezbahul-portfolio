'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <motion.footer
      className="relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-black shadow-2xl">

          <div className="relative border-t border-white/10 px-6 py-1.5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400 text-center">
                &copy; {currentYear} Mezbahul. All rights reserved.
              </p>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Go to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
