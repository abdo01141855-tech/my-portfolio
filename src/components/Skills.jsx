import './Skills.css'
const skills = [
  { icon: '🌐', name: 'HTML' },
  { icon: '🎨', name: 'CSS' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
]
export default function Skills() {
  return (
    <section id="skills">
      <div className="divider" />
      <div className="section-wrapper">
        <p className="section-label">// EXPERTISE</p>
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
