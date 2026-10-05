import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOInternalLinks from '../components/SEOInternalLinks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, MessageSquare, Truck, CheckCircle2, ArrowRight, Route } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function KolkataDurgapurTransport() {
  const pageTitle = "Kolkata to Durgapur Transport | Open Body Truck Service | Saroj Roadlines";
  const pageDesc = "Book 19 ton and 25 ton open body trucks for Kolkata, Dankuni and Durgapur transportation. Saroj Roadlines provides regular industrial, steel and full truck load transport.";
  const canonicalUrl = `${COMPANY.siteUrl}/kolkata-durgapur-transport`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kolkata to Durgapur Open Body Truck Transportation",
    "provider": {
      "@type": "LogisticsService",
      "name": "Saroj Roadlines",
      "telephone": "+917003244983",
      "url": COMPANY.siteUrl
    },
    "areaServed": ["Kolkata", "Dankuni", "Durgapur", "Asansol", "West Bengal"],
    "description": pageDesc
  };

  const whatsappUrl = `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Saroj Roadlines, I am inquiring about Kolkata to Durgapur transport.'
  )}`;

  return (
    <div className="seo-page-wrapper">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} schema={schema} />
      <Navbar />

      <main style={{ paddingTop: '80px' }}>
        <Breadcrumbs currentPageTitle="Kolkata to Durgapur Transport" />

        {/* Hero Banner Section */}
        <section className="section-padding bg-dark" style={{ borderBottom: '1px solid #1e293b' }}>
          <div className="container">
            <div style={{ maxWidth: '840px' }}>
              <div className="section-label">
                <Route size={14} />
                <span>KOLKATA ↔ DURGAPUR CORRIDOR</span>
              </div>
              <h1 className="section-title" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Kolkata to Durgapur Truck Transport Service
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Saroj Roadlines operates heavy <strong>19 Ton (10-wheel)</strong> and <strong>25 Ton (12-wheel) open-body trucks</strong> along the vital Kolkata – Dankuni – Durgapur industrial corridor for steel, machinery, and commercial freight.
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
                  Industrial Freight Transport between Kolkata, Dankuni & Durgapur
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  The industrial highway connecting Kolkata and Dankuni to Durgapur and Asansol is one of Eastern India's busiest freight routes. Saroj Roadlines provides dedicated <strong>open-body trucks</strong> for industrial manufacturers, steel traders, construction companies, and warehouse dispatches.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Our fleet handles regular load movements, corporate vehicle contracts, and return-haul movements (subject to cargo type and dispatch schedules). When your dispatch requirements exceed our fleet capacity, we arrange additional verified market trucks.
                </p>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Available Truck Configurations for Kolkata-Durgapur Route
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800, marginBottom: '0.5rem' }}>
                      <Truck size={20} />
                      <span>10 Tyre Open Body Truck</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0, fontWeight: 700 }}>19 Ton Payload Capacity</p>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.5' }}>
                      Suitable for TMT bars, structural steel, machinery parts, pipes, and bulk factory supplies.
                    </p>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800, marginBottom: '0.5rem' }}>
                      <Truck size={20} />
                      <span>12 Tyre Open Body Truck</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0, fontWeight: 700 }}>25 Ton Payload Capacity</p>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.5' }}>
                      Heavy multi-axle vehicle for heavy steel plates, large industrial cargo, construction materials, and high-tonnage dispatches.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Service Features for Corporate & Factory Dispatches
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Regular Daily Availability (Subject to Confirmation)',
                    'Return-Load Coordination (Subject to Schedule)',
                    'Dedicated Truck Attachment Contracts',
                    'Direct Company & Factory Transportation',
                    'GST & E-Way Bill Documentation Support',
                    'Supplementary Market Truck Arrangement',
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Contact Card */}
              <div style={{ background: '#0f172a', color: '#ffffff', borderRadius: '20px', padding: '2rem', border: '1px solid #1e293b', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
                  Inquire Kolkata-Durgapur Freight
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Connect directly with Saroj Roadlines route dispatch team for vehicle placement along the Kolkata-Durgapur corridor.
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
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Corridor Towns:</strong>
                  Kolkata, Dankuni, Hooghly, Bardhaman, Panagarh, Durgapur & Asansol.
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOInternalLinks currentPath="/kolkata-durgapur-transport" />
      </main>

      <Footer />
    </div>
  );
}
