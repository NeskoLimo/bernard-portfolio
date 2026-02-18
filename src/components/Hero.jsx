// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Bernard Limo
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-400 mb-6">
          Business Analyst | Agile Practitioner | Process Optimizer
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Bridging business needs and technology solutions in banking, insurance, healthcare, and beyond. Transforming requirements into impactful outcomes.
        </p>
<div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 justify-center items-center mt-8">
  <a
    href="#contact"
    className="min-w-[180px] bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
  >
    Get in Touch
  </a>

  <a
    href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[180px] border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold text-base sm:text-lg py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-center"
  >
    View Full Portfolio (Notion)
  </a>

  <span className="hidden sm:inline text-gray-400 text-xl font-bold px-2">|</span>

  <a
    href="https://www.linkedin.com/in/bernard-limo-77937b138/"
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[180px] bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-base sm:text-lg py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
  >
    Follow on LinkedIn
  </a>
</div>
      </div>
    </section>
  );
};

export default Hero;
