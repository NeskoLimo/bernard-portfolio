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
          background: 'var(--lime-ma
