import React, { useState } from 'react';
import './Services.css';

const CONSULTING = [
  {
    icon: '🧭',
    title: 'Data & AI Strategy',
    desc: 'Roadmaps, tech selection, and governance for your AI initiatives.',
  },
  {
    icon: '🏗️',
    title: 'Architecture Review',
    desc: 'Scalability, performance, and cloud-native design audits.',
  },
  {
    icon: '🚀',
    title: 'Product Strategy',
    desc: '20+ years launching B2B & B2C products in Data and AI.',
  },
];

const SERVICES = [
  {
    id: 'data-eng',
    icon: '🗄️',
    title: 'Data Engineering',
    shortDesc: 'Robust, scalable data pipelines and infrastructure.',
    longDesc:
      'End-to-end pipelines, data lakes, and warehouses — batch and real-time streaming, with data quality built in at every stage.',
    tech: ['Spark', 'Kafka', 'dbt', 'Snowflake'],
    color: 'indigo',
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI / Machine Learning',
    shortDesc: 'Production-grade ML and AI models.',
    longDesc:
      'From feature engineering to deployment — LLMs, computer vision, NLP, and custom models that ship to production and create real value.',
    tech: ['PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face'],
    color: 'purple',
  },
  {
    id: 'ai-ops',
    icon: '⚙️',
    title: 'AI Ops',
    shortDesc: 'Reliable MLOps for the model lifecycle.',
    longDesc:
      'Automated training, versioning, monitoring, and drift detection — CI/CD for ML that keeps your models accurate and production-ready.',
    tech: ['MLflow', 'Kubeflow', 'SageMaker', 'Vertex AI'],
    color: 'cyan',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Data Analytics',
    shortDesc: 'Raw data into actionable intelligence.',
    longDesc:
      'Executive dashboards, governed metrics, and self-service BI that make complex data immediately understandable and decision-ready.',
    tech: ['Power BI', 'Tableau', 'Looker', 'BigQuery'],
    color: 'orange',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Management',
    shortDesc: 'Architect, migrate, and optimize the cloud.',
    longDesc:
      'Cloud migrations, multi-cloud architecture, and cost optimization across AWS, Azure, and GCP — secure, auditable infrastructure-as-code.',
    tech: ['AWS', 'Azure', 'GCP', 'Terraform'],
    color: 'teal',
  },
];

export default function Services() {
  const [active, setActive] = useState('data-eng');
  const activeService = SERVICES.find((s) => s.id === active);

  return (
    <section id="services" className="services">
      <div className="services__bg" />

      <div className="section-wrapper">
        <div className="services__header">
          <div className="section-tag">
            <span className="dot" />
            Consulting &amp; Services
          </div>
          <h2 className="services__heading">
            From Strategy to <span className="gradient-text">Production</span>
          </h2>
          <p className="services__subtext">
            One partner for the full journey — expert consulting backed by
            full-spectrum Data &amp; AI engineering, at any scale.
          </p>
        </div>

        {/* Consulting strip */}
        <div className="services__consulting">
          {CONSULTING.map(({ icon, title, desc }) => (
            <div key={title} className="services__consult-card">
              <span className="services__consult-icon">{icon}</span>
              <div>
                <h3 className="services__consult-title">{title}</h3>
                <p className="services__consult-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services__layout">
          {/* Sidebar tabs */}
          <div className="services__tabs">
            {SERVICES.map(({ id, icon, title, shortDesc, color }) => (
              <button
                key={id}
                className={`services__tab services__tab--${color}${active === id ? ' services__tab--active' : ''}`}
                onClick={() => setActive(id)}
              >
                <span className="services__tab-icon">{icon}</span>
                <div className="services__tab-text">
                  <span className="services__tab-title">{title}</span>
                  <span className="services__tab-short">{shortDesc}</span>
                </div>
                <svg className="services__tab-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {activeService && (
            <div key={active} className={`services__detail services__detail--${activeService.color}`}>
              <div className="services__detail-header">
                <div className={`services__detail-icon-wrap services__detail-icon-wrap--${activeService.color}`}>
                  <span>{activeService.icon}</span>
                </div>
                <div>
                  <h3 className="services__detail-title">{activeService.title}</h3>
                  <p className="services__detail-short">{activeService.shortDesc}</p>
                </div>
              </div>

              <p className="services__detail-desc">{activeService.longDesc}</p>

              <div className="services__tech-section">
                <p className="services__tech-label">Technologies &amp; Tools</p>
                <div className="services__tech-tags">
                  {activeService.tech.map((t) => (
                    <span key={t} className={`services__tech-tag services__tech-tag--${activeService.color}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="services__cta-row">
                <a href="#contact" className="btn-primary">
                  Discuss Your Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
