import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

/** Sticky navigation shared by every home-page section. */
export default function Navbar({ onNavigate }) {
  const links = [
    ["about", "ABOUT"],
    ["projects", "WORK"],
    ["skills", "SKILLS"],
    ["contact", "CONTACT"],
  ];

  return (
    <header className="topbar" aria-label="Primary navigation">
      <div className="shell topbar-inner">
        <button className="identity" onClick={() => onNavigate("home")} aria-label="Go to home">
          <span className="terminal-icon"><Terminal size={16} /></span>
          <span>
            <strong>ADITI TANWAR</strong>
            <small>FRONTEND · UI/UX DESIGN</small>
          </span>
        </button>

        <div className="command">
          <span>⌘ K</span>
          <b>●</b> available
        </div>

        <nav className="nav" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <motion.button
              key={id}
              onClick={() => onNavigate(id)}
              whileHover={{ y: -2 }}
              data-cursor="interactive"
            >
              {label}
            </motion.button>
          ))}
        </nav>
      </div>
    </header>
  );
}
