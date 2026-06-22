import React, { useState, useEffect } from 'react';
import './Products.css';

const RFQ_STEPS = [
  { n: '1', icon: '📥', label: 'RFQ Received',        sub: 'Captured from sales' },
  { n: '2', icon: '🔀', label: 'Custom Workflow',     sub: 'Routed per customer' },
  { n: '3', icon: '✅', label: 'Approval Gates',      sub: 'Stakeholder sign-off' },
  { n: '4', icon: '📊', label: 'Tracking Dashboard',  sub: 'Pending → Approved' },
];

export default function Products() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e) => { if (e.key === 'Escape') setShowVideo(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showVideo]);

  return (
    <section id="products" className="products">
      <div className="products__bg-left" />
      <div className="products__bg-right" />

      <div className="section-wrapper">

        <div className="products__header">
          <div className="section-tag">
            <span className="dot" />
            Products · Manufacturing 4.0
          </div>
          <h2 className="products__heading">
            Three Products, One <span className="gradient-text">Intelligent</span> Factory
          </h2>
          <p className="products__subtext">
            Our product suite makes operations autonomous, predictive, and resilient —
            from process intelligence to physical AI and automated quoting.
          </p>
        </div>

        {/* Product 1 — Process Intelligence (iProcessAI) */}
        <div className="products__hero-card">
          <div className="products__hero-left">
            <div className="products__badge">
              <span className="products__badge-dot" />
              Now in Development
            </div>
            <h3 className="products__hero-title">iProcessAI</h3>
            <p className="products__hero-tagline">
              Process Intelligence for the Manufacturing 4.0 Era
            </p>
            <p className="products__hero-desc">
              iProcessAI eliminates operational bottlenecks by autonomously discovering, mapping, and
              automating end-to-end industrial workflows. Its process-intelligence engine learns how work
              really flows, then sets new efficiency standards across <strong>Manufacturing 4.0</strong> and
              smart-warehouse operations.
            </p>
            <div className="products__hero-actions">
              <button type="button" className="btn-primary" onClick={() => setShowVideo(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch the Demo
              </button>
              <a href="#contact" className="btn-secondary">
                Join the Waitlist
              </a>
            </div>
          </div>

          <div className="products__hero-right">
            <div className="products__visual">
              {/* Central AI brain node */}
              <div className="products__node products__node--center">
                <div className="products__node-pulse" />
                <span className="products__node-label">iProcessAI</span>
              </div>

              {/* Satellite process nodes */}
              {[
                { top: '8%',  left: '50%',  label: 'Discover' },
                { top: '50%', left: '92%',  label: 'Automate' },
                { top: '86%', left: '65%',  label: 'Optimize' },
                { top: '86%', left: '35%',  label: 'Monitor' },
                { top: '50%', left: '8%',   label: 'Deploy' },
              ].map(({ top, left, label }) => (
                <div key={label} className="products__satellite" style={{ top, left }}>
                  <div className="products__satellite-dot" />
                  <span className="products__satellite-label">{label}</span>
                </div>
              ))}

              {/* Connection lines via SVG */}
              <svg className="products__lines" viewBox="0 0 300 300" fill="none">
                <line x1="150" y1="150" x2="150" y2="30"  stroke="url(#pl1)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="150" y1="150" x2="270" y2="150" stroke="url(#pl1)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="150" y1="150" x2="200" y2="260" stroke="url(#pl1)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="150" y1="150" x2="100" y2="260" stroke="url(#pl1)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="150" y1="150" x2="30"  y2="150" stroke="url(#pl1)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <defs>
                  <linearGradient id="pl1" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#cc6f4e" stopOpacity="0.6"/>
                    <stop offset="1" stopColor="#d97757" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Product 2 — Physical AI & Digital Twin */}
        <div className="products__hero-card products__hero-card--reverse">
          <div className="products__hero-right">
            <div className="products__twin">
              <svg
                className="products__twin-svg"
                viewBox="0 0 420 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="A physical factory machine synced in real time with its digital twin"
              >
                <defs>
                  <linearGradient id="tw-clay" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#e2895a" />
                    <stop offset="1" stopColor="#c9633c" />
                  </linearGradient>
                  <linearGradient id="tw-clay-top" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#cf6e45" />
                    <stop offset="1" stopColor="#b3552f" />
                  </linearGradient>
                  <linearGradient id="tw-screen" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#1b3a5c" />
                    <stop offset="1" stopColor="#0f2640" />
                  </linearGradient>
                  <linearGradient id="tw-beam" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#e0a458" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#e0a458" />
                    <stop offset="1" stopColor="#e0a458" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* ground shadows */}
                <ellipse cx="118" cy="262" rx="78" ry="13" fill="#1f1e1d" opacity="0.07" />
                <ellipse cx="312" cy="262" rx="78" ry="13" fill="#1f1e1d" opacity="0.07" />

                {/* PHYSICAL machine */}
                <g className="products__twin-physical">
                  <rect x="58" y="150" width="120" height="105" rx="16" fill="url(#tw-clay)" />
                  <rect x="78" y="104" width="80" height="42" rx="12" fill="url(#tw-clay-top)" />
                  <rect x="108" y="138" width="20" height="16" fill="#a44e2c" />
                  <circle cx="118" cy="198" r="30" fill="#ffffff" opacity="0.92" />
                  <circle cx="118" cy="198" r="17" fill="none" stroke="#c9633c" strokeWidth="5" />
                  <circle cx="118" cy="198" r="5" fill="#b3552f" />
                  <rect x="78" y="232" width="80" height="12" rx="6" fill="#ffffff" opacity="0.35" />
                </g>

                {/* data beam */}
                <rect x="178" y="195" width="64" height="6" rx="3" fill="url(#tw-beam)" />
                <circle className="products__twin-pulse" cx="210" cy="198" r="6" fill="#e0a458" />

                {/* DIGITAL TWIN screen */}
                <g>
                  <rect x="242" y="96" width="132" height="164" rx="18" fill="url(#tw-screen)" />
                  {/* grid */}
                  <g stroke="#5b8bbf" strokeOpacity="0.22" strokeWidth="1">
                    <line x1="242" y1="130" x2="374" y2="130" />
                    <line x1="242" y1="164" x2="374" y2="164" />
                    <line x1="242" y1="198" x2="374" y2="198" />
                    <line x1="242" y1="232" x2="374" y2="232" />
                    <line x1="276" y1="96" x2="276" y2="260" />
                    <line x1="308" y1="96" x2="308" y2="260" />
                    <line x1="340" y1="96" x2="340" y2="260" />
                  </g>
                  {/* wireframe machine mirroring physical */}
                  <g stroke="#e0a458" strokeWidth="2" fill="none">
                    <rect x="276" y="170" width="64" height="58" rx="10" strokeDasharray="6 4" />
                    <rect x="288" y="138" width="40" height="24" rx="8" strokeDasharray="6 4" />
                    <circle cx="308" cy="198" r="16" strokeDasharray="5 4" />
                    <circle cx="308" cy="198" r="4" fill="#e0a458" stroke="none" />
                  </g>
                  {/* scan line */}
                  <rect className="products__twin-scan" x="248" y="110" width="120" height="3" rx="1.5" fill="#e0a458" opacity="0.5" />
                  {/* status chip */}
                  <rect x="256" y="240" width="46" height="9" rx="4.5" fill="#4f8a4f" opacity="0.85" />
                </g>

                {/* floating data nodes */}
                <circle className="products__twin-node" cx="356" cy="84" r="5" fill="#d97757" />
                <circle className="products__twin-node products__twin-node--2" cx="388" cy="128" r="3.5" fill="#e0a458" />
              </svg>

              <div className="products__twin-legend">
                <span className="products__twin-legend-item"><i className="products__twin-dot products__twin-dot--clay" /> Physical asset</span>
                <span className="products__twin-legend-item"><i className="products__twin-dot products__twin-dot--amber" /> Digital twin</span>
              </div>
            </div>
          </div>

          <div className="products__hero-left">
            <div className="products__badge products__badge--clay">
              <span className="products__badge-dot" />
              New · In Development
            </div>
            <h3 className="products__hero-title products__hero-title--clay">Physical AI &amp; Digital Twin</h3>
            <p className="products__hero-tagline">
              Where the Factory Floor Meets Its Intelligent Mirror
            </p>
            <p className="products__hero-desc">
              We connect machines, sensors, and robots to a live <strong>digital twin</strong> of your plant —
              a real-time virtual replica that mirrors every asset. Physical AI then closes the loop: perceiving
              the floor, simulating outcomes, and driving autonomous decisions back to the equipment.
            </p>
            <ul className="products__twin-list">
              {[
                'Real-time digital twins of plants, lines, and assets',
                'Predictive maintenance from live sensor data',
                'What-if simulation before you build',
                'Closed-loop control from AI insight to actuation',
              ].map((item) => (
                <li key={item} className="products__twin-list-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="products__hero-actions">
              <a href="#contact" className="btn-primary">
                Explore Digital Twin
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Product 3 — RFQ Automation */}
        <div className="products__hero-card">
          <div className="products__hero-left">
            <div className="products__badge">
              <span className="products__badge-dot" />
              New · In Development
            </div>
            <h3 className="products__hero-title">RFQ Automation</h3>
            <p className="products__hero-tagline">
              Turn Every Quote Request into a Tracked, Approved Deal
            </p>
            <p className="products__hero-desc">
              RFQ Automation captures each <strong>Request for Quotation</strong> the moment it reaches your
              sales team and routes it through a workflow tailored to every customer. Built-in approval gates
              get the right people to sign off, while a live dashboard tracks each request end-to-end — so you
              always know whether a quote is pending, approved, or closed.
            </p>
            <ul className="products__twin-list">
              {[
                'Automatic capture of incoming RFQs from sales',
                'Configurable, customer-specific approval workflows',
                'Multi-step sign-off with clear ownership at each gate',
                'Real-time dashboard tracking status to final approval',
              ].map((item) => (
                <li key={item} className="products__twin-list-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="products__hero-actions">
              <a href="#contact" className="btn-primary">
                Automate Your RFQs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="products__hero-right">
            <div className="products__rfq">
              {RFQ_STEPS.map(({ n, icon, label, sub }, i) => (
                <div key={n} className="products__rfq-step">
                  <div className="products__rfq-node">
                    <span className="products__rfq-num">{n}</span>
                  </div>
                  <div className="products__rfq-body">
                    <span className="products__rfq-icon">{icon}</span>
                    <div>
                      <span className="products__rfq-label">{label}</span>
                      <span className="products__rfq-sub">{sub}</span>
                    </div>
                  </div>
                  {i < RFQ_STEPS.length - 1 && <span className="products__rfq-connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Process Intelligence demo video modal */}
      {showVideo && (
        <div className="products__modal" onClick={() => setShowVideo(false)} role="dialog" aria-modal="true" aria-label="Process Intelligence demo">
          <div className="products__modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="products__modal-close"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <video
              className="products__modal-video"
              src={`${process.env.PUBLIC_URL}/process-intelligence-demo.mp4`}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
