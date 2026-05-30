'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Email', href: 'mailto:mazbahulislammeraj@gmail.com' },
  ];

  return (
    <motion.footer
      className="relative px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-900 to-black shadow-2xl">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-12 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-3 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex w-full justify-center lg:justify-start lg:order-1"
            >
              <Link href="/" className="flex w-full max-w-sm flex-col items-center gap-2.5 rounded-4xl border border-white/10 bg-linear-to-b from-white/8 to-white/4 px-6 py-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-cyan-400/20 hover:from-white/10 hover:to-white/5 sm:max-w-md">
                <span className="relative flex h-22 w-22 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-fuchsia-500 p-1 shadow-lg shadow-cyan-500/20 sm:h-24 sm:w-24">
                  <span className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-slate-950">
                    <Image
                      src="/Profile.png"
                      alt="Mezbahul"
                      fill
                      className="object-cover"
                      sizes="112px"
                      priority
                    />
                  </span>
                </span>
                <span className="text-xl font-semibold leading-tight tracking-wide text-white sm:text-[1.35rem]">
                  Md. Mezbahul Islam
                </span>
                <span className="text-xs font-medium uppercase leading-none tracking-[0.16em] text-cyan-200/80">
                  Department of CSE
                </span>
                <span className="text-sm leading-snug text-slate-300">
                  Daffodil International Univiersity
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true }}
              className="w-full justify-self-center text-center sm:max-w-sm lg:order-3"
            >
              <h3 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-100">
                Quick Links
              </h3>
              <div className="mt-4 grid justify-items-center gap-2.5">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-white"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/60 text-cyan-300 transition-transform duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15 group-hover:text-cyan-200">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              viewport={{ once: true }}
              className="w-full justify-self-center text-center sm:max-w-sm lg:order-2"
            >
              <h3 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                Connect
              </h3>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => {
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {social.label === 'GitHub' && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path
                            fill="#FFFFFF"
                            d="M12 .5C5.649.5.5 5.649.5 12c0 5.087 3.292 9.399 7.866 10.914.575.106.786-.25.786-.555 0-.274-.01-1.186-.015-2.15-3.2.696-3.876-1.36-3.876-1.36-.523-1.329-1.278-1.682-1.278-1.682-1.045-.715.08-.7.08-.7 1.155.081 1.763 1.186 1.763 1.186 1.026 1.758 2.692 1.251 3.349.956.103-.744.402-1.251.73-1.539-2.559-.29-5.247-1.279-5.247-5.693 0-1.258.45-2.287 1.187-3.09-.119-.291-.515-1.465.113-3.055 0 0 .968-.31 3.17 1.18a10.96 10.96 0 0 1 2.887-.388c.98.004 1.967.132 2.887.388 2.2-1.49 3.167-1.18 3.167-1.18.629 1.59.233 2.764.115 3.055.739.803 1.185 1.832 1.185 3.09 0 4.424-2.693 5.399-5.258 5.683.413.355.783 1.055.783 2.126 0 1.535-.014 2.772-.014 3.149 0 .307.208.666.793.553C20.709 21.392 24 17.084 24 12 24 5.649 18.351.5 12 .5Z"
                          />
                        </svg>
                      )}
                      {social.label === 'LinkedIn' && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.425-.654 1.186-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331v5.532zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.927.762 1.941 1.715 0 .953-.771 1.715-1.984 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      )}
                      {social.label === 'Facebook' && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.7 4.533-4.7 1.312 0 2.684.235 2.684.235v2.967h-1.513c-1.49 0-1.954.93-1.954 1.884v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                        </svg>
                      )}
                      {social.label === 'Instagram' && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <defs>
                            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#fdf497" />
                              <stop offset="25%" stopColor="#fdf497" />
                              <stop offset="45%" stopColor="#fd5949" />
                              <stop offset="60%" stopColor="#d6249f" />
                              <stop offset="100%" stopColor="#285AEB" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.772 1.153 4.92 4.92 0 0 1 1.153 1.772c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.772 4.92 4.92 0 0 1-1.772 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.772-1.153 4.92 4.92 0 0 1-1.153-1.772c-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.772A4.92 4.92 0 0 1 5.561 1.798c.457-.163 1.257-.349 2.427-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.74 0 8.332.014 7.052.072 5.774.13 4.89.327 4.12.589a6.99 6.99 0 0 0-2.53 1.64A6.99 6.99 0 0 0 .59 4.759C.327 5.53.13 6.414.072 7.692.014 8.972 0 9.38 0 12s.014 3.028.072 4.308c.058 1.278.255 2.162.518 2.933a6.99 6.99 0 0 0 1.64 2.53 6.99 6.99 0 0 0 2.53 1.64c.771.263 1.655.46 2.933.518C8.972 23.986 9.38 24 12 24s3.028-.014 4.308-.072c1.278-.058 2.162-.255 2.933-.518a6.99 6.99 0 0 0 2.53-1.64 6.99 6.99 0 0 0 1.64-2.53c.263-.771.46-1.655.518-2.933C23.986 15.028 24 14.62 24 12s-.014-3.028-.072-4.308c-.058-1.278-.255-2.162-.518-2.933a6.99 6.99 0 0 0-1.64-2.53A6.99 6.99 0 0 0 19.24.59c-.771-.263-1.655-.46-2.933-.518C15.028.014 14.62 0 12 0zm0 5.838A6.162 6.162 0 1 1 12 18.162 6.162 6.162 0 0 1 12 5.838zm0 10.164A4.002 4.002 0 1 0 12 8.002a4.007 4.007 0 0 0 0 8.0z" />
                        </svg>
                      )}
                      {social.label === 'Email' && <Mail className="h-4.5 w-4.5 text-cyan-300" />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="relative border-t border-white/10 px-6 py-1.5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
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
