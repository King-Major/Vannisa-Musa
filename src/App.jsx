import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Paths from './components/Paths.jsx';
import Shop from './components/Shop.jsx';
import LeadMagnet from './components/LeadMagnet.jsx';
import About from './components/About.jsx';
import Faq from './components/Faq.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Paths />
        <Shop />
        <LeadMagnet />
        <About />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
