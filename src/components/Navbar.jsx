// src/components/Navbar.jsx
// ── Education nav item added between Projects and Blog ────────────────────────
import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home',           href: '#home'          },
  { label: 'About',          href: '#about'         },
  { label: 'Skills',         href: '#skills'        },
  { label: 'Certifications', href: '#certifications'},
  { label: 'Projects',       href: '#projects'      },
  { label: 'Education',      href: '#education'     }, // ← NEW
  { label: 'Blog',           href: '#blog'          },
  { label: 'Contact',        href: '#contact'       },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('home');
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    // smooth scroll fallback for older browsers
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="navbar"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: scrolled ? '60px' : '72px',
        transition: 'height 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
      }}
    >
      {/* ── Logo ────────────────────────────────────────────────── */}
      <a
        href="#home"
        onClick={() => handleNavClick('#home')}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          textDecoration: 'none', flexShrink: 0,
        }}
      >
        <div style={{
          width: '42px', height: '42px', borderRadius: '50%',
          background: 'var(--lime-main)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', fontWeight: 800,
          color: 'var(--bg-base)',
          letterSpacing: '0.04em',
          flexShrink: 0,
          boxShadow: '0 0 16px rgba(74,222,128,0.25)',
        }}>
          BL
        </div>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.1rem', fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}>
            Bernard Limo
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.65rem', fontWeight: 500,
            color: 'var(--text-tertiary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Business Analyst
          </div>
        </div>
      </a>

      {/* ── Desktop nav ─────────────────────────────────────────── */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.15rem',
        }}
        className="desktop-nav"
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const sectionId = href.replace('#', '');
          const isActive  = active === sectionId;
          return (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              className={`nav-link ${isActive ? 'nav-active' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* ── Hire Me CTA ─────────────────────────────────────────── */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        className="btn btn-primary btn-sm"
        style={{
          flexShrink: 0,
          marginLeft: '1rem',
          display: 'flex',
        }}
      >
        Hire Me
      </a>

      {/* ── Mobile hamburger ────────────────────────────────────── */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        style={{
          display: 'none',    /* shown via CSS media query below */
          background: 'none',
          border: '1px solid var(--lime-border)',
          borderRadius: 'var(--r-sm)',
          padding: '0.4rem 0.6rem',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          fontSize: '1.2rem',
          marginLeft: '1rem',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* ── Mobile dropdown ─────────────────────────────────────── */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: 'rgba(8,15,8,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--lime-border)',
          padding: '1rem 2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          boxShadow: 'var(--shadow-lg)',
        }}>
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.replace('#', '');
            const isActive  = active === sectionId;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--gold)' : 'var(--text-secondary)',
                  padding: '0.65rem 0.75rem',
                  borderRadius: 'var(--r-sm)',
                  background: isActive ? 'var(--gold-subtle)' : 'transparent',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="btn btn-primary"
            style={{ marginTop: '0.75rem', justifyContent: 'center' }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          header { padding: 0 1.25rem !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
