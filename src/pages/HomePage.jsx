import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GREETINGS, experiences, projects } from "../data";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [greetIndex, setGreetIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const currentWork = experiences?.[0];
  const highlightProject = projects?.[0];

  // Hero Greeting Animation
  useEffect(() => {
    let charIndex = 0;
    let deleting = false;

    const interval = setInterval(() => {
      const current = GREETINGS[greetIndex];

      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === current.length) {
          if (greetIndex === GREETINGS.length - 1 && cycleCount === 0) {
            clearInterval(interval);
            return;
          }

          setTimeout(() => {
            deleting = true;
          }, 1200);
        }
      } else {
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

  return (
    <>
      <section id="home" className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <p className="kicker">Welcome to my portfolio</p>
            <h1 className="heroTitle">
              <div className="typingLine">
                <span className="typing">
                  {typedText}
                  <span className="cursor">|</span>
                </span>
              </div>

              <div className="nameLine">
                <span className="accent">Darwin</span>👋
              </div>
            </h1>
            <p className="subtitle">
              <span className="heroRole">Software, Data &amp; AI Engineer</span> based in Taipei, Taiwan. I build{" "}
              <span className="highlight">reliable data pipelines</span>, <span className="highlight">backend services</span>, and{" "}
              <span className="highlight">automation solutions</span>.
            </p>

            <div className="ctaRow">
              <a className="btn primary always-white" href="mailto:drwngwn@gmail.com">
                Get In Touch
              </a>
              <a
                className="btn"
                href="https://drive.google.com/file/d/1sRNJGZSYVPsqkCkVB8DG9bvEprqFQ0kH/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="iconRow">
              <a className="icon" href="https://github.com/mildshun" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="icon" href="https://www.linkedin.com/in/darwingwn/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="icon" href="mailto:drwngwn@gmail.com">
                Email
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroImageWrapper">
              <img src="/profile.png" alt="Darwin Gunawan" className="heroImage" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <div className="container">
          <h2>
            Skills <span className="secEmoji">🛠️</span>
          </h2>
          <div className="skillsGridCards">
            <div className="card skillCard">
              <h3 className="skillCategory">Data &amp; Analytics</h3>
              <div className="skillList">
                <div className="skillItem">
                  <span className="skillTag">Python</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "92%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">NumPy</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "75%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">SQL</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "88%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">PySpark</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "88%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card skillCard">
              <h3 className="skillCategory">Backend &amp; APIs</h3>
              <div className="skillList">
                <div className="skillItem">
                  <span className="skillTag">Java / Spring Boot</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "82%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">FastAPI</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "88%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">C# / .NET</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "88%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">Unit Testing</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "80%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card skillCard">
              <h3 className="skillCategory">MLOps &amp; DevOps</h3>
              <div className="skillList">
                <div className="skillItem">
                  <span className="skillTag">Docker</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "82%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">Kubernetes</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "70%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">GitHub Actions</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "75%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">Ansible</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "68%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="card skillCard">
              <h3 className="skillCategory">AI / ML</h3>
              <div className="skillList">
                <div className="skillItem">
                  <span className="skillTag">Machine Learning</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">Computer Vision</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "78%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">Diffusion Models</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "70%" }} />
                  </div>
                </div>
                <div className="skillItem">
                  <span className="skillTag">NLP</span>
                  <div className="skillLevel">
                    <div className="skillLevelFill" style={{ width: "68%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt reveal">
        <div className="container storyStack">
          {currentWork && (
            <div className="card storyCard">
              <img src="/profile-code.png" alt="Current work" className="storyThumb" />
              <div>
                <p className="storyLabel">Current Work</p>
                <h3 className="storyTitle">
                  {currentWork.role}, {currentWork.company}
                </h3>
                <p className="muted">
                  Building Databricks/Spark pipelines and Kafka consumers with validation and automated tests.
                </p>
                <div className="storyActions">
                  <Link className="btn small" to="/experience">
                    See more
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="card storyCard">
            <img src="/profile-education.png" alt="Education" className="storyThumb" />
            <div>
              <p className="storyLabel">Highest Education</p>
              <h3 className="storyTitle">Master's in CS, NTUST</h3>
              <p className="muted">Multimedia Vision Computing Lab — focused on computer vision research.</p>
              <div className="storyActions">
                <Link className="btn small" to="/education">
                  See more
                </Link>
              </div>
            </div>
          </div>

          {highlightProject && (
            <div className="card storyCard">
              <div className="storyThumb projectThumb">★</div>
              <div>
                <p className="storyLabel">Latest Project</p>
                <h3 className="storyTitle">{highlightProject.title}</h3>
                <p className="muted">{highlightProject.summary}</p>
                <div className="storyActions">
                  <Link className="btn small" to="/projects">
                    See more
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
