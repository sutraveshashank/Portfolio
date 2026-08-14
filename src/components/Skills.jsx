import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Bot,
  Cpu,
  Brain,
  Network,
  Layers,
  Binary,
  Server,
  Terminal,
  Database,
  BarChart3,
  FileCode,
  Table,
  Webhook,
  GitBranch,
  Wrench,
  Search
} from 'lucide-react';

// Icon Map helper
const iconComponents = {
  Code2: <Code2 size={20} color="var(--accent-cyan)" />,
  Bot: <Bot size={20} color="var(--accent-purple)" />,
  Cpu: <Cpu size={20} color="var(--accent-pink)" />,
  Brain: <Brain size={20} color="var(--accent-cyan)" />,
  Network: <Network size={20} color="var(--accent-purple)" />,
  Layers: <Layers size={20} color="var(--accent-emerald)" />,
  Binary: <Binary size={20} color="var(--accent-cyan)" />,
  Server: <Server size={20} color="var(--accent-emerald)" />,
  Terminal: <Terminal size={20} color="var(--accent-amber)" />,
  Database: <Database size={20} color="var(--accent-purple)" />,
  BarChart3: <BarChart3 size={20} color="var(--accent-pink)" />,
  FileCode: <FileCode size={20} color="var(--accent-cyan)" />,
  Table: <Table size={20} color="var(--accent-emerald)" />,
  Webhook: <Webhook size={20} color="var(--accent-amber)" />,
  GitBranch: <GitBranch size={20} color="var(--accent-cyan)" />
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Tech Stack & Skills</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive skill set spanning machine learning, deep learning, agentic AI systems, full-stack backend development, and data analytics.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.2rem', marginBottom: '2.5rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {skills.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeCategory === cat.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                  background: activeCategory === cat.id ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-glass)',
                  color: activeCategory === cat.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search skills (e.g. PyTorch, SBERT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 1rem 0.5rem 2.6rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)'
              }}
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {iconComponents[skill.icon] || <Code2 size={20} color="var(--accent-cyan)" />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {skill.name}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {skill.tag}
                    </span>
                  </div>
                </div>
                <span className="badge badge-cyan">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: skill.category === 'agentic' ? 'var(--accent-purple)' : skill.category === 'data' ? 'var(--accent-emerald)' : 'var(--gradient-primary)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 1s ease-in-out'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            No skills matched your search query. Try searching for "Python", "SBERT", or "LangGraph".
          </div>
        )}

      </div>
    </section>
  );
}
