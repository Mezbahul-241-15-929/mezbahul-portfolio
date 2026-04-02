import React from 'react';

const Homepage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto w-full px-0 sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-center auto-rows-max lg:auto-rows-auto">
                        {/* Right side - Photo (Vertical Order on Mobile) */}
                        <div className="relative z-10 flex items-center justify-center lg:justify-end w-full lg:w-auto order-first lg:order-last">
                            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-full lg:h-auto lg:max-w-md group">
                                {/* Animated neon blue glow effect */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl transition-all duration-500"></div>
                                
                                {/* Secondary neon blue glow layer */}
                                <div className="absolute inset-0 bg-linear-to-b from-blue-400/30 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* Photo container with blue border */}
                                <div className="relative bg-blue-500 p-1.5 rounded-3xl overflow-hidden w-full h-full shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/60 transition-all duration-500">
                                    {/* Gradient border */}
                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Inner content */}
                                    <div className="relative bg-black rounded-3xl overflow-hidden w-full h-full">
                                        <img
                                            src="/Profile.JPG"
                                            alt="Profile"
                                            className="w-full h-full rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left side - Information */}
                        <div className="relative z-10 flex flex-col justify-center items-center lg:items-start space-y-8 order-last lg:order-first text-center lg:text-left">
                            <div>
                                <p className="text-blue-400 text-lg lg:text-xl font-medium mb-2">Hi, I am</p>
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
                                    Mezbahul
                                </h1>
                                <p className="text-3xl sm:text-4xl lg:text-5xl text-cyan-400 font-semibold">
                                    Web Developer
                                </p>
                            </div>


                            {/* Social Media Icons */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                >
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                >
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
                                >
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.251-.129.602-.129.954v5.414h-3.554s.048-8.789 0-9.708h3.554v1.375c.427-.659 1.191-1.6 2.897-1.6 2.117 0 3.704 1.385 3.704 4.362v5.571zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.952.77-1.715 1.917-1.715.998 0 1.914.763 1.914 1.715 0 .953-.773 1.715-1.916 1.715zm1.595 11.597H3.635V9.359h3.297v11.093zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </a>
                            </div>

                            {/* CV Download Button */}
                            <div>
                                <a
                                    href="/cv.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-8 py-3 lg:px-10 lg:py-4 lg:text-lg bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;