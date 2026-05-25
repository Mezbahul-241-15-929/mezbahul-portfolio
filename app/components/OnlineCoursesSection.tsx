'use client';

import React, { useState } from 'react';

interface Course {
  id: number;
  name: string;
  duration: string;
  platform: string;
  provider: string;
  link: string;
  type: string;
}

const OnlineCoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch('/data/online-courses.json');
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
    <section id="courses" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">CONTINUOUS LEARNING</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Online <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Courses</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Expanding my knowledge through structured learning and professional development
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
            courses.map((course, index) => (
              <div
                key={course.id}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md -z-10"></div>

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:border-white/40 transition-all duration-300 flex flex-col">
                  {/* Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-semibold rounded-full">
                      {course.type}
                    </span>
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      📚
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
                        <p className="text-gray-200 font-medium">{course.platform}</p>
                      </div>
                    </div>

                    {/* Provider */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <p className="text-gray-400 text-xs">Provider</p>
                        <p className="text-gray-200 font-medium">{course.provider}</p>
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
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {courses.length}
              </p>
              <p className="text-gray-400 text-sm mt-2">Courses Completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {courses.length * 2}+
              </p>
              <p className="text-gray-400 text-sm mt-2">Hours of Learning</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-gray-400 text-sm mt-2">Commitment</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OnlineCoursesSection;
