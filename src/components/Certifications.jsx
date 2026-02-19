// src/components/Certifications.jsx
import { useRef, useEffect, useState } from 'react';

const certifications = [
  {
    id: 1,
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'Jul 2025',
    credentialId: 'EWNWJFX6X4B',
    link: 'https://www.coursera.org/account/accomplishments/verify/EWNWJFX6X4B',
    description: [
      'Comprehensive program covering data analysis, visualization, SQL, Python, Excel, Tableau, and business intelligence.',
      'Focused on real-world projects and case studies in banking, insurance, and healthcare domains.',
      'Developed skills in requirements gathering, stakeholder communication, and translating business needs into technical solutions.',
    ],
    tags: ['Data Analysis', 'SQL', 'Python', 'Tableau', 'Power BI', 'Business Intelligence'],
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: 'Mar 2024',
    credentialId: 'ABC123XYZ789',
    link: 'https://www.coursera.org/account/accomplishments/verify/ABC123XYZ789',
    description: [
      'Mastered foundational data analytics skills including data cleaning, analysis, visualization, and insight presentation.',
      'Completed hands-on projects using spreadsheets, SQL, R, and Tableau.',
      'Learned Agile principles and stakeholder management in data-driven environments.',
    ],
    tags: ['Data Analytics', 'SQL', 'R', 'Tableau', 'Data Visualization', 'Agile'],
  },
  {
    id: 3,
    title: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Nov 2023',
    credentialId: '000123456',
    link: 'https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm',
    description: [
      'Certified in Scrum framework, Agile principles, and servant leadership.',
      'Facilitated sprint planning, daily stand-ups, retrospectives, and backlog refinement for multiple teams.',
      'Applied Scrum to improve delivery speed and quality in InsurTech projects.',
    ],
    tags: ['Scrum', 'Agile', 'Scrum Master', 'Team Facilitation'],
  },
];

const credlyBadges = [
  {
    id: 1,
    title: 'IBM Certified Technical Advocate - Cloud v4',
    issuer: 'IBM Professional Certification',
    link: 'https://www.credly.com/earner/earned/badge/59cb6eb1-6f86-4576-b19f-02a11efa015b',
    tags: ['Cloud', 'Cloud Adoption', 'Cloud Services', 'Cloud Technology', 'Technical Advocate'],
  },
  {
    id: 2,
    title: 'Enterprise Design Thinking: Team Essentials for AI',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/ecfcc638-f929-472c-a1b3-edfba4331f64',
    tags: ['AI', 'Artificial Intelligence', 'Critical Thinking', 'Design Thinking', 'Problem Solving'],
  },
  {
    id: 3,
    title: 'Agile Explorer',
    issuer: 'IBM SkillsBuild',
    link: 'https://www.credly.com/earner/earned/badge/8c39d60e-31d5-4013-81fc-2ae88caf4670',
    tags: ['Agile', 'Agile Methodology', 'Agile Kanban', 'User Stories', 'Teamwork'],
  },
  {
    id: 4,
    title: 'Building Scalable Systems',
    issuer: 'IBM',
    link: 'https://www.credly.com/earner/earned/badge/83f9d73c-ecf5-4e40-b0f1-3395dfbaacf6',
    tags: ['Reactive Architecture', 'Reactive Programming', 'Distributed Systems', 'Actor Model'],
  },
  {
    id: 5,
    title: 'Software Engineer Pre-Apprenticeship V3',
    issuer: 'IBM SkillsBuild',
    link: 'https://www.credly.com/earner/earned/badge/2bdcaf67-9540-49b4-9292-55d1f605d726',
    tags: ['Python', 'JavaScript', 'Java', 'Agile', 'DevOps', 'Design Thinking'],
  },
  {
    id: 6,
    title: 'English for IT 2',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/4d1c8839-2281-4f10-9464-e73469180872',
    tags: ['Communication', 'Technical English', 'IT Communication'],
  },
];

