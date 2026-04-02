import { useEffect, useState } from "react";
import axios from "axios";
import { Github, ExternalLink, Loader2 } from "lucide-react";
import styles from "./Projects.module.css";

const fallbackProjects = [
  {
    _id: "1",
    title: "BharatCrafts",
    description:
      "A full-stack e-commerce platform featuring authentication, product management, order tracking, cart system, admin inventory dashboard, and user order history with REST API integration.",
    techStack: ["ReactJS", "Node.js", "MongoDB", "Express", "REST API"],
    githubUrl: "https://github.com/yogesh",
    liveUrl: "#",
    featured: true,
  },
  {
    _id: "2",
    title: "Karigar",
    description:
      "A responsive business website promoting local artisans. Optimized for UI performance, accessibility, and cross-browser compatibility, achieving a 30% improvement.",
    techStack: ["ReactJS", "Bootstrap", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/yogesh",
    liveUrl: "#",
    featured: true,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg2)", maxWidth: "100%", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I've built</h2>

        {loading ? (
          <div className={styles.loading}>
            <Loader2 size={28} className={styles.spinner} />
            <span>Loading projects...</span>
          </div>
        ) : (
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <a
            href="https://github.com/yogesh"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top accent line */}
      <div className={styles.topLine} />

      <div className={styles.cardTop}>
        <div className={styles.folderIcon}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
              stroke="#58a6ff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              title="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.techRow}>
        {project.techStack.map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
