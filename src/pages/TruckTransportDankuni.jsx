import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOInternalLinks from '../components/SEOInternalLinks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, MessageSquare, Truck, ShieldCheck, CheckCircle2, ArrowRight, MapPin, Weight } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function TruckTransportDankuni() {
  const pageTitle = "Truck Transport Dankuni | 19T & 25T Open Body Trucks | Saroj Roadlines";
  const pageDesc = "Saroj Roadlines provides 19 ton and 25 ton open body truck transportation from Dankuni, West Bengal for steel, industrial goods, machinery, construction materials and full truck loads.";
  const canonicalUrl = `${COMPANY.siteUrl}/truck-transport-dankuni`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Truck Transport Service in Dankuni",
    "provider": {
      "@type": "LogisticsService",
      "name": "Saroj Roadlines",
      "telephone": "+917003244983",
      "url": COMPANY.siteUrl
    },
    "areaServed": "Dankuni, Hooghly, West Bengal",
    "description": pageDesc
  };

  const whatsappUrl = `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Saroj Roadlines, I am inquiring about truck transport from Dankuni.'
  )}`;

  return (
    <div className="seo-page-wrapper">
      <SEOHead title={pageTitle} description={pageDesc} canonicalUrl={canonicalUrl} schema={schema} />
      <Navbar />

      <main style={{ paddingTop: '80px' }}>
        <Breadcrumbs currentPageTitle="Truck Transport Dankuni" />

        {/* Hero Banner Section */}
        <section className="section-padding bg-dark" style={{ borderBottom: '1px solid #1e293b' }}>
          <div className="container">
            <div style={{ maxWidth: '840px' }}>
              <div className="section-label">
                <MapPin size={14} />
                <span>DANKUNI LOGISTICS HUB</span>
              </div>
              <h1 className="section-title" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Truck Transport Service in Dankuni, West Bengal
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Saroj Roadlines offers reliable <strong>10-wheel (19 Ton)</strong> and <strong>12-wheel (25 Ton) open-body truck transportation</strong> directly from Dankuni industrial belt to manufacturing centers across West Bengal and Eastern India.
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
                  Reliable Open Body Truck Services in Dankuni
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Located in the heart of Hooghly's freight transport corridor, Dankuni is one of West Bengal's vital logistics junctions. Saroj Roadlines provides direct company transportation using heavy <strong>open-body trucks</strong> for factories, steel suppliers, machinery manufacturers, and warehouses.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Whether you require full truck load (FTL) dispatches, long-term corporate vehicle contracts, or additional market trucks for peak demand, our team provides dependable vehicle placement and dispatch supervision.
                </p>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Available Open Body Vehicle Types in Dankuni
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800, marginBottom: '0.5rem' }}>
                      <Truck size={20} />
                      <span>10 Tyre Open Body Truck</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0, fontWeight: 700 }}>19 Ton Payload Capacity</p>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.5' }}>
                      Ideal for medium-to-heavy industrial freight, steel bars, pipes, timber, and commercial goods.
                    </p>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800, marginBottom: '0.5rem' }}>
                      <Truck size={20} />
                      <span>12 Tyre Open Body Truck</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0, fontWeight: 700 }}>25 Ton Payload Capacity</p>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.5' }}>
                      Designed for heavy industrial goods, structural steel, machinery, construction supplies, and bulk loads.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Key Goods & Materials Transported
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Steel Bars, TMT & Coils',
                    'Heavy Industrial Machinery',
                    'Construction & Structural Materials',
                    'Raw Manufacturing Supplies',
                    'Pipes, Cables & Timber',
                    'Warehouse & Commercial Dispatches',
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
                      <CheckCircle2 size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2rem', marginBottom: '1rem' }}>
                  Market Truck Arrangements & Dedicated Logistics
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  In addition to our dedicated fleet vehicles, Saroj Roadlines maintains strong local logistics connections to arrange verified market trucks whenever your company requires supplementary transport capacity.
                </p>
              </div>

              {/* Sidebar Contact Card */}
              <div style={{ background: '#0f172a', color: '#ffffff', borderRadius: '20px', padding: '2rem', border: '1px solid #1e293b', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff' }}>
                  Book Dankuni Truck Transport
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Contact Saroj Roadlines dispatch desk directly for immediate truck allocation or contract transport quotes.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <a href={`tel:+91${COMPANY.phone}`} className="btn btn-primary" style={{ width: '100%' }}>
                    <Phone size={18} />
                    <span>Call {COMPANY.phone}</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', borderColor: '#25D366', color: '#25D366' }}>
                    <MessageSquare size={18} />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '1.25rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Key Coverage Areas:</strong>
                  Dankuni, Hooghly, Kolkata, Howrah, Durgapur, Asansol, Kharagpur & West Bengal.
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOInternalLinks currentPath="/truck-transport-dankuni" />
      </main>

      <Footer />
    </div>
  );
}
