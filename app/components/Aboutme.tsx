'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Aboutme = () => {
    return (
        <div>
            {/* About Section */}
            <motion.section
                id="about"
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="h-0.5 w-56 md:w-64 mx-auto mb-2 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
                    <motion.h2
                        className="text-4xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">About Me</span>
                        <div className="h-0.5 w-56 md:w-64 mx-auto mt-2 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Bio and Profile Card - Left Side */}
                        <motion.div
                            className="lg:col-span-1 flex justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Profile Card */}
                            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/8 to-white/4 px-6 py-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-cyan-400/20 hover:from-white/10 hover:to-white/5">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -left-12 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
                                    <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <span className="relative flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-fuchsia-500 p-1.5 shadow-lg shadow-cyan-500/20 sm:h-44 sm:w-44">
                                        <span className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-slate-950">
                                            <Image
                                                src="/Profile2.jpg"
                                                alt="Profile"
                                                fill
                                                className="object-cover"
                                                sizes="176px"
                                            />
                                        </span>
                                    </span>

                                    <div className="mt-5 space-y-2">
                                        <h3 className="text-2xl font-bold leading-tight bg-linear-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
                                            Md. Mezbahul Islam
                                        </h3>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                                            Department of CSE
                                        </p>
                                        <p className="text-base font-medium leading-snug text-slate-200">
                                            Daffodil International Univiersity
                                        </p>
                                    </div>

                                    {/* Bio Section */}
                                    <p className="mt-6 text-sm leading-relaxed text-slate-300">
                                        Hi, I&apos;m Md. Mezbahul Islam, and I&apos;m from Bangladesh.
                                        I am a Web Developer and Graphic Designer.
                                        Currently, I am studying in the Department of Computer Science and Engineering at Daffodil International University.
                                        I can build full-stack websites using the MERN stack.
                                    </p>

                                    <motion.a
                                        href="/cv.pdf"
                                        download
                                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300"
                                        whileHover={{ scale: 1.06, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <Download className="h-5 w-5" />
                                        Download CV
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education Section - Right Side (Decreased Width) */}
                        <motion.div
                            className="lg:col-span-1"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Education Section */}
                            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/8 to-white/4 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-cyan-400/20 hover:from-white/10 hover:to-white/5">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -left-12 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
                                    <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
                                </div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-blue-500 to-fuchsia-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82M12 3L1 9l11 6.18L23 9 12 3z" />
                                            </svg>
                                        </span>
                                        <h4 className="text-2xl font-bold bg-linear-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">Education</h4>
                                    </div>
                                    <div className="space-y-6">
                                    <div className="flex gap-4 items-stretch justify-between">
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-lg font-semibold text-white">SSC</h5>
                                            <p className="text-gray-400 text-sm mt-1">Amena-Baki Residential Model School & College</p>
                                            <p className="text-gray-500 text-sm mt-1">2021 • Science</p>
                                            <p className="text-blue-400 text-sm font-semibold mt-2">Result: GPA 5.00 (out of 5.00)</p>
                                        </div>
                                        <Image
                                            src="/1.png"
                                            alt="SSC"
                                            width={112}
                                            height={112}
                                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-blue-400/30 shadow-lg shadow-blue-500/10 shrink-0 self-center"
                                        />
                                    </div>
                                    <div className="border-t border-gray-700 pt-4 flex gap-4 items-stretch justify-between">
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-lg font-semibold text-white">HSC</h5>
                                            <p className="text-gray-400 text-sm mt-1">Cantonment School & College, Saidpur</p>
                                            <p className="text-gray-500 text-sm mt-1">2023 • Science</p>
                                            <p className="text-blue-400 text-sm font-semibold mt-2">Result: GPA 4.84 (out of 5.00)</p>
                                        </div>
                                        <Image
                                            src="/2.png"
                                            alt="HSC"
                                            width={112}
                                            height={112}
                                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-blue-400/30 shadow-lg shadow-blue-500/10 shrink-0 self-center"
                                        />
                                    </div>
                                    <div className="border-t border-gray-700 pt-4 flex gap-4 items-stretch justify-between">
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-lg font-semibold text-white">BSC</h5>
                                            <p className="text-gray-400 text-sm mt-1">Daffodil International University</p>
                                            <p className="text-gray-500 text-sm mt-1">Studying • CSE</p>
                                            <p className="text-blue-400 text-sm font-semibold mt-2">Average: CGPA 3.29</p>
                                        </div>
                                        <Image
                                            src="/3.png"
                                            alt="BSC"
                                            width={112}
                                            height={112}
                                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-blue-400/30 shadow-lg shadow-blue-500/10 shrink-0 self-center"
                                        />
                                    </div>
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

export default Aboutme;
