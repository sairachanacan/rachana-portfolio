import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.scss';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about__container" ref={ref}>
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning Ideas Into
            <span className="about__highlight"> Digital Reality</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a <strong>Senior Front-End Developer</strong> with over 6 years
              of experience building scalable web and mobile applications. I
              specialize in <strong>Angular 19</strong> and <strong>React.js</strong>,
              creating fast, responsive, and maintainable user interfaces.
            </p>
            <p>
              My toolkit spans <strong>TypeScript, CSS-in-JS, HTML/XHTML, SCSS,
              CSS</strong> and modern build systems like <strong>Webpack</strong> and
              <strong> Vite</strong>. I thrive in monorepo architectures using
              <strong> Nx</strong> and leverage AI-powered tools like
              <strong> Claude Code, GitHub Copilot</strong>, and <strong>Cursor</strong> to
              ship cleaner code faster.
            </p>
            <p>
              Currently at <strong>Microgroove</strong>, I build enterprise-grade
              modules for the <strong>Safe Harbor Marinas</strong> project — from
              Workflow Approval systems to real-time Notification apps — all
              within a large-scale Nx monorepo with Azure DevOps pipelines.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Vancouver, BC</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">sairachanacan@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Specialization</span>
                <span className="about__info-value">Front-End Development</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">AI Enhanced</span>
                <span className="about__info-value">Claude, Copilot, Cursor</span>
              </div>
            </div>
          </div>

          <div className="about__visual">
            <div className="about__card about__card--ai">
              <div className="about__card-icon">🤖</div>
              <h4>AI-First Workflow</h4>
              <p>Leveraging AI tools for faster iteration, cleaner code, and improved development efficiency.</p>
            </div>
            <div className="about__card about__card--code">
              <div className="about__card-icon">⚡</div>
              <h4>Performance Obsessed</h4>
              <p>Building lightning-fast SPAs, PWAs, and responsive applications with modern frameworks.</p>
            </div>
            <div className="about__card about__card--design">
              <div className="about__card-icon">🎨</div>
              <h4>Pixel Perfect</h4>
              <p>Translating designs into accessible, cross-browser compatible, and responsive interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
