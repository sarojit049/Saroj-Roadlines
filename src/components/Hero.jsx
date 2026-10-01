import React from 'react';
import { ArrowRight, Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-pattern"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="section-label">
              <Truck size={14} />
              <span>DANKUNI & HOOGHLY ROAD TRANSPORTATION</span>
            </div>

            <h1 className="hero-title">
              Reliable Road Transportation for <span className="text-gradient-amber">Your Business</span>
            </h1>

            <p className="hero-subtitle">
              <strong>Saroj Roadlines</strong> provides dependable road transport services, open body truck freight, and commercial logistics coordination in Dankuni, Hooghly, Kolkata, and across West Bengal.
            </p>

            <div className="hero-actions">
              <a href="#partnership-form" className="btn btn-primary">
                <span>Partner With Us</span>
                <ArrowRight size={18} className="icon-arrow" />
              </a>

              <a href="#fleet" className="btn btn-secondary">
                <span>View Our Fleet</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                <ShieldCheck size={18} style={{ color: '#f59e0b' }} />
                <span>Verified Commercial Operations in Dankuni</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                <MapPin size={18} style={{ color: '#f59e0b' }} />
                <span>Kolkata, Hooghly & Durgapur Routes</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-truck-image-wrapper">
                <img
                  src="/images/wb23f4571.png"
                  alt="Saroj Roadlines 12-Tyre 25 Ton Commercial Open Body Truck WB 23 F 4571 in Dankuni West Bengal"
                  className="hero-truck-image"
                  loading="eager"
                  width="600"
                  height="400"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div className="hero-visual-badge">
                <div className="route-indicator">
                  <div className="route-point">
                    <span className="route-point-dot"></span>
                    <span>Dankuni / Kolkata</span>
                  </div>

                  <div className="route-line-dashed"></div>

                  <div className="route-point">
                    <Truck size={16} style={{ color: '#f59e0b' }} />
                    <span style={{ color: '#f59e0b' }}>Saroj Freight</span>
                  </div>

                  <div className="route-line-dashed"></div>

                  <div className="route-point">
                    <span className="route-point-dot"></span>
                    <span>Destination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
