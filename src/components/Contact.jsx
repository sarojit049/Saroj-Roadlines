import React from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  FileCheck2,
  PhoneCall,
  Send,
  ArrowRight,
} from 'lucide-react';
import { COMPANY } from '../config/company';

export default function Contact() {
  const whatsappUrl = `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Saroj Roadlines, I am interested in discussing a transportation requirement.'
  )}`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side: Contact Information & Legal Details */}
          <div className="contact-info-card">
            <div className="section-label" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
              <Phone size={14} />
              <span>DIRECT CONTACT</span>
            </div>

            <h2 className="section-title" style={{ color: '#ffffff', fontSize: '2rem' }}>
              Let's Discuss Your Transportation Requirement
            </h2>

            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
              Connect directly with our transport coordination team for quick quotes, vehicle availability, and fleet partnerships.
            </p>

            <div className="contact-detail-list">
              {/* Primary Phone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-detail-content">
                  <label>Primary Contact / Phone</label>
                  <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon" style={{ color: '#25D366' }}>
                  <MessageSquare size={22} />
                </div>
                <div className="contact-detail-content">
                  <label>WhatsApp Support</label>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {COMPANY.whatsapp}
                  </a>
                </div>
              </div>

              {/* Additional Contact Numbers */}
              {COMPANY.additionalPhones && COMPANY.additionalPhones.length > 0 && (
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <PhoneCall size={22} />
                  </div>
                  <div className="contact-detail-content">
                    <label>Other Contact Numbers</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {COMPANY.additionalPhones.map((ph, idx) => (
                        <a key={idx} href={`tel:+91${ph}`}>
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-detail-content">
                  <label>Email Address</label>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>

              {/* GSTIN - Only displayed when configured */}
              {COMPANY.gstNumber && COMPANY.gstNumber.trim() !== '' && (
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FileCheck2 size={22} />
                  </div>
                  <div className="contact-detail-content">
                    <label>GSTIN</label>
                    <span>{COMPANY.gstNumber}</span>
                  </div>
                </div>
              )}

              {/* Address - Only displayed when configured */}
              {COMPANY.address && COMPANY.address.trim() !== '' && (
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-detail-content">
                    <label>Office Address</label>
                    <span>{COMPANY.address}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Quick Action CTA Buttons Box */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '2.5rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Quick Action Communication
            </h3>
            <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.6' }}>
              Need immediate transport assistance or truck allocation? Choose your preferred mode of contact below.
            </p>

            <div className="contact-quick-btns">
              <a href={`tel:+91${COMPANY.phone}`} className="btn btn-primary" style={{ padding: '1rem' }}>
                <Phone size={18} />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                style={{ padding: '1rem', borderColor: '#25D366', color: '#15803d' }}
              >
                <MessageSquare size={18} style={{ color: '#25D366' }} />
                <span>WhatsApp</span>
              </a>

              <a href={`mailto:${COMPANY.email}`} className="btn btn-outline-dark" style={{ padding: '1rem' }}>
                <Mail size={18} />
                <span>Email Us</span>
              </a>

              <a href="#partnership-form" className="btn btn-secondary" style={{ padding: '1rem', backgroundColor: '#0f172a', color: '#ffffff' }}>
                <span>Partner With Us</span>
                <ArrowRight size={18} className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
