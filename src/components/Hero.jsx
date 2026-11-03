import './Hero.css'
import heroimg from '../assets/heroimg.jpg'
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-tag"><span className="status-dot" />Available for work</div>
        <h1>Abdelrhman<br /><span className="accent-text">Mohamed</span></h1>
        <img src={heroimg} alt="Hero" className="hero-img" />
        <p className="hero-role">Frontend Developer</p>
        <p className="hero-desc">Turning ideas into fast, clean, and modern web experiences. One line of code at a time.</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in touch</a>
          <a
            href="https://drive.google.com/file/d/1Fdg28AovN_1Vd-hF0G4Cp4Hk2IYhvlBv/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-cv"
          >
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
