'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectCategory = 'all' | 'web' | 'fullstack' | 'tools';

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  type: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
};

const filterOptions: { id: ProjectCategory; label: string; activeClass: string }[] = [
  {
    id: 'all',
    label: 'All Projects',
    activeClass: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40',
  },
  {
    id: 'web',
    label: 'Web Apps',
    activeClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/40',
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    activeClass: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/40',
  },
  {
    id: 'tools',
    label: 'Tools',
    activeClass: 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/40',
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'ScholarTrack Dashboard',
    category: 'fullstack',
    type: 'Full Stack',
    description:
      'A student performance dashboard with course progress, contest history, and clean analytics cards for quick academic review.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    liveLink: 'https://scholartrack-demo.vercel.app',
    githubLink: 'https://github.com/mezbahul999/scholartrack-dashboard',
  },
  {
    id: 2,
    title: 'DevPortfolio Studio',
    category: 'web',
    type: 'Web App',
    description:
      'A modern personal portfolio builder with responsive sections, project cards, gallery layout, and animated page transitions.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Vercel'],
    liveLink: 'https://devportfolio-studio.vercel.app',
    githubLink: 'https://github.com/mezbahul999/devportfolio-studio',
  },
  {
    id: 3,
    title: 'TaskFlow Manager',
    category: 'fullstack',
    type: 'Full Stack',
    description:
      'A productivity app for planning tasks, tracking deadlines, and organizing team work with auth-ready project boards.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL'],
    liveLink: 'https://taskflow-manager-demo.vercel.app',
    githubLink: 'https://github.com/mezbahul999/taskflow-manager',
  },
  {
    id: 4,
    title: 'CodeJudge Companion',
    category: 'tools',
    type: 'Developer Tool',
    description:
      'A lightweight coding practice tracker for solved problems, contest notes, difficulty tags, and weekly improvement goals.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    tech: ['TypeScript', 'Firebase', 'Chart.js', 'CSS'],
    liveLink: 'https://codejudge-companion.vercel.app',
    githubLink: 'https://github.com/mezbahul999/codejudge-companion',
  },
  {
    id: 5,
    title: 'Campus Event Hub',
    category: 'web',
    type: 'Web App',
    description:
      'A responsive event listing platform for campus programs with category filters, registration CTAs, and organizer details.',
    image:
      'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Next.js', 'REST API', 'Tailwind'],
    liveLink: 'https://campus-event-hub.vercel.app',
    githubLink: 'https://github.com/mezbahul999/campus-event-hub',
  },
  {
    id: 6,
    title: 'API Health Monitor',
    category: 'tools',
    type: 'Developer Tool',
    description:
      'A compact monitoring interface that checks endpoint status, response time, uptime history, and error summaries.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
    liveLink: 'https://api-health-monitor.vercel.app',
    githubLink: 'https://github.com/mezbahul999/api-health-monitor',
  },
];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-8 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-16 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">RECENT WORK</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center mb-12 gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 ${
                activeFilter === option.id
                  ? option.activeClass
                  : 'border border-white/30 text-gray-300 hover:border-white/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              className="group relative h-full"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

              <div className="relative h-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  <span className="absolute left-4 top-4 inline-block px-3 py-1 bg-black/60 border border-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-gray-200 hover:border-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
