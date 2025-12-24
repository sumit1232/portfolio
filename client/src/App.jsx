import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔹 All your projects (unchanged)
  const projects = [
    {
      id: 1,
      title: 'Counter App',
      category: 'web',
      image: 'https://i.postimg.cc/43Th5VXJ/work-1.png',
      tech: 'React.js, Tailwind CSS, useState',
      live: 'https://counter-app-steel-nine.vercel.app/',
      github: 'https://github.com/sumit1232/CounterApp.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-usestate-frontenddeveloper-activity-7409223521437925376-aaPC',
      date: 'Dec 2025',
    },
    {
      id: 2,
      title: 'TODO List App',
      category: 'web',
      image: 'https://i.postimg.cc/sXLjnC5p/work-2.png',
      tech: 'React.js, Tailwind CSS, Local Storage',
      live: 'https://to-do-list-app-eta-gilt.vercel.app/',
      github: 'https://github.com/sumit1232/To-Do_List_App.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-todoapp-frontenddeveloper-activity-7409226702322757632-4EYM',
      date: 'Dec 2025',
    },
    {
      id: 3,
      title: 'Weather App',
      category: 'app',
      image: 'https://i.postimg.cc/QNB1jXYZ/work-3.png',
      tech: 'React.js, Weather API, Tailwind CSS',
      live: 'https://weather-app-eight-smoky-94.vercel.app/',
      github: 'https://github.com/sumit1232/Weather_App.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-weatherapp-apis-activity-7409228427154776064-7LTm',
      date: 'Dec 2025',
    },
    {
      id: 4,
      title: 'Calculator App',
      category: 'web',
      image: 'https://i.postimg.cc/1X1Qb7nY/work-4.png',
      tech: 'React.js, Tailwind CSS',
      live: 'https://calculator-jade-delta-17.vercel.app/',
      github: 'https://github.com/sumit1232/Calculator.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-calculatorapp-frontenddevelopment-activity-7409230029211041793-hZ9L',
      date: 'Dec 2025',
    },
    {
      id: 5,
      title: 'Quiz App',
      category: 'app',
      image: 'https://i.postimg.cc/85Yk6h1Z/work-5.png',
      tech: 'React.js, Tailwind CSS',
      live: 'https://vercel.com/sumit1232s-projects/quiz-app',
      github: 'https://github.com/sumit1232/QuizApp.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-quizapp-frontenddevelopment-activity-7409232317430460416-yWKi',
      date: 'Dec 2025',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      category: 'web',
      image: 'https://i.postimg.cc/Df3mYkL8/work-6.png',
      tech: 'React.js, Tailwind CSS, Charts',
      live: 'https://expense-tracker-omega-indol.vercel.app/',
      github: 'https://github.com/sumit1232/Expense_Tracker.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-expensetracker-frontenddevelopment-activity-7409235278927958016-4dGI',
      date: 'Dec 2025',
    },
    {
      id: 7,
      title: 'Movie Search App',
      category: 'app',
      image: 'https://i.postimg.cc/gcP3hW5P/work-7.png',
      tech: 'React.js, TMDB API, Tailwind CSS',
      live: 'https://movie-search-app-mauve-iota.vercel.app/',
      github: 'https://github.com/sumit1232/MovieSearch_App.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-moviesearchapp-apis-activity-7409237645786288128-JoS7',
      date: 'Dec 2025',
    },
    {
      id: 8,
      title: 'Random Quote Generator',
      category: 'web',
      image: 'https://i.postimg.cc/RCxYkL9Q/work-8.png',
      tech: 'React.js, Quote API, Tailwind CSS',
      live: 'https://random-quote-generator-tau-rust.vercel.app/',
      github: 'https://github.com/sumit1232/RandomQuoteGenerator.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-randomquotegenerator-apis-activity-7409240006554353664-5lRq',
      date: 'Dec 2025',
    },
    {
      id: 9,
      title: 'Color Picker App',
      category: 'web',
      image: 'https://i.postimg.cc/9XwL5m3r/work-9.png',
      tech: 'React.js, Tailwind CSS, Color API',
      live: 'https://color-picker-app-rust.vercel.app/',
      github: 'https://github.com/sumit1232/ColorPickerApp.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-colorpickerapp-frontenddevelopment-activity-7409243538451963905-EQMh',
      date: 'Dec 2025',
    },
    {
      id: 10,
      title: 'Markdown Previewer',
      category: 'web',
      image: 'https://i.postimg.cc/7hYkL2nT/work-10.png',
      tech: 'React.js, Tailwind CSS, Markdown',
      live: 'https://markdown-previewer-pi-eight.vercel.app/',
      github: 'https://github.com/sumit1232/MarkdownPreviewer.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-markdownpreviewer-frontenddevelopment-activity-7409262013194940416-6khL',
      date: 'Dec 2025',
    },
    {
      id: 11,
      title: 'Stopwatch Timer',
      category: 'app',
      image: 'https://i.postimg.cc/bN2QdL0s/work-11.png',
      tech: 'React.js, Vite, Tailwind CSS',
      live: 'https://stopwatch-timer-app-murex.vercel.app/',
      github: 'https://github.com/sumit1232/Stopwatch-Timer-App.git',
      linkedin: 'https://www.linkedin.com/posts/sumit-jadhav-1477423a0_reactjs-vite-tailwindcss-activity-7409433014381944833-VlXH',
      date: 'Dec 2025',
    },
    {
      id: 12,
      title: 'BMI Calculator',
      category: 'web',
      image: 'https://i.postimg.cc/mgB7vN2K/work-12.png',
      tech: 'React.js, Tailwind CSS',
      live: 'https://bmi-calculator-app-beta.vercel.app/',
      github: 'https://github.com/sumit1232/BMI_CalculatorApp.git',
      date: 'Dec 2025',
    },
    {
      id: 13,
      title: 'Recipe Finder App',
      category: 'app',
      image: 'https://i.postimg.cc/90yL5kR7/work-13.png',
      tech: 'React.js, Recipe API, Tailwind CSS',
      live: 'https://recipe-finder-app-mu-fawn.vercel.app/',
      github: 'https://github.com/sumit1232/RecipeFinderApp.git',
      date: 'Dec 2025',
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveNav(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Mobile Toggle - Fixed top-right */}
      <button
        className="fixed right-6 top-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl md:hidden hover:scale-110 transition-all"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="text-2xl font-bold">≡</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Fixed Sidebar Navigation - Desktop Only */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-24 bg-slate-900/80 backdrop-blur-sm border-r border-slate-700/50 z-30 hidden md:flex flex-col pt-20 space-y-6 px-3 py-8">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-full p-3 rounded-2xl transition-all flex flex-col items-center gap-2 group ${
              activeNav === section
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl scale-110'
                : 'hover:bg-slate-800/50 hover:scale-105 text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-2xl">
              {section === 'home' ? '🏠' :
               section === 'about' ? '👤' :
               section === 'skills' ? '⚡' :
               section === 'projects' ? '💻' : '📧'}
            </span>
            <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content - Offset for Sidebar */}
      <main className="md:ml-20 lg:ml-24 min-h-screen pt-4">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 lg:px-12 py-20 lg:py-32 relative overflow-hidden"
        >
          <div className="text-center lg:text-left max-w-4xl lg:max-w-5xl mx-auto w-full relative z-10 lg:ml-0">
            {/* Social Icons - Responsive */}
            <div className="flex gap-6 sm:gap-8 mb-12 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/sumit-jadav"
                className="text-2xl hover:scale-110 transition-all p-3 bg-slate-800/50 rounded-2xl hover:bg-purple-500/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a 
                href="mailto:sumitjadav2525@gmail.com" 
                className="text-2xl hover:scale-110 transition-all p-3 bg-slate-800/50 rounded-2xl hover:bg-indigo-500/50"
              >
                📧
              </a>
              <a 
                href="tel:+919099456361" 
                className="text-2xl hover:scale-110 transition-all p-3 bg-slate-800/50 rounded-2xl hover:bg-pink-500/50"
              >
                📱
              </a>
            </div>

            {/* Profile Image - Responsive sizing */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0 mb-8 lg:mb-12 border-4 border-purple-500 shadow-2xl object-cover hover:scale-105 transition-all duration-300 rounded-full">
              <img
                src="/profile.jpeg"
                alt="Sumit Jadav - MERN Stack Developer"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Hero Text - Responsive typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Sumit Jadav
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-6 sm:mb-8">
              MERN Stack Developer
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building scalable web applications with React, Node.js & modern tech stack
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <span>👋</span> Get In Touch
            </a>

            {/* Contact Cards - Responsive */}
            <div className="flex flex-col sm:flex-row gap-6 mt-16 sm:mt-20 justify-center lg:justify-start flex-wrap">
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all w-full sm:w-auto">
                <div className="text-3xl mb-2">📧</div>
                <div className="text-sm sm:text-base">sumitjadav2525@gmail.com</div>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all w-full sm:w-auto">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-sm sm:text-base">+91 9099456361</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 animate-pulse" />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <span className="text-base sm:text-lg md:text-xl font-normal text-purple-300 block mb-4 sm:mb-6">About Me</span>
              Sumit Jadav
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/profile.jpeg"
                alt="Sumit Jadav"
                className="w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl mx-auto object-cover hover:scale-105 transition-all"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-300">
                MERN Stack Developer from India
              </h3>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
                Passionate developer with 1+ years experience building production-ready web applications.
                Currently at MTech Infotech, specializing in React.js, Node.js, and modern full-stack
                development.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/50 transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">1+</div>
                  <div className="opacity-75 text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm hover:bg-slate-700/50 transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-2">13</div>
                  <div className="opacity-75 text-sm sm:text-base">Projects</div>
                </div>
             
              </div>

              <a
                href="/Sumit_Jadav_Resume.pdf"
                download
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-semibold text-lg transition-all shadow-xl hover:shadow-purple-500/25 hover:scale-105 block w-full sm:w-auto text-center"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <span className="text-base sm:text-lg md:text-xl font-normal text-purple-300 block mb-4 sm:mb-6">Tech Stack</span>
                My Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Frontend */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700 hover:border-purple-500/60 hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">⚛️</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Frontend</h3>
                </div>
                <ul className="text-sm sm:text-base opacity-80 space-y-2">
                  <li>React.js</li>
                  <li>JavaScript ES6+</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5/CSS3</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700 hover:border-purple-500/60 hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🧩</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-pink-300">Backend</h3>
                </div>
                <ul className="text-sm sm:text-base opacity-80 space-y-2">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>REST APIs</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700 hover:border-purple-500/60 hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🛠️</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">Tools</h3>
                </div>
                <ul className="text-sm sm:text-base opacity-80 space-y-2">
                  <li>Git & GitHub</li>
                  <li>Vercel</li>
                  <li>VS Code</li>
                  <li>Vite</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <span className="text-base sm:text-lg md:text-xl font-normal text-purple-300 block mb-4 sm:mb-6">Portfolio</span>
                Featured Projects (13+)
              </h2>
            </div>

            {/* Filter Buttons - Responsive */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
              {['all', 'web', 'app'].map((filter) => (
                <button
                  key={filter}
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all text-sm sm:text-base flex-shrink-0 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg scale-105 px-8 sm:px-10'
                      : 'bg-slate-800/50 hover:bg-slate-700/50 px-6 sm:px-8'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'all' ? 'All (13)' : filter === 'web' ? 'Web (10)' : 'Apps (3)'}
                </button>
              ))}
            </div>

            {/* Projects Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
              {projects
                .filter((p) => activeFilter === 'all' || p.category === activeFilter)
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 shadow-2xl h-full flex flex-col"
                  >
                    <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-indigo-300 mb-6 opacity-75 text-sm sm:text-base line-clamp-2 flex-1">
                        {project.tech}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <a
                          href={project.github}
                          className="flex-1 text-center py-2.5 px-4 bg-purple-600/80 hover:bg-purple-700 rounded-xl font-semibold text-sm transition-all min-w-[80px]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💻 Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            className="flex-1 text-center py-2.5 px-4 border-2 border-purple-500 hover:bg-purple-500 rounded-xl font-semibold text-sm transition-all min-w-[80px]"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            🚀 Live
                          </a>
                        )}
                        {project.linkedin && (
                          <a
                            href={project.linkedin}
                            className="flex-1 text-center py-2.5 px-4 border-2 border-blue-500 hover:bg-blue-500 rounded-xl font-semibold text-sm transition-all min-w-[80px]"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            💼 Post
                          </a>
                        )}
                      </div>
                      <div className="text-xs opacity-50 mt-3 text-right">{project.date}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-t from-slate-900/80 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <span className="text-lg md:text-xl font-normal text-purple-300 block mb-6 sm:mb-8">Ready to Collaborate?</span>
              Let's Build Something Amazing
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into scalable web applications. Get in touch for exciting projects and
              collaborations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mb-16">
              <div className="p-8 bg-slate-800/50 rounded-3xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
                <div className="text-4xl sm:text-5xl mb-6">📧</div>
                <h4 className="font-bold text-xl sm:text-2xl mb-4">Email</h4>
                <a
                  href="mailto:sumitjadav2525@gmail.com"
                  className="text-purple-400 hover:text-purple-300 text-lg block transition-colors"
                >
                  sumitjadav2525@gmail.com
                </a>
              </div>
              <div className="p-8 bg-slate-800/50 rounded-3xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
                <div className="text-4xl sm:text-5xl mb-6">📱</div>
                <h4 className="font-bold text-xl sm:text-2xl mb-4">Phone</h4>
                <a href="tel:+919099456361" className="text-purple-400 hover:text-purple-300 text-lg block transition-colors">
                  +91 9099456361
                </a>
              </div>
              <div className="p-8 bg-slate-800/50 rounded-3xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all">
                <div className="text-4xl sm:text-5xl mb-6">💻</div>
                <h4 className="font-bold text-xl sm:text-2xl mb-4">GitHub</h4>
                <a
                  href="https://github.com/sumit1232"
                  className="text-purple-400 hover:text-purple-300 text-lg block transition-colors"
                >
                  @sumit1232
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-slate-800/50 text-center">
          <p className="opacity-75 text-sm sm:text-base">© 2025 Sumit Jadav. Built with React & Tailwind CSS. 🚀</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
