import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Code2, Database, Github, Linkedin, Mail, Server, Terminal, Cpu, ExternalLink, FileText, Download } from "lucide-react";
import { experiences, projects, skills } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SocialRail() {
  return (
    <div className="side-social">
      <motion.a whileHover={{ scale: 1.08, y: -3 }} href="https://github.com/AditiT2003" target="_blank" rel="noreferrer"><Github size={14} /></motion.a>
      <motion.a whileHover={{ scale: 1.08, y: -3 }} href="https://www.linkedin.com/in/aditi-tanwar2617/" target="_blank" rel="noreferrer"><Linkedin size={14} /></motion.a>
      <motion.a whileHover={{ scale: 1.08, y: -3 }} href="mailto:tanwaraditi29@gmail.com"><Mail size={14} /></motion.a>
    </div>
  );
}

export function Hero({ onNavigate }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <section id="home" className="hero section">
        <Reveal>
          <div className="overline">portfolio.exe <i>—</i> initialize</div>
          <h1>Aditi Tanwar</h1>
          <div className="hero-role">Frontend Developer <b>·</b> UI/UX Designer</div>
          <p className="hero-desc">
            I design and build responsive, user-friendly web experiences with thoughtful interfaces, reusable React components and a strong focus on usability.
          </p>
          <div className="ctas">
            <motion.button className="cta primary" onClick={() => onNavigate("projects")} whileHover={{ y: -3 }}>
              Explore my work <ArrowUpRight size={14} />
            </motion.button>
            <motion.button className="cta" onClick={() => onNavigate("contact")} whileHover={{ y: -3 }}>
              Let's connect
            </motion.button>
          </div>
        </Reveal>

        <div className="hero-side">
          <motion.div
            className="orb"
            style={{ y: orbY }}
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="hero-terminal"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <div className="terminal-head"><span /><span /><span /><small>terminal</small></div>
            <div className="prompt">
              <b>aditi@portfolio</b>:~$ whoami<br />
              <span>frontend developer · ui/ux designer</span><br />
              <b>aditi@portfolio</b>:~$ focus<br />
              <span>react · figma · user experience</span><br />
              <b>aditi@portfolio</b>:~$ status<br />
              <span className="green">ready_to_build ✓</span>
            </div>
          </motion.div>
          <motion.div className="badge glass" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <strong>focus</strong>
            <em>frontend · UI/UX · product design</em>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function About() {
  const facts = [
    ["FRONTEND", "React", "TypeScript · JS · HTML · CSS"],
    ["DESIGN", "UI/UX", "Figma · Wireframes · Prototypes"],
    ["EDUCATION", "MCA", "JIMS Rohini · 2025–2027"],
  ];

  return (
    <section id="about" className="section">
      <SectionHeader number="01 — PROFILE" title="Design-minded. Frontend-focused." command="developer.about()" />
      <div className="about-layout">
        <Reveal className="about-main panel">
          <h3>Frontend development with a user-first design approach.</h3>
          <p>Frontend Developer and UI/UX Designer focused on creating responsive, accessible and visually clear web experiences using React.js, TypeScript, JavaScript, HTML and CSS.</p>
          <p>I enjoy translating ideas and user needs into clean interfaces, reusable components, thoughtful layouts and intuitive interactions.</p>
          <div className="quote">"Good design makes a product feel simple. Good frontend brings that experience to life."</div>
          <div className="resume-actions profile-resume-actions">
            <a className="resume-button primary" href="/aditi-tanwar-resume.pdf" target="_blank" rel="noreferrer">
              View Resume <ExternalLink size={13} />
            </a>
            <a className="resume-button" href="/aditi-tanwar-resume.pdf" download="Aditi-Tanwar-Resume.pdf">
              Download Resume <ArrowUpRight size={13} />
            </a>
          </div>
        </Reveal>
        <motion.div className="facts" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {facts.map(([label, value, meta]) => (
            <motion.div className="fact panel" key={label} variants={reveal} whileHover={{ y: -5 }}>
              <small>{label}</small><strong>{value}</strong><span>{meta}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader number="02 — EXPERIENCE" title="Where I've built." command="git log --career" />
      <motion.div className="experience panel" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.article
              className="job"
              key={item.company}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="job-dot" />
              <div className="job-top">
                <small>{item.period}</small>
                <small>{item.role}</small>
              </div>
              <h3>{item.company}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Projects({ onOpen }) {
  return (
    <section id="projects" className="section">
      <SectionHeader number="03 — SELECTED WORK" title="Things I've shipped." command="click a project →" />
      <motion.div className="project-list" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {projects.map((project) => (
          <motion.article
            className="project panel"
            key={project.slug}
            variants={reveal}
            whileHover={{ x: 5, borderColor: "rgba(154,114,255,.38)" }}
            onClick={() => onOpen(project.slug)}
            data-cursor="interactive"
          >
            <div className="project-no">{project.number}<b>{project.type}</b></div>
            <div className="project-info">
              <div className="project-status">{project.status}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <span className="project-link">view case study <ArrowUpRight size={12} /></span>
            </div>
            <div className={`project-visual ${project.accent}`}>
              <div className="window-dots"><i /><i /><i /></div>
              <motion.div className="screen-rows" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 3.2, repeat: Infinity }}>
                <span /><span /><span /><span />
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader number="04 — TOOLBOX" title="How I build." command="skills.json" />
      <motion.div className="skills" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {skills.map((skill) => (
          <motion.div className={`skill panel ${skill.color}`} key={skill.number} variants={reveal} whileHover={{ y: -6 }}>
            <Code2 size={19} />
            <h3>{skill.number} · {skill.category}</h3>
            <strong>{skill.title}</strong>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


export function Contact() {
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const body = encodeURIComponent(form.message.value);
    window.location.href = `mailto:tanwaraditi29@gmail.com?subject=Portfolio%20Contact&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <SectionHeader number="06 — CONNECT" title="Let's make something useful." />
      <div className="contact">
        <Reveal className="contact-copy panel">
          <h2>Have an idea?</h2>
          <p>Have a design challenge, frontend project or opportunity to create a better user experience? I'd love to hear about it.</p>
          <a className="mail" href="mailto:tanwaraditi29@gmail.com">tanwaraditi29@gmail.com</a>
          <p className="availability"><i /> Available for frontend & UI/UX opportunities</p>
        </Reveal>

        <motion.form className="form panel" onSubmit={submit} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <label>NAME</label><input name="name" placeholder="Your name" />
          <label>EMAIL</label><input name="email" type="email" placeholder="you@example.com" />
          <label>MESSAGE</label><textarea name="message" placeholder="Tell me about the project..." />
          <motion.button className="send" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Send message →</motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title, command }) {
  return (
    <div className="section-header">
      <div><div className="num">{number}</div><h2>{title}</h2></div>
      {command && <p>{command}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <span>© 2026 Aditi Tanwar</span>
      <span>Frontend Development · UI/UX Design</span>
      <span><a href="https://github.com/AditiT2003" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/aditi-tanwar2617/" target="_blank" rel="noreferrer">LinkedIn</a></span>
    </footer>
  );
}
