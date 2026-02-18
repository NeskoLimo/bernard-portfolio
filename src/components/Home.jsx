// src/components/Home.jsx
import { useEffect, useRef, useState } from 'react';
import About          from './About';
import Experience     from './Experience';
import Skills         from './Skills';
import TechStack      from './TechStack';
import Projects       from './Projects';
import Certifications from './Certifications';
import Blog           from './Blog';
import Contact        from './Contact';

// ── Typing animation roles ────────────────────────────────────
const ROLES = [
  'Business & System Analyst',
  'Agile & Scrum Practitioner',
  'Process Optimizer',
  'Technical Service Lead',
  'Digital Transformation Champion',
];

// ── Floating background fragments ────────────────────────────
const FLOATERS = [
  { text: 'SELECT * FROM insights',  top: '18%', left: '4%',  size: '0.72rem', delay: '0s',   dur: '18s' },
  { text: 'requirements.analyze()',  top: '72%', left: '3%',  size: '0.68rem', delay: '2s',   dur: '22s' },
  { text: 'UAT → PASS ✓',            top: '38%', left: '88%', size: '0.7rem',  delay: '1s',   dur: '20s' },
  { text: 'stakeholders.align()',    top: '80%', left: '82%', size: '0.68rem', delay: '3.5s', dur: '24s' },
  { text: 'KPI: +34% efficiency',    top: '12%', left: '76%', size: '0.7rem',  delay: '0.5s', dur: '19s' },
  { text: 'process.optimize()',      top: '58%', left: '91%', size: '0.65rem', delay: '4s',   dur: '21s' },
  { text: 'GROUP BY insights',       top: '88%', left: '44%', size: '0.68rem', delay: '2.5s', dur: '23s' },
  { text: 'Agile | Scrum | Kanban',  top: '6%',  left: '38%', size: '0.7rem',  delay: '1.5s', dur: '20s' },
];

// ── Floating monogram cards ───────────────────────────────────
const MONOGRAMS = [
  { label: 'BA',  top: '62%', left: '6%',  color: 'var(--gold)',      delay: '0s'   },
  { label: 'AI',  top: '28%', left: '91%', color: 'var(--lime-main)', delay: '1.2s' },
  { label: 'SQL', top: '78%', left: '72%', color: 'var(--gold-deep)', delay: '2.4s' },
];

// ── Typing hook ───────────────────────────────────────────────
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase]         = useState('typing');

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

