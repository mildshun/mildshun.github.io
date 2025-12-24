import "./App.css";
import { useEffect, useState } from "react";

const NAV = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
      // Show back-to-top button after scrolling down
      setShowBackToTop(window.scrollY > 300);

      // Reveal elements on scroll
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // If you have a sticky header, offset the scroll
    const headerOffset = 72; // px
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbarInner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to top">
            Darwin<span className="brandDot">.</span>
          </button>

          <nav className="navDesktop">
            {NAV.map((item) => (
              <button key={item.id} className="navBtn" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button className="menuBtn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="navMobile">
            {NAV.map((item) => (
              <button key={item.id} className="navBtnMobile" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            className="backToTop"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </button>
        )}

        {/* HERO */}
        <section id="home" className="hero reveal">
          <div className="container heroGrid">
            <div className="heroLeft">
              <p className="kicker">Portfolio</p>
              <h1>
                Hi, I&apos;m <span className="accent">Darwin</span> 👋
              </h1>
              <p className="subtitle">
                Software / Data Engineer. I build reliable data pipelines, backend services, and automation.
              </p>

              <div className="ctaRow">
                <button className="btn primary" onClick={() => scrollTo("contact")}>Contact Me</button>
                <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>

              <div className="iconRow">
                <a className="icon" href="https://github.com/mildshun" target="_blank" rel="noreferrer">GitHub</a>
                <a className="icon" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="icon" href="mailto:you@example.com">Email</a>
              </div>
            </div>

            <div className="heroRight">
              <img
                  src="/profile.png"
                  alt="Darwin Gunawan"
                  className="heroImage"
                />
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section id="skills" className="section reveal">
          <div className="container">
            <h2>Skills</h2>
            <div className="grid">
              <div className="card">
                <h3>Data</h3>
                <p>PySpark, Delta Lake, Databricks, SQL, S3</p>
              </div>
              <div className="card">
                <h3>Backend</h3>
                <p>FastAPI, .NET, Spring Boot, REST, Auth</p>
              </div>
              <div className="card">
                <h3>DevOps</h3>
                <p>Docker, GitHub Actions, Ansible, Kubernetes</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt reveal">
          <div className="container">
            <h2>Work Experience</h2>
            <div className="stack">
              <div className="card">
                <h3>CDK Global — Data Engineer</h3>
                <p className="muted">Built large-scale request/response pipelines (Spark/Delta), improved reliability & monitoring.</p>
              </div>
              <div className="card">
                <h3>Industrial Automation Projects</h3>
                <p className="muted">SPI/OPC UA integrations, time-series telemetry to InfluxDB, dashboards in Grafana.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="container">
            <h2>Projects</h2>
            <div className="grid">
              <div className="card">
                <h3>MDM ETL Pipeline</h3>
                <p className="muted">Delta merges, dynamic schema handling, S3 I/O, monitoring.</p>
              </div>
              <div className="card">
                <h3>Badminton Store Web App</h3>
                <p className="muted">Product catalog + admin dashboard (planned), FastAPI backend.</p>
              </div>
              <div className="card">
                <h3>OPC UA Telemetry Collector</h3>
                <p className="muted">C++ collector sending metrics to InfluxDB with Grafana dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt reveal">
          <div className="container">
            <h2>Contact</h2>
            <div className="card">
              <p className="muted">Email: <a href="mailto:you@example.com">you@example.com</a></p>
              <p className="muted">GitHub: <a href="https://github.com/mildshun" target="_blank" rel="noreferrer">mildshun</a></p>
              <p className="muted">LinkedIn: <a href="#" target="_blank" rel="noreferrer">your-link</a></p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container muted">© {new Date().getFullYear()} Darwin Gunawan</div>
        </footer>
      </main>
    </div>
  );
}