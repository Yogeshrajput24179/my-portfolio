import { useState } from "react";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company:    "eCareSoftech",
    role:       "Software Engineer",
    period:     "Aug 2025 – Present",
    location:   "Jaipur, India",
    type:       "Full-time",
    color:      "#58a6ff",
    points: [
      "Developed scalable web applications using ReactJS, Next.js, Node.js, and SQL, supporting 1,000+ users.",
      "Built reusable components and optimized performance, improving page load speed by 25% and reducing development effort by 30%.",
      "Integrated REST APIs and performed debugging and testing, reducing production issues by 20%.",
    ],
    tech: ["ReactJS", "Next.js", "Node.js", "SQL"],
  },
  {
    company:    "Maruti Suzuki India Limited",
    role:       "Software Engineer Intern",
    period:     "Jan 2024 – Jun 2024",
    location:   "Gurgaon, India",
    type:       "Internship",
    color:      "#3fb950",
    points: [
      "Developed web modules using ReactJS, JavaScript, HTML, and CSS following modern UI standards.",
      "Supported backend logic with Node.js and SQL, optimizing reusable components to reduce dev time by 15%.",
      "Assisted in testing and debugging to improve system stability across multiple modules.",
    ],
    tech: ["ReactJS", "Node.js", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    company:    "DUCAT",
    role:       "Java Full Stack Trainee",
    period:     "Jan 2024 – Jul 2024",
    location:   "Pitampura, Delhi",
    type:       "Training",
    color:      "#e3b341",
    points: [
      "Built full-stack applications using Java, ReactJS, JavaScript, HTML, and CSS with end-to-end functionality.",
      "Managed MySQL databases, performed CRUD operations, and optimized queries to improve efficiency by 20%.",
      "Developed projects following MVC architecture and REST principles.",
    ],
    tech: ["Java", "ReactJS", "MySQL", "MVC", "REST"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="section">
      <div className="section-label">Experience</div>
      <h2 className="section-title">Where I've worked</h2>

      <div className={styles.layout}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {experiences.map((e, i) => (
            <button
              key={e.company}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
              style={active === i ? { borderLeftColor: e.color, color: e.color } : {}}
            >
              <span className={styles.tabCompany}>{e.company}</span>
              <span className={styles.tabType}>{e.type}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content} key={active}>
          <div className={styles.header}>
            <h3 className={styles.role}>
              {exp.role}{" "}
              <span className={styles.atCompany} style={{ color: exp.color }}>
                @ {exp.company}
              </span>
            </h3>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar size={13} /> {exp.period}
              </span>
              <span className={styles.metaItem}>
                <MapPin size={13} /> {exp.location}
              </span>
            </div>
          </div>

          <ul className={styles.points}>
            {exp.points.map((point, i) => (
              <li key={i} className={styles.point}>
                <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0, marginTop: 3 }} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className={styles.techRow}>
            {exp.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
