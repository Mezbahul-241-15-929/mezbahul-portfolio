'use client';

import React, { useState } from 'react';

interface Link {
  text: string;
  url: string;
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

const ProgramOrCourseSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch('/data/courses.json');
        if (!response.ok) throw new Error('Failed to load courses');
        const data = await response.json();
        setCourses(data.courses);
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
    <section id="programs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">PROFESSIONAL DEVELOPMENT</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Programs &amp; <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent italic font-serif">Courses</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A collection of all the courses and programs I have attended and completed
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            courses.map((course) => (
              <div
                key={course.id}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md -z-10"></div>

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                  {/* Badge and Number */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-semibold rounded-full">
                      Program
                    </span>
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-500/30 border border-purple-400 text-purple-300 text-xs font-bold">
                      {String(course.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-3 group-hover:text-blue-300 transition-colors duration-300 flex-grow">
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
              </div>
            ))
          )}
        </div>

        {/* Stats Footer */}
        {!isLoading && courses.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {courses.length}
              </p>
              <p className="text-gray-400 text-sm mt-2">Programs Attended</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                {courses.length * 5}+
              </p>
              <p className="text-gray-400 text-sm mt-2">Days Trained</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-gray-400 text-sm mt-2">Dedication</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramOrCourseSection;
