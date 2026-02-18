// src/components/Projects.jsx
import React, { useRef, useEffect, useState } from 'react';

const projects = [
  {
    title: 'Expense Tracker API',
    description:
      'Full-featured REST API for tracking personal expenses, categories, and reports. Built with Python/FastAPI, PostgreSQL, JWT authentication, and deployed on Render.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Render'],
    liveDemo: 'https://your-expense-api.onrender.com/docs',
    category: 'Backend',
  },
  // Add more projects below as needed:
  // {
  //   title: 'Another Project',
  //   description: 'Short description...',
  //   tech: ['React', 'Tailwind', 'Node.js'],
  //   liveDemo: 'https://...',
  //   category: 'Frontend',
  // },
];

const categoryColors = {
  Backend:  { bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.25)', text: 'var(--gold)' },
  Frontend: { bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.25)',  text: 'var(--lime-main)' },
  Analytics:{ bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.25)', text: 'var(--gold)' },
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const catStyle = categoryColors[project.category] ?? categoryColors.Backend;

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        background: 'var(--bg-surface)',
        border: '1px solid var(--lime-border)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        transition2: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(247,231,206,0.28)';
        e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--lime-border)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Gold top shimmer line */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold-deep), var(--gold), transparent)',
        opacity: 0.6,
      }} />

      {/* Card body */}
      <div style={{ padding: '1.75rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Category badge + index */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            background: catStyle.bg,
            border: `1px solid ${catStyle.border}`,
            color: catStyle.text,
          }}>
            {project.category ?? 'Project'}
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--lime-border)',
            lineHeight: 1,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.92rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          flexGrow: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="tag tag-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA footer */}
      <div style={{
        padding: '1.25rem 2rem 1.75rem',
        borderTop: '1px solid var(--lime-border)',
        background: 'var(--bg-elevated)',
      }}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1.5rem' }}
        >
          Live Demo &nbsp;→
        </a>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects" style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative orb */}
      <div style={{
        position: 'absolute',
        bottom: '-100px', left: '-100px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
            marginBottom: '0.6rem',
          }}>
            What I've Built
          </p>
          <h2 className="heading-2">Key Projects</h2>
          <div className="section-divider" />
        </div>

        {/* ── Grid ───────────────────────────────────────────── */}
        {projects.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            background: 'var(--bg-elevated)',
            borderRadius: '1rem',
            border: '1px dashed var(--lime-border)',
            marginBottom: '3rem',
          }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem', opacity: 0.4 }}>◈</span>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-muted)', fontSize: '1rem' }}>
              Projects coming soon…
            </p>
          </div>
        )}

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
          }}>
            See the full project list and case studies in my portfolio.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline px-7 py-3 text-sm"
            >
              Full Portfolio (Notion)
            </a>
            <a href="#contact" className="btn btn-primary px-7 py-3 text-sm">
              Discuss a Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
