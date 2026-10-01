import React from 'react';
import { MapPin, Navigation, Route, Compass } from 'lucide-react';

export default function ServiceAreas() {
  const primaryLocations = [
    'Dankuni',
    'Kolkata',
    'Howrah',
    'Hooghly',
    'Durgapur',
    'Kharagpur',
    'Asansol',
  ];

  return (
    <section id="service-areas" className="section-padding bg-light">
      <div className="container">
        <div className="routes-wrapper">
          {/* Left Text Side */}
          <div>
            <div className="section-label">
              <Compass size={14} />
              <span>REGIONAL NETWORK</span>
            </div>

            <h2 className="section-title">
              Connected to Business Routes
            </h2>

            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Saroj Roadlines connects major industrial hubs, manufacturing hubs, and logistics corridors across West Bengal and Eastern India.
            </p>

            <div className="location-chips">
              {primaryLocations.map((loc, idx) => (
                <div key={idx} className="location-chip">
                  <MapPin size={16} className="location-chip-icon" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem 1.25rem',
                background: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#0f172a',
              }}
            >
              <Navigation size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span>Other routes — enquire for current availability.</span>
            </div>
          </div>

          {/* Right Stylized Route Map Visual */}
          <div className="route-graphic-box">
            <div className="route-corridor-title">
              <Route size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Key Industrial Transport Corridors
            </div>

            <div className="route-node-list">
              <div className="route-node-item">
                <div className="route-node-circle">01</div>
                <div>
                  <div className="route-node-text">Dankuni Hub & Kolkata Corridor</div>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Logistics, Warehousing & Distribution Hubs</div>
                </div>
              </div>

              <div className="route-node-item">
                <div className="route-node-circle">02</div>
                <div>
                  <div className="route-node-text">Howrah & Hooghly Industrial Belt</div>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Manufacturing, Steel Units & Commercial Supplies</div>
                </div>
              </div>

              <div className="route-node-item">
                <div className="route-node-circle">03</div>
                <div>
                  <div className="route-node-text">Durgapur & Asansol Steel Corridor</div>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Heavy Industry, Metal Products & Bulk Movement</div>
                </div>
              </div>

              <div className="route-node-item">
                <div className="route-node-circle">04</div>
                <div>
                  <div className="route-node-text">Kharagpur & Regional Corridors</div>
                  <div style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>Inter-state Connection & Factory Freight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
