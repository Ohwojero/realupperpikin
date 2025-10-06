'use client'
import { useState, useEffect } from 'react'
import './hero.css'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-12-17T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Event Starts In</h3>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero(){
  const [index, setIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const images = ['/images/p1.jpg','/images/p2.jpg', '/images/p3.jpg']

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
        <h1 className="hero-title">
          <span className="date-text">A Date With</span>
          <span className="artist-name">Real Upper Pikin</span>
        </h1>
        <p>DEC 17TH 2025 • Red Carpet 4PM • Show 5PM</p>
        <a href="https://wa.me/2349128132800" target="_blank" className="hero-btn">Book Your Seat</a>
      </div>
      <CountdownTimer />
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
