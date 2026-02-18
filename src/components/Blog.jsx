// src/components/Blog.jsx
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Leveraging Data Analytics for Business Growth',
    date: 'Feb 15, 2024',
    excerpt: 'How modern analytics tools and Agile methodologies can transform raw data into strategic business decisions in banking and insurance.',
    tags: ['Data Analytics', 'Business Intelligence', 'Agile', 'Process Optimization'],
    link: 'https://cool-pail-cb0.notion.site/...', // replace with real link
  },
  {
    id: 2,
    title: 'Requirements Engineering in InsurTech Projects',
    date: 'Jan 10, 2024',
    excerpt: 'Best practices for gathering, documenting, and validating requirements to reduce rework and improve delivery speed.',
    tags: ['Requirements Engineering', 'InsurTech', 'Stakeholder Management', 'UAT'],
    link: '#',
  },
  {
    id: 3,
    title: 'The Role of AI in Process Optimization',
    date: 'Nov 20, 2023',
    excerpt: 'Exploring how AI-driven tools can automate workflows, predict bottlenecks, and deliver measurable efficiency gains.',
    tags: ['AI', 'Process Optimization', 'Automation', 'Business Analysis'],
    link: '#',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Insights on business analysis, data-driven decision making, process improvement, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-gold-glow hover:border-lime-600/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">{post.date}</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-lime-900/40 text-lime-300 text-xs rounded-full border border-lime-800/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-lime-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-300 mb-6 flex-grow text-base md:text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="mt-auto inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://cool-pail-cb0.notion.site/Bernard-Limo-Business-Analyst-Portfolio-305ca37c0bf58030a258c03d55d25c7a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-slate-950 font-semibold rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all text-lg"
          >
            View All Articles on Notion ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
