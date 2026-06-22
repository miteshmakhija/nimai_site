import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner section-wrapper">
        <div className="hero__content">
          <h1 className="hero__heading">
            Powering<br />
            <span className="gradient-text">Manufacturing&nbsp;4.0</span><br />
            with AI
          </h1>

          <p className="hero__subtext">
            NimAI brings <strong>20+ years of expertise</strong> in Data &amp; AI to drive the
            smart-factory revolution &mdash; uniting intelligent process automation, physical AI,
            and digital twins with full-spectrum consulting, engineering, and cloud.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn-primary">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
