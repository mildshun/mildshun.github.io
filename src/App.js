import "./App.css";
import { useEffect, useState } from "react";

const NAV = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certification", label: "Certification" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t) return t;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
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

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  };

  // Sync theme class on document root so CSS variables affect body/background
  useEffect(() => {
    try {
      document.documentElement.classList.toggle('light', theme === 'light');
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  return (
    <div className={"page" + (theme === 'light' ? ' light' : '')}>
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

          <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle light / dark">
            {theme === 'light' ? '🌙' : '🌞'}
          </button>

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
        <section id="home" className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <p className="kicker">Portfolio</p>
              <h1>
          Hi, I&apos;m <span className="accent">Darwin</span> 👋
              </h1>
              <p className="subtitle">
          Software / Data Engineer based in Taipei, Taiwan. I build reliable data pipelines, backend services, and automation.
              </p>

              <div className="ctaRow">
          <button className="btn primary" onClick={() => scrollTo("contact")}>Contact Me</button>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>

              <div className="iconRow">
          <a className="icon" href="https://github.com/mildshun" target="_blank" rel="noreferrer">GitHub</a>
          <a className="icon" href="https://www.linkedin.com/in/darwingwn/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="icon" href="mailto:drwngwn@gmail.com">Email</a>
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
                <h3>TAO Digital Taiwan — Backend Developer</h3>
                <p className="muted">Taipei, Taiwan · Feb 2025 - Current</p>
                <ul className="muted">
                  <li>Worked in a data/AI team using Databricks (Spark/Delta Lake) to build batch pipelines that update and sync records with third-party platforms.</li>
                  <li>Handled millions of records with validation, checks, and multi-field formatting.</li>
                  <li>Built Java Spring Boot Kafka listeners and authored unit tests to ensure data processing correctness and reliability.</li>
                </ul>
              </div>

              <div className="card">
                <h3>Broalux Taiwan Limited — Software Developer</h3>
                <p className="muted">Taipei, Taiwan · Sept 2024 - Feb 2025</p>
                <ul className="muted">
                  <li>Worked on a real-time data collection project using an IoT device for analog-to-digital conversion.</li>
                  <li>Built microservices for device-server communication and set up automated deployments with Ansible and Kubernetes.</li>
                  <li>Implemented a Grafana dashboard using JavaScript to visualize collected telemetry data.</li>
                </ul>
              </div>

              <div className="card">
                <h3>Pegatron Corporation — AI Engineer Intern</h3>
                <p className="muted">Taipei, Taiwan · June 2024 – Aug 2024</p>
                <ul className="muted">
                  <li>Developed a chatbot AI agent that responds to user requests based on an answer-sheet format.</li>
                  <li>Designed and implemented the backend API for user-agent communication.</li>
                  <li>Project won first place in the 2024 Pegatron Summer Internship competition.</li>
                </ul>
              </div>

              <div className="card">
                <h3>CLV Mitra Indonesia — Freelance Full Stack Developer</h3>
                <p className="muted">Batam, Indonesia · Sept 2021 – Aug 2024</p>
                <ul className="muted">
                  <li>Developed a web application for delivery integration with multiple third-party services, enabling real-time order tracking and menu uploads.</li>
                  <li>Created a queue web board for customers to monitor order status and designed database flow processes.</li>
                  <li>Built a microservice for OCR document scanning to automate data extraction and storage.</li>
                </ul>
              </div>

              <div className="card">
                <h3>Remote Worker Indonesia — Flutter Developer Intern</h3>
                <p className="muted">Bandung, Indonesia · June 2020 - Aug 2020</p>
                <ul className="muted">
                  <li>Worked on a Flutter-based information storage project for an education-sector client.</li>
                  <li>Implemented CRUD functionality and documented progress to support client knowledge-sharing initiatives.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="container">
            <h2>Projects</h2>
            <div className="stack">
              <div className="card">
                <h3><a href="https://drive.google.com/drive/folders/1GphM3ra2sof3Mgrzg3UHSD-sGO8l8D6Q?usp=drive_link" target="_blank" rel="noreferrer" className="projectLink">StyleSpire — Stable Diffusion Inpainting for Virtual Try-On</a></h3>
                <p className="muted"><strong>Sep 2023 - Dec 2023</strong></p>
                <p className="muted"><strong>Computer Vision · Generative AI · Diffusion Models</strong></p>
                <p className="muted">A virtual fashion try-on system that enables users to apply new outfits to images while preserving the subject's original pose and structure. Combines Stable Diffusion inpainting, human parsing, and pose estimation to generate realistic outfit transformations.</p>
                <ul className="muted">
                  <li>Automated outfit inpainting using Stable Diffusion</li>
                  <li>Precise segmentation via Pixel-Wise Majority Voting (PWMV)</li>
                  <li>Enhanced fashion element recognition using BLIP-2 image captioning</li>
                  <li>Strong visual quality and pose consistency — e-commerce and personal styling applications</li>
                </ul>
              </div>

              <div className="card">
                <h3><a href="https://drive.google.com/drive/folders/1B2cUB-eOsPHX-f_xOraGbqb7lynwUJsl?usp=drive_link" target="_blank" rel="noreferrer" className="projectLink">Market Basket Analysis for 7-Eleven</a></h3>
                <p className="muted"><strong>May 2023 - Jun 2023</strong></p>
                <p className="muted"><strong>Data Mining · Customer Analytics · Association Rules</strong></p>
                <p className="muted">Performed comprehensive customer and product analysis to discover purchasing patterns and product relationships.</p>
                <ul className="muted">
                  <li>RFM-AR metrics to segment customer behavior</li>
                  <li>FP-Growth to discover frequent itemsets and association rules</li>
                  <li>Revealed meaningful product relationships supporting cross-selling and promotion planning</li>
                  <li>Insights for inventory optimization and retail decision-making</li>
                </ul>
              </div>

              <div className="card">
                <h3><a href="https://drive.google.com/drive/folders/1X3TPDKgFdOASOW42-s5H6nYOpPp_sKbh?usp=drive_link" target="_blank" rel="noreferrer" className="projectLink">Sentiment Classification Using Averaged Word2Vec</a></h3>
                <p className="muted"><strong>Sep 2022 - Dec 2022</strong></p>
                <p className="muted"><strong>NLP · Machine Learning · Text Classification</strong></p>
                <p className="muted">Proposed a sentiment classification approach using averaged Word2Vec embeddings combined with a dense neural network to handle variable-length text.</p>
                <ul className="muted">
                  <li>Evaluated on IMDb movie review dataset — outperformed classical ML, LSTM, Doc2Vec, and rating-mapping approaches</li>
                  <li>Higher accuracy with lower computational cost</li>
                  <li>Improved generalization using a single vector representation per review</li>
                  <li>Balances performance and efficiency for large-scale text classification</li>
                </ul>
              </div>

              <div className="card">
                <h3><a href="https://drive.google.com/drive/folders/1ScegQKPS12LJkiFfEHxkmj6zqqZoWmJ8?usp=drive_link" target="_blank" rel="noreferrer" className="projectLink">Two-Step SQL Injection Prevention Using LSTM</a></h3>
                <p className="muted"><strong>Sep 2022 - Dec 2022</strong></p>
                <p className="muted"><strong>Cybersecurity · Deep Learning · Web Security</strong></p>
                <p className="muted">Developed a two-step SQL injection detection system combining keyword filtering, blacklisting, and LSTM-based sequence classification.</p>
                <ul className="muted">
                  <li>Tested on 30,905 SQL queries — achieved F1 score of 99.53%</li>
                  <li>Outperformed ten classical machine learning algorithms</li>
                  <li>Fast inference (&lt; 1 ms per query) — practical for real-time web applications</li>
                  <li>Demonstrates strong robustness against evolving SQLi attack patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section alt reveal">
          <div className="container">
            <h2>Education</h2>

            <div className="stack">
              {/* NTUST */}
              <div className="card eduCard">
                <img
                  src="/logos/ntust.png"
                  alt="National Taiwan University of Science and Technology"
                  className="eduLogo"
                />
                <div>
                  <h3>National Taiwan University of Science and Technology</h3>
                  <p className="muted">Master's degree in Computer Science and Information Engineering · Taipei, Taiwan</p>
                  <p className="muted">Aug 2022 - Jul 2024</p>
                  <ul className="muted">
                    <li>GPA: 4.15 / 4.3</li>
                    <li>Research Experience: Multimedia Vision Computing Lab — focused on computer vision</li>
                    <li>Relevant Courses: Machine Learning; Advanced Database Systems; Advanced Modern Networking; Big Data Analytics; Social Network Analysis and Soft Computing; Artificial Intelligence</li>
                  </ul>
                </div>
              </div>

              {/* Bangkit */}
              <div className="card eduCard">
                <img
                  src="/logos/bangkit.png"
                  alt="Bangkit Academy"
                  className="eduLogo"
                />
                <div>
                  <h3>Bangkit Academy by Google — Machine Learning Path</h3>
                  <p className="muted">Indonesia</p>
                  <p className="muted">Feb 2021 - Jul 2021</p>
                  <ul className="muted">
                    <li>Completed courses: Google IT Support; Google IT Automation with Python; Mathematics for Machine Learning; DeepLearning.AI TensorFlow Developer; TensorFlow: Data and Deployment</li>
                    <li>Collaborated with peers and industry experts on real-world projects — developed teamwork, problem-solving, and communication skills</li>
                    <li>Successfully completed the program and received a certification of completion</li>
                  </ul>
                </div>
              </div>

              {/* Maranatha */}
              <div className="card eduCard">
                <img
                  src="/logos/maranatha.png"
                  alt="Maranatha Christian University"
                  className="eduLogo"
                />
                <div>
                  <h3>Maranatha Christian University</h3>
                  <p className="muted">Bachelor's degree in Information Systems, Information Technology · Bandung, West Java, Indonesia</p>
                  <p className="muted">Aug 2018 - Jul 2021</p>
                  <ul className="muted">
                    <li>GPA: 3.94 / 4.00</li>
                    <li>On the dean's list and one of the best graduates of 2021 (Technology Information Department)</li>
                    <li>Best Point Portfolio of 2021 (Technology Information Department)</li>
                    <li>Internal Academic Achievement Scholarships (2019, 2020, 2021)</li>
                    <li>Relevant Courses: Computation Logic; Programming Algorithms; Data Structure; Business Intelligence; Statistics and Data Analytics; Object-Oriented Programming; Enterprise Application Development; System Information Model</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certification" className="section reveal">
          <div className="container">
            <h2>Certifications</h2>
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
              <p className="muted">Email: <a href="mailto:drwngwn@gmail.com">drwngwn@gmail.com</a></p>
              <p className="muted">GitHub: <a href="https://github.com/mildshun" target="_blank" rel="noreferrer">mildshun</a></p>
              <p className="muted">LinkedIn: <a href="https://www.linkedin.com/in/darwingwn/" target="_blank" rel="noreferrer">darwingwn</a></p>
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