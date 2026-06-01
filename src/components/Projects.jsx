import './Projects.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const projects = [
  {
    img: project1,
    title: 'CRUD Dashboard',
    description: 'A full-featured admin dashboard with CRUD operations. Includes student management, course tracking, payment records, and user roles. Built with React and Firebase for real-time data.',
    tech: ['React', 'Firebase', 'CSS'],
  },
  {
    img: project2,
    title: 'Elonsol Restaurant',
    description: 'A dark, elegant landing page for a restaurant brand. Features a cinematic hero section with floating food visuals, smooth navigation, and a bold golden color scheme that reflects the brand identity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    img: project3,
    title: 'TOTC — E-Learning Platform',
    description: 'A modern online learning platform UI. Showcases course listings, student stats, and a clean teal design with interactive elements like join buttons and course schedule cards.',
    tech: ['React', 'CSS', 'Bootstrap'],
  },
  {
    img: project4,
    title: 'E-Commerce Shop',
    description: 'A fully functional product listing page with search, add-to-cart, and cart view features. Displays a wide range of products with clean card layouts and a smooth shopping experience.',
    tech: ['React', 'JavaScript', 'CSS'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="divider" />
      <div className="section-wrapper">
        <p className="section-label">// WORK</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="project-img-overlay">
                  <span>View Project</span>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
