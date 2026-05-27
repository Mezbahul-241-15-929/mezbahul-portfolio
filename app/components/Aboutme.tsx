'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
                    <motion.h2 
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16 pb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
                        <div className="h-1 w-24 bg-linear-to-r from-blue-400 to-cyan-400 mt-4"></div>
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Bio and Profile Card - Left Side */}
                        <motion.div 
                            className="lg:col-span-1 space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Profile Card */}
                            <div className="flex flex-col items-center justify-start">
                                <div className="relative w-48 h-48 mb-6 group">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>

                                    {/* Profile image */}
                                    <div className="relative bg-blue-500 p-1.5 rounded-full overflow-hidden w-full h-full">
                                        <img
                                            src="/Profile.png"
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>

                                    {/* GPA Badge */}
                                    {/* <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap flex items-center justify-center">
                                        3.29 CGPA
                                    </div> */}
                                </div>

                                <h3 className="text-2xl font-bold text-white text-center mt-2">Md. Mezbahul Islam</h3>
                                <p className="text-gray-400 text-center mt-2">Computer Science Engineering Student</p>

                                {/* Bio Section - After Computer Science Engineering Student */}
                                <p className="text-gray-400 text-sm leading-relaxed text-center mt-6">
                                    Hi, I'm Md. Mezbahul Islam, and I'm from Bangladesh.
                                    I am a Web Developer and Graphic Designer.
                                    Currently, I am studying in the Department of Computer Science and Engineering at Daffodil International University.
                                    I can build full-stack websites using the MERN stack.
                                </p>

                                <div className="flex flex-wrap gap-2 justify-center mt-6">
                                    <span className="px-3 py-1 bg-blue-500/30 border border-blue-400 text-blue-300 rounded-full text-xs font-semibold">React</span>
                                    <span className="px-3 py-1 bg-blue-500/30 border border-blue-400 text-blue-300 rounded-full text-xs font-semibold">Node</span>
                                    <span className="px-3 py-1 bg-blue-500/30 border border-blue-400 text-blue-300 rounded-full text-xs font-semibold">UI/UX</span>
                                    <span className="px-3 py-1 bg-blue-500/30 border border-blue-400 text-blue-300 rounded-full text-xs font-semibold">Full Stack</span>
                                </div>

                                <button className="mt-8 px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Resume
                                </button>
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
                            <div className="bg-black/50 border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82M12 3L1 9l11 6.18L23 9 12 3z" />
                                    </svg>
                                    <h4 className="text-2xl font-bold text-white">Education</h4>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-lg font-semibold text-white">SSC</h5>
                                        <p className="text-gray-400 text-sm mt-1">Amena-Baki Residential Model School & College</p>
                                        <p className="text-gray-500 text-sm mt-1">2021 • Science</p>
                                        <p className="text-blue-400 text-sm font-semibold mt-2">Result: GPA 5.00 (out of 5.00)</p>
                                    </div>
                                    <div className="border-t border-gray-700 pt-4">
                                        <h5 className="text-lg font-semibold text-white">HSC</h5>
                                        <p className="text-gray-400 text-sm mt-1">Cantonment School & College, Saidpur</p>
                                        <p className="text-gray-500 text-sm mt-1">2023 • Science</p>
                                        <p className="text-blue-400 text-sm font-semibold mt-2">Result: GPA 4.84 (out of 5.00)</p>
                                    </div>
                                    <div className="border-t border-gray-700 pt-4">
                                        <h5 className="text-lg font-semibold text-white">BSC</h5>
                                        <p className="text-gray-400 text-sm mt-1">Daffodil International University</p>
                                        <p className="text-gray-500 text-sm mt-1">Studying • CSE</p>
                                        <p className="text-blue-400 text-sm font-semibold mt-2">Average: CGPA 3.29</p>
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
