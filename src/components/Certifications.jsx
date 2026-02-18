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
    current: false,
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
    current: false,
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
    current: false,
  },
  // Add more certifications here as needed
];

function CertificationCard({ cert, index, isLast }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(index === 0); // first card expanded by default

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative pl-8 md:pl-12 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line & dot */}
      <div className="absolute left-3 md:left-5 top-2 bottom-0 w-0.5 bg-gradient-to-b from-lime-600/50 to-transparent" />
      <div
        className="absolute left-0 w-5 h-5 rounded-full border-2 bg-lime-main border-lime-dark"
        style={{ top: '0.5rem' }}
      />

      {/* Card */}
      <div
        className={`bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-gold-glow hover:border-lime-main/50 ${
          expanded ? 'ring-1 ring-lime-main/40' : ''
        }`}
      >
        {/* Header - clickable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-3 mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {cert.title}
              </h3>
            </div>

            <div className="flex items-center flex-wrap gap-3 text-slate-400 text-sm md:text-base">
              <span className="font-medium text-lime-400">{cert.issuer}</span>
              <span className="text-slate-600">•</span>
              <span>{cert.date}</span>
              {cert.credentialId && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                </>
              )}
            </div>
          </div>

          {/* Expand icon */}
          <span
            className={`text-lime-main text-2xl transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`}
          >
            ▾
          </span>
        </button>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-slate-800/50">
            {/* Description bullets */}
            <ul className="mt-6 space-y-4">
              {cert.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-lime-main text-xl mt-0.5 flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-lime-dark/30 text-lime-300 text-sm rounded-full border border-lime-dark/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Credential Button */}
            {cert.link && (
              <div className="mt-8">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lime-main hover:bg-lime-hover text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  View Credential →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacing between cards */}
      {!isLast && <div className="h-12 md:h-16" />}
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lime-main/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Professional credentials demonstrating expertise in data analysis, business intelligence, Agile methodologies, and modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-16 md:space-y-20">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              isLast={index === certifications.length - 1}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 mb-6">
            Want to discuss how these skills can support your projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#contact"
              className="btn btn-primary text-lg px-10 py-4"
            >
              Let's Connect
            </a>
            <a
              href="https://www.linkedin.com/in/bernard-limo-77937b138/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-lg px-10 py-4"
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
