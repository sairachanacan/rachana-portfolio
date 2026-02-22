import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.scss';

const projects = [
  {
    title: 'VybeDrive',
    subtitle: 'Discovery Platform',
    description:
      'A modern discovery platform helping users find their perfect vibe in British Columbia. Built with Angular 19 and styled using Tailwind CSS and SCSS for a sleek dark-themed UI. Features a chip-based filtering system — a trending UX pattern — allowing users to quickly refine searches by category, mood, and location with interactive, tag-style selectors.',
    tech: ['Angular 19', 'Tailwind CSS', 'SCSS', 'Dark Theme', 'Responsive UI'],
    url: 'https://vybedrive.ca',
    color: 'blue',
    features: ['Vibe Matching', 'Dark Mode UI', 'BC Discovery', 'Modern Design'],
  },
  {
    title: 'Brow Loft',
    subtitle: 'Luxury Beauty Salon',
    description:
      'A premium beauty salon website for Brow Loft, serving Langley and Burnaby, Vancouver. Features an elegant design with booking system, service catalog, and location-specific pages — all crafted with a luxury aesthetic.',
    tech: ['React', 'SCSS', 'Responsive Design', 'SEO Optimized', 'Booking Integration'],
    url: 'https://browloft.ca',
    color: 'pink',
    features: ['Online Booking', 'Multi-Location', 'Service Catalog', 'Mobile Responsive'],
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="projects" id="projects">
      <div className="projects__container" ref={ref}>
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          Featured <span className="projects__highlight">Projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of projects showcasing my expertise in building modern,
          responsive, and scalable web applications.
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className={`projects__card projects__card--${project.color}`}>
              <div className="projects__card-glow" />

              <div className="projects__card-header">
                <span className="projects__card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="projects__card-subtitle">{project.subtitle}</span>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>

              <div className="projects__card-features">
                {project.features.map((f) => (
                  <span key={f} className="projects__card-feature">{f}</span>
                ))}
              </div>

              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="projects__card-tech-tag">{t}</span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__card-link"
                >
                  Visit Site
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
