export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo">
        Purinat Sanbundit
      </a>
      <nav className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        href="/Purinat_Sanbundit_CV_2026.pdf"
        download
        className="btn btn-primary btn-sm"
      >
        Download CV
      </a>
    </header>
  );
}
