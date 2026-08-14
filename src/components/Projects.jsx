import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, Star } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'aiml', name: 'AI & Machine Learning' },
    { id: 'agentic', name: 'Agentic AI & GenAI' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'data', name: 'Data Analytics' }
  ];

  const filteredProjects = projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section id="projects" className="section" style={{ background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="section-title">
            Innovations & <span className="gradient-text">Research Work</span>
          </h2>
          <p className="section-subtitle">
            From published explainable AI research to autonomous multi-agent LangGraph systems and high-throughput backend APIs.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '0.55rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === cat.id ? '1px solid var(--accent-purple)' : '1px solid var(--border-glass)',
                background: activeTab === cat.id ? 'rgba(168, 85, 247, 0.15)' : 'var(--bg-glass)',
                color: activeTab === cat.id ? 'var(--accent-purple)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }} className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: project.featured ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid var(--border-glass)'
              }}
            >
              {/* Card Top: Badges */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="badge badge-purple">{project.subtitle}</span>
                  {project.accuracy && (
                    <span className="badge badge-cyan" style={{ fontFamily: 'var(--font-mono)' }}>
                      {project.accuracy}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.summary}
                </p>

                {/* Technologies Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.72rem' }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge" style={{ fontSize: '0.72rem' }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Eye size={16} />
                  <span>View Details</span>
                </button>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repo"
                    style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
