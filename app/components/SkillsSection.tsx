'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
    };
    const skills = [
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Javascript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
        { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ];

    return (
        <motion.section 
            id="skills" 
            className="py-20 sm:py-28 px-4 sm:px-10 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">MY SKILLSET</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                        The <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Magic Behind</span>
                    </h2>
                </motion.div>

                {/* Skills Container - Horizontal Layout */}
                <motion.div 
                    className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Skill Badge - Glass Morphism */}
                            <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-white/35 bg-white/10 backdrop-blur-sm hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg shine-effect">
                                {/* Logo Image */}
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={skill.logo}
                                        alt={skill.name}
                                        width={20}
                                        height={20}
                                        className={`w-full h-full object-contain ${skill.name === 'GitHub' ? 'invert' : ''}`}
                                    />
                                </div>

                                {/* Text */}
                                <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
