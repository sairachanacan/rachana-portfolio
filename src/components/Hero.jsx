import { useEffect, useState } from 'react';
import './Hero.scss';

const roles = [
  'Senior Front-End Developer',
  'React & Angular Expert',
  'AI-Powered Developer',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__greeting">
          <span className="hero__wave">Hi there</span>
          <span className="hero__dot">,</span> I'm
        </div>

        <h1 className="hero__name">
          Sai Rachana
          <span className="hero__name-highlight"> Maguluri</span>
        </h1>

        <div className="hero__role">
          <span className="hero__role-text">{text}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__description">
          Crafting pixel-perfect, accessible, and performant web experiences
          with 6+ years of expertise. Building the future with AI-enhanced
          development workflows.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--outline">
            Get In Touch
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">6+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">20+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">AI Tools Mastered</span>
          </div>
        </div>
      </div>

    </section>
  );
}
