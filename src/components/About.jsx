import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Brain, Bot, Server, ShieldCheck, Cpu, CheckCircle } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: <Brain size={26} color="var(--accent-cyan)" />,
      title: "Explainable AI & Machine Learning",
      description: "Specialized in interpretable ML classifiers. Published research using SBERT contextual embeddings paired with RuleFit & Decision Trees to achieve ~99.4% accuracy while keeping predictions fully auditable."
    },
    {
      icon: <Bot size={26} color="var(--accent-purple)" />,
      title: "Multi-Agent AI & LangGraph Workflows",
      description: "Engineering autonomous agentic systems using LangGraph, LangChain, and RAG pipelines. Built systems with Validator Agents that review, critique, and revise draft outputs before final delivery."
    },
    {
      icon: <Server size={26} color="var(--accent-emerald)" />,
      title: "Full-Stack Backend Development",
      description: "Hands-on experience developing RESTful APIs, Node.js/Express servers with Mongoose ODM, and Python (Django/Flask) applications supporting concurrent client traffic with 99%+ uptime."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Interpretable & <span className="gradient-text">Scalable AI Systems</span>
          </h2>
          <p className="section-subtitle">
            Computer Science undergraduate at Kommuri Pratap Reddy Institute of Technology (CGPA 8.0) combining deep ML research with practical full-stack software development.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="about-narrative-grid">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Bridging Machine Learning & Real-World Software Engineering
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                {personal.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Earlier academic work includes audio classification models achieving <strong style={{ color: 'var(--accent-cyan)' }}>95% accuracy</strong> via MFCC & FFT spectrogram analysis, anomaly detection in medical device telemetry data, and data visualization simulations for strategic decision-making.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle size={22} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Published Researcher in Explainable AI</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Classified railway communication threats with ~99.4% accuracy using interpretable models.</p>
                </div>
              </div>

              <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle size={22} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Multi-Agent Workflow Architect</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Designed AgenticBlog Engine using LangGraph with automated Validator revision loops.</p>
                </div>
              </div>

              <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle size={22} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Proven Backend Engineering Track Record</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Built Express/Node.js server with Mongoose ODM handling 8+ endpoints & 99%+ uptime at NexaNova-ProTech.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }} className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-glass)'
                }}
              >
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-narrative-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