function CertificationCard({ cert, index, isLast }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(index === 0);

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
      ref={cardRef}
      className="relative pl-8 md:pl-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: index * 0.15 + 's',
      }}
    >
      {/* Timeline line */}
      <div
        className="absolute left-3 md:left-5 top-2 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, var(--lime-main), transparent)' }}
      />

      {/* Timeline dot */}
      <div
        className="absolute left-0 w-5 h-5 rounded-full border-2"
        style={{ top: '0.5rem', background: 'var(--lime-main)', borderColor: 'var(--lime-dark)' }}
      />

      {/* Card */}
      <div
        className="relative backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300"
        style={{
          background: 'var(--bg-elevated)',
          border: expanded
            ? '1px solid rgba(74,222,128,0.30)'
            : '1px solid rgba(74,222,128,0.10)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '1px solid rgba(74,222,128,0.40)';
          e.currentTarget.style.boxShadow = '0 0 28px rgba(74,222,128,0.10)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = expanded
            ? '1px solid rgba(74,222,128,0.30)'
            : '1px solid rgba(74,222,128,0.10)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        />

        {/* Clickable header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 transition-colors"
          style={{ background: 'transparent' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-snug">
              {cert.title}
            </h3>
            <div className="flex items-center flex-wrap gap-2 text-sm md:text-base">
              <span className="font-medium" style={{ color: 'var(--lime-main)' }}>
                {cert.issuer}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{cert.date}</span>
              {cert.credentialId && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="font-mono text-xs text-slate-500">ID: {cert.credentialId}</span>
                </>
              )}
            </div>
          </div>
          <span
            className="text-2xl mt-1 flex-shrink-0"
            style={{
              color: 'var(--lime-main)',
              display: 'inline-block',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            v
          </span>
        </button>

        {/* Expandable body */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: expanded ? '1200px' : '0px',
            opacity: expanded ? 1 : 0,
            transition: 'max-height 0.5s ease, opacity 0.5s ease',
          }}
        >
          <div
            className="px-6 pb-6 md:px-8 md:pb-8"
            style={{ borderTop: '1px solid rgba(74,222,128,0.10)' }}
          >
            <ul className="mt-6 space-y-4">
              {cert.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <span className="text-lg mt-0.5 flex-shrink-0" style={{ color: 'var(--lime-main)' }}>
                    -
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: 'rgba(74,222,128,0.08)',
                    border: '1px solid rgba(74,222,128,0.25)',
                    color: 'var(--lime-main)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {cert.link && (
              <div className="mt-8">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
                >
                  View Credential
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isLast && <div className="h-12 md:h-16" />}
    </div>
  );
}

function CredlyBadgeCard({ badge, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: index * 0.1 + 's',
        position: 'relative',
        background: 'var(--bg-elevated)',
        border: '1px solid rgba(74,222,128,0.10)',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid rgba(74,222,128,0.35)';
        e.currentTarget.style.boxShadow = '0 0 28px rgba(74,222,128,0.10)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(74,222,128,0.10)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Top shimmer */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold-deep), var(--gold), transparent)',
        opacity: 0.6,
      }} />

      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Issuer */}
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>
          {badge.issuer}
        </span>

        {/* Title */}
        <h4 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.3,
          margin: 0,
        }}>
          {badge.title}
        </h4>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
          {badge.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.68rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.20)',
                color: 'var(--lime-main)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '1rem 1.5rem',
        borderTop: '1px solid rgba(74,222,128,0.10)',
        background: 'rgba(0,0,0,0.15)',
      }}>
        <a
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.8rem' }}
        >
          View Badge
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(247,197,112,0.10) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--lime-main)' }}
          >
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }}
          />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional credentials demonstrating expertise in data analysis, business intelligence,
            Agile methodologies, and modern technologies.
          </p>
        </div>

        {/* Timeline certification cards */}
        <div>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              isLast={index === certifications.length - 1}
            />
          ))}
        </div>

        {/* Credly Badges section */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'var(--gold-deep)' }}
            >
              Digital Badges
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Credly Badges
            </h3>
            <div
              className="w-12 h-px mx-auto"
              style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
          }}>
            {credlyBadges.map((badge, index) => (
              <CredlyBadgeCard key={badge.id} badge={badge} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 mb-6">
            Want to discuss how these skills can support your projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="#contact" className="btn btn-primary text-base px-8 py-3">
              Lets Connect
            </a>
            <a
              href="https://www.linkedin.com/in/bernard-limo-77937b138/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-base px-8 py-3"
            >
              View on LinkedIn
            </a>
            <a
              href="https://www.credly.com/users/limo-bernard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-base px-8 py-3"
            >
              View All Badges on Credly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
