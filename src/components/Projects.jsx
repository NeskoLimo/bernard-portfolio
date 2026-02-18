// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker API",
      description:
        "Full-featured REST API for tracking personal expenses, categories, and reports. Built with Python/FastAPI, PostgreSQL, JWT authentication, and deployed on Render.",
      tech: ["Python", "FastAPI", "PostgreSQL", "JWT", "Render"],
      liveDemo: "https://your-expense-api.onrender.com/docs", // Replace with real URL
    },
    // Add more projects here as needed
    // {
    //   title: "Another Project",
    //   description: "Short description...",
    //   tech: ["React", "Tailwind", "Node.js"],
    //   liveDemo: "https://...",
    // },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          Key Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-2xl hover:border-blue-700 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Content */}
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags - balanced wrapping */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-950/50 text-blue-300 text-sm font-medium rounded-full border border-blue-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Demo Button - always at bottom */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold text-base md:text-lg py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: If no projects message */}
        {projects.length === 0 && (
          <p className="text-center text-gray-400 text-lg">
            Projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
