// src/components/Skills.jsx
import { useState, useEffect, useRef } from 'react';

const skills = {
  technical: [
    { name: 'Data Analysis',  level: 95, icon: '◈' },
    { name: 'SQL',            level: 90, icon: '⬡' },
    { name: 'Python',         level: 85, icon: '◎' },
    { name: 'Tableau',        level: 88, icon: '◇' },
    { name: 'Power BI',       level: 87, icon: '◆' },
    { name: 'Excel',          level: 92, icon: '▣' },
  ],
  professional: [
    { name: 'Requirements Gathering',  level: 92, icon: '◈' },
    { name: 'Process Improvement',     level: 88, icon: '⬡' },
    { name: 'Strategic Planning',      level: 85, icon: '◎' },
    { name: 'Stakeholder Management',  level: 90, icon: '◇' },
    { name: 'Project Management',      level: 87, icon: '◆' },
    { name: 'Communication',           level: 93, icon: '▣' },
  ],
};

const categories = [
  { key: 'technical',    label: 'Technical Skills'    },
  { key: 'professional', label: 'Professional Skills' },
];

function SkillCard({ skill, index, animate }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setBarWidth(skill.level), index * 80 + 100);
      return () => clearTimeout(t);
    } else {
      setBarWidth(0);
    }
  }, [animate, skill.level, index]);

  const tier = skill.level >= 90 ? 'Expert' : skill.level >= 85 ? 'Advanced' : 'Proficient';

  return (
    <div
      style={{
        background:   'var(--bg-surface)',
        border:       '1px solid var(--lime-border)',
        borderRadius: '1rem',
        padding:      '1.5rem 1.75rem',
        display:      'flex',
        flexDirection:'column',
        gap:          '0.75rem',
        opacity:      animate ? 1 : 0,
        transform:    animate ? 'translateY(0)' : 'translateY(20px)',
        transition:   `opacity 0.5s ease ${index * 0.08}s,
                       transform 0.5s ease ${index * 0.08}s,
                       border-color 0.3s ease,
                       box-shadow 0.3s ease`,
        boxShadow:    '0 4px 24px rgba(0,0,0,0.35)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(247,231,206,0.28)';
        e.currentTarget.style.boxShadow   = '0 0 24px rgba(247,231,206,0.15), 0 4px 16px rgba(247,231,206,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--lime-border)';
        e.currentTarget.style.boxShadow   = '0 4px 24px rgba(0,0,0,0.35)';
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '1rem', color: 'var(--gold-deep)', flexShrink: 0 }}>
            {skill.icon}
          </span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   '0.95rem', fontWeight: 600,
            color:      'var(--text-primary)', letterSpacing: '0.01em',
          }}>
            {skill.name}
          </span>
        </div>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize:   '1.1rem', fontWeight: 700,
          color:      'var(--gold)', flexShrink: 0,
        }}>
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%', height: '5px',
        background: 'var(--lime-muted)',
        borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height:       '100%',
          width:        `${barWidth}%`,
          borderRadius: '3px',
          background:   'linear-gradient(90deg, var(--gold-deep) 0%, var(--gold) 100%)',
          boxShadow:    '0 0 8px rgba(247,231,206,0.4)',
          transition:   'width 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>

      {/* Tier label */}
      <span style={{
        fontFamily:    "'DM Sans', sans-serif",
        fontSize:      '0.68rem', fontWeight: 700,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color:         'var(--text-muted)', alignSelf: 'flex-end',
      }}>
        {tier}
      </span>
    </div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('technical');
  const [animate, setAnimate]                   = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Re-animate on category switch
  const handleCategoryChange = (key) => {
    setAnimate(false);
    setSelectedCategory(key);
    setTimeout(() => setAnimate(true), 60);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: 'var(--bg-base)',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Decorative orb */}
      <div style={{
        position:     'absolute', top: '-80px', right: '-80px',
        width:        '420px',    height: '420px', borderRadius: '50%',
        background:   'radial-gradient(circle, rgba(247,231,206,0.055) 0%, transparent 65%)',
        filter:       'blur(48px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.75rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color:         'var(--gold-deep)', marginBottom: '0.6rem',
          }}>
            What I Bring
          </p>
          <h2 className="heading-2">Skills &amp; Expertise</h2>
          <div className="section-divider" />
        </div>

        {/* ── Tab switcher ───────────────────────────────────── */}
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '0.75rem',
          marginBottom:   '2.5rem',
          flexWrap:       'wrap',
        }}>
          {categories.map(({ key, label }) => {
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                style={{
                  fontFamily:    "'DM Sans', sans-serif",
                  fontSize:      '0.8rem', fontWeight: isActive ? 700 : 600,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  padding:       '0.6rem 1.75rem',
                  borderRadius:  '9999px',
                  border:        isActive ? '1.5px solid transparent' : '1.5px solid var(--lime-border)',
                  background:    isActive
                    ? 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)'
                    : 'transparent',
                  color:         isActive ? 'var(--bg-base)' : 'var(--text-secondary)',
                  cursor:        'pointer',
                  boxShadow:     isActive ? '0 0 24px rgba(247,231,206,0.18), 0 4px 16px rgba(247,231,206,0.10)' : 'none',
                  transition:    'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color       = 'var(--gold)';
                    e.currentTarget.style.background  = 'rgba(247,231,206,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--lime-border)';
                    e.currentTarget.style.color       = 'var(--text-secondary)';
                    e.currentTarget.style.background  = 'transparent';
                  }
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Skills grid ────────────────────────────────────── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap:                 '1.25rem',
          marginBottom:        '3rem',
        }}
          className="skills-grid-responsive"
        >
          {skills[selectedCategory].map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              animate={animate}
            />
          ))}
        </div>

        {/* ── Bottom callout ─────────────────────────────────── */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            '1.5rem',
          padding:        '1.5rem 2rem',
          borderRadius:   '1rem',
          background:     'rgba(22,41,22,0.6)',
          backdropFilter: 'blur(12px)',
          border:         '1px solid rgba(247,231,206,0.09)',
          flexWrap:       'wrap',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   '0.95rem',
            color:      'var(--text-secondary)',
            lineHeight: 1.7, flex: 1, minWidth: '220px', margin: 0,
          }}>
            Continuously expanding my toolkit — currently deepening expertise in{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>AI-driven analytics</span>{' '}
            and{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>process automation</span>.
          </p>
          <a
            href="#contact"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent:'center',
              padding:       '0.7rem 1.6rem',
              borderRadius:  '0.75rem',
              background:    'linear-gradient(135deg, #F7E7CE 0%, #e0c9a6 100%)',
              color:         'var(--bg-base)',
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.78rem', fontWeight: 700,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              textDecoration:'none',
              boxShadow:     '0 0 24px rgba(247,231,206,0.18)',
              transition:    'all 0.25s ease',
              whiteSpace:    'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background  = 'linear-gradient(135deg, #fff3e0 0%, #F7E7CE 100%)';
              e.currentTarget.style.boxShadow   = '0 0 48px rgba(247,231,206,0.22)';
              e.currentTarget.style.transform   = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background  = 'linear-gradient(135deg, #F7E7CE 0%, #e0c9a6 100%)';
              e.currentTarget.style.boxShadow   = '0 0 24px rgba(247,231,206,0.18)';
              e.currentTarget.style.transform   = 'translateY(0)';
            }}
          >
            Let's Collaborate
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
