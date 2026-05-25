export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P{item}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">Project {item}</h3>
                <p className="text-gray-400 mb-4 grow">
                  A brief description of your amazing project and what technologies were used to build it.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Next.js</span>
                  <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">Tailwind</span>
                </div>
                
                <button className="mt-4 w-full py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-sm font-medium">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
