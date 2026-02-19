// src/components/Blog.jsx
import { useRef, useEffect, useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Leveraging Data Analytics for Business Growth',
    excerpt:
      'Explore how businesses can use data-driven decision making to identify growth opportunities and improve operational efficiency across departments.',
    date: 'Feb 15, 2024',
    category: 'Analytics',
    readTime: '5 min read',
    icon: 'o',
  },
  {
    id: 2,
    title: 'The Role of Business Analysis in Digital Transformation',
    excerpt:
      'Understanding how business analysts bridge the gap between technology and business objectives during large-scale transformation initiatives.',
    date: 'Feb 10, 2024',
    category: 'Strategy',
    readTime: '7 min read',
    icon: 'o',
  },
  {
    id: 3,
    title: 'Essential Skills for Modern Business Analysts',
    excerpt:
      "A comprehensive guide to the technical and soft skills required to excel in the business analysis field in today's rapidly evolving landscape.",
    date: 'Feb 5, 2024',
    category: 'Career',
    readTime: '6 min read',
    icon: 'o',
  },
];

const categoryStyles = {
  Analytics: {
    bg: 'rgba(247,197,112,0.08)',
    border: 'rgba(247,197,112,0.25)',
    color: 'var(--gold)',
  },
  Strategy: {
    bg: 'rgba(74,222,128,0.08)',
    border: 'rgba(74,222,128,0.25)',
    color: 'var(--lime-main)',
  },
  Career: {
    bg: 'rgba(247,197,112,0.07)',
    border: 'rgba(247,197,112,0.20)',
    color: 'var(--gold-deep)',
  },
};

function BlogCard({ article, index }) {
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

  const cat = categoryStyles[article.category] ?? categoryStyles.Analytics;

  return (
    <article
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: index * 0.1 + 's',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-surface)',
        border: '1px solid var(--lime-border)',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(247,231,206,0.28)';
        e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--lime-border)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
        e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(28px)';
      }}
    >
      {/* Top shimmer line — gold gradient, matches other cards */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold-deep), var(--gold), transparent)',
        opacity: 0.6,
      }} />

      {/* Card body */}
      <div style={{ padding: '1.75rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            background: cat.bg,
            border: '1px solid ' + cat.border,
            color: cat.color,
          }}>
            {article.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {article.date}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          margin: 0,
        }}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.92rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          flexGrow: 1,
          margin: 0,
        }}>
          {article.excerpt}
        </p>

      </div>

      {/* Card footer */}
      <div style={{
        padding: '1.25rem 2rem 1.75rem',
        borderTop: '1px solid var(--lime-border)',
        background: 'var(--bg-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a
          href="#"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--lime-main)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--lime-main)'; }}
        >
          Read Article
        </a>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--lime-border)',
          lineHeight: 1,
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section
      id="blog"
      style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background orbs — consistent with Certifications */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,197,112,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)', opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '256px', height: '256px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', opacity: 0.25,
        }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header — matches Projects and About header pattern */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold-deep)',
            marginBottom: '0.6rem',
          }}>
            Insights and Thinking
          </p>
          <h2 className="heading-2">Latest Articles</h2>
          <div className="section-divider" />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '560px',
            margin: '1.5rem auto 0',
          }}>
            Thoughts on business analysis, data strategy, and the craft of
            translating complexity into clarity.
          </p>
        </div>

        {/* Grid — matches Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {articles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Bottom CTA — matches Projects CTA pattern */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
          }}>
            More articles and case studies available on my Notion portfolio.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline px-7 py-3 text-sm"
            >
              Read More on Notion
            </a>
            <a href="#contact" className="btn btn-primary px-7 py-3 text-sm">
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
