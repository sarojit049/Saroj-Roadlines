import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Business Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/images/logo.png"
                alt="Saroj Roadlines SRL Logo Hooghly Logistics"
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
                style={{
                  height: '48px',
                  width: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  padding: '2px',
                  objectFit: 'contain',
                }}
              />
              <span className="brand-text" style={{ fontSize: '1.3rem' }}>
                Saroj <span>Roadlines</span>
              </span>
            </div>

            <p className="footer-tagline">
              {COMPANY.tagline}
            </p>

            <address style={{ fontStyle: 'normal', fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6' }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                Business Information
              </strong>
              <span>Saroj Roadlines</span><br />
              <span>Dankuni, Hooghly, West Bengal, India</span>
              {COMPANY.gstNumber && COMPANY.gstNumber.trim() !== '' && (
                <div style={{ marginTop: '0.25rem', color: '#f59e0b', fontWeight: 600 }}>
                  GSTIN: {COMPANY.gstNumber}
                </div>
              )}
            </address>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-col-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#fleet" className="footer-link">Fleet</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
            </ul>
          </div>

          {/* Col 3: Sectors & Coverage */}
          <div>
            <h4 className="footer-col-heading">Key Links</h4>
            <ul className="footer-links">
              <li><a href="#industries" className="footer-link">Industries</a></li>
              <li><a href="#service-areas" className="footer-link">Service Areas</a></li>
              <li><a href="#partnership-form" className="footer-link">Partner With Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="footer-col-heading">Direct Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: '#f59e0b' }} />
                <a href={`tel:+91${COMPANY.phone}`} className="footer-link" style={{ fontWeight: 700, color: '#ffffff' }}>
                  {COMPANY.phone}
                </a>
              </div>

              {COMPANY.additionalPhones.map((ph, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.5rem' }}>
                  <a href={`tel:+91${ph}`} className="footer-link">
                    {ph}
                  </a>
                </div>
              ))}

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Mail size={16} style={{ color: '#f59e0b' }} />
                <a href={`mailto:${COMPANY.email}`} className="footer-link">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © Saroj Roadlines. All rights reserved. Transport & Freight Services in Dankuni, Hooghly, Kolkata & West Bengal.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.8125rem', borderColor: '#334155' }}
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
