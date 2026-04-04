import Image from "next/image";
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <>

    <Homepage />
    <Aboutme />

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            My <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
              { category: 'Tools', skills: ['Git', 'Docker', 'VS Code', 'Figma'] },
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Send
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 font-medium">
                LinkedIn
              </button>
              <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 font-medium">
                GitHub
              </button>
              <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 font-medium">
                Twitter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
