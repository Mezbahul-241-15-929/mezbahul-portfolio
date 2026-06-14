'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

export default function NavbarModern() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const pendingSectionRef = useRef<string | null>(null);
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialClickLockRef = useRef(false);
  const initialClickLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const pendingSection = pendingSectionRef.current;
      if (pendingSection) {
        if (initialClickLockRef.current) {
          return;
        }

        const targetTop = pendingSection === 'home'
          ? window.scrollY
          : document.getElementById(pendingSection)?.getBoundingClientRect().top;

        if (targetTop !== undefined && targetTop !== null && Math.abs(targetTop - (pendingSection === 'home' ? 0 : 80)) <= 24) {
          pendingSectionRef.current = null;
          if (pendingTimeoutRef.current) {
            clearTimeout(pendingTimeoutRef.current);
            pendingTimeoutRef.current = null;
          }
        } else {
          return;
        }
      }
      
      const sections = ['about', 'gallery', 'academics', 'skills', 'projects', 'learning', 'contact'];
      let currentSection = 'home';
      const activationPoint = 120;

      if (window.scrollY < activationPoint) {
        currentSection = 'home';
      } else {
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= activationPoint) {
              currentSection = sectionId;
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (pendingTimeoutRef.current) {
        clearTimeout(pendingTimeoutRef.current);
      }
      if (initialClickLockTimeoutRef.current) {
        clearTimeout(initialClickLockTimeoutRef.current);
      }
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    pendingSectionRef.current = sectionId;
    initialClickLockRef.current = true;
    if (initialClickLockTimeoutRef.current) {
      clearTimeout(initialClickLockTimeoutRef.current);
    }
    initialClickLockTimeoutRef.current = setTimeout(() => {
      initialClickLockRef.current = false;
      initialClickLockTimeoutRef.current = null;
    }, 350);
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
    }
    pendingTimeoutRef.current = setTimeout(() => {
      pendingSectionRef.current = null;
      pendingTimeoutRef.current = null;
    }, 2500);
    setActiveSection(sectionId);
    
    // Add small delay to allow menu animation to complete before scrolling
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const navbarHeight = 80; // Account for fixed navbar height
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    pendingSectionRef.current = 'home';
    initialClickLockRef.current = true;
    if (initialClickLockTimeoutRef.current) {
      clearTimeout(initialClickLockTimeoutRef.current);
    }
    initialClickLockTimeoutRef.current = setTimeout(() => {
      initialClickLockRef.current = false;
      initialClickLockTimeoutRef.current = null;
    }, 350);
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
    }
    pendingTimeoutRef.current = setTimeout(() => {
      pendingSectionRef.current = null;
      pendingTimeoutRef.current = null;
    }, 2500);
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Gallery', href: '#gallery', icon: '🖼️' },
    { name: 'Academics', href: '#academics', icon: '🎓' },
    { name: 'Skills', href: '#skills', icon: '🛠️' },
    { name: 'Projects', href: '#projects', icon: '💼' },
    { name: 'Learning', href: '#learning', icon: '📚' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3' 
          : 'py-2'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-3 sm:px-4 md:px-6 lg:px-4 xl:px-8">
        <div className={`mx-auto relative transition-colors duration-300 px-3 sm:px-4 py-2 ${
          scrolled
            ? 'bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl'
            : 'bg-transparent backdrop-blur-0 border border-transparent rounded-2xl'
        } lg:max-w-7xl`}>
          
          <div className="flex justify-between items-center gap-2 h-12">
            {/* Logo */}
            <motion.a 
              href="#" 
              onClick={handleLogoClick}
              className="flex items-center gap-2 shrink-0 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <FiCode className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div className="flex sm:flex flex-col items-start gap-1">
                <span className="text-xs sm:text-sm font-extrabold text-cyan-400 tracking-wider leading-none">
                  MEZBAHUL
                </span>
                <span className="text-xs sm:text-sm font-black bg-linear-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg leading-none">
                  PORTFOLIO
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation - Large Screens */}
            <motion.div 
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 ml-3 xl:ml-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href.slice(1))}
                    variants={itemVariants}
                    className={`relative px-2.5 xl:px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 group whitespace-nowrap`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-linear-to-r from-blue-500/80 to-cyan-500/80'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}></div>
                    
                    {/* Content */}
                    <span className={`relative flex items-center gap-2 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      <span className="text-sm xl:text-base">{link.icon}</span>
                      {link.name}
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Tablet Navigation - Medium Screens */}
            <motion.div 
              className="hidden md:flex lg:hidden items-center gap-0.5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href.slice(1))}
                    variants={itemVariants}
                    className={`relative px-2.5 py-1.5 rounded-md font-medium text-xs cursor-pointer transition-all duration-300 group whitespace-nowrap`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-linear-to-r from-blue-500/80 to-cyan-500/80'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}></div>
                    
                    {/* Content */}
                    <span className={`relative flex items-center gap-1 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      <span className="text-sm">{link.icon}</span>
                      <span>{link.name}</span>
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1 right-1 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                        layoutId="activeIndicatorTablet"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Button - Large Screens */}
            <motion.div
              className="hidden lg:block shrink-0 ml-1 xl:ml-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
                className="relative h-12 px-3 xl:px-6 text-sm font-semibold text-white overflow-hidden rounded-lg group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/60"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-50 blur transition-all duration-300 -z-10"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-2 whitespace-nowrap">
                  📧 Connect
                </span>
              </a>
            </motion.div>

            {/* CTA Button - Tablet Screens */}
            <motion.div
              className="hidden md:block lg:hidden shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
                className="relative h-9 px-2.5 text-xs font-semibold text-white overflow-hidden rounded-md group inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/60"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-md"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-md opacity-0 group-hover:opacity-50 blur transition-all duration-300 -z-10"></div>
                
                {/* Content */}
                <span className="relative flex items-center gap-1 whitespace-nowrap">
                  📧 Connect
                </span>
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border border-white/20 rounded-2xl mt-2 bg-black/20 backdrop-blur-md px-4 sm:px-6 py-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavLinkClick(e, link.href.slice(1))}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white'
                            : 'text-white hover:text-cyan-300 hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {link.icon}
                          {link.name}
                        </span>
                      </motion.a>
                    );
                  })}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNavLinkClick(e, 'contact')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="block w-full mt-4 px-4 py-3 text-center rounded-lg font-medium bg-linear-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      📧 Connect
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
