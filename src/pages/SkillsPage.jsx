export default function SkillsPage() {
  return (
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
                <span className="skillTag">🐍 Python</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">📊 NumPy</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "75%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">🗄️ SQL</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "88%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">🔥 PySpark</span>
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
                <span className="skillTag">☕ Java / Spring Boot</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "82%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">⚡ FastAPI</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "88%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">#️⃣ C# / .NET</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "88%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">🧪 Unit Testing</span>
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
                <span className="skillTag">🐳 Docker</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "82%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">☸️ Kubernetes</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "70%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">🤖 GitHub Actions</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "75%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">📦 Ansible</span>
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
                <span className="skillTag">🤖 Machine Learning</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "80%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">👁️ Computer Vision</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "78%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">🎨 Diffusion Models</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "70%" }} />
                </div>
              </div>
              <div className="skillItem">
                <span className="skillTag">💬 NLP</span>
                <div className="skillLevel">
                  <div className="skillLevelFill" style={{ width: "68%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
