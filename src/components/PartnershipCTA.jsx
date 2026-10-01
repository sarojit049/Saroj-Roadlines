import React from 'react';
import { ArrowRight, Handshake, PhoneCall } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function PartnershipCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="partnership-cta-banner">
          <div className="section-label" style={{ margin: '0 auto 1rem auto' }}>
            <Handshake size={14} />
            <span>B2B TRANSPORT PARTNERSHIPS</span>
          </div>

          <h2 className="partnership-cta-title">
            Looking for Reliable Transport Capacity?
          </h2>

          <p className="partnership-cta-text">
            Saroj Roadlines is open to working with manufacturers, distributors, warehouses, logistics companies and businesses that require dependable road transportation.
          </p>

          <div className="partnership-cta-btns">
            <a href="#partnership-form" className="btn btn-primary">
              <span>Become a Transport Partner</span>
              <ArrowRight size={18} className="icon-arrow" />
            </a>

            <a href={`tel:+91${COMPANY.phone}`} className="btn btn-secondary">
              <PhoneCall size={18} />
              <span>Call {COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
