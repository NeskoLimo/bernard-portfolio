// src/components/Certifications.jsx
import { useRef, useEffect, useState } from 'react';

const certifications = [
  {
    id: 1,
    title: 'Certificate of Proficiency (COP)',
    issuer: 'College of Insurance, Nairobi',
    date: 'Sep 2024',
    credentialId: '1007784',
    link: null,
    description: [
      'Professional qualification demonstrating proficiency in insurance principles, risk management, and underwriting practices.',
      'Issued by the College of Insurance, the leading insurance training institution in East Africa.',
      'Strengthened domain expertise in insurance operations directly applicable to InsurTech business analysis work.',
    ],
    tags: ['Insurance', 'Risk Management', 'Underwriting', 'Financial Services'],
  },
  {
    id: 2,
    title: 'Reactive Architecture: Reactive Microservices',
    issuer: 'Cognitive Class / IBM Developer Skills Network',
    date: 'Sep 2023',
    credentialId: '8a89030bda754cb4b31bf53d10e16c48',
    link: 'https://courses.cognitiveclass.ai/certificates/8a89030bda754cb4b31bf53d10e16c48',
    description: [
      'Completed a course on reactive microservices architecture provided by Akka on the Cognitive Class platform.',
      'Gained understanding of reactive principles, event-driven systems, and scalable microservices design patterns.',
      'Applied knowledge of distributed system trade-offs including consistency, availability, and fault tolerance.',
    ],
    tags: ['Reactive Architecture', 'Microservices', 'Distributed Systems', 'Akka', 'IBM'],
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

const udemyCourses = [
  {
    id: 1,
    title: 'Introduction to Business Process Modeling',
    date: 'Jan 2026',
    link: 'https://ude.my/UC-d6e46598-a8be-4868-ba8a-edfd9b15af58',
    tags: ['BPM', 'Process Modeling', 'Business Analysis'],
  },
  {
    id: 2,
    title: 'Plan the Project as a Business Analyst - IIBA Endorsed',
    date: 'Nov 2024',
    link: 'https://ude.my/UC-5ca84c21-da6f-44d7-b729-8d858b0c487c',
    tags: ['Project Planning', 'IIBA', 'Business Analysis'],
  },
  {
    id: 3,
    title: 'Root Cause Analysis',
    date: 'Aug 2025',
    link: 'https://ude.my/UC-06c8469b-34fa-49c1-bc4a-a6c1ef2c4751',
    tags: ['Root Cause Analysis', 'Problem Solving', 'Process Improvement'],
  },
  {
    id: 4,
    title: 'BABOK Essentials - Learn Core Business Analysis Standards',
    date: 'Jun 2025',
    link: 'https://ude.my/UC-3c8ac8ed-748a-4da8-a933-2b8d31b56635',
    tags: ['BABOK', 'Business Analysis', 'IIBA Standards'],
  },
  {
    id: 5,
    title: 'Identify and Define the Problem with Business Analysis',
    date: 'Oct 2024',
    link: 'https://ude.my/UC-c01857e8-81c9-436f-906b-00c29fb34419',
    tags: ['Problem Definition', 'Business Analysis', 'Requirements'],
  },
  {
    id: 6,
    title: 'Jira Crash Course - Jira Fundamentals for Agile Projects',
    date: 'Sep 2024',
    link: 'https://ude.my/UC-f975744a-0528-4565-ae02-10802f5a02f7',
    tags: ['Jira', 'Agile', 'Project Management'],
  },
  {
    id: 7,
    title: 'ChatGPT and the New Wave of ML Language Models',
    date: 'Aug 2024',
    link: 'https://ude.my/UC-e78dc6d7-f5a3-4f7c-8e5e-ccbc08e91a4f',
    tags: ['ChatGPT', 'AI', 'Machine Learning', 'LLMs'],
  },
  {
    id: 8,
    title: 'The Complete Agile Scrum Fundamentals Course',
    date: 'Nov 2023',
    link: 'https://www.udemy.com',
    tags: ['Scrum', 'Agile', 'Sprint Planning', 'Kanban'],
  },
  {
    id: 9,
    title: 'How To Write User Stories That Deliver Real Business Value',
    date: 'Jul 2023',
    link: 'https://ude.my/UC-c9478425-e240-4840-a32f-c08c650a20b7',
    tags: ['User Stories', 'Agile', 'Requirements', 'Business Value'],
  },
  {
    id: 10,
    title: "What's Your Leadership Style?",
    date: 'Jul 2023',
    link: 'https://ude.my/UC-cb707044-94e5-437e-852c-5bd147fbb749',
    tags: ['Leadership', 'Personal Development', 'NASBA CPE'],
  },
  {
    id: 11,
    title: 'Assertiveness Basics: The 50-minute Communication Guide',
    date: 'Jul 2023',
    link: 'https://ude.my/UC-7a8052e0-aa18-439e-a9c2-4395e5454577',
    tags: ['Communication', 'Assertiveness', 'Professional Skills'],
  },
  {
    id: 12,
    title: 'The Power of Empathy at Work',
    date: 'Jun 2025',
    link: 'https://ude.my/UC-5db41708-244e-4360-a985-fc6ff64c5889',
    tags: ['Empathy', 'Soft Skills', 'Workplace Culture'],
  },
  {
    id: 13,
    title: 'Leading Yourself and Others',
    date: 'Jun 2025',
    link: 'https://ude.my/UC-4a4a8bac-8709-43b9-b5fb-d9f0e60ec3d4',
    tags: ['Leadership', 'Self-Management', 'Team Management'],
  },
  {
    id: 14,
    title: 'Building Influence at Work',
    date: 'Jul 2023',
    link: 'https://ude.my/UC-6edb0502-b793-4a1a-b255-c121d8d17dfe',
    tags: ['Influence', 'Stakeholder Management', 'Communication'],
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
      <div className="absolute left-3 md:left-5 top-2 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, var(--lime-main), transparent)' }} />
      <div className="absolute left-0 w-5 h-5 rounded-full border-2"
        style={{ top: '0.5rem', background: 'var(--lime-main)', borderColor: 'var(--lime-dark)' }} />

      <div
        className="relative backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300"
        style={{
          background: 'var(--bg-elevated)',
          border: expanded ? '1px solid rgba(74,222,128,0.30)' : '1px solid rgba(74,222,128,0.10)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = '1px solid rgba(74,222,128,0.40)';
          e.currentTarget.style.boxShadow = '0 0 28px rgba(74,222,128,0.10)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = expanded ? '1px solid rgba(74,222,128,0.30)' : '1px solid rgba(74,222,128,0.10)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 transition-colors"
          style={{ background: 'transparent' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-snug">{cert.title}</h3>
            <div className="flex items-center flex-wrap gap-2 text-sm md:text-base">
              <span className="font-medium" style={{ color: 'var(--lime-main)' }}>{cert.issuer}</span>
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
          <span className="text-2xl mt-1 flex-shrink-0"
            style={{ color: 'var(--lime-main)', display: 'inline-block', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
            v
          </span>
        </button>

        <div style={{ overflow: 'hidden', maxHeight: expanded ? '1200px' : '0px', opacity: expanded ? 1 : 0, transition: 'max-height 0.5s ease, opacity 0.5s ease' }}>
          <div className="px-6 pb-6 md:px-8 md:pb-8" style={{ borderTop: '1px solid rgba(74,222,128,0.10)' }}>
            <ul className="mt-6 space-y-4">
              {cert.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <span className="text-lg mt-0.5 flex-shrink-0" style={{ color: 'var(--lime-main)' }}>-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full"
                  style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', color: 'var(--lime-main)' }}>
                  {tag}
                </span>
              ))}
            </div>
            {cert.link && (
              <div className="mt-8">
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
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

function BadgeCard({ badge, index, accentColor }) {
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

  const borderColor = accentColor === 'gold' ? 'rgba(247,197,112,0.15)' : 'rgba(74,222,128,0.10)';
  const borderHover = accentColor === 'gold' ? 'rgba(247,197,112,0.35)' : 'rgba(74,222,128,0.35)';
  const tagBg = accentColor === 'gold' ? 'rgba(247,197,112,0.08)' : 'rgba(74,222,128,0.08)';
  const tagBorder = accentColor === 'gold' ? 'rgba(247,197,112,0.20)' : 'rgba(74,222,128,0.20)';
  const tagColor = accentColor === 'gold' ? 'var(--gold)' : 'var(--lime-main)';
  const issuerColor = accentColor === 'gold' ? 'var(--gold-deep)' : 'var(--gold)';

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: index * 0.07 + 's',
        position: 'relative',
        background: 'var(--bg-elevated)',
        border: '1px solid ' + borderColor,
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid ' + borderHover;
        e.currentTarget.style.boxShadow = '0 0 28px rgba(74,222,128,0.08)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid ' + borderColor;
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold-deep), var(--gold), transparent)', opacity: 0.6 }} />

      <div style={{ padding: '1.25rem 1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: issuerColor }}>
            {badge.issuer}
          </span>
          {badge.date && (
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              {badge.date}
            </span>
          )}
        </div>

        <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35, margin: 0 }}>
          {badge.title}
        </h4>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.15rem' }}>
          {badge.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', padding: '0.18rem 0.55rem', borderRadius: '9999px', background: tagBg, border: '1px solid ' + tagBorder, color: tagColor }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: '0.875rem 1.5rem', borderTop: '1px solid rgba(74,222,128,0.08)', background: 'rgba(0,0,0,0.15)' }}>
        <a href={badge.link} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.78rem' }}>
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(247,197,112,0.10) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--lime-main)' }}>
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }} />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional credentials demonstrating expertise in data analysis, business intelligence,
            Agile methodologies, and modern technologies.
          </p>
        </div>

        {/* Section 1 — Professional Certifications Timeline */}
        <div>
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} isLast={index === certifications.length - 1} />
          ))}
        </div>

        {/* Section 2 — Credly Badges */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold-deep)' }}>
              Digital Badges
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Credly Badges</h3>
            <div className="w-12 h-px mx-auto" style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 290px), 1fr))', gap: '1.25rem' }}>
            {credlyBadges.map((badge, index) => (
              <BadgeCard key={badge.id} badge={badge} index={index} accentColor="lime" />
            ))}
          </div>
        </div>

        {/* Section 3 — Udemy Courses */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold-deep)' }}>
              Continuous Learning
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Udemy Courses</h3>
            <div className="w-12 h-px mx-auto" style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 290px), 1fr))', gap: '1.25rem' }}>
            {udemyCourses.map((course, index) => (
              <BadgeCard key={course.id} badge={{ ...course, issuer: 'Udemy' }} index={index} accentColor="gold" />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 mb-6">Want to discuss how these skills can support your projects?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="#contact" className="btn btn-primary text-base px-8 py-3">Lets Connect</a>
            <a href="https://www.linkedin.com/in/bernard-limo-77937b138/" target="_blank" rel="noopener noreferrer" className="btn btn-gold text-base px-8 py-3">
              View on LinkedIn
            </a>
            <a href="https://www.credly.com/users/limo-bernard" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-base px-8 py-3">
              View All Badges on Credly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
