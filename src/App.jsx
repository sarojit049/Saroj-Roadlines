import React, { useState, useEffect } from 'react';
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

export default function App() {
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
