import React from 'react';
import { Truck, Factory, RefreshCw, Route, FileCheck2, Handshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Full Truck Transportation',
      desc: 'Dedicated Full Truckload (FTL) capacity for direct point-to-point commercial movements with committed dispatch schedules.',
      icon: Truck,
    },
    {
      title: 'Industrial Goods Transportation',
      desc: 'Specialized heavy road haulage for steel, manufacturing raw materials, construction supplies, and machinery.',
      icon: Factory,
    },
    {
      title: 'Regular Load Transportation',
      desc: 'Consistent daily, weekly, or recurring vehicle placements tailored for factory outputs and warehouse transfers.',
      icon: RefreshCw,
    },
    {
      title: 'Route & Backhaul Coordination',
      desc: 'Optimized corridor routing and backhaul placement coordination to maintain cost efficiency and transit speed.',
      icon: Route,
    },
    {
      title: 'GST & E-Way Bill Support',
      desc: 'Complete documentation support and E-Way bill verification ensuring hassle-free clearance at interstate check posts.',
      icon: FileCheck2,
    },
    {
      title: 'Business Transport Partnerships',
      desc: 'Long-term contractual logistics arrangements and priority fleet allocation for corporate and industrial partners.',
      icon: Handshake,
    },
  ];

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.875rem auto' }}>
            <Truck size={14} />
            <span>OUR CORE SERVICES</span>
          </div>

          <h2 className="section-title">
            Commercial Transportation Services
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Practical, business-focused road logistics solutions designed to keep industrial operations running smoothly.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="service-card">
                <div className="service-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
