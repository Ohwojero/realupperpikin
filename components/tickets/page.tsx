import './ticket.css'

export default function Tickets(){
  const tickets = [
    {
      type:'Regular',
      price:'₦20,000',
      desc:'Perfect for fans who want to experience the show',
      features: ['Access to main show', 'General admission seating', 'Event merchandise discount'],
      popular: false
    },
    {
      type:'VIP',
      price:'₦50,000',
      desc:'Enhanced experience with premium perks',
      features: ['Front row seats', 'Meet & greet opportunity', 'Join the fun and laugh till your cheeks hurt'],
      popular: true
    },
    {
      type:'SEAT IN A TABLE',
      price:'₦300,000',
      desc:'Ultimate luxury experience',
      features: ['This Ticket Admits (4) persons', 'Backstage access', 'Personal meet & greet'],
      popular: false
    },
    {
      type:'Sponsorship',
      price:'₦500,000',
      desc:'The ultimate Real Upper Pikin experience',
      features: ['This Ticket Admits (8) persons', 'Front-row fame', 'Lifetime Sponsor status',],
      popular: false
    },
  ]

  return (
    <section id="tickets" className="tickets-section">
      <h2>Get Your Tickets</h2>
      <p className="section-subtitle">Choose the perfect ticket package for your unforgettable experience with Real Upper Pikin</p>
      <div className="ticket-grid">
        {tickets.map((t,i)=>(
          <div key={i} className={`ticket-card ${t.popular ? 'popular' : ''}`}>
            <h3>{t.type}</h3>
            <p className="price">{t.price}</p>
            <p>{t.desc}</p>
            <ul className="ticket-features">
              {t.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href="https://wa.me/2349128132800" target="_blank" className="ticket-btn">Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  )
}
