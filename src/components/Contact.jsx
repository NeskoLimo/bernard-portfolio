// src/components/Contact.jsx
import React, { useState, useRef } from 'react';

// ── Top action buttons ────────────────────────────────────────────────────────
const ACTION_BUTTONS = [
  {
    label: 'Send Email',
    href: 'mailto:koneslimo@gmail.com',
    icon: '✉',
    style: { background: 'var(--gold)', color: 'var(--bg-base)', border: 'none' },
    hoverStyle: { background: '#fff8ee', boxShadow: '0 8px 24px rgba(247,231,206,0.3)' },
  },
  {
    label: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/bernard-limo-77937b138/',
    icon: '◈',
    style: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--lime-border)' },
    hoverStyle: { borderColor: 'rgba(247,231,206,0.3)', boxShadow: 'var(--shadow-gold)' },
  },
  {
    label: 'Portfolio',
    href: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    icon: '◎',
    style: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--lime-border)' },
    hoverStyle: { borderColor: 'rgba(247,231,206,0.3)', boxShadow: 'var(--shadow-gold)' },
  },
];

// ── Book a call platforms ─────────────────────────────────────────────────────
const CALL_PLATFORMS = [
  {
    label: 'Calendly',
    href: 'https://calendly.com/',   // ← replace with your Calendly link
    icon: '📅',
    style: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--lime-border)' },
    hoverStyle: { borderColor: 'rgba(247,231,206,0.3)', boxShadow: 'var(--shadow-gold)' },
  },
  {
    label: 'Topmate',
    href: 'https://topmate.io/kones_limo/',     // ← replace with your Topmate link
    icon: '🗓',
    style: { background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--lime-border)' },
    hoverStyle: { borderColor: 'rgba(247,231,206,0.3)', boxShadow: 'var(--shadow-gold)' },
  },
];

// ── Hire me on platforms ──────────────────────────────────────────────────────
const HIRE_PLATFORMS = [
  {
    label: 'Hire on Turing',
    href: 'https://matching.turing.com/developer-resume-preview/01492c3092f3204474acfc5e15bc5d29a6b33943070c2b',  // ← replace with your Upwork profile
    style: { background: '#003366', color: '#fff', border: 'none' },
    hoverStyle: { background: '#18c200', boxShadow: '0 8px 24px rgba(20,168,0,0.35)' },
    icon: 'UP',
    iconStyle: { fontWeight: 900, fontSize: '0.8rem' },
  },
  {
    label: 'Hire on Toptal',
    href: 'https://www.toptal.com/',  // ← replace if you have a profile
    style: { background: 'transparent', color: 'var(--gold)', border: '1.5px solid rgba(247,231,206,0.3)' },
    hoverStyle: { background: 'var(--gold-subtle)', borderColor: 'var(--gold)', boxShadow: 'var(--shadow-gold)' },
    icon: '✦',
    iconStyle: {},
  },
];

// ── Info cards ────────────────────────────────────────────────────────────────
const INFO_CARDS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'koneslimo@gmail.com',
    href: 'mailto:koneslimo@gmail.com',
    iconColor: 'var(--gold)',
  },
  {
    icon: '◈',
    label: 'LinkedIn',
    value: 'Bernard (Kones) Limo',
    href: 'https://www.linkedin.com/in/bernard-limo-77937b138/',
    iconColor: '#0a66c2',
  },
  {
    icon: '⌖',
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
    iconColor: 'var(--lime-main)',
  },
];

