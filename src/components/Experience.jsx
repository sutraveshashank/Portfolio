import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey & Education</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Academic Background</span>
          </h2>
          <p className="section-subtitle">
            Professional software development internship and computer science education specializing in AI & ML.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTab('experience')}
            className={`btn ${activeTab === 'experience' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <Briefcase size={18} />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`btn ${activeTab === 'education' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </button>
        </div>

        {/* Work Experience View */}
        {activeTab === 'experience' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.2rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span className="badge badge-purple" style={{ marginBottom: '0.4rem' }}>{exp.type}</span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role} <span style={{ color: 'var(--accent-cyan)' }}>@ {exp.company}</span>
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={15} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
                  {exp.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education View */}
        {activeTab === 'education' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>{edu.grade}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <p style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.95rem' }}>
                      {edu.institution}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={15} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
