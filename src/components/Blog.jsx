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
      "A comprehensive guide to the technical and soft skills required to excel in the business analysis field in today's rapidly evolving landscape.",
    date: 'Feb 5, 2024',
    category: 'Career',
    readTime: '6 min read',
    icon: '⬡',
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
      className="relative flex flex-col bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden
        shadow-lg transition-all duration-300 hover:border-slate-700 hover:shadow-[0_0_28px_rgba(74,222,128,0.08)]
        hover:-translate-y-1 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
      }}
    >
      {/* Top shimmer line — gold gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
      />

      {/* Card body */}
      <div className="flex-1 px-6 pt-7 pb-4 md:px-7">

        {/* Meta row */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
          <span
            className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
            style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.color }}
          >
            {article.category}
          </span>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-4">
          <span
            className="text-2xl leading-none mt-0.5 flex-shrink-0"
            style={{ color: 'var(--gold)' }}
          >
            {article.icon}
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-white leading-snug group-hover:text-lime-300 transition-colors duration-300">
            {article.title}
          </h3>
        </div>

        {/* Excerpt */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-6 py-4 md:px-7 border-t border-slate-800/60">
        
          href="#"
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: 'var(--lime-main)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--lime-hover)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--lime-main)'}
        >
          Read Article
          <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
        </a>
        <span className="text-xs font-mono text-slate-600 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(247,197,112,0.10) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-lime-400 mb-3">
            Insights &amp; Thinking
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(to right, var(--gold), var(--lime-main))' }}
          />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Thoughts on business analysis, data strategy, and the craft of
            translating complexity into clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 md:mt-20">
          <p className="text-slate-400 mb-6">
            More articles and case studies available on my Notion portfolio.
          </p>
          
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-8 py-3 text-sm"
          >
            Read More on Notion
          </a>
        </div>

      </div>
    </section>
  );
}
