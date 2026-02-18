// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog'     },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen,     setMenuOpen]     = useState(false);
  const menuRef = useRef(null);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = ['hero', ...navLinks.map((l) => l.href.slice(1))];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position:        'fixed',
          top:             0, left: 0, right: 0,
          zIndex:          50,
          transition:      'all 0.35s ease',
          background:      scrolled
            ? 'rgba(13,26,13,0.88)'
            : 'transparent',
          backdropFilter:  scrolled ? 'blur(16px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
          borderBottom:    scrolled
            ? '1px solid rgba(247,231,206,0.08)'
            : '1px solid transparent',
          boxShadow:       scrolled
            ? '0 2px 24px rgba(0,0,0,0.4)'
            : 'none',
          padding:         scrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div
          style={{
            maxWidth:      '80rem',
            margin:        '0 auto',
            padding:       '0 1.5rem',
            display:       'flex',
            alignItems:    'center',
            justifyContent:'space-between',
          }}
        >
          {/* ── Logo ───────────────────────────────────────── */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {/* Monogram mark */}
            <div style={{
              width: '2rem', height: '2rem',
              borderRadius: '0.5rem',
              background:   'linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%)',
              display:      'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink:   0,
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize:   '1rem', fontWeight: 700,
                color:      'var(--bg-base)', lineHeight: 1,
              }}>
                BL
              </span>
            </div>
            <div>
              <div style={{
                fontFamily:  "'Cormorant Garamond', Georgia, serif",
                fontSize:    '1.05rem', fontWeight: 700,
                color:       'var(--text-primary)', lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}>
                Bernard Limo
              </div>
              <div style={{
                fontFamily:  "'DM Sans', sans-serif",
                fontSize:    '0.62rem', fontWeight: 600,
                color:       'var(--text-muted)', letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Business Analyst
              </div>
            </div>
          </a>

          {/* ── Desktop nav ────────────────────────────────── */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            className="desktop-nav"
          >
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  style={{
                    fontFamily:    "'DM Sans', sans-serif",
                    fontSize:      '0.78rem', fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    color:         isActive ? 'var(--gold)' : 'var(--text-secondary)',
                    textDecoration:'none',
                    padding:       '0.4rem 0.75rem',
                    borderRadius:  '0.5rem',
                    background:    isActive ? 'rgba(247,231,206,0.08)' : 'transparent',
                    transition:    'all 0.2s ease',
                    position:      'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--gold)';
                      e.currentTarget.style.background = 'rgba(247,231,206,0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {label}
                  {isActive && (
                    <span style={{
                      position:     'absolute',
                      bottom:       '2px', left: '50%',
                      transform:    'translateX(-50%)',
                      width:        '16px', height: '2px',
                      background:   'var(--gold)',
                      borderRadius: '1px',
                    }} />
                  )}
                </a>
              );
            })}

            {/* CTA button */}
            <div style={{ marginLeft: '0.75rem' }}>
              <Button
                href="#contact"
                size="sm"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              >
                Hire Me
              </Button>
            </div>
          </nav>

          {/* ── Mobile hamburger ───────────────────────────── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display:    'none',
              background: 'transparent',
              border:     '1px solid var(--lime-border)',
              borderRadius:'0.5rem',
              padding:    '0.45rem 0.6rem',
              cursor:     'pointer',
              color:      'var(--gold)',
              transition: 'all 0.2s ease',
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="15" y2="15" />
                <line x1="15" y1="3" x2="3" y2="15" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="5"  x2="16" y2="5"  />
                <line x1="2" y1="9"  x2="16" y2="9"  />
                <line x1="2" y1="13" x2="16" y2="13" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu drawer ─────────────────────────────── */}
      <div
        ref={menuRef}
        style={{
          position:   'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex:     49,
          background: 'rgba(13,26,13,0.97)',
          backdropFilter: 'blur(20px)',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:        '0.5rem',
          opacity:    menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        className="mobile-drawer"
      >
        {navLinks.map(({ label, href }, i) => {
          const isActive = activeSection === href.slice(1);
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              style={{
                fontFamily:    "'Cormorant Garamond', Georgia, serif",
                fontSize:      'clamp(1.6rem, 5vw, 2.2rem)',
                fontWeight:    700,
                color:         isActive ? 'var(--gold)' : 'var(--text-secondary)',
                textDecoration:'none',
                letterSpacing: '-0.01em',
                padding:       '0.5rem 2rem',
                transition:    'color 0.2s ease',
                opacity:       menuOpen ? 1 : 0,
                transform:     menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--gold)' : 'var(--text-secondary)'; }}
            >
              {label}
            </a>
          );
        })}

        <div style={{ marginTop: '1.5rem' }}>
          <Button
            href="#contact"
            size="lg"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* ── Responsive styles ──────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
}

