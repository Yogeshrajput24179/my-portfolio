import styles from "./Skills.module.css";

const skillGroups = [
  {
    category: "Frontend",
    color: "#58a6ff",
    skills: [
      { name: "ReactJS",     level: 90 },
      { name: "Next.js",     level: 82 },
      { name: "JavaScript",  level: 88 },
      { name: "HTML5 / CSS3",level: 92 },
      { name: "Bootstrap",   level: 80 },
    ],
  },
  {
    category: "Backend",
    color: "#3fb950",
    skills: [
      { name: "Node.js",     level: 78 },
      { name: "Express.js",  level: 75 },
      { name: "REST APIs",   level: 85 },
    ],
  },
  {
    category: "Databases",
    color: "#e3b341",
    skills: [
      { name: "MongoDB",     level: 75 },
      { name: "MySQL / SQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    color: "#f78166",
    skills: [
      { name: "Git / GitHub",level: 85 },
      { name: "VS Code",     level: 92 },
      { name: "MVC Pattern", level: 78 },
      { name: "Agile / SDLC",level: 75 },
    ],
  },
];

const techBadges = [
  "ReactJS","Next.js","JavaScript","TypeScript","HTML5","CSS3",
  "Bootstrap","Node.js","Express.js","REST APIs","MongoDB","MySQL",
  "SQL","Git","GitHub","VS Code","Java","MVC","Agile",
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg2)", maxWidth: "100%", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div className="section-label">Skills</div>
        <h2 className="section-title">
          Tech I work with
        </h2>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.dot} style={{ background: group.color }} />
                <span className={styles.category} style={{ color: group.color }}>
                  {group.category}
                </span>
              </div>
              <div className={styles.bars}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.barRow}>
                    <div className={styles.barLabel}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct} style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${skill.level}%`, background: group.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge cloud */}
        <div className={styles.badgeSection}>
          <p className={styles.badgeTitle}>All Technologies</p>
          <div className={styles.badges}>
            {techBadges.map((tech) => (
              <span key={tech} className={`tag ${styles.badge}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
