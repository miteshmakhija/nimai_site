import React, { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'connect@nimai.ai';

const TOPICS = [
  'Data & AI Consulting',
  'Architecture Review',
  'Data Engineering',
  'AI / Machine Learning',
  'AI Ops',
  'Data Analytics',
  'Cloud Management',
  'iProcessAI Product',
  'Other',
];

const CONTACT_HIGHLIGHTS = [
  'Strategy, architecture, and delivery discussions',
  'Data, AI, cloud, and iProcessAI inquiries',
  'Quick response for demos and consulting requests',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`NimAI Inquiry - ${form.topic}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || 'Not provided'}`,
        `Area of Interest: ${form.topic}`,
        '',
        'Message:',
        form.message,
      ].join('\n')
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__bg" />

      <div className="section-wrapper">
        <div className="contact__grid">

          {/* Left info panel */}
          <div className="contact__info">
            <div className="section-tag">
              <span className="dot" />
              Contact Us
            </div>
            <h2 className="contact__heading">
              Let's Build Something<br />
              <span className="gradient-text">Extraordinary Together</span>
            </h2>
            <p className="contact__desc">
              Whether you're planning a new AI initiative, modernizing your data platform,
              or evaluating iProcessAI for operations transformation, NimAI is ready to help
              you move from idea to execution.
            </p>

            <div className="contact__highlights">
              {CONTACT_HIGHLIGHTS.map((item) => (
                <div key={item} className="contact__highlight-item">
                  <span className="contact__highlight-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">📧</div>
                <div>
                  <span className="contact__info-label">Email Us</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="contact__info-value">{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">🌐</div>
                <div>
                  <span className="contact__info-label">Website</span>
                  <a href="https://nimai.ai" className="contact__info-value">nimai.ai</a>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452H17.2v-5.569c0-1.328-.024-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.964V9.756h3.115v1.495h.044c.434-.822 1.494-1.689 3.075-1.689 3.289 0 3.896 2.165 3.896 4.977v5.913h-.647zM5.337 8.26a1.81 1.81 0 1 1 0-3.619 1.81 1.81 0 0 1 0 3.619zM6.966 20.452H3.706V9.756h3.26v10.696zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.431.372.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Email Draft Opened</h3>
                <p>
                  Your default mail app has been opened with a prefilled message to {CONTACT_EMAIL}.
                  Send the email there to reach the NimAI team.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Create Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-header">
                  <div>
                    <p className="contact__form-tag">Start a conversation</p>
                    <h3 className="contact__form-title">Tell us about your requirement</h3>
                  </div>
                  <span className="contact__form-badge">Response within 1 business day</span>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="topic">Area of Interest *</label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a topic...</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project or question..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
