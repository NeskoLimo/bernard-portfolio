// src/components/About.jsx
import './About.css';

const About = () => {
  const stats = [
    { value: '8+',  label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '15+', label: 'Clients Served' },
    { value: '5',   label: 'Industries Served' },
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

  return (
    <section className="about" id="about">
      <div className="section-container">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="about-header">
          <p className="about-eyebrow">Who I Am</p>
          <h2 className="heading-2">About Me</h2>
          <div className="section-divider" />
        </div>

        {/* ── Main two-column layout ───────────────────────────── */}
        <div className="about-content">

          {/* Left — photo */}
          <div className="about-image-col">
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <span className="placeholder-icon">◉</span>
                <span className="placeholder-label">Your Photo Here</span>
              </div>
              {/* Decorative corner accents */}
              <div className="frame-corner frame-corner--tl" />
              <div className="frame-corner frame-corner--br" />
            </div>
          </div>

          {/* Right — text */}
          <div className="about-text-col">
            <p className="about-body">
              I'm a passionate{' '}
              <span className="text-gold font-semibold">Business Analyst</span>{' '}
              with expertise in translating complex business requirements into
              data-driven solutions. With a background in analytics and strategic
              planning, I help organisations across{' '}
              <span className="text-gold font-semibold">
                banking, insurance, and healthcare
              </span>{' '}
              unlock meaningful insights from their data.
            </p>
            <p className="about-body">
              My approach combines technical proficiency with business acumen,
              ensuring every analysis delivers measurable value. I'm committed to
              continuous learning and staying at the forefront of industry trends —
              bridging the gap between business needs and technology solutions.
            </p>

            {/* Highlight cards */}
            <div className="about-highlights">
              {highlights.map(({ icon, title, desc }) => (
                <div key={title} className="highlight-card card-glass">
                  <span className="highlight-icon">{icon}</span>
                  <div>
                    <h4 className="highlight-title">{title}</h4>
                    <p className="highlight-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary px-7 py-3 text-sm">
                Work With Me
              </a>
              <a href="#skills" className="btn btn-outline px-7 py-3 text-sm">
                View My Skills
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats row ────────────────────────────────────────── */}
        <div className="about-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-card card">
              <div className="stat-number">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
