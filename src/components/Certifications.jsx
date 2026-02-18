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
        transition: `opacity 0.55s ease ${index * 0.15}s, transform 0.55s ease ${index * 0.15}s`,
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
        style={{
          top: '0.5rem',
          background: 'var(--lime-main)',
          borderColor: 'var(--lime-dark)',
        }}
      />

      {/* Card */}
      <div
        className="backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300"
        style={{
          background: 'rgba(15, 23, 42, 0.70)',
          border: expanded
            ? '1px solid rgba(74,222,128,0.30)'
            : '1px solid rgba(51,65,85,1)',
          boxShadow: expanded
            ? '0 0 0 1px rgba(74,222,128,0.15)'
            : undefined,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.border = '1px solid rgba(74,222,128,0.40)';
          e.currentTarget.style.boxShadow = '0 0 28px rgba(74,222,128,0.10)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.border = expanded
            ? '1px solid rgba(74,222,128,0.30)'
            : '1px solid rgba(51,65,85,1)';
          e.currentTarget.style.boxShadow = expanded
            ? '0 0 0 1px rgba(74,222,128,0.15)'
            : '';
        }}
      >
        {/* Top shimmer line — matches Blog card */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        />

        {/* Clickable header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 transition-colors"
          style={{ background: 'transparent' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(30,41,59,0.40)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-snug">
              {cert.title}
            </h3>
            <div className="flex items-center flex-wrap gap-2 text-sm md:text-base">
              <span className="font-medium" style={{ color: 'var(--lime-main)' }}>
                {cert.issuer}
              </span>
              <span style={{ color: 'rgba(100,116,139,1)' }}>•</span>
              <span className="text-slate-400">{cert.date}</span>
              {cert.credentialId && (
                <>
                  <span style={{ color: 'rgba(100,116,139,1)' }}>•</span>
                  <span className="font-mono text-xs text-slate-500">
                    ID: {cert.credentialId}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Chevron */}
          <span
            className="text-2xl mt-1 flex-shrink-0 transition-transform duration-300"
            style={{
              color: 'var(--lime-main)',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▾
          </span>
        </button>

        {/* Expandable body */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? '1200px' : '0px', opacity: expanded ? 1 : 0 }}
        >
          <div
            className="px-6 pb-6 md:px-8 md:pb-8"
            style={{ borderTop: '1px solid rgba(51,65,85,0.60)' }}
          >
            {/* Description bullets */}
            <ul className="mt-6 space-y-4">
              {cert.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <span
                    className="text-lg mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--lime-main)' }}
                  >
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
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

            {/* View Credential */}
            {cert.link && (
              <div className="mt-8">
                
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
                >
                  View Credential →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gap between cards */}
      {!isLast && <div className="h-12 md:h-16" />}
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">

      {/* Background orbs — matches Blog */}
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

        {/* Section header — matches Blog header pattern exactly */}
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

        {/* Timeline cards */}
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

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 mb-6">
            Want to discuss how these skills can support your projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn btn-primary text-base px-8 py-3">
              Let's Connect
            </a>
            
              href="https://www.linkedin.com/in/bernard-limo-77937b138/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-base px-8 py-3"
            >
              View on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
