// src/components/Experience.jsx
import { useRef, useEffect, useState } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Technical Service Lead',
    company: 'Smart Applications International Ltd',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    industry: 'InsurTech · HealthTech',
    current: true,
    achievements: [
      'Transforming business needs into actionable insights by gathering, analysing, and documenting requirements — ensuring seamless alignment between business and technology.',
      'Optimising system performance and integration by evaluating gaps, enhancing automation, and ensuring smooth end-to-end implementations for improved efficiency.',
      'Driving process improvements and quality assurance by conducting audits, system testing, and enforcing best practices to enhance operational scalability.',
      'Leading cross-functional collaborations to streamline underwriting, claims processing, and financial transactions through seamless system integrations.',
      'Enhancing user adoption and compliance by training stakeholders, standardising UAT plans, and ensuring adherence to data privacy and security regulations.',
    ],
    tags: ['Business Analysis', 'System Integration', 'UAT', 'Process Optimisation', 'Agile'],
  },
  {
    id: 2,
    role: 'Senior Customer Relations Officer',
    company: 'Smart Applications International Ltd',
    period: 'Apr 2024 – Jul 2024',
    type: 'Full-time',
    industry: 'InsurTech · HealthTech',
    current: false,
    achievements: [
      'Drove data-driven decisions by compiling and analysing customer insights, generating executive reports, and identifying trends for service optimisation.',
      'Led business process improvements by managing change requests, enhancing customer retention strategies, and ensuring seamless execution of transformation initiatives.',
      'Optimised stakeholder engagement by collaborating with cross-functional teams, resolving issues within SLA timelines, and improving customer satisfaction metrics.',
      'Enhanced product adoption by conducting in-depth training sessions for key accounts, ensuring efficient utilisation and maximising business impact.',
      'Developed customer-centric solutions by identifying pain points and leveraging analytics to drive problem-solving methodologies.',
    ],
    tags: ['CRM', 'Stakeholder Management', 'Data Analysis', 'Change Management'],
  },
  {
    id: 3,
    role: 'Customer Relations Officer · Key Accounts Manager',
    company: 'Smart Applications International Ltd',
    period: 'Apr 2019 – Apr 2024',
    type: 'Full-time',
    industry: 'InsurTech · HealthTech',
    current: false,
    achievements: [
      'Managed key customer relationships by identifying business needs, upselling solutions, and driving retention through data-driven engagement strategies.',
      'Developed executive reports and presentations by analysing customer insights, tracking performance metrics, and recommending strategic improvements.',
      'Led documentation and user training by creating comprehensive guides and conducting virtual and in-person sessions to enhance product adoption.',
      'Resolved customer pain points by analysing root causes, implementing solutions within SLA timelines, and optimising service delivery.',
      'Conducted competition analysis to identify market trends, assess customer needs, and drive data-backed business strategies.',
    ],
    tags: ['Key Account Management', 'Reporting', 'Training', 'SLA Management'],
  },
  {
    id: 4,
    role: 'Business Development Officer',
    company: 'Postbank',
    period: 'Sep 2018 – Mar 2019',
    type: 'Full-time',
    industry: 'Banking',
    current: false,
    achievements: [
      'Built and strengthened stakeholder relationships by identifying business needs, enhancing engagement strategies, and driving long-term customer retention.',
      'Provided data-driven insights to influence product development, improve competitive positioning, and optimise go-to-market strategies.',
      'Conducted in-depth market research to identify business opportunities, analyse trends, and support strategic decision-making.',
      'Led business presentations and negotiations with potential investors, securing strategic partnerships and expanding market reach.',
    ],
    tags: ['Business Development', 'Market Research', 'Stakeholder Engagement', 'Banking'],
  },
  {
    id: 5,
    role: 'IT Support Engineer & System Implementor',
    company: 'Endeavour Africa Limited',
    period: 'Feb 2017 – Aug 2018',
    type: 'Full-time',
    industry: 'Technology',
    current: false,
    achievements: [
      'Implemented and optimised IT systems by configuring hardware, software, and applications to enhance operational efficiency and user experience.',
      'Provided technical support and troubleshooting by diagnosing system issues, guiding users through solutions, and ensuring minimal downtime.',
      'Developed procedural documentation and reports to track system performance, improve troubleshooting efficiency, and support decision-making.',
      'Collaborated with cross-functional teams to ensure seamless system integration, enhance service delivery, and improve user adoption.',
    ],
    tags: ['IT Support', 'System Implementation', 'Documentation', 'Troubleshooting'],
  },
];

