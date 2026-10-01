import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Partner With Us', href: '#partnership-form' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <a href="#home" className="nav-brand" title="Saroj Roadlines - Transport & Logistics in Dankuni & Hooghly">
              <img
                src="/images/logo.png"
                alt="Saroj Roadlines SRL Official Logo Dankuni Transport"
                className="brand-logo-img"
                width="40"
                height="40"
              />
              <span className="brand-text">
                Saroj <span>Roadlines</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="nav-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header CTA Button */}
            <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href="#partnership-form" className="btn btn-primary btn-sm" style={{ display: 'inline-flex' }}>
                <span>Partner With Us</span>
                <ArrowRight size={16} className="icon-arrow" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay Backdrop */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div className="mobile-drawer-header">
            <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
              <img
                src="/images/logo.png"
                alt="Saroj Roadlines SRL Official Logo"
                className="brand-logo-img"
                style={{ height: '36px', width: '36px' }}
                width="36"
                height="36"
              />
              <span className="brand-text" style={{ fontSize: '1.15rem' }}>
                Saroj <span>Roadlines</span>
              </span>
            </a>
            <button
              onClick={closeMobileMenu}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} style={{ color: '#f59e0b' }} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #334155' }}>
          <a
            href={`tel:+91${COMPANY.phone}`}
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '0.75rem' }}
            onClick={closeMobileMenu}
          >
            <Phone size={18} />
            <span>Call {COMPANY.phone}</span>
          </a>
          <a
            href="#partnership-form"
            className="btn btn-secondary"
            style={{ width: '100%' }}
            onClick={closeMobileMenu}
          >
            <span>Send Enquiry</span>
          </a>
        </div>
      </div>
    </>
  );
}
