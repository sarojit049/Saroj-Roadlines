import React from 'react';
import { Truck, Briefcase, Box, FileText, Compass, Handshake } from 'lucide-react';

export default function CapabilityStrip() {
  const capabilities = [
    { title: 'Open Body Trucks', icon: Truck },
    { title: 'Business Transportation', icon: Briefcase },
    { title: 'Regular Load Requirements', icon: Box },
    { title: 'GST / E-Way Bill Support', icon: FileText },
    { title: 'Route Coordination', icon: Compass },
    { title: 'Partnership Enquiries', icon: Handshake },
  ];

  return (
    <section className="capability-section">
      <div className="container">
        <div className="capability-grid">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="capability-card">
                <div className="capability-icon-box">
                  <Icon size={20} />
                </div>
                <span className="capability-text">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
