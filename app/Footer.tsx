'use client';

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
    { name: 'GitHub', href: '#', label: 'GitHub' },
    { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <motion.footer 
      className="relative px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg p-8"
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center shrink-0 mb-4">
                <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </Link>
              <p className="text-gray-400 text-sm">
                Building amazing digital experiences with modern technologies.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  if ('icon' in social && social.icon) {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400 text-blue-300 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300 transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  } else {
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400 text-blue-300 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-300 transition-all duration-300 font-bold text-xs"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.name?.[0]}
                      </motion.a>
                    );
                  }
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-800"></div>

          {/* Bottom Section */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <motion.button 
              className="px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