// ── Hero Section ──────────────────────────────────────────────
function Hero() {
  const heroRef   = useRef(null);
  const typedRole = useTypingEffect(ROLES);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const fade = (delay) => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-base)', position: 'relative',
        overflow: 'hidden', padding: '6rem 1.5rem 4rem',
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(247,231,206,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(247,231,206,0.025) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-8%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.07) 0%, transparent 65%)',
        filter: 'blur(72px)', pointerEvents: 'none',
        transform: 'translate(var(--mx,0), var(--my,0))',
        transition: 'transform 1s ease',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,222,128,0.055) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        transform: 'translate(calc(var(--mx,0)*-0.4), calc(var(--my,0)*-0.4))',
        transition: 'transform 1.2s ease',
      }} />

      {/* Floating code fragments */}
      {FLOATERS.map((f, i) => (
        <div key={i} style={{
          position: 'absolute', top: f.top, left: f.left,
          fontFamily: "'Courier New', monospace",
          fontSize: f.size, color: 'rgba(247,231,206,0.1)',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          animation: `floatDrift ${f.dur} ease-in-out ${f.delay} infinite alternate`,
          userSelect: 'none',
        }}>
          {f.text}
        </div>
      ))}

      {/* Floating monogram cards */}
      {MONOGRAMS.map((m, i) => (
        <div key={i} style={{
          position: 'absolute', top: m.top, left: m.left,
          width: '48px', height: '48px', borderRadius: '10px',
          background: 'rgba(22,41,22,0.7)',
          border: `1px solid ${m.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '0.85rem', fontWeight: 700, color: m.color,
          pointerEvents: 'none',
          animation: `floatBob 6s ease-in-out ${m.delay} infinite alternate`,
          backdropFilter: 'blur(8px)',
        }}>
          {m.label}
        </div>
      ))}

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '780px', width: '100%',
        textAlign: 'center', display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
      }}>

        {/* Availability badge */}
        <div className="hero-badge" style={fade(0.1)}>
          Ready &amp; Available for New Opportunities
        </div>

        {/* Name */}
        <h1 style={{
          ...fade(0.2),
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(3.2rem, 9vw, 6rem)',
          fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.0, color: 'var(--text-primary)', margin: 0,
        }}>
          Bernard{' '}
          <span style={{
            background: 'linear-gradient(135deg, #F7E7CE 0%, #c9a96e 50%, #F7E7CE 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3.5s linear infinite',
            fontStyle: 'italic',
          }}>
            Limo
          </span>
        </h1>

        {/* Typing role */}
        <div style={{ ...fade(0.3), display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '2rem' }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'var(--gold-deep)', opacity: 0.7,
          }}>
            &gt;
          </span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.02em',
          }}>
            {typedRole}
            <span style={{
              display: 'inline-block', width: '2px', height: '1.1em',
              background: 'var(--gold)', marginLeft: '3px',
              verticalAlign: 'middle', animation: 'cursorBlink 1s step-end infinite',
            }} />
          </span>
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ ...fade(0.35), margin: '0.25rem auto' }} />

        {/* Description */}
        <p style={{
          ...fade(0.4),
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: 'var(--text-secondary)', lineHeight: 1.8,
          maxWidth: '600px', margin: 0,
        }}>
          Bridging business needs and technology solutions across{' '}
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Banking</span>,{' '}
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Insurance</span>, and{' '}
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Healthcare</span> —
          Transforming complex requirements into impactful, measurable outcomes.
        </p>

        {/* Primary CTAs */}
        <div style={{
          ...fade(0.5),
          display: 'flex', gap: '1rem',
          flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem',
        }}>
          
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '0.82rem', gap: '0.5rem' }}
          >
            ↗ View Portfolio
          </a>
          
            href="#contact"
            className="btn btn-outline"
            style={{ padding: '0.85rem 2rem', fontSize: '0.82rem', gap: '0.5rem' }}
          >
            ✉ Contact Me
          </a>
        </div>

        {/* Secondary links */}
        <div style={{ ...fade(0.6), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>
            Connect with me on
          </span>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              {
                label: 'LinkedIn', href: 'https://www.linkedin.com/in/bernard-limo-77937b138/',
                bg: 'rgba(10, 102, 194, 0.10)',
                border: 'rgba(10, 102, 194, 0.35)',
                color: '#004182',
                hoverBg: 'rgba(0, 65, 130, 0.18)',
              },
              {
                label: 'Email Me', href: 'mailto:koneslimo@gmail.com',
                bg: 'var(--gold-subtle)', border: 'rgba(247,231,206,0.2)', color: 'var(--gold)',
                hoverBg: 'rgba(247,231,206,0.18)',
              },
            ].map(({ label, href, bg, border, color, hoverBg }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.4rem', borderRadius: '0.625rem',
                  background: bg, border: `1px solid ${border}`, color,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background  = hoverBg;
                  e.currentTarget.style.transform   = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow   = '0 4px 16px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background  = bg;
                  e.currentTarget.style.transform   = 'translateY(0)';
                  e.currentTarget.style.boxShadow   = 'none';
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="hero-stats"
          style={{
            ...fade(0.7),
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', width: '100%', maxWidth: '580px',
            marginTop: '1rem',
            background: 'var(--lime-border)',
            borderRadius: '1rem', overflow: 'hidden',
            border: '1px solid var(--lime-border)',
          }}
        >
          {[
            { value: '8+',       label: 'Years Exp.'    },
            { value: '30+',      label: 'Projects'      },
            { value: '5',        label: 'Industries'    },
            { value: 'Kes 2.2M', label: 'Revenue Gen.' },
          ].map(({ value, label }) => (
            <div key={label} style={{
              background: 'var(--bg-elevated)', padding: '1rem 0.5rem',
              textAlign: 'center', transition: 'background 0.2s ease', cursor: 'default',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-surface)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-elevated)'; }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                fontWeight: 700, color: 'var(--gold)',
                lineHeight: 1, marginBottom: '0.25rem',
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.62rem', fontWeight: 600,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease 1.2s', zIndex: 2,
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.62rem', fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(180deg, var(--gold-deep), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes floatDrift {
          from { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          to   { transform: translateY(-12px) translateX(6px); opacity: 1; }
        }
        @keyframes floatBob {
          from { transform: translateY(0px) rotate(-2deg); }
          to   { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @media (max-width: 480px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// ── Home (page assembler) ─────────────────────────────────────
export default function Home() {
  // Scroll-reveal for .reveal elements
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechStack />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
    </main>
  );
}
