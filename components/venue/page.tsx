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
      <div className="map-placeholder">
        <iframe
          title="Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1234567890123!2d5.6037168!3d6.3391851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3c1b1b1b1b1%3A0x1234567890abcdef!2sRecham%20Event%20Centre!5e0!3m2!1sen!2sng!4v1690000000000"
          width="100%" height="350" style={{border:0}} loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
