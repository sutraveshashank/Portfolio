import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Terminal, Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)', padding: '3rem 0 2rem', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-glass)' }}>

          {/* Logo & Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Terminal size={18} />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                Shashank<span className="gradient-text"> Suthrave</span>
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI/ML Engineer</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.88rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-full)',
              padding: '0.6rem 1.2rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'var(--transition)'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} color="var(--accent-cyan)" />
          </button>

        </div>

        {/* Bottom Line */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} Shashank Suthrave. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Built with React, Vite & Glassmorphism Aesthetics
          </p>
        </div>

      </div>
    </footer>
  );
}
