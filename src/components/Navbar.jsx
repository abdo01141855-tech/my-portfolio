import { useState } from 'react'
import './Navbar.css'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="logo">ABDELRHMAN MOHAMED ROCHDE</div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l}><a href={`#${l}`} className={activeSection === l ? 'active' : ''} onClick={() => setOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
