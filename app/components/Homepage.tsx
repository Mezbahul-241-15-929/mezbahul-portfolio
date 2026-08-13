'use client';

import Image from 'next/image';
import { Parisienne } from 'next/font/google';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Sparkles } from 'lucide-react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import styles from './Homepage.module.css';

const signatureFont = Parisienne({ subsets: ['latin'], weight: ['400'] });

const technologies = [
  { label: 'React', icon: SiReact, className: styles.react },
  { label: 'Node.js', icon: SiNodedotjs, className: styles.node },
  { label: 'JavaScript', icon: SiJavascript, className: styles.javascript },
  { label: 'Express.js', icon: SiExpress, className: styles.express },
  { label: 'Tailwind CSS', icon: SiTailwindcss, className: styles.tailwind },
  { label: 'MongoDB', icon: SiMongodb, className: styles.mongodb },
];

export default function Homepage() {
  return (
    <motion.section
      id="home"
      className={styles.hero}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.shell}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
        >
          <div className={styles.welcome}><Sparkles size={17} /> Welcome to my world</div>
          <h1 className={styles.heading}><span className={styles.greeting}>Hi, I&apos;m</span><span className={styles.name}>Mezbahul</span></h1>
          <p className={styles.role}>Full Stack Developer</p>
          <p className={styles.intro}>I build scalable, user-friendly web applications<br className={styles.desktopBreak} /> and bring ideas to life with clean code.</p>

          <div className={styles.actions}>
            <a className={styles.download} href="/Mezbahul%20CV.pdf" target="_blank" rel="noopener noreferrer"><Download size={22} /> Download CV</a>
            <a className={styles.projects} href="#projects"><ExternalLink size={21} /> View Projects</a>
          </div>

          <div className={styles.socialLabel}>Find me on</div>
          <div className={styles.socials}>
           <a className={styles.github} href="https://github.com/Mezbahul-241-15-929" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className={styles.linkedin} href="https://www.linkedin.com/in/mezbahulislam/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a className={styles.beecrowd} href="https://judge.beecrowd.com/en/profile/945547" aria-label="Beecrowd" target="_blank" rel="noreferrer"><span className={styles.beecrowdLogo}>bc</span></a>
            <a className={styles.facebook} href="https://www.facebook.com/MezbahulISLAMmeraj" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a className={styles.instagram} href="https://www.instagram.com/mazbahulislam/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.card}>
            <div className={styles.dotField} />
            <div className={styles.glowOrb} />
            <motion.div className={`${styles.signature} ${signatureFont.className}`} animate={{ y: [0, -4, 0], rotate: [-12, -10, -12] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>Mezbahul</motion.div>
            <div className={styles.orbits}><i /><i /><i /></div>
            {technologies.map(({ label, icon: Icon, className }) => (
              <div key={label} className={`${styles.tech} ${className}`}>
                <Icon /><small>{label}</small>
              </div>
            ))}
            <div className={styles.portraitWrap}>
              <Image className={styles.portrait} src="/Porfile/profile5.png" alt="Mezbahul Islam" width={3397} height={3840} priority />
            </div>
          </div>
        </motion.div>
      </div>
     </motion.section>
  );
}
