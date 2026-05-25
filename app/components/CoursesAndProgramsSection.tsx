'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Link {
  text: string;
  url: string;
}

interface OnlineCourse {
  id: number;
  name: string;
  duration: string;
  platform: string;
  provider: string;
  link: string;
  type: string;
}

interface Course {
  id: number;
  name: string;
  dates: string;
  duration: string;
  location: string;
  organizer: string;
  links: Link[];
}

interface Contest {
  id: number;
  name: string;
  date: string;
  duration: string;
  organizer: string;
  link?: string;
  description?: string;
}

const CoursesAndProgramsSection = () => {
  const [onlineCourses, setOnlineCourses] = useState<OnlineCourse[]>([]);
  const [programCourses, setProgramCourses] = useState<Course[]>([]);
  const [contests, setContests] = useState<Contest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'online' | 'programs' | 'contests'>('all');

  React.useEffect(() => {
    const loadCourses = async () => {
      try {
        const [onlineResponse, programResponse, contestResponse] = await Promise.all([
          fetch('/data/online-courses.json'),
          fetch('/data/courses.json'),
          fetch('/data/contests.json')
        ]);

        if (!onlineResponse.ok || !programResponse.ok || !contestResponse.ok) {
          throw new Error('Failed to load courses');
        }

        const onlineData = await onlineResponse.json();
        const programData = await programResponse.json();
        const contestData = await contestResponse.json();

        setOnlineCourses(onlineData.courses);
        setProgramCourses(programData.courses);
        setContests(contestData.contests);
      } catch (err) {
        setError('Failed to load courses');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, []);

  return (
    <motion.section 
      id="learning" 
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">LEARNING JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Courses, Programs &amp; <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Contests</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Expanding knowledge through structured learning, professional programs, and continuous development
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setActiveTab('all')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'border border-white/30 text-gray-300 hover:border-white/50 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ All
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('online')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'online'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                : 'border border-white/30 text-gray-300 hover:border-white/50 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📚 Online Courses
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('programs')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'programs'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'border border-white/30 text-gray-300 hover:border-white/50 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎓 Offline Programs
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('contests')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'contests'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                : 'border border-white/30 text-gray-300 hover:border-white/50 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🏆 Contests
          </motion.button>
        </motion.div>

        {/* Content */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading courses...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <>
            {/* All Tab */}
            {activeTab === 'all' && (
              <motion.div 
                className="animate-fadeIn"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Online Courses */}
                  {onlineCourses.map((course) => (
                    <motion.div 
                      key={`online-${course.id}`} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-semibold rounded-full">
                            Online
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/30 border border-cyan-400 text-cyan-300 text-xs font-bold">
                            {String(course.id).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Course Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-cyan-300 transition-colors duration-300 flex-grow">
                          {course.name}
                        </h3>

                        {/* Course Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{course.duration}</p>
                            </div>
                          </div>

                          {/* Platform */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Platform</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.platform}</p>
                            </div>
                          </div>

                          {/* Provider */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Provider</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.provider}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Programs */}
                  {programCourses.map((course) => (
                    <motion.div 
                      key={`program-${course.id}`} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge and Number */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-semibold rounded-full">
                            Offline
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-500/30 border border-purple-400 text-purple-300 text-xs font-bold">
                            {String(course.id).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Course Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-purple-300 transition-colors duration-300 flex-grow">
                          {course.name}
                        </h3>

                        {/* Course Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Dates */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Dates</p>
                              <p className="text-gray-200 font-medium">{course.dates}</p>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{course.duration}</p>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Location</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.location}</p>
                            </div>
                          </div>

                          {/* Organizer */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Organizer</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.organizer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Contests */}
                  {contests.map((contest) => (
                    <motion.div 
                      key={`contest-${contest.id}`} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge and Number */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full">
                            Contest
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/30 border border-orange-400 text-orange-300 text-xs font-bold">
                            {String(contest.id).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Contest Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-orange-300 transition-colors duration-300 flex-grow">
                          {contest.name}
                        </h3>

                        {/* Contest Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Date */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Date</p>
                              <p className="text-gray-200 font-medium">{contest.date}</p>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{contest.duration}</p>
                            </div>
                          </div>

                          {/* Organizer */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Organizer</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{contest.organizer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Online Courses Tab */}
            {activeTab === 'online' && (
              <motion.div 
                className="animate-fadeIn"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  viewport={{ once: true }}
                >
                  {onlineCourses.map((course) => (
                    <motion.div 
                      key={course.id} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-semibold rounded-full">
                            Online
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/30 border border-cyan-400 text-cyan-300 text-xs font-bold">
                            {String(course.id).padStart(2, '0')}
                          </div>
                        </div>
                        {/* Course Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-cyan-300 transition-colors duration-300 flex-grow">
                          {course.name}
                        </h3>

                        {/* Course Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{course.duration}</p>
                            </div>
                          </div>

                          {/* Platform */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Platform</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.platform}</p>
                            </div>
                          </div>

                          {/* Provider */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Provider</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.provider}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Programs Tab */}
            {activeTab === 'programs' && (
              <motion.div 
                className="animate-fadeIn"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  viewport={{ once: true }}
                >
                  {programCourses.map((course) => (
                    <motion.div 
                      key={course.id} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge and Number */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 text-purple-300 text-xs font-semibold rounded-full">
                            Offline
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-500/30 border border-purple-400 text-purple-300 text-xs font-bold">
                            {String(course.id).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Course Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-purple-300 transition-colors duration-300 flex-grow">
                          {course.name}
                        </h3>

                        {/* Course Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Dates */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Dates</p>
                              <p className="text-gray-200 font-medium">{course.dates}</p>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{course.duration}</p>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Location</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.location}</p>
                            </div>
                          </div>

                          {/* Organizer */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Organizer</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{course.organizer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Contests Tab */}
            {activeTab === 'contests' && (
              <motion.div 
                className="animate-fadeIn"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  viewport={{ once: true }}
                >
                  {contests.map((contest) => (
                    <motion.div 
                      key={contest.id} 
                      className="group relative h-full"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-md -z-10"></div>

                      {/* Card */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                        {/* Badge and Number */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-semibold rounded-full">
                            Contest
                          </span>
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/30 border border-orange-400 text-orange-300 text-xs font-bold">
                            {String(contest.id).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Contest Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-orange-300 transition-colors duration-300 flex-grow">
                          {contest.name}
                        </h3>

                        {/* Contest Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          {/* Date */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Date</p>
                              <p className="text-gray-200 font-medium">{contest.date}</p>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Duration</p>
                              <p className="text-gray-200 font-medium">{contest.duration}</p>
                            </div>
                          </div>

                          {/* Organizer */}
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                              <p className="text-gray-400 text-xs">Organizer</p>
                              <p className="text-gray-200 font-medium line-clamp-2">{contest.organizer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </>
        )}

        {/* Footer Stats Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Online Courses */}
            <motion.div 
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                {onlineCourses.length}
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Online</p>
              <p className="text-gray-400 text-xs hidden sm:block">Courses</p>
            </motion.div>

            {/* Offline Programs */}
            <motion.div 
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                {programCourses.length}
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Offline</p>
              <p className="text-gray-400 text-xs hidden sm:block">Programs</p>
            </motion.div>

            {/* Contests */}
            <motion.div 
              className="bg-gradient-to-br from-orange-500/10 to-yellow-500/5 border border-orange-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-1">
                {contests.length}
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Contests</p>
              <p className="text-gray-400 text-xs hidden sm:block">Done</p>
            </motion.div>

            {/* Total Learning */}
            <motion.div 
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-1">
                {onlineCourses.length + programCourses.length}
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Total</p>
              <p className="text-gray-400 text-xs hidden sm:block">Learning</p>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-green-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-1">
                17
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Certs</p>
              <p className="text-gray-400 text-xs hidden sm:block">Certificate</p>
            </motion.div>

            {/* Years Experience */}
            <motion.div 
              className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mb-1">
                2+
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Years</p>
              <p className="text-gray-400 text-xs hidden sm:block">Experience</p>
            </motion.div>

            {/* Skills Acquired */}
            <motion.div 
              className="bg-gradient-to-br from-red-500/10 to-pink-500/5 border border-red-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-red-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-1">
                22+
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Skills</p>
              <p className="text-gray-400 text-xs hidden sm:block">Tech</p>
            </motion.div>

            {/* Hours of Learning */}
            <motion.div 
              className="bg-gradient-to-br from-rose-500/10 to-fuchsia-500/5 border border-rose-500/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm hover:border-rose-500/40 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-400 to-fuchsia-500 bg-clip-text text-transparent mb-1">
                200+
              </div>
              <p className="text-gray-300 font-semibold text-xs sm:text-sm mb-0.5">Hours</p>
              <p className="text-gray-400 text-xs hidden sm:block">Learning</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </motion.section>
  );
};

export default CoursesAndProgramsSection;
