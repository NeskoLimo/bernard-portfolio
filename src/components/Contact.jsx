// src/components/Contact.jsx
import React, { useState, useRef } from 'react';

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'bernard-limo-77937b138',
    href: 'https://www.linkedin.com/in/bernard-limo-77937b138/',
    icon: '◈',
    display: 'linkedin.com/in/bernard-limo',
  },
  {
    label: 'Portfolio',
    value: 'Notion Portfolio',
    href: 'https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a',
    icon: '◎',
    display: 'View Full Portfolio',
  },
  {
    label: 'Email',
    value: 'bernard@email.com', // ← replace with real email
    href: 'mailto:bernard@email.com',
    icon: '⬡',
    display: 'bernard@email.com',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus]     = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // ── Wire up your preferred form service here (Formspree, EmailJS, etc.)
    // Example with Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // setStatus(res.ok ? 'success' : 'error');

    // Simulated delay for UI preview:
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>

      {/* ── Decorative orbs ──────────────────────────────────── */}
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

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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

        {/* ── Two-column layout ──────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
          gap: '3rem',
          alignItems: 'start',
        }}
          className="contact-grid"
        >

          {/* ── Left: info panel ─────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Availability badge */}
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
              outcomes across banking, insurance, and healthcare. Open to full-time
              roles, contract engagements, and consulting projects.
            </p>

            {/* Contact links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {contactLinks.map(({ label, href, icon, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem 1.25rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--lime-border)',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    group: true,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(247,231,206,0.3)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--lime-border)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{
                    fontSize: '1.1rem', color: 'var(--gold)',
                    flexShrink: 0, width: '1.5rem', textAlign: 'center',
                  }}>
                    {icon}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.7rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--text-muted)', marginBottom: '0.15rem',
                    }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.88rem', fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}>
                      {display}
                    </div>
                  </div>
                  <span style={{
                    marginLeft: 'auto', color: 'var(--gold-deep)',
                    fontSize: '0.85rem', opacity: 0.7,
                  }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ──────────────────────────── */}
          <div
            className="card"
            style={{ padding: '2.25rem 2.5rem' }}
          >
            {status === 'success' ? (
              /* Success state */
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
                  className="btn btn-outline px-6 py-3 text-sm"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => setStatus('idle')}
                >
                  Send Another
                </button>
              </div>
            ) : (
              /* Form */
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '0.25rem',
                }}>
                  Send a Message
                </h3>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
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

                {/* Subject */}
                <div>
                  <label className="label" htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    required placeholder="Project enquiry / Role discussion"
                    value={formData.subject} onChange={handleChange}
                    className="input"
                  />
                </div>

                {/* Message */}
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

                {/* Error state */}
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

                {/* Submit */}
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

        {/* ── Footer rule ────────────────────────────────────── */}
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

      {/* Responsive grid style */}
      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
