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

const GREETINGS = [
    "Hello, I'm",
    "你好，我是",
    "Halo, saya",
    "Hola, soy",
    "Hei, olen",
    "Hello, I'm",
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

  // Hero Greeting Animation
  const [typedText, setTypedText] = useState("");
  const [greetIndex, setGreetIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  useEffect(() => {
    let charIndex = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const current = GREETINGS[greetIndex];

      if (!deleting) {
        // typing
        setTypedText(current.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === current.length) {
          // if last greeting & first cycle → stop here
          if (
            greetIndex === GREETINGS.length - 1 &&
            cycleCount === 0
          ) {
            clearInterval(interval);
            return;
          }

          setTimeout(() => {
            deleting = true;
          }, 1200);
        }
      } else {
        // deleting
        setTypedText(current.slice(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;

          setGreetIndex((prev) => {
            const next = prev + 1;

            if (next === GREETINGS.length) {
              setCycleCount((c) => c + 1);
              return 0;
            }

            return next;
          });
        }
      }
    }, deleting ? 60 : 100);

    return () => clearInterval(interval);
  }, [greetIndex, cycleCount]);

  // Projects data and show-more state
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      title: 'Automating Anime Portrait to Multi-Layered Parts Decomposition',
      link: 'https://drive.google.com/drive/folders/1bvwiFWTXXRWISg-c1_kTaM9Sxgx-flPP?usp=drive_link',
      date: 'Feb 2024 - May 2024',
      tags: 'Computer Vision · Image Segmentation · Image Inpainting',
      summary: 'Automated pipeline for decomposing anime-style portraits into multi-layered, editable components for dataset creation and creative workflows.'
    },
    {
      title: 'StyleSpire — Stable Diffusion Inpainting for Virtual Try-On',
      link: 'https://drive.google.com/drive/folders/1GphM3ra2sof3Mgrzg3UHSD-sGO8l8D6Q?usp=drive_link',
      date: 'Sep 2023 - Dec 2023',
      tags: 'Computer Vision · Generative AI · Diffusion Models',
      summary: 'A virtual fashion try-on system that applies new outfits while preserving pose and structure using inpainting and parsing.'
    },
    {
      title: 'Market Basket Analysis for 7-Eleven',
      link: 'https://drive.google.com/drive/folders/1B2cUB-eOsPHX-f_xOraGbqb7lynwUJsl?usp=drive_link',
      date: 'May 2023 - Jun 2023',
      tags: 'Data Mining · Customer Analytics',
      summary: 'RFM and FP-Growth analyses to discover cross-sell opportunities and optimize inventory.'
    },
    {
      title: 'Sentiment Classification Using Averaged Word2Vec',
      link: 'https://drive.google.com/drive/folders/1X3TPDKgFdOASOW42-s5H6nYOpPp_sKbh?usp=drive_link',
      date: 'Sep 2022 - Dec 2022',
      tags: 'NLP · Machine Learning',
      summary: 'Averaged Word2Vec embeddings with dense networks for efficient sentiment classification.'
    },
    {
      title: 'Two-Step SQL Injection Prevention Using LSTM',
      link: 'https://drive.google.com/drive/folders/1ScegQKPS12LJkiFfEHxkmj6zqqZoWmJ8?usp=drive_link',
      date: 'Sep 2022 - Dec 2022',
      tags: 'Cybersecurity · Deep Learning',
      summary: 'Two-step detection combining keyword filtering and LSTM sequence classification with high F1 scores.'
    }
  ];

  // Work experience data and show-more state
  const [showAllExperience, setShowAllExperience] = useState(false);
  const experiences = [
    {
      role: 'Backend Developer',
      company: 'TAO Digital Taiwan',
      location: 'Taipei, Taiwan',
      date: 'Feb 2025 - Current',
      bullets: [
        'Built Databricks (Spark/Delta Lake) batch pipelines to sync and update records with third-party platforms.',
        'Processed millions of records with validation, multi-field formatting, and correctness checks.',
        'Implemented Java Spring Boot Kafka listeners and authored unit tests for reliable processing.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Broalux Taiwan Limited',
      location: 'Taipei, Taiwan',
      date: 'Sept 2024 - Feb 2025',
      bullets: [
        'Built microservices for device-server communication for an IoT telemetry project.',
        'Automated deployments with Ansible and Kubernetes; implemented Grafana dashboards.'
      ]
    },
    {
      role: 'AI Engineer Intern',
      company: 'Pegatron Corporation',
      location: 'Taipei, Taiwan',
      date: 'Jun 2024 - Aug 2024',
      bullets: [
        'Developed a chatbot AI agent and backend APIs for user-agent communication.',
        'Project won first place in the 2024 Pegatron Summer Internship competition.'
      ]
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'CLV Mitra Indonesia',
      location: 'Batam, Indonesia',
      date: 'Sept 2021 - Aug 2024',
      bullets: [
        'Delivered delivery-integration web app with real-time order tracking and menu uploads.',
        'Built a queue web board and OCR microservice for automated document scanning.'
      ]
    },
    {
      role: 'Flutter Developer Intern',
      company: 'Remote Worker Indonesia',
      location: 'Bandung, Indonesia',
      date: 'Jun 2020 - Aug 2020',
      bullets: [
        'Implemented CRUD features for an education-sector information storage app using Flutter.'
      ]
    }
  ];

  // Certifications data
  const certs = [
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      issued: '09 Aug 2021',
      expires: '09 Aug 2024',
      link: 'https://www.credential.net/fa512e37-9008-42a4-98cd-9b67f5519ca6#acc.KUSTlsmZ'
    },
    {
      title: 'Mathematics for Machine Learning',
      issuer: 'Coursera',
      issued: '25 Mar 2021',
      expires: null,
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/T2CCW2HQZWLB'
    },
    {
      title: 'TensorFlow: Data and Deployment',
      issuer: 'Coursera',
      issued: '14 Mar 2021',
      expires: null,
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HEHQKFCS6NNX'
    },
    {
      title: 'DeepLearning.AI TensorFlow Developer',
      issuer: 'Coursera',
      issued: '13 Apr 2021',
      expires: null,
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/E6KKXPH8DTTD'
    },
    {
      title: 'Google IT Support',
      issuer: 'Coursera',
      issued: '13 Mar 2021',
      expires: null,
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/3KHBE356EZUL'
    },
    {
      title: 'Google IT Automation with Python',
      issuer: 'Coursera',
      issued: '14 Mar 2021',
      expires: null,
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MPBHW3ZM8YQA'
    }
  ];

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
              <p className="kicker">✨ Welcome to my portfolio</p>
              <h1 className="heroTitle">
                <div className="typingLine">
                  <span className="typing">
                    {typedText}
                    <span className="cursor">|</span>
                  </span>
                </div>

                <div className="nameLine">
                  <span className="accent">Darwin</span> 👋
                </div>
              </h1>
              <p className="subtitle">
                <span className="heroRole">Software, Data & AI Engineer</span> based in Taipei, Taiwan. I build <span className="highlight">reliable data pipelines</span>, <span className="highlight">backend services</span>, and <span className="highlight">automation solutions</span>.
              </p>

              <div className="ctaRow">
                <button className="btn primary always-white" onClick={() => scrollTo("contact")}>Get In Touch</button>
                <a className="btn" href="https://drive.google.com/file/d/1sRNJGZSYVPsqkCkVB8DG9bvEprqFQ0kH/view?usp=drive_link" target="_blank" rel="noreferrer">📄 Resume</a>
              </div>

              <div className="iconRow">
                <a className="icon" href="https://github.com/mildshun" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a className="icon" href="https://www.linkedin.com/in/darwingwn/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                <a className="icon" href="mailto:drwngwn@gmail.com">✉️ Email</a>
              </div>
            </div>

            <div className="heroRight">
              <div className="heroImageWrapper">
                <img
                  src="/profile.png"
                  alt="Darwin Gunawan"
                  className="heroImage"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section id="skills" className="section reveal">
          <div className="container">
            <h2>Skills <span className="secEmoji">⚙️</span></h2>
            <div className="skillsGridCards">
              <div className="card skillCard">
                <h3 className="skillCategory">Data & Analytics</h3>
                <div className="skillList">
                  <div className="skillItem"><span className="skillTag">🐍 Python</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '90%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🔥 PySpark</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '85%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🗄️ SQL</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '88%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">📊 Databricks / Delta</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '80%'}}/></div></div>
                </div>
              </div>

              <div className="card skillCard">
                <h3 className="skillCategory">Backend & APIs</h3>
                <div className="skillList">
                  <div className="skillItem"><span className="skillTag">☕ Java / Spring Boot</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '82%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">⚡ FastAPI</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '78%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🔁 Kafka</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '72%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🧪 Unit Testing</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '80%'}}/></div></div>
                </div>
              </div>

              <div className="card skillCard">
                <h3 className="skillCategory">MLOps & DevOps</h3>
                <div className="skillList">
                  <div className="skillItem"><span className="skillTag">🐳 Docker</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '82%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">☸️ Kubernetes</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '70%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">⚙️ GitHub Actions</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '75%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🛠️ Ansible</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '68%'}}/></div></div>
                </div>
              </div>

              <div className="card skillCard">
                <h3 className="skillCategory">AI / ML</h3>
                <div className="skillList">
                  <div className="skillItem"><span className="skillTag">🧠 Machine Learning</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '80%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🔍 Computer Vision</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '78%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🌀 Diffusion Models</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '70%'}}/></div></div>
                  <div className="skillItem"><span className="skillTag">🔤 NLP</span><div className="skillLevel"><div className="skillLevelFill" style={{width: '72%'}}/></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt reveal">
          <div className="container">
            <h2>Work Experience <span className="secEmoji">💼</span></h2>

            <div className="timeline">
              {experiences.slice(0, showAllExperience ? experiences.length : 3).map((ex, idx) => (
                <div className="timelineItem" key={idx}>
                  <div className="timelineDate">{ex.date}</div>
                  <div className="timelineBody card">
                    <h3>{ex.role} — {ex.company}</h3>
                    <p className="muted">{ex.location}</p>
                    <ul className="muted">
                      {ex.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {experiences.length > 3 && (
              <div style={{ marginTop: 14 }}>
                <button className="btn" onClick={() => setShowAllExperience((v) => !v)}>{showAllExperience ? 'Show fewer' : `Show ${experiences.length - 3} more`}</button>
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="container">
            <h2>Projects <span className="secEmoji">🚀</span></h2>
            <div className="projectsGrid">
              {projects.slice(0, showAllProjects ? projects.length : 4).map((p, i) => (
                <div className="projectCard card" key={i}>
                  <div className="projectHeader">
                    <h3 className="projectTitle"><a className="projectLink" href={p.link} target="_blank" rel="noreferrer">{p.title}</a></h3>
                    <div className="projectDate">{p.date}</div>
                  </div>
                  <div className="projectMeta">{p.tags}</div>
                  <p className="muted">{p.summary}</p>
                  <a className="projectLink2" href={p.link} target="_blank" rel="noreferrer">View Project →</a>
                </div>
              ))}
            </div>

            {projects.length > 2 && (
              <div style={{ marginTop: 14 }}>
                <button className="btn" onClick={() => setShowAllProjects((v) => !v)}>{showAllProjects ? 'Show fewer' : `Show ${projects.length - 4} more`}</button>
              </div>
            )}
          </div>
        </section>

        <section id="education" className="section alt reveal">
          <div className="container">
            <h2>Education <span className="secEmoji">🎓</span></h2>

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
            <h2>Certifications <span className="secEmoji">📜</span></h2>
            <div className="certGrid">
              {certs.map((c, i) => (
                <div className="certCard card" key={i}>
                  <div className="certHeader">
                    <h3>{c.title}</h3>
                    <span className="certIssuer">{c.issuer}</span>
                  </div>
                  <div className="certMeta">
                    <span className="certDate">📅 {c.issued}</span>
                    {c.expires && <span className="certExpiry">⏰ Expires: {c.expires}</span>}
                    {!c.expires && <span className="certNoExpiry">∞ No expiry</span>}
                  </div>
                  <a className="certLink" href={c.link} target="_blank" rel="noreferrer">View Certificate →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt reveal">
          <div className="container">
            <h2>Contact <span className="secEmoji">✉️</span></h2>
            <div className="card contactCard">
              <div className="contactRow">
                <a className="contactBtn" href="mailto:drwngwn@gmail.com"><span>✉️</span><span>drwngwn@gmail.com</span></a>
              </div>

              <div className="contactRow">
                <a className="contactBtn" href="https://github.com/mildshun" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a className="contactBtn" href="https://www.linkedin.com/in/darwingwn/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
              </div>
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