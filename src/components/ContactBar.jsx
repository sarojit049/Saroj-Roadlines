import React from 'react';
import { Phone, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function ContactBar() {
  const whatsappUrl = `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(
    'Hello Saroj Roadlines, I am interested in discussing a transportation requirement.'
  )}`;

  return (
    <div className="contact-bar-strip">
      <div className="container">
        <div className="contact-bar-inner">
          <div className="contact-bar-items">
            <a href={`tel:+91${COMPANY.phone}`} className="contact-bar-item">
              <Phone size={16} style={{ color: '#f59e0b' }} />
              <span>Call: <strong>{COMPANY.phone}</strong></span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-bar-item"
            >
              <MessageSquare size={16} style={{ color: '#25D366' }} />
              <span>WhatsApp: <strong>{COMPANY.whatsapp}</strong></span>
            </a>

            <a href={`mailto:${COMPANY.email}`} className="contact-bar-item">
              <Mail size={16} style={{ color: '#f59e0b' }} />
              <span>Email: <strong>{COMPANY.email}</strong></span>
            </a>
          </div>

          <div style={{ color: '#94a3b8', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={14} style={{ color: '#f59e0b' }} />
            <span>Commercial Transport & Route Logistics Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
