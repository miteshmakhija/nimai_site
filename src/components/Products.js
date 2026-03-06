import React from 'react';
import './Products.css';

const FEATURES = [
  {
    icon: '🔍',
    title: 'Process Discovery',
    desc: 'Automatically discovers and maps all processes required for project completion using AI-driven analysis of workflows, tasks, and dependencies.',
  },
  {
    icon: '🏭',
    title: 'Warehouse Management',
    desc: 'First vertical: Manufacturing Warehouse Management — automating inventory tracking, order workflows, picking, packing, and dispatch operations.',
  },
  {
    icon: '🧠',
    title: 'AI Decision Engine',
    desc: 'Embedded AI engine that recommends process optimizations, detects bottlenecks, and predicts resource needs before they become issues.',
  },
  {
    icon: '🔄',
    title: 'Adaptive Automation',
    desc: 'Processes self-improve over time using reinforcement learning, adapting to changing business rules and operational patterns.',
  },
  {
    icon: '📋',
    title: 'Process Templates Library',
    desc: 'Ready-to-deploy process templates across industries — drastically reducing onboarding time for new clients and verticals.',
  },
  {
    icon: '📡',
    title: 'Real-time Monitoring',
    desc: 'Live dashboards and alerts for every stage of your operational workflow, with deep traceability and audit logs.',
  },
];

const ROADMAP = [
  { phase: '01', label: 'Manufacturing', sub: 'Warehouse Management', icon: '🏭', status: 'active' },
  { phase: '02', label: 'Healthcare',    sub: 'Clinical Operations',  icon: '🏥', status: 'upcoming' },
  { phase: '03', label: 'Retail',        sub: 'Supply Chain & Ops',   icon: '🛒', status: 'upcoming' },
  { phase: '04', label: 'Finance',       sub: 'Process Compliance',   icon: '💼', status: 'upcoming' },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products__bg-left" />
      <div className="products__bg-right" />

      <div className="section-wrapper">

        <div className="products__header">
          <div className="section-tag">
            <span className="dot" />
            Products
          </div>
          <h2 className="products__heading">
            Introducing <span className="gradient-text-alt">iProcessAI</span>
          </h2>
          <p className="products__subtext">
            The intelligent process automation platform that <strong>discovers, designs, and deploys</strong> operational
            workflows — powered by AI at its core.
          </p>
        </div>

        {/* Hero product card */}
        <div className="products__hero-card">
          <div className="products__hero-left">
            <div className="products__badge">
              <span className="products__badge-dot" />
              Now in Development
            </div>
            <h3 className="products__hero-title">iProcessAI</h3>
            <p className="products__hero-tagline">
              Process Automation for the AI Era
            </p>
            <p className="products__hero-desc">
              iProcessAI autonomously discovers the complete set of processes needed for any project,
              generates intelligent automation workflows, and continuously optimizes them. Starting with
              Manufacturing Warehouse Management, we're systematically transforming operations across industries.
            </p>
            <div className="products__hero-actions">
              <a href="#contact" className="btn-primary">
                Join the Waitlist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Request a Demo
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
                    <stop stopColor="#8b5cf6" stopOpacity="0.6"/>
                    <stop offset="1" stopColor="#4f46e5" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="products__features-header">
          <h3 className="products__features-title">
            Platform Capabilities
          </h3>
        </div>

        <div className="products__features">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="products__feature-card">
              <div className="products__feature-icon">{icon}</div>
              <h4 className="products__feature-title">{title}</h4>
              <p className="products__feature-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Industry roadmap */}
        <div className="products__roadmap">
          <h3 className="products__roadmap-title">Industry Expansion Roadmap</h3>
          <div className="products__roadmap-items">
            {ROADMAP.map(({ phase, label, sub, icon, status }) => (
              <div key={phase} className={`products__roadmap-item products__roadmap-item--${status}`}>
                <div className="products__roadmap-phase">{phase}</div>
                <div className="products__roadmap-icon">{icon}</div>
                <div className="products__roadmap-text">
                  <span className="products__roadmap-label">{label}</span>
                  <span className="products__roadmap-sub">{sub}</span>
                </div>
                {status === 'active' && (
                  <span className="products__roadmap-badge">Active</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
