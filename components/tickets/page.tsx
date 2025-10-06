import './ticket.css'

export default function Tickets(){
  const tickets = [
    {type:'Regular', price:'₦20,000', desc:'Access to the main show'},
    {type:'VIP', price:'₦50,000', desc:'Front row seats + free drink'},
    {type:'VVIP', price:'₦300,000', desc:'Premium seating + backstage access'},
    {type:'VVIP', price:'₦500,000', desc:'Premium seating + backstage access'},
  ]

  return (
    <section id="tickets" className="tickets-section">
      <h2>Get Your Tickets</h2>
      <div className="ticket-grid">
        {tickets.map((t,i)=>(
          <div key={i} className="ticket-card">
            <h3>{t.type}</h3>
            <p className="price">{t.price}</p>
            <p>{t.desc}</p>
            <a href="https://wa.me/2349128132800" target="_blank" className="ticket-btn">Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  )
}
