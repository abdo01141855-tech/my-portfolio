import './Contact.css'
export default function Contact() {
  return (
    <section id="contact">
      <div className="divider" />
      <div className="section-wrapper contact-wrapper">
        <p className="section-label">// LET'S TALK</p>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-desc">Have a project in mind, want to collaborate, or just want to say hi?<br />My inbox is always open — let's build something great together.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/abd-alrhman-4935382b2" target="_blank" rel="noreferrer" className="contact-link">🔗 LinkedIn</a>
          <a href="mailto:abdo01141855@gmail.com" className="contact-link">✉️ abdo01141855@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
