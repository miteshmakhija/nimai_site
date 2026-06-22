import React, { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'connect@nimai.ai';
const WEB3FORMS_KEY = 'cd20bfd2-f30e-404b-9fd1-cf26f33a97de';

const ADDRESS_LINES = [
  'TEN Lab Cowork, udChalo House',
  '10, Phoenix Boundary Road',
  'opp. UpSouth Hotel, Sakore Nagar',
  'Viman Nagar, Pune, Maharashtra 411014',
];

const MAPS_QUERY = encodeURIComponent(
  'TEN Lab Cowork, udChalo House, 10, Phoenix Boundary Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014'
);
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;

const TOPICS = [
  'iProcessAI / Process Intelligence',
  'Physical AI & Digital Twin',
  'RFQ Automation',
  'Manufacturing 4.0',
  'Consulting & Services',
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `NimAI Inquiry — ${form.topic || 'General'}`,
          from_name: 'NimAI Website',
          name: form.name,
          email: form.email,
          company: form.company || 'Not provided',
          topic: form.topic,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', company: '', topic: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error — please check your connection and try again.');
    } finally {
      setSending(false);
    }
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
              <div className="contact__info-item contact__info-item--address">
                <div className="contact__info-icon">📍</div>
                <div>
                  <span className="contact__info-label">Visit Us</span>
                  <address className="contact__address">
                    {ADDRESS_LINES.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__info-value contact__maps-link"
                  >
                    View on Google Maps
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H8M17 7v9"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <iframe
                title="NimAI — TEN Lab Cowork, Viman Nagar, Pune"
                src={MAPS_EMBED}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Message Sent</h3>
                <p>
                  Thanks for reaching out — your message has been delivered to the NimAI team.
                  We'll get back to you within 1 business day.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
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

                {error && <p className="contact__error">{error}</p>}

                <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                  {!sending && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
