'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 bg-black/40 backdrop-blur-lg rounded-2xl px-6 sm:px-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-100 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm ml-4">
            Get in Touch
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-100 hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-gray-100 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
