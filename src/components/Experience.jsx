import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.scss';

const experiences = [
  {
    role: 'Senior Front End Developer',
    company: 'Microgroove',
    project: 'Safe Harbor Marinas',
    period: 'Sep 2025 – Present',
    location: 'Vancouver, BC',
    highlights: [
      'Developed and maintained front-end modules using Angular 19, TypeScript, HTML, SCSS, and RxJS within a large-scale Nx monorepo architecture.',
      'Built reusable, standalone UI components for two major modules: Workflow Approval and the Notifications App.',
      'Utilized Azure DevOps for source control, pipeline deployments, and task tracking using PBIs and pull requests.',
      'Created a new standalone Angular app in the Nx workspace and successfully set up Azure DevOps pipelines for build and run processes.',
      'Integrated and tested RESTful APIs using Angular services for Create, update, and delete (CRUD) operations, ensuring real-time updates in Kendo UI Grids.',
      'Developed responsive UI using advanced Kendo UI components for enterprise-level consistency and performance.',
      'Applied Kendo UI, Angular Material, and custom styling for responsive and accessible UIs.',
      'Coordinated closely with backend and QA teams to troubleshoot integration issues and improve data consistency across modules.',
    ],
    tech: ['Angular 19', 'TypeScript', 'RxJS', 'SCSS', 'Nx', 'Kendo UI', 'Azure DevOps'],
  },
  {
    role: 'Front-End Developer',
    company: 'JESTA I.S',
    project: 'Phoenix & Harry Rosen',
    period: 'Mar 2023 – Sep 2025',
    location: '',
    highlights: [
      'Developed enterprise-grade front-end modules using Angular 17, TypeScript, HTML, SCSS, and RxJS.',
      'Integrated RESTful APIs, designed responsive UI with Tailwind CSS and Angular Material.',
      'Built and maintained modular, reusable components following Angular best practices.',
      'Implemented state management using NgRx, ensuring predictable UI behavior and efficient data handling.',
      'Integrated RESTful APIs with Angular services to dynamically render and update data in real time.',
      'Collaborated with designers to translate wireframes and UI specifications into reusable Angular components.',
      'Developed and maintained a cross-platform mobile app using React Native for iOS and Android with HTML and CSS.',
      'Integrated dynamic RESTful APIs for real-time product data, user authentication, and secure checkout flows.',
      'Implemented navigation and state management using React Navigation, Context API, and AsyncStorage.',
      'Created reusable UI components with Tailwind CSS and React Native Paper, ensuring brand consistency.',
      'Used React Hooks (useState, useEffect, useContext) for clean, modular component logic and side effects.',
    ],
    tech: ['Angular 17', 'TypeScript', 'RxJS', 'SCSS', 'Tailwind CSS', 'Angular Material', 'NgRx', 'React Native', 'REST APIs'],
  },
  {
    role: 'Front-End Developer',
    company: 'Bell',
    project: 'SIP Trunk Portal Client',
    period: 'Sep 2020 – Feb 2023',
    location: '',
    highlights: [
      'Developed and enhanced Angular 12 modules using TypeScript, HTML, CSS, SCSS and RxJS for real-time plan updates and billing workflows.',
      'Built modular, reusable UI components with Angular Reactive Forms, custom directives, and pipes.',
      'Optimized routing with Angular Router using lazy loading and route guards for performance and security.',
      'Used Linux (Ubuntu) for terminal operations, Git workflows, and package installs.',
      'Integrated dynamic RESTful APIs to fetch and display customer data, and billing history in real-time.',
      'Conducted extensive UI testing using Karma and Jasmine and resolved cross-browser compatibility issues to ensure consistent behavior.',
      'Collaborated in Agile ceremonies including sprint planning, grooming, and code reviews.',
      'Collaborated closely with QA and backend teams to debug API issues and improve integration stability.',
      'Debugged front-end performance bottlenecks using Chrome DevTools.',
    ],
    tech: ['Angular 12', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs', 'Karma', 'Jasmine', 'Linux'],
  },
  {
    role: 'UI Developer',
    company: 'Purple Talk',
    project: "Dr. Reddy's, Kalgudi & Service Aid",
    period: 'Nov 2017 – Nov 2019',
    location: '',
    highlights: [
      'Developed and styled responsive front-end pages using Angular 2, HTML5, and CSS3 for seamless cross-device user experiences.',
      'Built interactive UI components like navbars, dropdowns, modals, and forms using Bootstrap.',
      'Managed codebase and sprint progress using Git and JIRA to ensure smooth team collaboration.',
      'Collaborated with backend teams via Linux servers for integration and end-to-end testing.',
      'Applied Responsive Web Design (RWD) principles using Ionic and Bootstrap for mobile and tablet optimization.',
      'Applied Ionic framework to develop hybrid mobile interfaces, optimizing components for both iOS and Android platforms.',
      'Implemented Angular routing, two-way data binding, and form validations to streamline user workflows and data interactions.',
      'Created pixel-perfect layouts from design mockups, ensuring cross-browser compatibility and WCAG accessibility compliance.',
      'Followed Agile development practices to deliver features in sprints and participate in iterative UI feedback cycles.',
    ],
    tech: ['Angular 2', 'HTML5', 'CSS3', 'Bootstrap', 'Ionic', 'Git', 'JIRA', 'Linux'],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="experience" id="experience">
      <div className="experience__container" ref={ref}>
        <span className="section-label">Career</span>
        <h2 className="section-title">
          Work <span className="experience__highlight">Experience</span>
        </h2>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker">
                <div className="experience__dot" />
                {index < experiences.length - 1 && <div className="experience__line" />}
              </div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">
                      {exp.company} <span className="experience__separator">·</span> {exp.project}
                    </p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{exp.period}</span>
                    <span className="experience__location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience__highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="experience__tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="experience__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
