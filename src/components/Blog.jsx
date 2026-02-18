// src/components/Blog.jsx
import { useRef, useEffect, useState } from 'react';
import './Blog.css';

const articles = [
  {
    id: 1,
    title: 'Leveraging Data Analytics for Business Growth',
    excerpt:
      'Explore how businesses can use data-driven decision making to identify growth opportunities and improve operational efficiency across departments.',
    date: 'Feb 15, 2024',
    category: 'Analytics',
    readTime: '5 min read',
    icon: '◈',
  },
  {
    id: 2,
    title: 'The Role of Business Analysis in Digital Transformation',
    excerpt:
      'Understanding how business analysts bridge the gap between technology and business objectives during large-scale transformation initiatives.',
    date: 'Feb 10, 2024',
    category: 'Strategy',
    readTime: '7 min read',
    icon: '◎',
  },
  {
    id: 3,
    title: 'Essential Skills for Modern Business Analysts',
    excerpt:
      'A comprehensive guide to the technical and soft skills required to excel in the business analysis field in today\'s rapidly evolving landscape.',
    date: 'Feb 5, 2024',
    category: 'Career',
    readTime: '6 min read',
    icon: '⬡',
  },
];

const categoryColors = {
  Analytics: { bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.25)', text: 'var(--gold)'      },
  Strategy:  { bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.25)',  text: 'var(--lime-main)' },
  Career:    { bg: 'rgba(247,231,206,0.08)', border: 'rgba(247,231,206,0.20)', text: 'var(--gold-deep)'  },
};

function BlogCard({ article, index }) {
  const cardRef  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const catStyle = categoryColors[article.category] ?? categoryColors.Analytics;

  return (
    <article
      ref={cardRef}
      className="blog-card"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
      }}
    >
      {/* Gold top shimmer line */}
      <div className="blog-card-shimmer" />

      <div className="blog-card-body">

        {/* Meta row */}
        <div className="blog-meta">
          <span
            className="blog-category"
            style={{
              background:   catStyle.bg,
              border:       `1px solid ${catStyle.border}`,
              color:        catStyle.text,
            }}
          >
            {article.category}
          </span>
          <div className="blog-meta-right">
            <span className="blog-date">{article.date}</span>
            <span className="blog-dot">·</span>
            <span className="blog-readtime">{article.readTime}</span>
          </div>
        </div>

        {/* Icon + Title */}
        <div className="blog-title-row">
          <span className="blog-icon">{article.icon}</span>
          <h3 className="blog-title">{article.title}</h3>
        </div>

        {/* Excerpt */}
        <p className="blog-excerpt">{article.excerpt}</p>

      </div>

      {/* Footer */}
      <div className="blog-card-footer">
        <a href="#" className="blog-read-more">
          Read Article
          <span className="blog-arrow">→</span>
        </a>
        <span className="blog-index">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section className="blog-section" id="blog">

      {/* ── Decorative orb ───────────────────────────────────── */}
      <div className="blog-orb blog-orb--gold" />
      <div className="blog-orb blog-orb--lime" />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="blog-header">
          <p className="blog-eyebrow">Insights &amp; Thinking</p>
          <h2 className="heading-2">Latest Articles</h2>
          <div className="section-divider" />
          <p className="blog-subheading">
            Thoughts on business analysis, data strategy, and the craft of
            translating complexity into clarity.
          </p>
        </div>

        {/* ── Grid ───────────────────────────────────────────── */}
        <div className="blog-grid">
          {articles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div className="blog-cta">
          <p className="blog-cta-text">
            More articles and case studies available on my Notion portfolio.
          </p>
          <a
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-7 py-3 text-sm"
          >
            Read More on Notion
          </a>
        </div>

      </div>
    </section>
  );
}
