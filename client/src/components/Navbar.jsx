import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ FIXED SCROLL FUNCTION
  const handleScroll = (id) => {
    setTimeout(() => {
      const section = document.querySelector(`#${id}`);
      if (section) {
        const yOffset = -80; // navbar height
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);

    setOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        
        {/* Logo */}
        <div
          onClick={() => handleScroll("hero")}
          className={styles.logo}
          style={{ cursor: "pointer" }}
        >
          <span className={styles.logoAccent}>Y</span>ogesh
          <span className={styles.logoCursor}>_</span>
        </div>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {links.map((l, i) => (
            <li key={l.href} style={{ animationDelay: `${i * 60}ms` }}>
              <button
                onClick={() => handleScroll(l.href)}
                className={styles.link}
                type="button"
              >
                <span className={styles.linkNum}>0{i + 1}.</span>
                {l.label}
              </button>
            </li>
          ))}

          {/* Resume */}
          <li>
            <a
              href="/my-portfolio/yogeshResume(2).pdf"
              download
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleScroll(l.href)}
              className={styles.mobileLink}
            >
              {l.label}
            </button>
          ))}

          <a
            href="/my-portfolio/Yogesh_Resume.pdf"
            download
            className={styles.mobileResume}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
