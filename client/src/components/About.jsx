import styles from "./About.module.css";
import { Code2, Cpu, Globe } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4", label: "Hackathon Awards" },
  { value: "2+", label: "Projects Built" },
  { value: "25%", label: "Perf Improvement" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-label">About Me</div>
      <div className={styles.grid}>
        {/* Text */}
        <div className={styles.text}>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Building the web,<br />
            <span className={styles.accent}>one commit</span> at a time.
          </h2>
          <p className={styles.para}>
            I'm a Software Engineer based in Jaipur with a B.Tech in Computer Science from
            Dronacharya College of Engineering (2025). I specialize in building fast,
            accessible, and production-ready web applications using the MERN stack.
          </p>
          <p className={styles.para}>
            Currently at <strong className={styles.highlight}>eCareSoftech</strong>, I build scalable
            ReactJS and Next.js applications serving 1,000+ users, optimize performance,
            and integrate REST APIs. I have a strong passion for clean architecture and
            collaborative development in Agile environments.
          </p>
          <p className={styles.para}>
            When I'm not coding, I'm competing in hackathons — placing 2nd at IIIT Delhi,
            AIR 7 at IIT Jodhpur, and more.
          </p>

          <div className={styles.pillars}>
            {[
              { icon: <Code2 size={18} />, title: "Frontend", desc: "React, Next.js, responsive UI" },
              { icon: <Cpu size={18} />, title: "Backend", desc: "Node.js, REST APIs, SQL" },
              { icon: <Globe size={18} />, title: "Full-Stack", desc: "MERN, deployment, optimization" },
            ].map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <div className={styles.pillarTitle}>{p.title}</div>
                  <div className={styles.pillarDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats + Visual */}
        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{ background: "#f78166" }} />
              <span className={styles.dot} style={{ background: "#e3b341" }} />
              <span className={styles.dot} style={{ background: "#3fb950" }} />
              <span className={styles.codeFile}>yogesh.config.js</span>
            </div>
            <pre className={styles.code}>{`const yogesh = {
  role: "Software Engineer",
  location: "Jaipur, India",
  stack: ["React", "Next.js",
          "Node.js", "MongoDB",
          "SQL"],
  education: "B.Tech CSE '25",
  open_to: "Full-time roles",
  email: "rajputyash072
         @gmail.com"
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
