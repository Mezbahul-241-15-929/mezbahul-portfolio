'use client';

import { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  House,
  Image,
  Mail,
  Menu,
  Send,
  Terminal,
  UserRound,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

        const targetTop =
          pendingSection === 'home'
            ? window.scrollY
            : document.getElementById(pendingSection)?.getBoundingClientRect().top;

        if (
          targetTop !== undefined &&
          targetTop !== null &&
          Math.abs(targetTop - (pendingSection === 'home' ? 0 : 80)) <= 24
        ) {
          pendingSectionRef.current = null;
          if (pendingTimeoutRef.current) {
            clearTimeout(pendingTimeoutRef.current);
            pendingTimeoutRef.current = null;
          }
        } else {
          return;
        }
      }

      const sections = [
        'about',
        'gallery',
        'academics',
        'skills',
        'projects',
        'learning',
        'contact',
      ];
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

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
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

    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);

        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const navbarHeight = 80;

          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
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
    { name: 'Home', href: '#home', icon: House },
    { name: 'About', href: '#about', icon: UserRound },
    { name: 'Gallery', href: '#gallery', icon: Image },
    { name: 'Academics', href: '#academics', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: BriefcaseBusiness },
    { name: 'Learning', href: '#learning', icon: BookOpen },
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
        scrolled ? 'py-3' : 'py-2'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-3 sm:px-4 md:px-6 lg:px-4 xl:px-8">
        <div
          className={`mx-auto relative transition-colors duration-300 px-3 sm:px-4 py-2 ${
            scrolled
              ? 'bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl'
              : 'bg-transparent backdrop-blur-0 border border-transparent rounded-2xl'
          } lg:max-w-7xl`}
        >
          <div className="flex justify-between items-center gap-2 h-12">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={handleLogoClick}
              className="flex items-center gap-2 shrink-0 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative w-10 h-10 flex items-center justify-center"
                animate={{ y: [0, -2, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />

                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-fuchsia-500 via-blue-500 to-cyan-400 blur opacity-80 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#080c1d] shadow-[inset_0_0_16px_rgba(34,211,238,0.14)]">
                  <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-fuchsia-500/20 blur-md" />
                  <Terminal
                    className="relative h-5 w-5 text-cyan-300"
                    strokeWidth={2.2}
                  />
                </div>
              </motion.div>

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
              className="hidden lg:flex items-center gap-1 ml-3 xl:ml-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.slice(1);
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavLinkClick(e, link.href.slice(1))
                    }
                    variants={itemVariants}
                    className={`group relative inline-flex h-11 items-center rounded-xl border px-4 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-300/30 bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-[0_0_24px_rgba(34,211,238,0.35)]'
                        : 'border-white/10 bg-[#11182b]/75 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-[#151e35]'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative flex items-center gap-2 whitespace-nowrap">
                      <Icon
                        className={`h-5 w-5 ${
                          isActive ? 'text-white' : 'text-cyan-300'
                        }`}
                        strokeWidth={2.2}
                      />
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
                const isActive =
                  activeSection === link.href.slice(1);
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavLinkClick(e, link.href.slice(1))
                    }
                    variants={itemVariants}
                    className={`group relative inline-flex h-10 items-center rounded-lg border px-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-300/30 bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-[0_0_18px_rgba(34,211,238,0.3)]'
                        : 'border-white/10 bg-[#11182b]/75 text-slate-100 hover:border-cyan-300/35 hover:bg-[#151e35]'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <span className="relative flex items-center gap-2 whitespace-nowrap">
                      <Icon
                        className={`h-5 w-5 ${
                          isActive ? 'text-white' : 'text-cyan-300'
                        }`}
                        strokeWidth={2.2}
                      />
                      <span>{link.name}</span>
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-2 right-2 h-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
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
                onClick={(e) =>
                  handleNavLinkClick(e, 'contact')
                }
                className="group relative inline-flex h-10 shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-xl border-2 border-cyan-400 bg-[#0b1430] px-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.42)] xl:px-5"
              >
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-600/20 via-blue-600/10 to-cyan-400/15" />

                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative flex items-center gap-1.5 whitespace-nowrap">
                  <Send
                    className="h-4 w-4 text-cyan-300"
                    strokeWidth={2.2}
                  />
                  Connect
                </span>

                <span className="hidden" aria-hidden="true">
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
                onClick={(e) =>
                  handleNavLinkClick(e, 'contact')
                }
                className="group relative inline-flex h-9 shrink-0 items-center justify-center gap-1 overflow-hidden rounded-lg border border-cyan-400 bg-[#0b1430] px-2.5 text-xs font-bold text-white shadow-[0_0_16px_rgba(34,211,238,0.18)]"
              >
                <div className="absolute inset-0 rounded-lg bg-linear-to-r from-violet-600/20 via-blue-600/10 to-cyan-400/15" />

                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-md opacity-0 group-hover:opacity-50 blur transition-all duration-300 -z-10" />

                <span className="relative flex items-center gap-1 whitespace-nowrap">
                  <Send
                    className="h-4 w-4 text-cyan-300"
                    strokeWidth={2.2}
                  />
                  Connect
                </span>

                <span className="hidden" aria-hidden="true">
                  📧 Connect
                </span>
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/35 bg-[#0b1328] text-cyan-100 shadow-[0_0_14px_rgba(34,211,238,0.12)] transition-all hover:border-cyan-300 hover:bg-cyan-300/10 focus:outline-none md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <Menu className="h-5 w-5" />
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
                className="mt-3 max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-cyan-200/15 bg-[#060b19]/[0.98] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-2">
                  {navLinks.map((link) => {
                    const isActive =
                      activeSection === link.href.slice(1);
                    const Icon = link.icon;

                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) =>
                          handleNavLinkClick(
                            e,
                            link.href.slice(1)
                          )
                        }
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`group block min-h-10 rounded-xl border px-3 py-2.5 font-semibold transition-all duration-300 ${
                          isActive
                            ? 'border-cyan-300/30 bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-[0_8px_20px_rgba(34,211,238,0.18)]'
                            : 'border-white/10 bg-[#11182b]/90 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] hover:border-cyan-300/40 hover:bg-[#17213a]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-lg ${
                              isActive
                                ? 'bg-white/10'
                                : 'bg-white/[0.035] group-hover:bg-cyan-400/10'
                            }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${
                                isActive
                                  ? 'text-white'
                                  : 'text-cyan-300'
                              }`}
                              strokeWidth={2.2}
                            />
                          </span>

                          {link.name}
                        </span>
                      </motion.a>
                    );
                  })}

                  <motion.a
                    href="#contact"
                    onClick={(e) =>
                      handleNavLinkClick(e, 'contact')
                    }
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="mt-3 flex min-h-9 w-full items-center justify-center rounded-lg border border-cyan-400 bg-[#0b1430] px-2.5 py-2 text-center font-bold text-xs text-white shadow-[0_0_18px_rgba(34,211,238,0.2)] transition-all duration-300 hover:bg-cyan-400/10"
                  >
                    <span className="flex items-center justify-center gap-1">
                  <Send
                    className="h-4 w-4 text-cyan-300"
                        strokeWidth={2.2}
                      />
                      Connect
                    </span>

                    <span className="hidden" aria-hidden="true">
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