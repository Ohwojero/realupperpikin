import './venue.css'

export default function Venue(){
  return (
    <section id="venue" className="venue-section">
      <h2>Event Venue</h2>
      <div className="venue-info">
        <h3>RECHEM EVENT CENTRE</h3>
        <p className="venue-address">KM 6, SAPELE ROAD, OPPOSITE WINNER CHAPEL, BENIN CITY, EDO STATE</p>
        <p className="venue-note">For Sponsorship & Participation</p>
        <a href="https://wa.me/2349128132800" target="_blank" className="venue-btn">Contact Us</a>
      </div>
      <div className="venue-media">
        <div className="venue-video">
          <video controls width="100%" height="350">
            <source src="/video/vi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       
      </div>
    </section>
  )
}
