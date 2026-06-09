'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display, Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { Download } from 'lucide-react';

const leftFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const nameFont = Playfair_Display({
    subsets: ['latin'],
    weight: ['700'],
});

const Homepage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div className="relative overflow-hidden">
            <motion.section
                id="home"
                className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-12"
            >
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-20 items-center">
                        <motion.div
                            className="relative z-10 order-last lg:order-first"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants} className={`${leftFont.className} text-center lg:text-left`}>
                                <p className="text-cyan-400 text-sm sm:text-base font-semibold tracking-widest uppercase">WELCOME TO MY WORLD</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className={`${leftFont.className} mt-3 sm:mt-3 space-y-6 sm:space-y-6 text-center lg:text-left`}>
                                <p className="text-cyan-300 text-lg sm:text-xl font-medium tracking-[0.25em] uppercase">Hi, I am</p>
                                <h1 className={`${nameFont.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] sm:leading-[0.95]`}>
                                    Mezbahul
                                </h1>
                            </motion.div>

                            <motion.div variants={itemVariants} className={`${leftFont.className} mt-6 sm:mt-8 flex justify-center lg:justify-start`}>
                                <span className="rounded-full font-medium border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur-sm">
                                    FULLSTACK DEVELOPER
                                </span>
                            </motion.div>

                            

                            <motion.div variants={itemVariants} className={`${leftFont.className} mt-6 sm:mt-10 flex items-center justify-center lg:justify-start gap-4 lg:gap-6`}>
                                <motion.a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                    whileHover={{ scale: 1.12, rotate: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaFacebookF className="w-5 h-5 lg:w-7 lg:h-7" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                    whileHover={{ scale: 1.12, rotate: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="w-5 h-5 lg:w-7 lg:h-7" />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                    whileHover={{ scale: 1.12, rotate: 4 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedinIn className="w-5 h-5 lg:w-7 lg:h-7" />
                                </motion.a>
                            </motion.div>

                            <motion.div variants={itemVariants} className={`${leftFont.className} mt-4 sm:mt-6 flex items-center justify-center lg:justify-start`}>
                                <motion.a
                                    href="/cv.pdf"
                                    download
                                    className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.06, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Download className="h-5 w-5" />
                                    Download CV
                                </motion.a>
                            </motion.div>

                            {/* availability badge removed per request */}
                        </motion.div>

                        {/* Right photo column: recreated to match reference */}
                        <motion.div className="relative z-10 order-first lg:order-last flex items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0" variants={itemVariants} initial="hidden" animate="visible">
                            <div className="relative w-[86%] max-w-xs sm:w-full sm:max-w-md md:max-w-md flex items-center justify-center group">
                                {/* soft gradient backdrop behind photo + labels */}
                                <div
                                    className="absolute -inset-8 rounded-4xl pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.08) 45%, rgba(139,92,246,0.06) 100%)',
                                        filter: 'blur(36px)',
                                        zIndex: -20,
                                    }}
                                />

                                <div className="absolute -inset-3 rounded-4xl pointer-events-none z-0">
                                    <div className="absolute inset-0 rounded-4xl border-2 border-cyan-400/95 shadow-[0_0_50px_rgba(34,211,238,0.45)] transition-all duration-300 group-hover:shadow-[0_0_90px_rgba(34,211,238,0.65)] group-hover:border-cyan-300" />
                                    <div className="absolute inset-1 rounded-4xl border border-black/30 group-hover:border-black/20" />
                                </div>

                                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 w-full hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.45)] transition-transform duration-300 cursor-pointer">
                                    <div className="relative w-full h-90 sm:h-115 md:h-115 z-10 bg-linear-to-br from-cyan-700/6 via-blue-800/6 to-purple-700/6 flex items-center justify-center">
                                        <Image src="/Profile.png" alt="Profile" width={900} height={900} className="object-cover w-full h-full" />
                                    </div>

                                    {/* top label (placed behind the photo, top-center) */}
                                    <div className="absolute left-0 right-0 top-6 z-0 pointer-events-none flex items-start justify-center">
                                        <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)', color: 'rgba(255,255,255,0.04)' }} className="uppercase text-3xl sm:text-4xl tracking-widest leading-none text-center">
                                            Web developer
                                        </span>
                                    </div>

                                    {/* bottom name (centered) */}
                                    <div className="absolute left-0 right-0 bottom-6 z-20 pointer-events-none flex items-end justify-center">
                                        <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)', color: 'rgba(255,255,255,0.06)' }} className="uppercase text-5xl sm:text-6xl md:text-7xl tracking-wide leading-none text-center">
                                            MEZBAHUL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Homepage;
