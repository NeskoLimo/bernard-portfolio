// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker API",
      description: "Full-featured REST API for tracking personal expenses, categories, and reports. Built with Python/FastAPI, PostgreSQL, JWT authentication, and deployed on Render.",
      tech: ["Python", "FastAPI", "PostgreSQL", "JWT", "Render"],
      liveDemo: "https://your-expense-api.onrender.com/docs", // ← Replace with your real Render URL
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern single-page portfolio showcasing professional background, projects, and skills as a Business Analyst. Built with React, Vite, Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveDemo: "https://bernard-portfolio.onrender.com",
    },
    // Add more projects here as objects
    // {
    //   title: "Another Project",
    //   description: "...",
    //   tech: ["Tech1", "Tech2"],
    //   liveDemo: "https://...",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Key Projects
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-950/60 text-blue-300 text-sm rounded-full border border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Live Demo
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
