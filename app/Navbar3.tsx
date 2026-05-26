'use client';

import { Menu, X } from 'lucide-react';

interface Navbar3Props {
  isOpen: boolean;
  activeSection: string;
  toggleMenu: () => void;
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  handleLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Navbar3({
  isOpen,
  activeSection,
  toggleMenu,
  handleNavLinkClick,
  handleLogoClick,
}: Navbar3Props) {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Learning', href: '#learning' },
  ];

  return (
    <nav className="fixed w-full top-48 z-40 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 bg-black/40 backdrop-blur-lg rounded-2xl px-6 sm:px-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">

          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center shrink-0 cursor-pointer">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href.slice(1))}
                  className={`px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                      : 'text-gray-100 hover:text-orange-400 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className={`hidden md:block px-6 py-2 rounded-lg font-medium text-sm ml-4 cursor-pointer transition-all duration-300 ${
              activeSection === 'contact'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/50'
            }`}
          >
            Get in Touch
          </a>

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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href.slice(1))}
                  className={`block px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                      : 'text-gray-100 hover:text-orange-400 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className={`w-full mt-4 px-4 py-2 block text-center rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/50'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
