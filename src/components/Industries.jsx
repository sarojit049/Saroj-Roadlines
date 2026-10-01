import React from 'react';
import {
  Layers,
  Factory,
  HardHat,
  Warehouse,
  ShoppingBag,
  Truck,
  Building2,
  Boxes,
} from 'lucide-react';

export default function Industries() {
  const industryList = [
    { name: 'Steel & Metal', icon: Layers },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Construction Materials', icon: HardHat },
    { name: 'Warehousing', icon: Warehouse },
    { name: 'Distribution', icon: Boxes },
    { name: 'FMCG / Commercial Goods', icon: ShoppingBag },
    { name: 'Logistics Companies', icon: Truck },
    { name: 'Industrial Suppliers', icon: Building2 },
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.875rem auto' }}>
            <Building2 size={14} />
            <span>SECTORS & INDUSTRIES</span>
          </div>

          <h2 className="section-title">
            Industries We Can Serve
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We provide heavy road transportation and logistics support across key B2B commercial sectors.
          </p>
        </div>

        <div className="industries-grid">
          {industryList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="industry-card">
                <div className="industry-icon-wrapper">
                  <Icon size={20} />
                </div>
                <span className="industry-name">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
