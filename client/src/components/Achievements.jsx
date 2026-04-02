import { Trophy, Award } from "lucide-react";
import styles from "./Achievements.module.css";

const achievements = [
  { icon: "🏆", title: "2nd Place", event: "IIIT Delhi Hackathon", type: "Hackathon" },
  { icon: "🥇", title: "AIR 7",     event: "IIT Jodhpur Hackathon", type: "Hackathon" },
  { icon: "🏆", title: "2nd Place", event: "DCE Hackathon",         type: "Hackathon" },
  { icon: "🎖️", title: "Finalist",  event: "KRMU Hackathon",        type: "Hackathon" },
];

const certifications = [
  { name: "Web Development",   issuer: "Internshala",  color: "#58a6ff" },
  { name: "Web Designing",     issuer: "DSSD",         color: "#3fb950" },
  { name: "C Programming",     issuer: "IIT Bombay",   color: "#e3b341" },
  { name: "React",             issuer: "HackerRank",   color: "#f78166" },
  { name: "NCAT Excellence",   issuer: "National",     color: "#a371f7" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-label">Recognition</div>
      <h2 className="section-title">Achievements & Certs</h2>

      <div className={styles.layout}>
        {/* Hackathons */}
        <div>
          <div className={styles.groupLabel}>
            <Trophy size={14} style={{ color: "#e3b341" }} />
            Hackathon Results
          </div>
          <div className={styles.hackGrid}>
            {achievements.map((a) => (
              <div key={`${a.title}-${a.event}`} className={styles.hackCard}>
                <div className={styles.hackIcon}>{a.icon}</div>
                <div className={styles.hackTitle}>{a.title}</div>
                <div className={styles.hackEvent}>{a.event}</div>
                <span className={styles.hackType}>{a.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className={styles.groupLabel}>
            <Award size={14} style={{ color: "#58a6ff" }} />
            Certifications
          </div>
          <div className={styles.certList}>
            {certifications.map((cert) => (
              <div key={cert.name} className={styles.certItem}>
                <div className={styles.certDot} style={{ background: cert.color }} />
                <div className={styles.certInfo}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                </div>
                <div className={styles.certBadge} style={{ borderColor: cert.color, color: cert.color }}>
                  Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
