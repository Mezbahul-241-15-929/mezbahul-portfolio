'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Course = {
  sl: number;
  courseCode: string;
  courseTitle: string;
  credit: number;
  type: string;
  section: string;
  teacher: string;
};

type TermGroup = {
  term: string;
  termMobile?: string;
  courses: Course[];
};

type CoursesData = {
  program: string;
  completedCourses: TermGroup[];
};

const AcademicActivity = () => {
  const [data, setData] = useState<CoursesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openTerms, setOpenTerms] = useState<Record<string, boolean>>({});

  const isLargeScreen = () => typeof window !== 'undefined' && window.innerWidth >= 1024;

  const toggleTerm = (index: number) => {
    const key = String(index);
    const currentlyOpen = !!openTerms[key];
    const willOpen = !currentlyOpen;

    if (isLargeScreen()) {
      // Pair terms: (0,1), (2,3), (4,5), ...
      const pairIndex = index % 2 === 0 ? index + 1 : index - 1;
      setOpenTerms((s) => {
        const next = { ...s };
        next[String(index)] = willOpen;
        if (pairIndex >= 0 && pairIndex < (data?.completedCourses.length || 0)) next[String(pairIndex)] = willOpen;
        return next;
      });
    } else {
      setOpenTerms((s) => ({ ...s, [key]: willOpen }));
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/data/diu-cse-completed-courses.json');
        if (!res.ok) throw new Error('Failed to load course data');
        const json: CoursesData = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError('Could not load course information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const programLabel = data?.program ? data.program.replace(/^DIU\s*/i, '') : 'CSE';

  const TOTAL_PROGRAM_SEMESTERS = 11;
  const TOTAL_PROGRAM_CREDITS = 154.5;
  const semestersCompleted = data ? data.completedCourses.length : 0;
  const creditsCompleted = data
    ? data.completedCourses.reduce((sum, term) => sum + term.courses.reduce((s, c) => s + c.credit, 0), 0)
    : 0;

  return (
    <motion.section
      id="academic-activity"
      className="py-12 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">ACADEMIC RECORD</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight text-white">
            {programLabel} <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Completed Courses</span>
          </h2>
          
        </motion.div>

        {/* Content */}
        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Loading academic data...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400">{error}</p>
          </div>
        ) : data ? (
          <>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {data.completedCourses.map((term, termIndex) => {
                const key = String(termIndex);
                const isOpen = !!openTerms[key];
                return (
                  <motion.div key={key} className="group h-full" variants={itemVariants}>
                    {/* Collapsible header line */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleTerm(termIndex)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleTerm(termIndex); }}
                      className="cursor-pointer mb-2 sm:mb-3 flex items-center justify-between gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/3 hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-cyan-500/30 border border-cyan-400 text-cyan-300 text-sm font-bold">{termIndex + 1}</div>
                        <div className="text-sm sm:text-base text-white font-semibold">
                          <span className="sm:hidden">{term.termMobile ?? term.term}</span>
                          <span className="hidden sm:inline">{term.term}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs sm:text-sm text-gray-300">{term.courses.reduce((sum, c) => sum + c.credit, 0)} Total Credits</div>
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-gray-300">▼</motion.span>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="relative h-full">
                            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md -z-10"></div>

                            <div className="relative h-full bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300 p-3 sm:p-5">

                              <div className="overflow-x-auto rounded-xl border border-white/10">
                                <table className="w-full min-w-[480px]">
                                  <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left text-xs font-semibold text-gray-300">SL</th>
                                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left text-xs font-semibold text-gray-300">Code</th>
                                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left text-xs font-semibold text-gray-300">Course Title</th>
                                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left text-xs font-semibold text-gray-300">Credits</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {term.courses.map((course, idx) => (
                                      <motion.tr
                                        key={course.sl}
                                        className="border-b border-white/5 hover:bg-white/10 transition-colors duration-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                      >
                                        <td className="px-2 py-2 sm:px-3 sm:py-3 text-xs text-gray-300">{course.sl}</td>
                                        <td className="px-2 py-2 sm:px-3 sm:py-3 text-xs font-medium text-cyan-300">{course.courseCode}</td>
                                        <td className="px-2 py-2 sm:px-3 sm:py-3 text-xs text-gray-200">{course.courseTitle}</td>
                                        <td className="px-2 py-2 sm:px-3 sm:py-3 text-xs text-gray-200">
                                          <span className="inline-block px-2 py-0.5 bg-blue-500/30 border border-blue-500/50 text-blue-300 rounded text-xs font-semibold">
                                            {course.credit}
                                          </span>
                                        </td>
                                      </motion.tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Summary Stats (compact on mobile: single-row scrollable, grid on md+) */}
            <motion.div
              className="mt-8 flex gap-3 md:grid md:grid-cols-3 md:gap-4 items-stretch"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex-1 min-w-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg px-3 py-2 text-center"
                variants={itemVariants}
              >
                <p className="text-xl sm:text-2xl font-bold text-cyan-400">
                  {data.completedCourses.reduce((sum, term) => sum + term.courses.length, 0)}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Courses completed</p>
              </motion.div>

              <motion.div
                className="flex-1 min-w-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg px-3 py-2 text-center"
                variants={itemVariants}
              >
                <p className="text-xl sm:text-2xl font-bold text-purple-400">
                  {semestersCompleted}/{TOTAL_PROGRAM_SEMESTERS}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Semester Completed</p>
              </motion.div>

              <motion.div
                className="flex-1 min-w-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg px-3 py-2 text-center"
                variants={itemVariants}
              >
                <p className="text-xl sm:text-2xl font-bold text-blue-400">
                  {creditsCompleted}/{TOTAL_PROGRAM_CREDITS}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Credits Completed</p>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">No course data available.</div>
        )}
      </div>
    </motion.section>
  );
};

export default AcademicActivity;
