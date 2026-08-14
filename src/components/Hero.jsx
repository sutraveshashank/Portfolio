import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, MapPin, CheckCircle2, Brain, Code, Cpu } from 'lucide-react';

export default function Hero({ openResumeModal }) {
  const { personal } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personal.typingTitles[titleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % personal.typingTitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personal.typingTitles]);

  return (
    <section className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column - Headline & Information */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: 'var(--accent-emerald)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span>{personal.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Sparkles size={22} color="var(--accent-cyan)" />
              <span style={{ color: 'var(--accent-cyan)' }}>{displayText}</span>
              <span style={{ animation: 'blink 1s infinite', color: 'var(--accent-purple)' }}>|</span>
            </div>

            {/* Sub-Tagline / Bio Snippet */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '640px',
                marginBottom: '2.5rem'
              }}
            >
              {personal.tagline} CS undergrad specializing in AI & ML with published research achieving{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>99.4% accuracy</strong> in explainable railway threat detection and agentic AI workflows with <strong style={{ color: 'var(--accent-purple)' }}>LangGraph & RAG</strong>.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
              <button onClick={openResumeModal} className="btn btn-secondary">
                <Download size={18} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent-pink)" />
                <span>{personal.location}</span>
              </div>
              <div style={{ width: '1px', height: '16px', background: 'var(--border-glass)' }} />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Github size={20} />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personal.social.email}
                  aria-label="Email"
                  style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-pink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Metrics & Visual Avatar Card */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.2rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, var(--bg-glass), rgba(31, 41, 61, 0.6))',
                border: '1px solid var(--border-glow)'
              }}
            >
              {/* Decorative Tech Icon Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Brain size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>AI / ML Specialist</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Explainable Models & Agentic AI</p>
                  </div>
                </div>
                <span className="badge badge-cyan">KPRIT 2026</span>
              </div>

              {/* Grid of Key Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2rem' }}>
                {personal.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.1rem',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {metric.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Tech Badges */}
              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '1.2rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>CORE TECH STACK</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-cyan">Python</span>
                  <span className="badge badge-purple">Sentence-BERT</span>
                  <span className="badge badge-purple">LangGraph</span>
                  <span className="badge badge-cyan">PyTorch</span>
                  <span className="badge badge-emerald">Node.js</span>
                  <span className="badge">SQL & Mongo</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
