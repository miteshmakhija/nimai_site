import React from 'react';
import './Hero.css';

const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: 'B2B', label: '& B2C Expertise' },
  { value: '3',   label: 'AI Products in Pipeline' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Animated background orbs */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner section-wrapper">

        <div className="hero__content">
          <h1 className="hero__heading">
            Transforming Business<br />
            with <span className="gradient-text">AI&#8209;Powered</span><br />
            Solutions
          </h1>

          <p className="hero__subtext">
            NimAI brings <strong>20+ years of expertise</strong> in Data &amp; AI to accelerate
            your digital transformation — from strategy and consulting to
            full-scale product engineering and cloud deployment.
          </p>

          <div className="hero__actions">
            <a href="#services" className="btn-primary">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* Floating AI visual */}
        <div className="hero__visual">
          <div className="hero__ai-card">
            <div className="hero__ai-ring hero__ai-ring--outer" />
            <div className="hero__ai-ring hero__ai-ring--inner" />
            <div className="hero__ai-core">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__ai-icon">
                <circle cx="40" cy="40" r="36" stroke="url(#g1)" strokeWidth="2" strokeDasharray="6 3"/>
                <circle cx="40" cy="40" r="20" fill="url(#g2)" opacity="0.15"/>
                <circle cx="40" cy="40" r="10" fill="url(#g1)"/>
                <circle cx="40" cy="14" r="4" fill="url(#g1)"/>
                <circle cx="40" cy="66" r="4" fill="url(#g1)"/>
                <circle cx="14" cy="40" r="4" fill="url(#g2)"/>
                <circle cx="66" cy="40" r="4" fill="url(#g2)"/>
                <line x1="40" y1="18" x2="40" y2="30" stroke="url(#g1)" strokeWidth="1.5"/>
                <line x1="40" y1="50" x2="40" y2="62" stroke="url(#g1)" strokeWidth="1.5"/>
                <line x1="18" y1="40" x2="30" y2="40" stroke="url(#g2)" strokeWidth="1.5"/>
                <line x1="50" y1="40" x2="62" y2="40" stroke="url(#g2)" strokeWidth="1.5"/>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8b5cf6"/>
                    <stop offset="1" stopColor="#4f46e5"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating badges */}
            <div className="hero__badge hero__badge--tl">
              <span className="hero__badge-icon">🤖</span>
              <span>AI / ML</span>
            </div>
            <div className="hero__badge hero__badge--tr">
              <span className="hero__badge-icon">☁️</span>
              <span>Cloud</span>
            </div>
            <div className="hero__badge hero__badge--bl">
              <span className="hero__badge-icon">🔢</span>
              <span>Data Eng.</span>
            </div>
            <div className="hero__badge hero__badge--br">
              <span className="hero__badge-icon">⚙️</span>
              <span>AI Ops</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats-bar">
        <div className="section-wrapper">
          <div className="hero__stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value gradient-text">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
