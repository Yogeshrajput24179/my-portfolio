import styles from "./Footer.module.css";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.accent}>Y</span>ogesh
        </div>
        <p className={styles.copy}>
          Designed & built by Yogesh with{" "}
          <Heart size={12} className={styles.heart} /> using MERN Stack
        </p>
        <div className={styles.links}>
          <a href="https://github.com/yogesh" target="_blank" rel="noreferrer" className={styles.link}>
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/yogesh" target="_blank" rel="noreferrer" className={styles.link}>
            <Linkedin size={16} />
          </a>
          <a href="mailto:rajputyash072@gmail.com" className={styles.link}>
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
