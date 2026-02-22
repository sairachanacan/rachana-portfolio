import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.scss';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '{ }',
    skills: ['HTML5', 'CSS3', 'SASS', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Angular (2–17)', 'React Native', 'Next.js', 'Python'],
  },
  {
    title: 'UI & Styling',
    icon: '◆',
    skills: ['Kendo UI', 'Tailwind CSS', 'Bootstrap', 'Angular Material', 'Responsive Design', 'Accessibility (WCAG)', 'Cross-browser Compatibility'],
  },
  {
    title: 'State & Data',
    icon: '⟳',
    skills: ['Redux', 'Context API', 'NgRx', 'RxJS'],
  },
  {
    title: 'Tools & Build Systems',
    icon: '⚙',
    skills: ['Webpack', 'Vite', 'Gulp', 'Rollup', 'NPM', 'Yarn', 'Cursor', 'GitHub Copilot', 'VS Code', 'Postman', 'Chrome DevTools'],
  },
  {
    title: 'CI/CD & Cloud',
    icon: '☁',
    skills: ['Azure DevOps', 'AWS', 'Terraform', 'Azure Web PubSub', 'Terragrunt'],
  },
  {
    title: 'Version Control & Testing',
    icon: '⟐',
    skills: ['Git', 'GitHub', 'Bitbucket', 'SVN', 'Jest', 'Jasmine', 'Karma'],
  },
  {
    title: 'Architecture & APIs',
    icon: '⬡',
    skills: ['SPAs', 'PWAs', 'MVC', 'RESTful APIs', 'SOAP', 'AJAX', 'JSON'],
  },
  {
    title: 'Design & OS',
    icon: '◎',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Windows', 'macOS', 'Linux'],
  },
  {
    title: 'AI Tools',
    icon: '✦',
    skills: ['Claude Code', 'GitHub Copilot', 'Cursor', 'AI-Assisted Vibe Coding'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills__container" ref={ref}>
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">
          Skills & <span className="skills__highlight">Technologies</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive toolkit built over 6+ years of front-end development,
          now supercharged with AI-powered workflows.
        </p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__category">
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
