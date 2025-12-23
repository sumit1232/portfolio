// App.js - Complete Portfolio Website
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <img 
            src="https://avatars.githubusercontent.com/u/68217361?v=4" 
            alt="Sumit Jadav" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-2xl" 
          />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Sumit Jadav
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            MERN Stack Developer | React Specialist | Building scalable web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://github.com/sumit1232" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View GitHub
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://www.linkedin.com/in/sumit-jadav" className="text-2xl hover:text-purple-400 transition-colors">📧</a>
            <a href="mailto:sumitjadav2525@gmail.com" className="text-2xl hover:text-purple-400 transition-colors">📧</a>
            <a href="tel:+919099456361" className="text-2xl hover:text-purple-400 transition-colors">📱</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 leading-relaxed">
                Passionate MERN Stack Developer with 1+ years of experience building responsive web applications. 
                Currently working at MTech Infotech as a Frontend Developer, specializing in React.js with hooks and modern state management.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Previously contributed to Vibrant Gujarat Global Summit 2024 platform, building interactive features for high-traffic events. 
                Master of Computer Applications graduate from Gujarat Technological University.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400">1+</div>
                  <div className="text-sm opacity-75">Years Exp</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-sm opacity-75">Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-6">Download Resume</h3>
                <a 
                  href="/Sumit_Jadav_Resume.pdf" 
                  download="Sumit_Jadav_Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 w-full justify-center"
                >
                  📄 Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  MERN Stack Developer
                </h3>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">MTech Infotech, Vadodara</h4>
                <p className="text-purple-200 mb-4">July 2024 - Present</p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-semibold">✓</span>
                    Built responsive React components with hooks (useState, useEffect)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-semibold">✓</span>
                    RESTful APIs with Node.js, Express.js, MongoDB
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-semibold">✓</span>
                    File uploads with Multer & Context API state management
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                  Frontend Developer Intern
                </h3>
                <h4 className="text-xl font-semibold text-blue-300 mb-2">INDEXTB - Vibrant Gujarat 2024</h4>
                <p className="text-blue-200 mb-4">Aug 2023 - Jan 2024</p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-semibold">✓</span>
                    Interactive React components for Global Summit platform
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-semibold">✓</span>
                    Responsive UIs with Tailwind CSS & React Router
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-semibold">✓</span>
                    Real-time features for high-traffic event platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">Live Demo</div>
                  <a href="https://linkdin-clone-tan.vercel.app" className="text-purple-400 hover:text-purple-300 font-semibold">🔗 View Live</a>
                </div>
                <h3 className="text-2xl font-bold mb-4">LinkedIn Clone</h3>
                <p className="text-lg mb-6 opacity-90">
                  Complete LinkedIn clone with 8 pages - Home feed, Profile, Messages, Jobs, Network. 
                  Responsive 3-column layouts with React Router navigation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Material-UI</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Tailwind CSS</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/sumit1232/linkdinCLone" className="flex-1 text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-all">GitHub</a>
                  <a href="https://linkdin-clone-tan.vercel.app" className="flex-1 text-center px-6 py-3 border-2 border-purple-500 hover:bg-purple-500 rounded-xl font-semibold transition-all">Live Demo</a>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900/50 backdrop-blur-sm border border-emerald-500/30 hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-semibold">CRUD App</div>
                  <a href="https://gym-pulse-smoky.vercel.app" className="text-emerald-400 hover:text-emerald-300 font-semibold">🔗 View Live</a>
                </div>
                <h3 className="text-2xl font-bold mb-4">Gym Pulse</h3>
                <p className="text-lg mb-6 opacity-90">
                  Full CRUD gym management system with member profiles, workout logs, and schedules. 
                  Production-ready React app with Context API and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Redux</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Tailwind CSS</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://gym-pulse-smoky.vercel.app" className="flex-1 text-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'React.js', icon: '⚛️', level: 'Advanced' },
              { name: 'Node.js', icon: '⬢', level: 'Proficient' },
              { name: 'MongoDB', icon: '🗄️', level: 'Proficient' },
              { name: 'Tailwind CSS', icon: '💨', level: 'Advanced' },
              { name: 'JavaScript ES6+', icon: '📜', level: 'Expert' },
              { name: 'Express.js', icon: '🚀', level: 'Proficient' },
              { name: 'Git/GitHub', icon: '📤', level: 'Advanced' },
              { name: 'Vercel', icon: '🚀', level: 'Deployed' }
            ].map((skill, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                <p className="text-purple-300 text-sm opacity-75">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Master of Computer Applications</h3>
              <h4 className="text-xl font-semibold mb-2 text-blue-300">Gujarat Technological University</h4>
              <p className="text-blue-200 mb-4">2022 - 2024</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Bachelor of Computer Applications</h3>
              <h4 className="text-xl font-semibold mb-2 text-emerald-300">Sardar Patel University, VP Science College</h4>
              <p className="text-emerald-200 mb-4">2019 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-t from-slate-900 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch for exciting projects and collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
              <div className="text-3xl mb-4">📧</div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:sumitjadav2525@gmail.com" className="text-purple-400 hover:text-purple-300">sumitjadav2525@gmail.com</a>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:+919099456361" className="text-purple-400 hover:text-purple-300">+91 9099456361</a>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="font-semibold mb-2">GitHub</h4>
              <a href="https://github.com/sumit1232" className="text-purple-400 hover:text-purple-300">sumit1232</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 text-center">
        <p>&copy; 2025 Sumit Jadav. Built with React & Tailwind CSS. 🚀</p>
      </footer>
    </div>
  );
};

export default App;
