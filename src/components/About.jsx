import React from 'react';
import { CheckCircle2, Truck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-image-stack">
            <img
              src="/images/wb19j9071.png"
              alt="Saroj Roadlines Heavy Truck Logistics Operations in Dankuni Hooghly WB 19 J 9071"
              className="about-main-img"
              loading="lazy"
              decoding="async"
              width="600"
              height="420"
              onError={(e) => {
                e.target.src = '/images/wb23d7077.png';
              }}
            />

            <div className="about-floating-card">
              <div className="about-floating-card-title">Commercial Excellence</div>
              <div className="about-floating-card-desc">
                Focusing on route efficiency, cargo safety and reliable vehicle placements across West Bengal.
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="about-content">
            <div className="section-label">
              <Truck size={14} />
              <span>ABOUT SAROJ ROADLINES</span>
            </div>

            <h2 className="section-title">
              Transport Built Around Business Reliability in Dankuni & Hooghly
            </h2>

            <p className="section-subtitle" style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              <strong>Saroj Roadlines</strong> is a trusted road transport service provider based in Dankuni, Hooghly, dedicated to serving industrial manufacturers, steel suppliers, warehouses, and logistics partners across West Bengal.
            </p>

            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              As a premier transport company in Dankuni and Hooghly, we understand that industrial supply chains demand reliable open body truck capacity, direct route coordination, and full compliance. Our heavy transport fleet covers major commercial corridors including Kolkata to Durgapur, Kolkata to Kharagpur, and regional industrial hubs.
            </p>

            <ul className="about-features-list">
              <li className="about-feature-item">
                <div className="about-feature-check">
                  <CheckCircle2 size={16} />
                </div>
                <div className="about-feature-text">
                  <strong>Dedicated Vehicle Capacity:</strong> Access to 10-tyre (19 Ton) and 12-tyre (25 Ton) open body trucks tailored to your load profile.
                </div>
              </li>

              <li className="about-feature-item">
                <div className="about-feature-check">
                  <CheckCircle2 size={16} />
                </div>
                <div className="about-feature-text">
                  <strong>Proactive Route Coordination:</strong> Dispatch supervision ensuring smooth transit across Dankuni, Kolkata, Howrah, Durgapur, and Kharagpur.
                </div>
              </li>

              <li className="about-feature-item">
                <div className="about-feature-check">
                  <CheckCircle2 size={16} />
                </div>
                <div className="about-feature-text">
                  <strong>Regulatory Compliance:</strong> Full documentation support including GST and E-Way Bill support for hassle-free goods movement.
                </div>
              </li>

              <li className="about-feature-item">
                <div className="about-feature-check">
                  <CheckCircle2 size={16} />
                </div>
                <div className="about-feature-text">
                  <strong>Long-Term B2B Partnerships:</strong> Regular load transportation contracts for manufacturing plants and distribution networks in West Bengal.
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '2rem' }}>
              <a href="#partnership-form" className="btn btn-primary">
                <span>Discuss Your Requirements</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
