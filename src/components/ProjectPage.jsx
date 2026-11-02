import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

/** Dedicated case-study view. Clicking a project animates into this page. */
export default function ProjectPage({ slug, onBack }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0, x: 45 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -45 }}
      transition={{ duration: 0.45, ease }}
    >
      <div className="project-nav">
        <button className="back" onClick={onBack}><ArrowLeft size={14} /> Back to work</button>
        <span>project/{project.slug}</span>
      </div>

      <div className="project-hero">
        <div>
          <div className={`project-kicker ${project.accent}`}>{project.number} / {project.type}</div>
          <h1>{project.title}</h1>
          <div className="project-period">{project.period} <span>·</span> {project.status}</div>
          <p>{project.details}</p>
          <div className="chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <a className="cta primary project-cta" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            Open project <ExternalLink size={13} />
          </a>
        </div>

        <motion.div className={`case-visual ${project.accent}`} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
          <div className="case-top"><span /><span /><span /><small>{project.slug}.tsx</small></div>
          <div className="case-code">
            <span>01</span> <b>const</b> project = {"{"}<br />
            <span>02</span> &nbsp; name: <i>"{project.title}"</i>,<br />
            <span>03</span> &nbsp; status: <i>"{project.status}"</i>,<br />
            <span>04</span> &nbsp; stack: [<i>"{project.stack.slice(0, 3).join('", "')}"</i>]<br />
            <span>05</span> {"}"}
          </div>
          <motion.div className="case-scan" animate={{ y: [0, 230, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </div>

      <div className="case-bottom">
        <div className="case-block">
          <small>WHAT I BUILT</small>
          <h2>From idea to working product.</h2>
          <p>{project.description}</p>
        </div>
        <div className="case-block">
          <small>TECHNOLOGY</small>
          <div className="tech-grid">
            {project.stack.map((item, index) => (
              <motion.span key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.05 }}>
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
