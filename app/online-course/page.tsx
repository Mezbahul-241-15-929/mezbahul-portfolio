'use client';

import { useState, useEffect } from 'react';

interface OnlineCourse {
  id: number;
  name: string;
  duration: string;
  platform: string;
  provider: string;
  link: string;
  type: string;
}

export default function OnlineCoursePage() {
  const [courses, setCourses] = useState<OnlineCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/data/online-courses.json');
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error loading online courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Static Background */}
      <div className="fixed inset-0 bg-black -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Main Content */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Online <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Courses</span>
              <div className="h-1 w-32 bg-linear-to-r from-blue-400 to-cyan-400 mt-4"></div>
            </h1>
            <p className="text-gray-400 text-lg mt-4">A collection of all the online courses I have completed or participated in</p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-black/50 border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Course Number and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/30 border border-blue-400">
                      <span className="text-blue-300 font-bold text-sm">
                        {String(course.id).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white flex-1">{course.name}</h3>
                </div>

                {/* Course Details */}
                <div className="space-y-4 mb-6">
                  {/* Duration/Date */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Duration/Date</p>
                      <p className="text-white font-medium">{course.duration}</p>
                    </div>
                  </div>

                  {/* Platform */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20m0 0l-4 1m4-1l4 1m0-5L9 10m0 0L5 8m4 2l4-2m0 0L15 8m-6 10l6-2m0 0l4-1m-4 1l-4-1" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Platform</p>
                      <p className="text-white font-medium">{course.platform}</p>
                    </div>
                  </div>

                  {/* Provider */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Provider</p>
                      <p className="text-white font-medium text-sm">{course.provider}</p>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Type</p>
                      <p className="text-white font-medium">{course.type}</p>
                    </div>
                  </div>
                </div>

                {/* Visit Link Button */}
                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/30 border border-blue-400 text-blue-300 rounded-lg text-sm font-semibold hover:bg-blue-500/50 hover:border-blue-300 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Course
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {courses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No courses found. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
