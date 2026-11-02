import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import { SocialRail, Hero, About, Experience, Projects, Skills, Contact, Footer } from "./components/Home";
import "./styles.css";

/** Root application: controls loading, section navigation and project pages. */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("home");
  const [projectSlug, setProjectSlug] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  const navigate = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setView("home");
    setProjectSlug(null);

    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const openProject = (slug) => {
    setProjectSlug(slug);
    setView("project");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const closeProject = () => {
    setView("home");
    setProjectSlug(null);

    window.requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <Loader done={!loading} />

      <AnimatePresence mode="wait">
        {view === "home" ? (
          <div key="home" className="app">
            <Navbar onNavigate={navigate} />
            <SocialRail />

            <main className="shell">
              <Hero onNavigate={navigate} />
              <About />
              <Experience />
              <Projects onOpen={openProject} />
              <Skills />
              <Contact />
              <Footer />
            </main>
          </div>
        ) : (
          <ProjectPage key={projectSlug} slug={projectSlug} onBack={closeProject} />
        )}
      </AnimatePresence>
    </>
  );
}
