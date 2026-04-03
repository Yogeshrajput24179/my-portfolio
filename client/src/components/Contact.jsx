import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/contact", form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err.response?.data?.errors?.[0]?.msg || err.response?.data?.error || "Failed to send. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-label">Contact</div>
      <h2 className={`section-title ${styles.title}`}>
        Let's work together
      </h2>
      <p className={styles.subtitle}>
        I'm currently open to full-time opportunities. Whether you have a question,
        a project idea, or just want to say hi — my inbox is always open.
      </p>

      <div className={styles.layout}>
        {/* Info */}
        <div className={styles.info}>
          <div className={styles.infoCards}>
            {[
              { icon: <Mail size={18} />, label: "Email",    value: "rajputyash072@gmail.com", href: "mailto:rajputyash072@gmail.com" },
              { icon: <Phone size={18} />, label: "Phone",   value: "+91-9650862245",            href: "tel:+919650862245" },
              { icon: <MapPin size={18} />, label: "Based",  value: "Jaipur / Delhi, India",     href: null },
            ].map((item) => (
              <div key={item.label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className={styles.infoValue}>{item.value}</a>
                  ) : (
                    <div className={styles.infoValue}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/Yogeshrajput24179" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yogesh-rajput-467989249/" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            Available for full-time roles
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className={styles.textarea}
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className={`btn-primary ${styles.submitBtn}`}
            disabled={loading}
          >
            {loading ? (
              <>Sending... <span className={styles.spinIcon}>⟳</span></>
            ) : (
              <>Send Message <Send size={15} /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