// ── Reusable hover button ─────────────────────────────────────────────────────
function HoverBtn({ href, baseStyle, hoverStyle, children, external = true }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.6rem',
        borderRadius: '0.625rem',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.85rem', fontWeight: 700,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // ── Wire up Formspree / EmailJS here ──
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // setStatus(res.ok ? 'success' : 'error');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247,231,206,0.06) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 65%)',
        filter: 'blur(72px)', pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '0.6rem',
          }}>
            Let's Connect
          </p>
          <h2 className="heading-2">Get In Touch</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.05rem', color: 'var(--text-secondary)',
            maxWidth: '520px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Whether you have a project in mind, a role to discuss, or simply want
            to connect — I'd love to hear from you.
          </p>
        </div>

        {/* ── Top action buttons: Send Email / LinkedIn / Portfolio ─────────── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.875rem',
          justifyContent: 'center', marginBottom: '2.5rem',
        }}>
          {ACTION_BUTTONS.map(({ label, href, icon, style, hoverStyle }) => (
            <HoverBtn
              key={label}
              href={href}
              baseStyle={style}
              hoverStyle={hoverStyle}
              external={!href.startsWith('mailto')}
            >
              <span style={{ fontSize: '1rem' }}>{icon}</span>
              {label}
            </HoverBtn>
          ))}
        </div>

        {/* ── Book a 1:1 call ──────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: '0.875rem',
          }}>
            Book a 1:1 call with me
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {CALL_PLATFORMS.map(({ label, href, icon, style, hoverStyle }) => (
              <HoverBtn key={label} href={href} baseStyle={style} hoverStyle={hoverStyle}>
                <span>{icon}</span>
                {label}
              </HoverBtn>
            ))}
          </div>
        </div>

        {/* ── Hire me on ───────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: '0.875rem',
          }}>
            Or hire me on
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {HIRE_PLATFORMS.map(({ label, href, style, hoverStyle, icon, iconStyle }) => (
              <HoverBtn key={label} href={href} baseStyle={style} hoverStyle={hoverStyle}>
                <span style={{ ...iconStyle, fontSize: '0.85rem' }}>{icon}</span>
                {label}
              </HoverBtn>
            ))}
          </div>
        </div>

        {/* ── Info cards: Email / LinkedIn / Location ───────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {INFO_CARDS.map(({ icon, label, value, href, iconColor }) => {
            const inner = (
              <>
                <span style={{
                  fontSize: '1.8rem',
                  color: iconColor,
                  marginBottom: '0.5rem',
                  display: 'block',
                }}>
                  {icon}
                </span>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.3rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '0.35rem',
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.88rem', color: 'var(--text-secondary)',
                  wordBreak: 'break-all',
                }}>
                  {value}
                </div>
              </>
            );
            const cardStyle = {
              background: 'var(--bg-elevated)',
              border: '1px solid var(--lime-border)',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              transition: 'all 0.25s ease',
              display: 'block',
              textDecoration: 'none',
            };
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(247,231,206,0.3)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--lime-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {inner}
              </a>
            ) : (
              <div key={label} style={cardStyle}>{inner}</div>
            );
          })}
        </div>

        {/* ── Two-column: info panel + contact form ────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Left info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="hero-badge" style={{ alignSelf: 'flex-start' }}>
              Available for New Opportunities
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700, color: 'var(--text-primary)',
              lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>
              Let's build something{' '}
              <span className="text-shimmer">remarkable</span>{' '}
              together.
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem', color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}>
              I'm a Business Analyst with a track record of delivering measurable
              outcomes across Banking, Insurance, and Healthcare. Open to full-time
              roles, contract engagements, and consulting projects.
            </p>

            {/* Response time indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.875rem 1.25rem',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--lime-border)',
              borderRadius: '0.75rem',
            }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: 'var(--lime-main)', flexShrink: 0,
                animation: 'pulseDot 2s ease-in-out infinite',
              }} />
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--lime-main)', marginBottom: '0.1rem',
                }}>
                  Typically responds within
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.88rem', color: 'var(--text-secondary)',
                }}>
                  24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="card" style={{ padding: '2.25rem 2.5rem' }}>
            {status === 'success' ? (
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', padding: '3rem 1rem', gap: '1rem',
              }}>
                <span style={{ fontSize: '2.5rem', color: 'var(--gold)' }}>◈</span>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.6rem', fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>
                  Message Sent!
                </h4>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem', color: 'var(--text-secondary)',
                  lineHeight: 1.7, maxWidth: '320px',
                }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '0.5rem', padding: '0.75rem 1.5rem' }}
                  onClick={() => setStatus('idle')}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '0.25rem',
                }}>
                  Send a Message
                </h3>

                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
                  className="form-row"
                >
                  <div>
                    <label className="label" htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text"
                      required placeholder="Bernard Limo"
                      value={formData.name} onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      required placeholder="you@example.com"
                      value={formData.email} onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="label" htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    required placeholder="Project enquiry / Role discussion"
                    value={formData.subject} onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="label" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message"
                    required rows={5}
                    placeholder="Tell me about your project or opportunity…"
                    value={formData.message} onChange={handleChange}
                    className="input"
                    style={{ resize: 'vertical', minHeight: '130px' }}
                  />
                </div>

                {status === 'error' && (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem', color: '#f87171',
                    background: 'rgba(248,113,113,0.08)',
                    border: '1px solid rgba(248,113,113,0.2)',
                    borderRadius: '0.5rem', padding: '0.6rem 1rem',
                  }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%', padding: '0.875rem 1.5rem',
                    marginTop: '0.25rem', fontSize: '0.85rem',
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem', color: 'var(--text-muted)',
                  textAlign: 'center',
                }}>
                  Typically responds within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer rule */}
        <hr className="gold-rule" style={{ marginTop: '5rem' }} />
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', color: 'var(--text-muted)',
          textAlign: 'center', letterSpacing: '0.04em',
          marginTop: '1.5rem',
        }}>
          © {new Date().getFullYear()} Bernard Limo · Business Analyst
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
