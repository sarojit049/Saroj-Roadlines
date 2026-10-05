import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactBar from './components/ContactBar';
import CapabilityStrip from './components/CapabilityStrip';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Industries from './components/Industries';
import ServiceAreas from './components/ServiceAreas';
import PartnershipCTA from './components/PartnershipCTA';
import PartnershipForm from './components/PartnershipForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

// SEO Pages
import TruckTransportDankuni from './pages/TruckTransportDankuni';
import KolkataDurgapurTransport from './pages/KolkataDurgapurTransport';
import TwentyFiveTonOpenBodyTruck from './pages/TwentyFiveTonOpenBodyTruck';
import SteelTransportWestBengal from './pages/SteelTransportWestBengal';

function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState('19 MT Open Body');

  useEffect(() => {
    // Setup IntersectionObserver for scroll-reveal class elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ContactBar />
        <CapabilityStrip />
        <About />
        <Fleet onSelectVehicle={(v) => setSelectedVehicle(v)} />
        <Services />
        <Industries />
        <ServiceAreas />
        <PartnershipCTA />
        <PartnershipForm selectedVehicle={selectedVehicle} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/truck-transport-dankuni" element={<TruckTransportDankuni />} />
        <Route path="/kolkata-durgapur-transport" element={<KolkataDurgapurTransport />} />
        <Route path="/25-ton-open-body-truck" element={<TwentyFiveTonOpenBodyTruck />} />
        <Route path="/steel-transport-west-bengal" element={<SteelTransportWestBengal />} />
      </Routes>
    </Router>
  );
}
