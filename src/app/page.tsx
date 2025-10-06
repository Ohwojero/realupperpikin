import Navbar from '../../components/navbar/page'
import Hero from '../../components/hero/page'
import Tickets from '../../components/tickets/page'
import Venue from '../../components/venue/page'
import Footer from '../../components/footer/page'
import ContactPage from '../../components/contact/page'

export default function Page(){
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Tickets />
      <Venue />
      <ContactPage/>
      <Footer />
    </main>
  )
}
