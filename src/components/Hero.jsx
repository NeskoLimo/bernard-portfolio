// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--lime-50)] via-[var(--lime-100)] to-[var(--lime-200)] text-[var(--gray-900)] px-6 py-20"
    >
      <div className="container text-center space-y-8 md:space-y-10">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Bernard Limo
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-lime-700">
          Business Analyst | Agile Practitioner | Process Optimizer
        </h2>

        {/* Description */}
        <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
          Bridging business needs and technology solutions in banking, insurance, healthcare, and beyond.  
          Transforming requirements into impactful outcomes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center pt-6">
          <a
            href="#contact"
            className="btn btn-primary text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
          >
            Get in Touch
          </a>

          <a
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
          >
            View Full Portfolio (Notion)
          </a>

          <a
            href="https://www.linkedin.com/in/bernard-limo-77937b138/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#0A66C2] hover:bg-[#004182] text-white text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
