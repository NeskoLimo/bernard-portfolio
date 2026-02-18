// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth  - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* ── Background orbs ───────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-8%',
          width: '560px', height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,231,206,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          transition: 'transform 0.8s ease',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-12%', left: '-6%',
          width: '640px', height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
          transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
          transition: 'transform 1s ease',
        }}
      />

      {/* ── Decorative grid lines ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(247,231,206,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247,231,206,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="section-container relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="hero-badge animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Open to New Opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up font-display"
          style={{
            fontSize: 'clamp(3rem, 9vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            animationDelay: '0.2s',
          }}
        >
          Bernard{' '}
          <span
            className="text-shimmer"
            style={{ fontStyle: 'italic' }}
          >
            Limo
          </span>
        </h1>

        {/* Role titles */}
        <div
          className="animate-fade-in-up flex flex-wrap justify-center gap-3 mt-4 mb-6"
          style={{ animationDelay: '0.3s' }}
        >
          {['Business Analyst', 'Agile Practitioner', 'Process Optimizer'].map((role) => (
            <span key={role} className="tag tag-gold text-sm">
              {role}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider animate-fade-in" style={{ animationDelay: '0.35s' }} />

        {/* Description */}
        <p
          className="animate-fade-in-up max-w-2xl leading-relaxed font-body"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            animationDelay: '0.4s',
            marginBottom: '2.5rem',
          }}
        >
          Bridging business needs and technology solutions across{' '}
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>
            banking, insurance, healthcare,
          </span>{' '}
          and beyond — transforming complex requirements into impactful,
          measurable outcomes.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#contact"
            className="btn btn-primary px-8 py-4 text-base"
          >
            Get in Touch
          </a>
          <a
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-8 py-4 text-base"
          >
            View Full Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/bernard-limo-77937b138/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-8 py-4 text-base"
            style={{ borderColor: 'var(--lime-main)', color: 'var(--lime-main)' }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* ── Stats row ─────────────────────────────────────────── */}
        <div
          className="animate-fade-in-up mt-16 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-lg"
          style={{ animationDelay: '0.65s' }}
        >
          {[
            { value: '8+',   label: 'Years Experience' },
            { value: '30+',  label: 'Projects Delivered' },
            { value: '5',    label: 'Industries Served' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className="font-display font-bold"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="font-body text-center"
                style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Scroll indicator ──────────────────────────────────── */}
        <div
          className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animationDelay: '1s' }}
        >
          <span
            className="font-body"
            style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, var(--gold-deep), transparent)',
              animation: 'fade-in 2s ease infinite alternate',
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
