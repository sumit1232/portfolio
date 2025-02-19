import React from 'react'
import './App.css'

function App() {
  return (
    <div>

    <header>
        <h1>My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="about">
        <h2>About Me</h2>
        <p>Front-end developer with 2 years of experience in MERN stack projects.</p>
    </section>
    
    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
        </ul>
    </section>
    
    <section id="education">
        <h2>Education</h2>
        <p>Bachelor's in Computer Science</p>
    </section>
    
    <section id="experience">
        <h2>Experience</h2>
        <p>Worked on multiple MERN stack projects.</p>
    </section>
    
    <section id="projects">
        <h2>Projects</h2>
        <h3>MERN Stack Projects</h3>
        <div class="projects-container">
            <div class="project-card">
                <img src="https://via.placeholder.com/300" alt="MERN Project 1" />
                <div class="card-content">
                    <h3>MERN Project 1</h3>
                    <p>Brief description of MERN Project 1.</p>
                    <a href="https://github.com/yourusername/mern-project1" target="_blank">View Project</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://via.placeholder.com/300" alt="MERN Project 2" />
                <div class="card-content">
                    <h3>MERN Project 2</h3>
                    <p>Brief description of MERN Project 2.</p>
                    <a href="https://github.com/yourusername/mern-project2" target="_blank">View Project</a>
                </div>
            </div>
        </div>
        
        <h3>MEAN Stack Projects</h3>
        <div class="projects-container">
            <div class="project-card">
                <img src="https://via.placeholder.com/300" alt="MEAN Project 1" />
                <div class="card-content">
                    <h3>MEAN Project 1</h3>
                    <p>Brief description of MEAN Project 1.</p>
                    <a href="https://github.com/yourusername/mean-project1" target="_blank">View Project</a>
                </div>
            </div>
            <div class="project-card">
                <img src="https://via.placeholder.com/300" alt="MEAN Project 2" />
                <div class="card-content">
                    <h3>MEAN Project 2</h3>
                    <p>Brief description of MEAN Project 2.</p>
                    <a href="https://github.com/yourusername/mean-project2" target="_blank">View Project</a>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default App