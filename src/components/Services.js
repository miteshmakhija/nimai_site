import React, { useState } from 'react';
import './Services.css';

const SERVICES = [
  {
    id: 'data-eng',
    icon: '🗄️',
    title: 'Data Engineering',
    shortDesc: 'Build robust, scalable data pipelines and infrastructure.',
    longDesc:
      'Design and implement end-to-end data pipelines, data lakes, and warehouse architectures. We handle batch and real-time streaming, ETL/ELT processes, and ensure data quality at every stage — enabling your organization to trust and act on its data.',
    tech: ['Apache Spark', 'Kafka', 'dbt', 'Airflow', 'Snowflake', 'Databricks'],
    color: 'indigo',
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI / Machine Learning',
    shortDesc: 'Build and deploy production-grade ML and AI models.',
    longDesc:
      'From exploratory data analysis and feature engineering to model training, evaluation, and deployment — we build ML systems that create real business value. LLMs, computer vision, NLP, recommendation engines, and custom neural architectures.',
    tech: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'LangChain', 'OpenAI', 'Hugging Face'],
    color: 'purple',
  },
  {
    id: 'ai-ops',
    icon: '⚙️',
    title: 'AI Ops',
    shortDesc: 'Operationalize AI with reliable MLOps practices.',
    longDesc:
      'Streamline the ML lifecycle with automated training pipelines, model versioning, monitoring, and drift detection. We implement CI/CD for ML, ensuring your models stay accurate, fair, and production-ready over time.',
    tech: ['MLflow', 'Kubeflow', 'SageMaker', 'Vertex AI', 'DVC', 'Seldon'],
    color: 'cyan',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Data Analytics',
    shortDesc: 'Turn raw data into actionable business intelligence.',
    longDesc:
      'Deliver self-service analytics, executive dashboards, and deep-dive analysis that drive decisions. We design semantic layers, implement governed metrics, and build interactive visualizations that make complex data immediately understandable.',
    tech: ['Power BI', 'Tableau', 'Looker', 'dbt Metrics', 'Apache Superset', 'BigQuery'],
    color: 'orange',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Management',
    shortDesc: 'Architect, migrate, and optimize cloud infrastructure.',
    longDesc:
      'Plan and execute cloud migrations, design multi-cloud architectures, and optimize costs without sacrificing performance or reliability. We specialize in AWS, Azure, and GCP — delivering infrastructure-as-code solutions that are secure and auditable.',
    tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
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
            Services
          </div>
          <h2 className="services__heading">
            Full-Spectrum <span className="gradient-text">Data &amp; AI</span><br />
            Engineering Services
          </h2>
          <p className="services__subtext">
            End-to-end engineering capabilities to design, build, and operate
            world-class data and AI systems at any scale.
          </p>
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

        {/* Bottom feature grid */}
        <div className="services__features">
          {[
            { icon: '🚀', text: 'Rapid prototyping to production deployment' },
            { icon: '🔒', text: 'Security-first, compliance-ready architecture' },
            { icon: '📈', text: 'Scales with your business growth' },
            { icon: '🤝', text: 'Dedicated team, transparent delivery' },
          ].map(({ icon, text }) => (
            <div key={text} className="services__feature">
              <span className="services__feature-icon">{icon}</span>
              <span className="services__feature-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
