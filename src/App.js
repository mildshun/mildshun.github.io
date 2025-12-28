import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { NAV } from "./data";
import CertificationPage from "./pages/CertificationPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t) return t;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } catch (e) {
      return "dark";
    }
  });

  // Close menu when resizing to desktop (nice UX)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Handle scroll events for back-to-top button and reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* ignore */
    }
  };

  // Sync theme class on document root so CSS variables affect body/background
  useEffect(() => {
    try {
      document.documentElement.classList.toggle("light", theme === "light");
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  // Close mobile menu and scroll top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => window.dispatchEvent(new Event("scroll")), 120);
  }, [location]);

  return (
    <div className={"page" + (theme === "light" ? " light" : "")}>
      <header className="topbar">
        <div className="topbarInner">
          <Link className="brand" to="/" aria-label="Go to top">
            Darwin<span className="brandDot">.</span>
          </Link>

          <nav className="navDesktop">
            {NAV.map((item) => (
              <Link key={item.id} className="navBtn" to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle light / dark">
            {theme === "light" ? "☀️" : "🌙"}
          </button>

          <button className="menuBtn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="navMobile">
            {NAV.map((item) => (
              <Link key={item.id} className="navBtnMobile" to={item.path} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main>
        {showBackToTop && (
          <button className="backToTop" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
            ↑
          </button>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <footer className="footer">
          <div className="container muted">© {new Date().getFullYear()} Darwin Gunawan</div>
        </footer>
      </main>
    </div>
  );
}
