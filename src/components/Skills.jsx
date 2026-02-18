import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('technical')

  const skills = {
    technical: [
      { name: 'Data Analysis', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Tableau', level: 88 },
      { name: 'Power BI', level: 87 },
      { name: 'Excel', level: 92 }
    ],
    professional: [
      { name: 'Requirements Gathering', level: 92 },
      { name: 'Process Improvement', level: 88 },
      { name: 'Strategic Planning', level: 85 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'Project Management', level: 87 },
      { name: 'Communication', level: 93 }
    ]
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-tabs">
          <button 
            className={`tab ${selectedCategory === 'technical' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('technical')}
          >
            Technical
          </button>
          <button 
            className={`tab ${selectedCategory === 'professional' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('professional')}
          >
            Professional
          </button>
        </div>
        <div className="skills-grid">
          {skills[selectedCategory].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
