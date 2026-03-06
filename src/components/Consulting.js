import React from 'react';
import './Consulting.css';

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="url(#ci1)"/>
        <path d="M12 32 Q24 16 36 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <circle cx="24" cy="24" r="4" fill="white"/>
        <circle cx="12" cy="32" r="3" fill="white" opacity="0.7"/>
        <circle cx="36" cy="32" r="3" fill="white" opacity="0.7"/>
        <defs>
          <linearGradient id="ci1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#4f46e5"/><stop offset="1" stopColor="#06b6d4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Data & AI Consulting',
    description:
      'Strategic consulting for your Data & AI initiatives — from roadmap definition, technology selection, and governance frameworks to AI ethics and implementation strategy.',
    highlights: ['AI Strategy & Roadmap', 'Technology Assessment', 'Data Governance', 'AI Ethics & Compliance'],
    accent: 'indigo',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="url(#ci2)"/>
        <rect x="10" y="18" width="8" height="20" rx="3" fill="white" opacity="0.9"/>
        <rect x="20" y="12" width="8" height="26" rx="3" fill="white"/>
        <rect x="30" y="22" width="8" height="16" rx="3" fill="white" opacity="0.7"/>
        <defs>
          <linearGradient id="ci2" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#8b5cf6"/><stop offset="1" stopColor="#4f46e5"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Architecture Review',
    description:
      'In-depth review and optimization of your product and platform architecture. We ensure scalability, reliability, and performance for high-traffic B2B and B2C applications.',
    highlights: ['System Design Review', 'Scalability Analysis', 'Performance Audit', 'Cloud-Native Patterns'],
    accent: 'purple',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="14" fill="url(#ci3)"/>
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="14" r="3" fill="white"/>
        <circle cx="33" cy="29" r="3" fill="white"/>
        <circle cx="15" cy="29" r="3" fill="white"/>
        <defs>
          <linearGradient id="ci3" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#06b6d4"/><stop offset="1" stopColor="#4f46e5"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'B2B & B2C Product Strategy',
    description:
      'Leverage our 20+ years of hands-on experience designing and launching products for enterprise and consumer markets across industries in the Data and AI space.',
    highlights: ['Product Roadmap Planning', 'Market Fit Analysis', 'Enterprise Integration', 'Go-to-Market Strategy'],
    accent: 'cyan',
  },
];

export default function Consulting() {
  return (
    <section id="consulting" className="consulting">
      <div className="consulting__bg-shape" />

      <div className="section-wrapper">
        <div className="consulting__header">
          <div className="section-tag">
            <span className="dot" />
            Consulting
          </div>
          <h2 className="consulting__heading">
            Expert Guidance for Your<br />
            <span className="gradient-text">Data &amp; AI Journey</span>
          </h2>
          <p className="consulting__subtext">
            With over <strong>20 years of deep expertise</strong> across B2B and B2C domains,
            our team helps you navigate the complexities of Data &amp; AI — from ideation
            to production-grade deployment.
          </p>
        </div>

        <div className="consulting__experience-bar">
          <div className="consulting__exp-item">
            <span className="consulting__exp-num gradient-text">20+</span>
            <span className="consulting__exp-text">Years Experience</span>
          </div>
          <div className="consulting__exp-divider" />
          <div className="consulting__exp-item">
            <span className="consulting__exp-num gradient-text">B2B</span>
            <span className="consulting__exp-text">Enterprise Solutions</span>
          </div>
          <div className="consulting__exp-divider" />
          <div className="consulting__exp-item">
            <span className="consulting__exp-num gradient-text">B2C</span>
            <span className="consulting__exp-text">Consumer Products</span>
          </div>
          <div className="consulting__exp-divider" />
          <div className="consulting__exp-item">
            <span className="consulting__exp-num gradient-text">Data</span>
            <span className="consulting__exp-text">&amp; AI Specialization</span>
          </div>
        </div>

        <div className="consulting__cards">
          {CARDS.map(({ icon, title, description, highlights, accent }) => (
            <div key={title} className={`consulting__card consulting__card--${accent}`}>
              <div className="consulting__card-icon">{icon}</div>
              <h3 className="consulting__card-title">{title}</h3>
              <p className="consulting__card-desc">{description}</p>
              <ul className="consulting__card-highlights">
                {highlights.map((h) => (
                  <li key={h} className="consulting__highlight">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="consulting__card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
