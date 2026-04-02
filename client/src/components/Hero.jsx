import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Hero.module.css";

const roles = [
  "Software Engineer",
  "React Developer",
  "Full-Stack Developer",
  "Next.js Developer",
  "MERN Stack Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Grid background */}
      <div className={styles.grid} />
      {/* Glow */}
      <div className={styles.glow} />

      <div className={styles.content}>
        <p className={styles.greeting} style={{ animationDelay: "0ms" }}>
          <span className={styles.greetingLine} /> Hi, my name is
        </p>

        <h1 className={styles.name} style={{ animationDelay: "100ms" }}>
          Yogesh.
          <span className={styles.nameGlitch} aria-hidden="true">Yogesh.</span>
        </h1>

        <h2 className={styles.role} style={{ animationDelay: "200ms" }}>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </h2>

        <p className={styles.bio} style={{ animationDelay: "350ms" }}>
          Software Engineer with <span className={styles.highlight}>1+ year of experience</span> crafting
          scalable web applications. Passionate about clean code, performance,
          and building products that make a difference.
          <br />Currently at{" "}
          <span className={styles.highlight}>eCareSoftech, Jaipur</span>.
        </p>

        <div className={styles.actions} style={{ animationDelay: "450ms" }}>
          <a href="#projects" className="btn-primary">
            View My Work <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        <div className={styles.socials} style={{ animationDelay: "550ms" }}>
          <a href="https://github.com/yogesh" target="_blank" rel="noreferrer" className={styles.socialLink} title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yogesh" target="_blank" rel="noreferrer" className={styles.socialLink} title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rajputyash072@gmail.com" className={styles.socialLink} title="Email">
            <Mail size={20} />
          </a>
          <div className={styles.socialLine} />
        </div>
      </div>

      <a href="#about" className={styles.scrollDown}>
        <span className={styles.scrollText}>scroll</span>
        <div className={styles.scrollDot} />
      </a>
    </section>
  );
}
