import './About.css'
export default function About() {
  return (
    <section id="about">
      <div className="divider" />
      <div className="section-wrapper">
        <p className="section-label">// ABOUT ME</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-card">
          <div className="quote-mark">"</div>
          <p className="about-text">I'm a <span>frontend-focused developer</span> with a genuine passion for building things on the web. I don't just write code — I craft experiences. Every project I take on, I approach with curiosity, attention to detail, and a drive to make something that actually works beautifully.</p>
          <p className="about-text" style={{marginTop:'1rem'}}>I work with a <span>modern tech stack</span> — HTML, CSS, JavaScript, React, and Node.js — which allows me to handle everything from pixel-perfect user interfaces to scalable backend logic. I believe great software isn't just functional; it's intuitive, fast, and enjoyable to use.</p>
          <p className="about-text" style={{marginTop:'1rem'}}>Whether I'm building a sleek UI component or connecting a full-stack application, I bring the same level of dedication and craft to every line I write. I'm always <span>learning</span>, always building, and always pushing to do better than the last project.</p>
          <div className="about-stats">
            <div className="stat"><div className="stat-num">4</div><div className="stat-label">Projects</div></div>
            <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Technologies</div></div>
            <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Commitment</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
