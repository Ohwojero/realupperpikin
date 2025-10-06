'use client'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import './navbar.css'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const wa = 'https://wa.me/2349128132800?text=Hi!%20I%27d%20like%20to%20buy%20a%20ticket'

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Real Upper Pikin</span>
        </div>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#tickets">Tickets</a>
          <a href="#venue">Venue</a>
          <a className="buy-btn" href={wa} target="_blank">Buy Ticket 🎟️</a>
        </nav>

        <button onClick={()=>setOpen(!open)} className="menu-toggle">
          {open ? <HiX size={24}/> : <HiMenu size={24}/>}
        </button>
      </div>
    </header>
  )
}
