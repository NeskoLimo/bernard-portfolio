// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // Smooth scroll handler
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu
  };

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0.1 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.replace('#', ''));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-600 to-lime-400 flex items-center justify-center text-slate-950 font-bold text-xl shadow-gold-glow">
              BL
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Bernard Limo
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-link text-sm lg:text-base font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold font-semibold border-b-2 border-gold pb-1'
                    : 'text-slate-300 hover:text-gold'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn btn-gold text-sm lg:text-base px-6 py-2.5 uppercase tracking-wider font-semibold shadow-gold-glow hover:shadow-gold-glow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gold focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4 border-t border-gold/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-3 px-4 rounded-lg text-base font-medium uppercase tracking-wider transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-lime-dark/30 text-gold font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-gold'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Hire Me in mobile menu */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block py-3 px-4 rounded-lg text-base font-semibold uppercase tracking-wider bg-gold text-slate-950 hover:bg-gold-dark transition-all shadow-md"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
