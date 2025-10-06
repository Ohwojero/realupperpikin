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

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (open && !(event.target as Element).closest('.navbar-container')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  const wa = 'https://wa.me/2349128132800?text=Hi!%20I%27d%20like%20to%20buy%20a%20ticket'

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Real Upper Pikin</span>
        </div>
e
        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#tickets" onClick={() => setOpen(false)}>Tickets</a>
          <a href="#venue" onClick={() => setOpen(false)}>Venue</a>
           <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="buy-btn" href={wa} target="_blank" onClick={() => setOpen(false)}>Buy Ticket 🎟️</a>
        </nav>

        <button onClick={()=>setOpen(!open)} className="menu-toggle">
          {open ? <HiX size={24}/> : <HiMenu size={24}/>}
        </button>
      </div>
    </header>
  )
}
