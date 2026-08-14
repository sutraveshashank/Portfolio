import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const { personal, skills, experience, education, projects, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          padding: '2.5rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)'
        }}
      >
        {/* Top Control Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-glass)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span className="badge badge-purple">Curriculum Vitae</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Shashank_Suthrave_Resume.pdf</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-md)',
                padding: '0.4rem',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="resume-sheet" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
          {/* Resume Header */}
          <div style={{ borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.3rem' }}>{personal.name}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.8rem' }}>
              {personal.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Phone size={14} /> {personal.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={14} /> {personal.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Mail size={14} /> {personal.email}
              </span>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={personal.social.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {personal.bio}
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Skills & Technical Expertise
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div>
                <strong>Programming:</strong> Python, Java, C, JavaScript, SQL
              </div>
              <div>
                <strong>Machine Learning:</strong> NLP, Deep Learning, Sentence-BERT, RuleFit, Decision Trees, Scikit-learn
              </div>
              <div>
                <strong>AI & Agentic Frameworks:</strong> LangGraph, LangChain, RAG, Prompt Engineering, PyTorch, TensorFlow
              </div>
              <div>
                <strong>Backend & Databases:</strong> Node.js, Express, Flask, Django, REST APIs, MongoDB, SQL, Power BI
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
              Work Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.98rem' }}>
                  <span>{exp.role} — {exp.company}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '0.25rem' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
              Featured Projects
            </h2>
            {projects.slice(0, 3).map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>{proj.title}</span>
                  <span style={{ color: 'var(--accent-purple)', fontSize: '0.85rem' }}>{proj.accuracy || proj.subtitle}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>
              Education & Certifications
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <div>
                  <strong>{edu.degree}</strong> — {edu.institution}
                </div>
                <span style={{ color: 'var(--text-muted)' }}>{edu.period} ({edu.grade})</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
