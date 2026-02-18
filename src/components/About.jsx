// src/components/About.jsx

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
  borderRadius: '1.25rem',
  display: 'block',
  border: '1px solid #2d5a2d',
  filter: 'brightness(0.97) contrast(1.03)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
};

const cornerTL = {
  position: 'absolute',
  top: '-8px',
  left: '-8px',
  width: '24px',
  height: '24px',
  borderTop: '2px solid #F7E7CE',
  borderLeft: '2px solid #F7E7CE',
  borderRadius: '4px 0 0 0',
};

const cornerBR = {
  position: 'absolute',
  bottom: '-8px',
  right: '-8px',
  width: '24px',
  height: '24px',
  borderBottom: '2px solid #F7E7CE',
  borderRight: '2px solid #F7E7CE',
  borderRadius: '0 0 4px 0',
};

const stats = [
  { value: '8+',  label: 'Years Experience'  },
  { value: '30+', label: 'Projects Completed' },
  { value: '15+', label: 'Clients Served'     },
  { value: '5',   label: 'Industries Served'  },
];

const highlights = [
  {
    icon: '◈',
    title: 'Requirements Engineering',
    desc: 'Translating complex stakeholder needs into clear, actionable specifications.',
  },
  {
    icon: '◎',
    title: 'Agile & Scrum',
    desc: 'Driving iterative delivery across cross-functional teams in fast-paced environments.',
  },
  {
    icon: '⬡',
    title: 'Data & Analytics',
    desc: 'Unlocking insights from data to inform strategy and optimise business processes.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{ backgroundColor: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Faint diagonal texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(135deg, rgba(247,231,206,0.015) 0px, rgba(247,231,206,0.015) 1px, transparent 1px, transparent 48px)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#c9a96e',
            marginBottom: '0.6rem',
          }}>
            Who I Am
          </p>
          <h2 className="heading-2">About Me</h2>
          <div className="section-divider" />
        </div>

        {/* ── Two-column layout ──────────────────────────────── */}
        <div className="about-grid" style={{ marginBottom: '5rem' }}>

          {/* Left: photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '320px', height: '380px', borderRadius: '1.25rem', flexShrink: 0 }}>
              <img
                src="/limo.jpg"
                alt="Bernard Limo Business Analyst"
                style={imgStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(247,231,206,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <div style={cornerTL} />
              <div style={cornerBR} />
            </div>
          </div>

          {/* Right: text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              I am a passionate{' '}
              <span style={{ color: '#F7E7CE', fontWeight: 600 }}>Business Analyst</span>{' '}
              with expertise in translating complex business requirements into
              data-driven solutions. With a background in analytics and strategic
              planning, I help organisations across{' '}
              <span style={{ color: '#F7E7CE', fontWeight: 600 }}>banking, insurance, and healthcare</span>{' '}
              unlock meaningful insights from their data.
            </p>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              My approach combines technical proficiency with business acumen,
              ensuring every analysis delivers measurable value. I am committed to
              continuous learning and staying at the forefront of industry trends,
              bridging the gap between business needs and technology solutions.
            </p>

            {/* Highlight cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {highlights.map(function(item) {
                return (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: '0.875rem',
                      background: 'rgba(22,41,22,0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(247,231,206,0.09)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.boxShadow = '0 0 24px rgba(247,231,206,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', color: '#F7E7CE', flexShrink: 0, marginTop: '2px' }}>
                      {item.icon}
                    </span>
                    <div>
                      <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem', marginTop: 0 }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '0.5rem' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.7rem 1.6rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #F7E7CE 0%, #e0c9a6 100%)',
                  color: '#0d1a0d',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 0 24px rgba(247,231,206,0.18)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(247,231,206,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(247,231,206,0.18)';
                }}
              >
                Work With Me
              </a>
              <a
                href="#skills"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.7rem 1.6rem',
                  borderRadius: '0.75rem',
                  background: 'transparent',
                  color: '#F7E7CE',
                  border: '1.5px solid #F7E7CE',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(247,231,206,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(247,231,206,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View My Skills
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats row ──────────────────────────────────────── */}
        <div className="about-stats-grid">
          {stats.map(function(item) {
            return (
              <div
                key={item.label}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--lime-border)',
                  borderRadius: '0.875rem',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(247,231,206,0.25)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(247,231,206,0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--lime-border)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#F7E7CE',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: center;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 640px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
