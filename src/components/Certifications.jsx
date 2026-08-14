import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and simulations validating expertise in AI, machine learning, data visualization, and SAP cloud analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.2rem',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                    marginBottom: '1rem'
                  }}
                >
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {cert.issuer}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-glass)', paddingTop: '0.8rem' }}>
                <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>{cert.badge}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
