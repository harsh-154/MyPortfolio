// src/sections/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Facebook Clone',
      description: 'A full-stack social media application that allows users to post, like, comment, and manage friend requests. Includes user authentication and clean UI.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB','jwt authentication'],
      github: 'https://github.com/harsh-154/Social-Media-Facebook-Clone-',
      demo: 'https://facebook-clone-demo.vercel.app', // use your actual deployed link
      gradientFrom: 'purple-400',
      gradientTo: 'blue-400',
      borderColor: 'border-purple-500'
    },
    {
      title: 'PersonalNotes App',
      description: 'A cloud note manager that allows users to add, edit, and delete notes securely with login support. Built with MERN stack.',
      tech: ['React', 'Express', 'MongoDB','Node.js','jwt authentication'],
      github: 'https://github.com/harsh-154/Notes-App-by-React',
      demo: 'https://personalnotes-demo.vercel.app',
      gradientFrom: 'blue-400',
      gradientTo: 'pink-400',
      borderColor: 'border-blue-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:mx-auto after:mt-4 after:rounded-full animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:${project.borderColor} transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-slide-in-left delay-${index * 100}`}
            >
              <h3 className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-${project.gradientFrom} to-${project.gradientTo} mb-3`}>
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`bg-${project.gradientTo} text-blue-900 text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-${project.gradientFrom} to-${project.gradientTo} text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:opacity-90 hover:shadow-md`}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-${project.gradientTo} to-${project.gradientFrom} text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:opacity-90 hover:shadow-md`}
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
