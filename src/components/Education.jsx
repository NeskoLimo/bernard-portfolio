// src/components/Education.jsx
import React, { useRef, useEffect, useState } from 'react';

const education = [
  {
    degree: 'Bachelor of Business Information Technology (BBIT)',
    institution: 'Multimedia University of Kenya',
    location: 'Nairobi, Kenya',
    period: '2012 – 2015',
    description: 'Focused on bridging the gap between technical execution and business strategy to drive digital innovation and achieve operational efficiency.',
  },
  {
    degree: 'MSc in Project Management',
    institution: 'JKUAT',
    location: 'Nairobi, Kenya',
    period: '2025 – To be awarded',
    description: 'An advanced program focused on the strategic alignment of projects with corporate goals, emphasizing rigorous Monitoring & Evaluation (M&E) and standardized project governance frameworks.',
  },
  // ── Add or edit entries above as needed ──────────────────────
];

function EduCard({ item, index }) {
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

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.6s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)), transform 0.6s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1))',
        transitionDelay: `${index * 0.12}s`,
        background: 'var(--bg-surface)',
        border: '1px solid var(--lime-border)',
        borderRadius: 'var(--r-lg, 1rem)',
        padding: '2rem 2.25rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        transition: `
          opacity 0.6s ease ${index * 0.12}s,
          transform 0.6s ease ${index * 0.12}s,
          border-color 0.25s ease,
          box-shadow 0.25s ease,
          transform 0.25s ease
        `,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(245,230,200,0.25)';
        e.currentTarget.style.boxShadow = 'var(--shadow-gold-lg)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--lime-border)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(28px)';
      }}
    >
      {/* Gold shimmer top line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold-deep), transparent)',
        opacity: 0.5,
      }} />

      {/* Degree */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        marginBottom: '0.5rem',
      }}>
        {item.degree}
      </h3>

      {/* Institution — gold/lime coloured like UI2 */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.95rem',
        fontWeight: 600,
        color: 'var(--lime-main)',
        marginBottom: '0.75rem',
      }}>
        {item.institution}
      </p>

      {/* Period + Location row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: item.description ? '1.25rem' : 0,
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--lime-border)',
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          fontWeight: 500,
        }}>
          {item.period}
        </span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.82rem',
          color: 'var(--text-muted, var(--text-tertiary))',
        }}>
          {item.location}
        </span>
      </div>

      {/* Optional description */}
      {item.description && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          margin: 0,
        }}>
          {item.description}
        </p>
      )}
    </div>
  );
}

const Education = () => {
  return (
    <section
      id="education"
      style={{
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,230,200,0.05) 0%, transparent 65%)',
        filter: 'blur(72px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '440px', height: '440px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,222,128,0.045) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-eyebrow">Academic Background</p>
          <h2 className="heading-2">Education</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            The academic foundation behind the analytical thinking and business acumen.
          </p>
        </div>

        {/* Cards grid — matches UI2's two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {education.map((item, index) => (
            <EduCard key={item.degree} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
