import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Business Analyst with expertise in translating complex business requirements into data-driven solutions. With a background in analytics and strategic planning, I help organizations unlock insights from their data.
            </p>
            <p>
              My approach combines technical proficiency with business acumen, ensuring that every analysis delivers measurable value. I'm committed to continuous learning and staying at the forefront of industry trends.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Clients Served</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
