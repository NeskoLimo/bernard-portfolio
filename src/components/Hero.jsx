// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-lime-dark to-slate-900 text-white px-6 py-20 overflow-hidden"
    >
      {/* Subtle golden glow overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#d4af3733_0%,transparent_60%)]"></div>

      <div className="section-container relative z-10 text-center space-y-8 md:space-y-12">
        <h1 className="heading-1">
          Bernard Limo
        </h1>

        <h2 className="heading-2">
          Business Analyst | Agile Practitioner | Process Optimizer
        </h2>

        <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-300">
          Bridging business needs and technology solutions in banking, insurance, healthcare, and beyond.  
          Transforming requirements into impactful, measurable outcomes.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center pt-8">
          <a
            href="#contact"
            className="btn btn-primary text-lg md:text-xl px-10 py-5"
          >
            Get in Touch
          </a>

          <a
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-lg md:text-xl px-10 py-5"
          >
            View Full Portfolio (Notion)
          </a>

          <a
            href="https://www.linkedin.com/in/bernard-limo-77937b138/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold text-lg md:text-xl px-10 py-5"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
