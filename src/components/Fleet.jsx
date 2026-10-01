import React, { useState } from 'react';
import { Truck, ArrowRight, Weight, ShieldCheck } from 'lucide-react';

export default function Fleet({ onSelectVehicle }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const fleetData = [
    // 10-Tyre Trucks — 19 Ton Capacity
    {
      id: 'wb11c3317',
      vehicleNumber: 'WB 11 C 3317',
      category: '10-tyre',
      tyres: '10 Tyre',
      capacity: '19 Ton',
      bodyType: '10 Tyre Open Body Commercial Truck',
      image: '/images/wb11c3317.png',
      badge: '10 Tyre • 19 Ton',
      alt: 'Saroj Roadlines 10 Tyre 19 Ton Open Body Truck WB 11 C 3317 Dankuni Transport Service',
      suitableFor: 'Steel, industrial machinery, raw materials, pipes & commercial freight in Dankuni & West Bengal.',
    },
    {
      id: 'wb23d7077',
      vehicleNumber: 'WB 23 D 7077',
      category: '10-tyre',
      tyres: '10 Tyre',
      capacity: '19 Ton',
      bodyType: '10 Tyre Heavy Commercial Truck',
      image: '/images/wb23d7077.png',
      badge: '10 Tyre • 19 Ton',
      alt: 'Saroj Roadlines 10 Tyre 19 Ton Commercial Truck WB 23 D 7077 Hooghly Freight',
      suitableFor: 'Factory dispatches, warehouse transfers, construction goods & metals across Hooghly & Kolkata.',
    },
    {
      id: 'wb23d8660',
      vehicleNumber: 'WB 23 D 8660',
      category: '10-tyre',
      tyres: '10 Tyre',
      capacity: '19 Ton',
      bodyType: '10 Tyre Heavy Commercial Truck',
      image: '/images/wb23d8660.png',
      badge: '10 Tyre • 19 Ton',
      alt: 'Saroj Roadlines 10 Tyre 19 Ton Open Body Freight Truck WB 23 D 8660 Dankuni',
      suitableFor: 'Commercial goods, heavy loads, steel coils & regional transport in West Bengal.',
    },
    {
      id: 'wb11d8121',
      vehicleNumber: 'WB 11 D 8121',
      category: '10-tyre',
      tyres: '10 Tyre',
      capacity: '19 Ton',
      bodyType: '10 Tyre Open Body Commercial Truck',
      image: '/images/wb11d8121.png',
      badge: '10 Tyre • 19 Ton',
      alt: 'Saroj Roadlines 10 Tyre 19 Ton Open Body Truck WB 11 D 8121 Goods Transportation',
      suitableFor: 'Industrial raw supplies, bulk goods, timber & heavy merchandise.',
    },
    {
      id: 'wb19j4971',
      vehicleNumber: 'WB 19 J 4971',
      category: '10-tyre',
      tyres: '10 Tyre',
      capacity: '19 Ton',
      bodyType: '10 Tyre Heavy Duty Commercial Truck',
      image: '/images/wb19j4971.png',
      badge: '10 Tyre • 19 Ton',
      alt: 'Saroj Roadlines 10 Tyre 19 Ton Truck WB 19 J 4971 Kolkata Durgapur Transport',
      suitableFor: 'Regional bulk distribution, factory freight & long-haul commercial loads.',
    },

    // 12-Tyre Trucks — 25 Ton Capacity
    {
      id: 'wb11f2230',
      vehicleNumber: 'WB 11 F 2230',
      category: '12-tyre',
      tyres: '12 Tyre',
      capacity: '25 Ton',
      bodyType: '12 Tyre Multi-Axle Heavy Payload Truck',
      image: '/images/wb11f2230.png',
      badge: '12 Tyre • 25 Ton',
      alt: 'Saroj Roadlines 12 Tyre 25 Ton Multi-Axle Open Body Truck WB 11 F 2230 West Bengal',
      suitableFor: 'Heavy industrial loads, structural steel, heavy machinery & bulk goods.',
    },
    {
      id: 'wb23f4571',
      vehicleNumber: 'WB 23 F 4571',
      category: '12-tyre',
      tyres: '12 Tyre',
      capacity: '25 Ton',
      bodyType: '12 Tyre Multi-Axle High Capacity Truck',
      image: '/images/wb23f4571.png',
      badge: '12 Tyre • 25 Ton',
      alt: 'Saroj Roadlines 12 Tyre 25 Ton Heavy Commercial Truck WB 23 F 4571 Dankuni Hooghly',
      suitableFor: 'High-tonnage long-distance movement, heavy metal coils & construction supplies.',
    },
    {
      id: 'wb19j9071',
      vehicleNumber: 'WB 19 J 9071',
      category: '12-tyre',
      tyres: '12 Tyre',
      capacity: '25 Ton',
      bodyType: '12 Tyre Multi-Axle Heavy Duty Truck',
      image: '/images/wb19j9071.png',
      badge: '12 Tyre • 25 Ton',
      alt: 'Saroj Roadlines 12 Tyre 25 Ton Heavy Open Body Freight Truck WB 19 J 9071 Kharagpur',
      suitableFor: 'Heavy manufacturing dispatches, raw materials & corridor transport across West Bengal.',
    },
  ];

  const handleEnquire = (vehicleNumber) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicleNumber);
    }
    const formEl = document.getElementById('partnership-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredFleet = fleetData.filter((truck) => {
    if (activeFilter === '10-tyre') return truck.category === '10-tyre';
    if (activeFilter === '12-tyre') return truck.category === '12-tyre';
    return true;
  });

  return (
    <section id="fleet" className="section-padding bg-dark">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.875rem auto' }}>
            <Truck size={14} />
            <span>COMMERCIAL TRUCK FLEET</span>
          </div>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Saroj Roadlines Transport Fleet in Dankuni & Hooghly
          </h2>

          <p className="section-subtitle" style={{ color: '#94a3b8', margin: '0 auto 1.5rem auto' }}>
            We maintain heavy-duty 10-Tyre (19 Ton) and 12-Tyre (25 Ton) open body commercial trucks optimized for industrial freight, steel transport, and route operations across West Bengal.
          </p>

          {/* Filter Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#1e293b',
              padding: '0.35rem',
              borderRadius: '9999px',
              border: '1px solid #334155',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setActiveFilter('all')}
              className="btn btn-sm"
              style={{
                borderRadius: '9999px',
                backgroundColor: activeFilter === 'all' ? '#f59e0b' : 'transparent',
                color: activeFilter === 'all' ? '#0b1220' : '#cbd5e1',
                padding: '0.5rem 1.25rem',
                border: 'none',
              }}
            >
              All Vehicles ({fleetData.length})
            </button>

            <button
              onClick={() => setActiveFilter('10-tyre')}
              className="btn btn-sm"
              style={{
                borderRadius: '9999px',
                backgroundColor: activeFilter === '10-tyre' ? '#f59e0b' : 'transparent',
                color: activeFilter === '10-tyre' ? '#0b1220' : '#cbd5e1',
                padding: '0.5rem 1.25rem',
                border: 'none',
              }}
            >
              10 Tyre | 19 Ton
            </button>

            <button
              onClick={() => setActiveFilter('12-tyre')}
              className="btn btn-sm"
              style={{
                borderRadius: '9999px',
                backgroundColor: activeFilter === '12-tyre' ? '#f59e0b' : 'transparent',
                color: activeFilter === '12-tyre' ? '#0b1220' : '#cbd5e1',
                padding: '0.5rem 1.25rem',
                border: 'none',
              }}
            >
              12 Tyre | 25 Ton
            </button>
          </div>
        </div>

        <div className="fleet-grid">
          {filteredFleet.map((truck) => (
            <div key={truck.id} className="fleet-card">
              <div className="fleet-card-img-container">
                <img
                  src={truck.image}
                  alt={truck.alt}
                  className="fleet-card-img"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* SVG Truck Image Placeholder */}
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    padding: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <Truck size={48} style={{ color: '#f59e0b', marginBottom: '0.75rem' }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.05em' }}>
                    {truck.vehicleNumber}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: '#f59e0b', marginTop: '0.25rem' }}>
                    {truck.tyres} • {truck.capacity}
                  </span>
                </div>

                <span className="fleet-capacity-badge">{truck.badge}</span>
              </div>

              <div className="fleet-card-body">
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, display: 'block', marginBottom: '0.15rem' }}>
                    Vehicle Number
                  </span>
                  <h3 className="fleet-card-title" style={{ fontSize: '1.5rem', margin: 0, color: '#ffffff' }}>
                    {truck.vehicleNumber}
                  </h3>
                </div>

                <ul className="fleet-spec-list">
                  <li className="fleet-spec-item">
                    <Truck size={16} style={{ color: '#f59e0b' }} />
                    <span>Configuration: <strong>{truck.tyres}</strong></span>
                  </li>
                  <li className="fleet-spec-item">
                    <Weight size={16} style={{ color: '#f59e0b' }} />
                    <span>Payload Capacity: <strong>{truck.capacity}</strong></span>
                  </li>
                  <li className="fleet-spec-item" style={{ alignItems: 'flex-start' }}>
                    <ShieldCheck size={16} style={{ color: '#f59e0b', marginTop: '3px', flexShrink: 0 }} />
                    <span>Suitable Usage: <span style={{ color: '#cbd5e1' }}>{truck.suitableFor}</span></span>
                  </li>
                </ul>

                <div className="fleet-card-footer">
                  <button
                    onClick={() => handleEnquire(truck.vehicleNumber)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Enquire About This Vehicle</span>
                    <ArrowRight size={16} className="icon-arrow" />
                  </button>
                  <p className="availability-note">Enquire for current availability in Dankuni & Hooghly.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