function ExperienceCard({ exp, index, isLast }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(index === 0); // first card open by default

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
      }}
      ref={cardRef}
    >
      {/* ── Timeline spine ──────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        {/* Dot */}
        <div style={{
          width: exp.current ? '14px' : '10px',
          height: exp.current ? '14px' : '10px',
          borderRadius: '50%',
          background: exp.current
            ? 'linear-gradient(135deg, var(--gold), var(--gold-deep))'
            : 'var(--lime-border)',
          border: exp.current ? '2px solid var(--bg-base)' : '2px solid var(--bg-surface)',
          boxShadow: exp.current ? 'var(--shadow-gold)' : 'none',
          flexShrink: 0,
          marginTop: '6px',
          transition: 'all 0.3s ease',
        }} />
        {/* Spine line */}
        {!isLast && (
          <div style={{
            width: '1px',
            flexGrow: 1,
            marginTop: '6px',
            background: 'linear-gradient(180deg, var(--lime-border), transparent)',
            minHeight: '48px',
          }} />
        )}
      </div>

      {/* ── Card ────────────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          marginBottom: isLast ? 0 : '1.5rem',
          background: 'var(--bg-surface)',
          border: `1px solid ${expanded ? 'rgba(247,231,206,0.2)' : 'var(--lime-border)'}`,
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: expanded ? 'var(--shadow-gold)' : '0 4px 24px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Card header — always visible, clickable */}
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            textAlign: 'left',
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Role + current badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}>
                {exp.role}
              </h3>
              {exp.current && (
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem', borderRadius: '9999px',
                  background: 'rgba(247,231,206,0.12)',
                  border: '1px solid rgba(247,231,206,0.3)',
                  color: 'var(--gold)',
                  whiteSpace: 'nowrap',
                }}>
                  Current
                </span>
              )}
            </div>

            {/* Company + period */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.88rem', fontWeight: 600,
                color: 'var(--gold-deep)',
              }}>
                {exp.company}
              </span>
              <span style={{ color: 'var(--lime-border)', fontSize: '0.75rem' }}>·</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.78rem', color: 'var(--text-muted)',
              }}>
                {exp.period}
              </span>
              <span style={{ color: 'var(--lime-border)', fontSize: '0.75rem' }}>·</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem', color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}>
                {exp.industry}
              </span>
            </div>
          </div>

          {/* Expand chevron */}
          <span style={{
            color: 'var(--gold-deep)',
            fontSize: '1rem',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            flexShrink: 0,
            marginTop: '4px',
          }}>
            ▾
          </span>
        </button>

        {/* Expandable body */}
        <div style={{
          maxHeight: expanded ? '800px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <div style={{
            padding: '0 1.75rem 1.75rem',
            borderTop: '1px solid var(--lime-border)',
          }}>

            {/* Achievements */}
            <ul style={{ margin: '1.25rem 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', paddingLeft: 0, listStyle: 'none' }}>
              {exp.achievements.map((point, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{
                    color: 'var(--gold)',
                    fontSize: '0.6rem',
                    flexShrink: 0,
                    marginTop: '6px',
                  }}>◆</span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                  }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {exp.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '9999px',
                  background: 'rgba(74,222,128,0.07)',
                  border: '1px solid rgba(74,222,128,0.2)',
                  color: 'var(--lime-main)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '460px', height: '460px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.055) 0%, transparent 65%)',
        filter: 'blur(56px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '0.6rem',
          }}>
            Career Journey
          </p>
          <h2 className="heading-2">Work Experience</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem', color: 'var(--text-secondary)',
            maxWidth: '500px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Over{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>8 years</span>{' '}
            delivering impactful solutions across banking, insurance, healthcare, and technology.
          </p>
        </div>

        {/* ── Stats strip ────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '4rem',
        }}
          className="exp-stats"
        >
          {[
            { value: '8+',  label: 'Years Experience' },
            { value: '4',   label: 'Companies' },
            { value: '5',   label: 'Industries' },
            { value: '>Kes 20M', label: 'Revenue Generated' },
          ].map(({ value, label }) => (
            <div key={label} style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--lime-border)',
              borderRadius: '0.875rem',
              padding: '1.25rem 1rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(247,231,206,0.25)';
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--lime-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'var(--gold)', lineHeight: 1,
                marginBottom: '0.35rem',
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Timeline ───────────────────────────────────────── */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '1rem',
          textAlign: 'center', marginTop: '4rem',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem', color: 'var(--text-secondary)',
          }}>
            Want the full picture? Download my CV or view my Notion portfolio.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://www.linkedin.com/in/bernard-limo-77937b138/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-7 py-3 text-sm"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline px-7 py-3 text-sm"
            >
              View Full Portfolio
            </a>
          </div>
        </div>

      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .exp-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
