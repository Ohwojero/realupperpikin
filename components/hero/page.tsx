'use client'
import { useState, useEffect } from 'react'
import './hero.css'

export default function Hero(){
  const [index, setIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const images = ['/images/p4.jpg','/images/p5.jpg', '/images/p6.jpg']

  const changeSlide = (newIndex: number) => {
    setOpacity(0)
    setTimeout(() => {
      setIndex(newIndex)
      setOpacity(1)
    }, 500)
  }

  useEffect(()=>{
    const t = setInterval(()=> changeSlide((index + 1) % images.length), 6000)
    return ()=> clearInterval(t)
  },[index])

  const nextSlide = () => {
    changeSlide((index + 1) % images.length)
  }

  const prevSlide = () => {
    changeSlide((index - 1 + images.length) % images.length)
  }

  const goToSlide = (slideIndex: number) => {
    if (slideIndex !== index) {
      changeSlide(slideIndex)
    }
  }

  return (
    <section id="home" className="hero-section">
      <img src={images[index]} alt="event" className="hero-bg" style={{ opacity }} />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>A Date With <span>Real Upper Pikin</span></h1>
        <p>DEC 7TH 2025 • Red Carpet 4PM • Show 5PM</p>
        <a href="https://wa.me/2349128132800" target="_blank" className="hero-btn">Buy Ticket on WhatsApp</a>
      </div>
      <button className="carousel-btn prev-btn" onClick={prevSlide}>{'<'}</button>
      <button className="carousel-btn next-btn" onClick={nextSlide}>{'>'}</button>
      <div className="carousel-indicators">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            className={`indicator ${slideIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></button>
        ))}
      </div>
    </section>
  )
}
