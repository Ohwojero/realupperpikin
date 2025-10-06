import './venue.css'

export default function Venue(){
  return (
    <section id="venue" className="venue-section">
      <h2>Event Venue</h2>
      <p>Location: Eko Convention Centre, Lagos, Nigeria</p>
      <div className="map-placeholder">
        <iframe 
          title="Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3064088275423!2d3.4220930741290474!3d6.605874622186888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0adfcf4f2f%3A0x86d2bb3c6c6efc4b!2sEko%20Convention%20Centre!5e0!3m2!1sen!2sng!4v1675956123456"
          width="100%" height="350" style={{border:0}}  loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
