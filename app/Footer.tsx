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
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-0 lg:px-0">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-black shadow-2xl">
          <div className="flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5">
            <p className="text-sm sm:text-base text-slate-400 text-center">
              &copy; {currentYear} Mezbahul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
