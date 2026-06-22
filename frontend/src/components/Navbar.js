import React, { useState, useEffect } from 'react';
import logo from '../assets/nimai_logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner section-wrapper">

        <a href="#home" className="navbar__brand" onClick={() => handleNav('#home')}>
          <img src={logo} alt="NimAI Logo" className="navbar__logo" />
        </a>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link${activeLink === href ? ' navbar__link--active' : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary navbar__cta" onClick={() => handleNav('#contact')}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
