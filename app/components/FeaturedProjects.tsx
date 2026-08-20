'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectCategory = 'all' | 'web' | 'fullstack' | 'landing Page' ;

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
    id: 'landing Page',
    label: 'Landing Page',
    activeClass: 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/40',
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
];

const projects: Project[] = [

  {
    id: 7,
    title: 'Phudu Medical',
    category: 'web',
    type: 'Web App',
    description:
      'Phudu is a modern React-based medical appointment app for discovering doctors, viewing profiles, booking appointments, and managing bookings.',
    image:
      '/Project/7.png',
    tech: ['React',"Tailwind CSS", 'Firebase','Netlify'],
    liveLink: 'https://phudumedicalappointment.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/Medical-Appointment-Booking-Application',
  },
      {
    id: 6,
    title: 'BoxNest',
    category: 'web',
    type: 'Web App',
    description:
      'BoxNest is a modern, responsive news portal built with React and Firebase. ',
    image:
      '/Project/6.png',
    tech: ['React',"Tailwind CSS",'DaisyUI', 'Firebase'],
    liveLink: 'https://boxnest.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/BoxNest',
  },
  {
    id: 8,
    title: 'Plant Care',
    category: 'fullstack',
    type: 'Full Stack',
    description:
      'Plant Care is a modern, responsive platform for exploring, managing, and tracking plant care with secure authentication.',
    image:
      '/Project/8.png',
    tech: ['React',"Tailwind CSS", 'Firebase','Netlify', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://plantcareclient.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/plantcare',
  },
  {
    id: 9,
    title: 'Plant Care',
    category: 'fullstack',
    type: 'Full Stack',
    description:
      'BookNest is a modern book management platform for discovering, organizing, and tracking books with secure authentication and a responsive UI.',
    image:
      '/Project/9.png',
    tech: ['React',"Tailwind CSS", 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://booknest-be304.web.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/BookNest_Client',
  },
  {
    id: 10,
    title: 'PriceBazar',
    category: 'fullstack',
    type: 'Full Stack',
    description:
      'PriceBazar is a modern price-comparison marketplace built with React and Vite, featuring product comparison, secure payments, and role-based vendor and admin dashboards.',
    image:
      '/Project/10.png',
    tech: ['React',"Tailwind CSS", 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://react-tempate.web.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/PriceBazar_Client',
  },
  {
    id: 1,
    title: 'Kids School',
    category: 'landing Page',
    type: 'Landing Page',
    description:
      'Kids School is a clean, modern, and responsive educational website built with HTML5 and CSS3, featuring a structured layout and engaging visual design.',
    image:
      '/Project/1.png',
    tech: ['HTML', 'CSS'],
    liveLink: 'https://kidschoool.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/B11-A2-Kids-School',
  },
  {
    id: 2,
    title: 'Browse for Pets',
    category: 'landing Page',
    type: 'Landing Page',
    description:
      'Browse4Pets is a modern, responsive pet care website featuring pet categories, trending products, special offers, and essential supplies with a clean, engaging design.',
    image:
      '/Project/2.png',
    tech: ['HTML', 'CSS,','Tailwind CSS'],
    liveLink: 'https://browseforpets.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/B11-A3-Living-Lab-with-Tailwind-CSS',
  },
  {
    id: 3,
    title: 'Delicious Restaurant',
    category: 'landing Page',
    type: 'Landing Page',
    description:
      'Delicious Restaurant is a modern, responsive website featuring a home page, menu, contact, reservation, and mobile-friendly navigation.',
    image:
      '/Project/3.png',
    tech: ['HTML', 'CSS',],
    liveLink: 'https://delicioousrestaurant.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/Restaurant-Website',
  },
  {
    id: 4,
    title: 'MyTunes',
    category: 'landing Page',
    type: 'Landing Page',
    description:
      'MyTunes is a clean, modern, and responsive music website built with HTML5 and CSS3, featuring a structured layout and professional visual design.',
    image:
      '/Project/4.png',
    tech: ['HTML', 'CSS'],
    liveLink: 'https://mymusictunes.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/Music-Website-MyTunes',
  },
  {
    id: 5,
    title: 'G3 Architects',
    category: 'landing Page',
    type: 'Landing Page',
    description:
      'G3 Architects is a modern, responsive website built with HTML and CSS, featuring clean layouts and professional visual design.',
    image:
      '/Project/5.png',
    tech: ['HTML', 'CSS'],
    liveLink: 'https://g3architectss.netlify.app/',
    githubLink: 'https://github.com/Mezbahul-241-15-929/G3-Architects',
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
      className="project-background py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
          className="flex justify-center mb-12 gap-2 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap ${
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
