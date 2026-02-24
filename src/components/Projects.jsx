// src/components/Projects.jsx
import React, { useRef, useEffect, useState } from 'react';

const projects = [
  // ── Existing projects ────────────────────────────────────────────────────
  {
    title: 'Expense Tracker API',
    description:
      'Full-featured REST API for tracking personal expenses, categories, and reports. Built with Python/FastAPI, PostgreSQL, JWT authentication, and deployed on Render.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Render'],
    liveDemo: 'https://your-expense-api.onrender.com/docs',
    github: null,
    category: 'Backend',
  },
  {
    title: 'GitHub Portfolio',
    description:
      'Explore my full collection of repositories including data analysis scripts, automation tools, API projects, and business intelligence work. All source code is open and available for review.',
    tech: ['Python', 'SQL', 'FastAPI', 'Data Analysis', 'Open Source'],
    liveDemo: null,
    github: 'https://github.com/NeskoLimo',
    category: 'Analytics',
  },

  // ── New projects ─────────────────────────────────────────────────────────
  {
    title: 'Insurance Claims Process Redesign',
    description:
      'Led end-to-end business analysis for redesigning the motor insurance claims workflow, reducing average processing time by 40%. Deliverables included AS-IS/TO-BE process maps, gap analysis, BRD, and UAT test scripts.',
    tech: ['BPMN', 'Visio', 'BRD', 'Gap Analysis', 'UAT', 'Agile'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Business Analysis',
  },
  {
    title: 'Core Banking System Migration',
    description:
      'Served as lead BA for a Tier-2 bank migrating from a legacy core banking platform. Conducted stakeholder workshops, authored functional specs, managed data mapping, and coordinated UAT across 6 departments.',
    tech: ['Requirements Elicitation', 'Data Mapping', 'FSD', 'UAT', 'JIRA', 'SQL'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Banking',
  },
  {
    title: 'Healthcare Patient Portal — Requirements',
    description:
      'Gathered and documented requirements for a patient self-service portal serving 50,000+ users. Produced user stories, wireframe annotations, and acceptance criteria used by a cross-functional agile team across 8 sprints.',
    tech: ['User Stories', 'Figma Annotations', 'Scrum', 'Confluence', 'HL7 FHIR'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Healthcare',
  },
  {
    title: 'KPI Dashboard — Business Intelligence',
    description:
      'Designed and delivered a Power BI executive dashboard consolidating KPIs across sales, operations, and finance. Reduced manual reporting effort by 6 hours/week and enabled real-time decision-making for C-suite stakeholders.',
    tech: ['Power BI', 'DAX', 'SQL', 'Data Modelling', 'ETL', 'Excel'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Analytics',
  },
  {
    title: 'Digital Onboarding — Regulatory Compliance',
    description:
      'Analysed regulatory requirements (KYC/AML) and translated them into functional specifications for a digital customer onboarding solution, cutting onboarding time from 5 days to under 4 hours post-implementation.',
    tech: ['KYC/AML', 'Regulatory Analysis', 'BRD', 'Process Mapping', 'Risk Register'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Banking',
  },
  {
    title: 'Agile Transformation Playbook',
    description:
      'Co-created an Agile adoption playbook for a 120-person organisation transitioning from Waterfall. Facilitated workshops, defined sprint ceremonies, and trained 4 product teams — improving delivery predictability by 35%.',
    tech: ['Scrum', 'Kanban', 'Agile Coaching', 'Confluence', 'JIRA', 'Change Management'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Agile',
  },
  {
    title: 'Design Thinking — Customer Experience Sprint',
    description:
      'Facilitated a 5-day Design Thinking sprint to reimagine the branch customer experience for a retail bank. Methods included empathy mapping, HMW ideation, and rapid prototyping — resulting in 3 concepts approved for piloting.',
    tech: ['Design Thinking', 'Empathy Mapping', 'Prototyping', 'Miro', 'User Research'],
    liveDemo: null,
    github: null,
    notion: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    category: 'Design Thinking',
  },
];

const categoryColors = {
  Backend:          { bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.25)', text: 'var(--gold)' },
  Frontend:         { bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.25)',  text: 'var(--lime-main)' },
  Analytics:        { bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.25)',  text: 'var(--lime-main)' },
  'Business Analysis': { bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.3)', text: 'var(--gold)' },
  Banking:          { bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)',  text: '#60a5fa' },
  Healthcare:       { bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)',  text: '#34d399' },
  Agile:            { bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)',  text: '#fb923c' },
  'Design Thinking':{ bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.25)', text: '#c084fc' },
};

// ── Filter categories (derived from data) ────────────────────────────────────
const ALL_CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const catStyle = categoryColors[project.category] ?? categoryColors['Business Analysis'];

  // CTA link — prefer liveDemo, then notion, then github
  const ctaHref = project.liveDemo ?? project.notion ?? project.github;
  const ctaLabel = project.liveDemo ? 'Live Demo' : project.notion ? 'View Case Study' : 'View on GitHub';

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: (index % 3) * 0.08 + 's',
        background: 'var(--bg-surface)',
        border: '1px solid var(--lime-border)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        cursor: 'default',
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
      {/* Gold shimmer top line */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold-deep), var(--gold), transparent)',
        opacity: 0.6,
      }} />

      {/* Card body */}
      <div style={{ padding: '1.75rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Category + index */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            background: catStyle.bg,
            border: '1px solid ' + catStyle.border,
            color: catStyle.text,
          }}>
            {project.category}
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.5rem', fontWeight: 700,
            color: 'var(--lime-border)', lineHeight: 1,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
          fontWeight: 700, color: 'var(--text-primary)',
          letterSpacing: '-0.01em', lineHeight: 1.25,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem', color: 'var(--text-secondary)',
          lineHeight: 1.75, flexGrow: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
          {project.tech.map((tag) => (
            <span key={tag} className="tag tag-gold">{tag}</span>
          ))}
        </div>
      </div>

      {/* CTA footer */}
      {ctaHref && (
        <div style={{
          padding: '1.25rem 2rem 1.75rem',
          borderTop: '1px solid var(--lime-border)',
          background: 'var(--bg-elevated)',
          display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
        }}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}
          >
            {ctaLabel} ↗
          </a>
          {project.github && project.liveDemo && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ flex: 1, justifyContent: 'center', padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '0.6rem',
          }}>
            What I've Built & Delivered
          </p>
          <h2 className="heading-2">Key Projects</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem', color: 'var(--text-secondary)',
            maxWidth: '520px', margin: '0.5rem auto 0', lineHeight: 1.75,
          }}>
            A selection of business analysis, process redesign, and technology delivery projects across Banking, Insurance, and Healthcare.
          </p>
        </div>

        {/* ── Category filter pills ─────────────────────────────────────────── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
          justifyContent: 'center', marginBottom: '2.5rem',
        }}>
          {ALL_CATEGORIES.map((cat) => {
            const active = activeFilter === cat;
            const catStyle = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: active
                    ? '1px solid ' + (catStyle?.border ?? 'rgba(247,231,206,0.4)')
                    : '1px solid var(--lime-border)',
                  background: active
                    ? (catStyle?.bg ?? 'rgba(247,231,206,0.1)')
                    : 'transparent',
                  color: active
                    ? (catStyle?.text ?? 'var(--gold)')
                    : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.75rem', color: 'var(--text-muted)',
          textAlign: 'center', marginBottom: '2rem',
          letterSpacing: '0.06em',
        }}>
          Showing {filtered.length} of {projects.length} projects
        </p>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '1rem', textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem', color: 'var(--text-secondary)',
          }}>
            See the full project list and case studies in my portfolio.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.82rem' }}
            >
              Full Portfolio on Notion
            </a>
            <a
              href="https://github.com/NeskoLimo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.82rem' }}
            >
              GitHub Profile
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.82rem' }}
            >
              Discuss a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
