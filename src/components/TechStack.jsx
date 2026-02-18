// src/components/TechStack.jsx
import { useEffect, useRef, useState } from 'react';

const stack = [
  {
    category: 'Data & Analytics',
    icon: '◈',
    tools: [
      { name: 'SQL',         tag: 'Expert'    },
      { name: 'Python',      tag: 'Advanced'  },
      { name: 'Power BI',    tag: 'Advanced'  },
      { name: 'Tableau',     tag: 'Advanced'  },
      { name: 'Excel',       tag: 'Expert'    },
      { name: 'DAX',         tag: 'Advanced'  },
    ],
  },
  {
    category: 'BA & Agile',
    icon: '◎',
    tools: [
      { name: 'JIRA',        tag: 'Expert'    },
      { name: 'Confluence',  tag: 'Expert'    },
      { name: 'Scrum',       tag: 'Expert'    },
      { name: 'Kanban',      tag: 'Advanced'  },
      { name: 'Figma',       tag: 'Proficient'},
      { name: 'Lucidchart',  tag: 'Advanced'  },
    ],
  },
  {
    category: 'Documentation',
    icon: '⬡',
    tools: [
      { name: 'Notion',      tag: 'Expert'    },
      { name: 'MS Word',     tag: 'Expert'    },
      { name: 'PowerPoint',  tag: 'Expert'    },
      { name: 'SharePoint',  tag: 'Advanced'  },
      { name: 'Visio',       tag: 'Advanced'  },
      { name: 'Draw.io',     tag: 'Proficient'},
    ],
  },
  {
    category: 'Development',
    icon: '◇',
    tools: [
      { name: 'FastAPI',     tag: 'Proficient'},
      { name: 'PostgreSQL',  tag: 'Advanced'  },
      { name: 'Git',         tag: 'Advanced'  },
      { name: 'REST APIs',   tag: 'Advanced'  },
      { name: 'React',       tag: 'Proficient'},
      { name: 'Render',      tag: 'Proficient'},
    ],
  },
];

const tagColors = {
  Expert:     { bg: 'rgba(247,231,206,0.12)', border: 'rgba(247,231,206,0.3)', color: 'var(--gold)'      },
  Advanced:   { bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.25)', color: 'var(--lime-main)' },
  Proficient: { bg: 'rgba(90,122,90,0.15)',   border: 'rgba(90,122,90,0.3)',   color: 'var(--text-muted)'},
};

function CategoryCard({ group, index }) {
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
        background:  'var(--bg-elevated)',
        border:      '1px solid var(--lime-border)',
        borderRadius:'1rem',
        padding:     '1.75rem',
        opacity:     visible ? 1 : 0,
        transform:   visible ? 'translateY(0)' : 'translateY(24px)',
        transition:  `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s,
                      border-color 0.3s ease, box-shadow 0.3s ease`,
        cursor:      'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(247,231,206,0.25)';
        e.currentTarget.style.boxShadow   = 'var(--shadow-gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--lime-border)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '1rem', color: 'var(--gold)', flexShrink: 0 }}>{group.icon}</span>
        <h3 style={{
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.78rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color:         'var(--text-primary)',
        }}>
          {group.category}
        </h3>
      </div>

      {/* Tool chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {group.tools.map(({ name, tag }) => {
          const tc = tagColors[tag] ?? tagColors.Proficient;
          return (
            <span
              key={name}
              title={tag}
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.8rem', fontWeight: 600,
                padding:       '0.3rem 0.75rem',
                borderRadius:  '9999px',
                background:    tc.bg,
                border:        `1px solid ${tc.border}`,
                color:         tc.color,
                transition:    'all 0.2s ease',
                cursor:        'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="techstack"
      style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(247,231,206,0.04) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '0.6rem',
          }}>
            My Toolkit
          </p>
          <h2 className="heading-2">Tech Stack</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem', color: 'var(--text-secondary)',
            maxWidth: '480px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Tools and technologies I use daily to deliver analysis,
            documentation, and data-driven solutions.
          </p>
        </div>

        {/* ── Grid ───────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {stack.map((group, index) => (
            <CategoryCard key={group.category} group={group} index={index} />
          ))}
        </div>

        {/* ── Legend ─────────────────────────────────────── */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '1.5rem', flexWrap: 'wrap',
        }}>
          {Object.entries(tagColors).map(([label, tc]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: tc.color, flexShrink: 0,
                boxShadow: `0 0 6px ${tc.color}`,
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem', fontWeight: 600,
                color: 'var(--text-muted)', letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

