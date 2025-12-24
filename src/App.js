import "./App.css";

const projects = [
  { title: "MDM Pipelines", desc: "Spark/Delta Lake pipelines for large-scale data integration.", stack: "PySpark • Delta • AWS" },
  { title: "Backend API", desc: "FastAPI services with auth + MongoDB.", stack: "FastAPI • MongoDB • Docker" },
  { title: "Industrial Automation", desc: "SPI/OPC UA telemetry to InfluxDB + dashboards.", stack: "C++ • OPC UA • InfluxDB" },
];

export default function App() {
  return (
    <div className="page">
      <header className="container header">
        <div>
          <p className="kicker">Portfolio</p>
          <h1>Darwin Gunawan</h1>
          <p className="subtitle">
            Software / Data Engineer. I build reliable data pipelines, backend services, and automation.
          </p>
          <div className="links">
            <a className="btn" href="https://github.com/mildshun" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn secondary" href="#contact">Contact</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h2>{p.title}</h2>
              <p className="muted">{p.desc}</p>
              <p className="tag">{p.stack}</p>
            </article>
          ))}
        </section>

        <section className="card about">
          <h2>About</h2>
          <p className="muted">
            Based in Taiwan. Experienced with PySpark/Delta Lake, AWS, FastAPI, and DevOps (Docker/GitHub Actions).
            I like building systems that are observable, maintainable, and boring-in-production.
          </p>
        </section>

        <section id="contact" className="card about">
          <h2>Contact</h2>
          <p className="muted">Email: <a href="mailto:you@example.com">you@example.com</a></p>
          <p className="muted">LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">your-link</a></p>
        </section>

        <footer className="footer muted">© {new Date().getFullYear()} Darwin Gunawan</footer>
      </main>
    </div>
  );
}
