import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Rachana
            <span className="footer__logo-bracket">/&gt;</span>
          </a>

          <nav className="footer__links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Sai Rachana Maguluri. Built with React & SCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
