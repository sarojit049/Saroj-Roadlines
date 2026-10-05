import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOInternalLinks from '../components/SEOInternalLinks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, MessageSquare, Truck, ShieldCheck, CheckCircle2, ArrowRight, Weight } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function TwentyFiveTonOpenBodyTruck() {
  const pageTitle = "25 Ton Open Body Truck in Dankuni | 12 Wheel Truck | Saroj Roadlines";
  const pageDesc = "Saroj Roadlines provides 25 ton 12 wheel open body trucks from Dankuni for steel, TMT, machinery, industrial goods and construction materials across West Bengal and nearby states.";
  const canonicalUrl = `${COMPANY.siteUrl}/25-ton-open-body-truck`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "25 Ton 12 Wheel Open Body Truck Transport Service",
    "provider": {
      "@type": "LogisticsService",
      "name": "Saroj Roadlines",
      "telephone": "+917003244983",
      "url": COMPANY.siteUrl
    },
    "areaServed": "Dankuni, Kolkata, Durgapur, West Bengal",
    "description": pageDesc
  };

  const whatsappUrl = `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Saroj Roadlines, I am inquiring about 25 Ton 12-Wheel Open Body Truck booking.'
  )}`;

  const fleetVehicles = [
    { number: 'WB 11 F 2230', image: '/images/wb11f2230.png' },
    { number: 'WB 23 F 4571', image: '/images/wb23f4571.png' },
    { number: 'WB 19 J 9071', image: '/images/wb19j9071.png' },
  ];

  return (
    <div className="seo-page-wrapper">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} schema={schema} />
      <Navbar />

      <main style={{ paddingTop: '80px' }}>
        <Breadcrumbs currentPageTitle="25 Ton Open Body Truck" />

        {/* Hero Banner Section */}
        <section className="section-padding bg-dark" style={{ borderBottom: '1px solid #1e293b' }}>
          <div className="container">
            <div style={{ maxWidth: '840px' }}>
              <div className="section-label">
                <Weight size={14} />
                <span>HEAVY PAYLOAD FREIGHT</span>
              </div>
              <h1 className="section-title" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                25 Ton Open Body Truck Service (12 Wheel)
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Saroj Roadlines operates high-capacity <strong>25 Ton 12-wheel open body trucks</strong> from Dankuni, West Bengal, ideal for heavy steel coils, TMT bars, heavy machinery, and industrial bulk dispatches.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`tel:+91${COMPANY.phone}`} className="btn btn-primary">
                  <Phone size={18} />
                  <span>Call {COMPANY.phone}</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <MessageSquare size={18} style={{ color: '#25D366' }} />
                  <span>WhatsApp Inquiry</span>
                </a>
                <a href="#partnership-form" className="btn btn-secondary">
                  <span>Enquire for Vehicle</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Page Content */}
        <section className="section-padding bg-white">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                  12-Wheel Multi-Axle Open Body Commercial Trucks
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  When your industrial payload requires high tonnage and open-loading flexibility, our <strong>12-wheel 25 Ton open body trucks</strong> offer optimal structural support and weight distribution for long-distance and regional transportation across West Bengal and neighboring states.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Our vehicles are maintained for heavy commercial operations, providing direct factory dispatches, dedicated vehicle contracts, and market truck arrangements whenever additional capacity is required.
                </p>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  25 Ton Heavy Vehicles in Our Active Fleet
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                  {fleetVehicles.map((truck) => (
                    <div key={truck.number} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                      <img
                        src={truck.image}
                        alt={`Saroj Roadlines 25 Ton 12-Wheel Open Body Truck ${truck.number}`}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Vehicle Number</span>
                        <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0.2rem 0 0 0' }}>{truck.number}</p>
                        <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700 }}>12 Wheel • 25 Ton Payload</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Suitable Cargo & Load Specifications
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Steel Coils & Heavy Plates',
                    'TMT Bars & Structural Steel',
                    'Steel Pipes & Fabricated Metals',
                    'Heavy Industrial Machinery',
                    'Construction & Infrastructure Supplies',
                    'Bulk Industrial Raw Materials',
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Dedicated Vehicle Attachment & Market Truck Sourcing
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  For manufacturing plants and industrial suppliers requiring recurring 25 Ton capacity, we offer dedicated vehicle attachment agreements. When your daily load exceeds available fleet numbers, Saroj Roadlines arranges reliable market trucks to fulfill your total dispatch volume.
                </p>
              </div>

              {/* Sidebar Contact Card */}
              <div style={{ background: '#0f172a', color: '#ffffff', borderRadius: '20px', padding: '2rem', border: '1px solid #1e293b', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
                  Enquire 25 Ton Truck
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Speak directly with Saroj Roadlines dispatch team for 12-wheel 25 Ton vehicle booking and availability in Dankuni & West Bengal.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <a href={`tel:+91${COMPANY.phone}`} className="btn btn-primary" style={{ width: '100%' }}>
                    <Phone size={18} />
                    <span>Call {COMPANY.phone}</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', borderColor: '#25D366', color: '#25D366' }}>
                    <MessageSquare size={18} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '1.25rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Specification Summary:</strong>
                  12 Wheels • 25 Ton Capacity • Open Body Heavy Truck • Dankuni & West Bengal Routes.
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOInternalLinks currentPath="/25-ton-open-body-truck" />
      </main>

      <Footer />
    </div>
  );
}
