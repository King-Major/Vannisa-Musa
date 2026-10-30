import { useEffect, useState } from 'react';
import { site, products } from './config.js';
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
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const from = Math.min(...products.map((p) => p.price));

  return (
    <>
      <a href="#shop" className={'sticky-cta' + (showBar ? ' show' : '')}>
        Shop · from {site.symbol}
        {from}
      </a>
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
