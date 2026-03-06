import React from 'react';
import logo from '../assets/nimai_logo.png';
import './Footer.css';

const LINKS = {
  Company: [
    { label: 'About Us',  href: '#home' },
    { label: 'Careers',   href: '#contact' },
    { label: 'Contact',   href: '#contact' },
  ],
  Services: [
    { label: 'Data Engineering',    href: '#services' },
    { label: 'AI / Machine Learning', href: '#services' },
    { label: 'AI Ops',              href: '#services' },
    { label: 'Data Analytics',      href: '#services' },
    { label: 'Cloud Management',    href: '#services' },
  ],
  Consulting: [
    { label: 'Data & AI Strategy',    href: '#consulting' },
    { label: 'Architecture Review',   href: '#consulting' },
    { label: 'Product Strategy',      href: '#consulting' },
  ],
  Products: [
    { label: 'iProcessAI',            href: '#products' },
    { label: 'Request a Demo',        href: '#contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="section-wrapper">
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo-shell">
                <img src={logo} alt="NimAI" className="footer__logo" />
              </div>
              <p className="footer__brand-desc">
                Empowering businesses with intelligent Data &amp; AI solutions.
                Backed by 20+ years of expertise, NimAI delivers strategic consulting,
                scalable engineering, and innovation trusted by both B2B and B2C organizations.
              </p>
              <div className="footer__tagline">
                <span className="footer__tagline-dot" />
                nimai.ai
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(LINKS).map(([category, items]) => (
              <div key={category} className="footer__col">
                <h4 className="footer__col-heading">{category}</h4>
                <ul className="footer__col-links">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="footer__link">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="section-wrapper">
          <div className="footer__bottom-inner">
            <span className="footer__copy">
              © {year} NimAI. All rights reserved. Hosted on <strong>nimai.ai</strong>
            </span>
            <div className="footer__bottom-links">
              <a href="#home" className="footer__bottom-link">Privacy Policy</a>
              <a href="#home" className="footer__bottom-link">Terms of Service</a>
              <a href="#home" className="footer__bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
