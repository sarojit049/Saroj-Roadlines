import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Route, ShieldCheck, MapPin } from 'lucide-react';

export default function SEOInternalLinks({ currentPath }) {
  const seoPages = [
    {
      path: '/truck-transport-dankuni',
      title: 'Truck Transport Dankuni',
      desc: '19T & 25T Open Body Trucks from Dankuni Industrial Area.',
      icon: Truck,
    },
    {
      path: '/kolkata-durgapur-transport',
      title: 'Kolkata to Durgapur Transport',
      desc: 'Regular industrial & steel freight between Kolkata & Durgapur.',
      icon: Route,
    },
    {
      path: '/25-ton-open-body-truck',
      title: '25 Ton Open Body Truck',
      desc: '12-Wheel heavy payload open body trucks for bulk freight.',
      icon: ShieldCheck,
    },
    {
      path: '/steel-transport-west-bengal',
      title: 'Steel Transport West Bengal',
      desc: 'TMT, steel plates, pipes & structural steel transportation.',
      icon: MapPin,
    },
  ];

  const filteredPages = seoPages.filter((p) => p.path !== currentPath);

  return (
    <section className="section-padding bg-dark" style={{ borderTop: '1px solid #1e293b' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.875rem auto' }}>
            <Truck size={14} />
            <span>RELATED TRANSPORT SERVICES</span>
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Explore Our Specialized Freight Routes
          </h2>
          <p className="section-subtitle" style={{ color: '#94a3b8', margin: '0 auto' }}>
            Saroj Roadlines operates open-body heavy trucks across major industrial corridors in West Bengal.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.path}
                to={page.path}
                style={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                className="fleet-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                      {page.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                    {page.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#f59e0b',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    marginTop: '1.25rem',
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
