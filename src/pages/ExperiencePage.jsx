import { useState } from "react";
import { experiences } from "../data";

export default function ExperiencePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);

  return (
    <section id="experience" className="section alt reveal">
      <div className="container">
        <h2>
          Work Experience <span className="secEmoji">💼</span>
        </h2>

        <div className="timeline">
          {experiences.slice(0, showAllExperience ? experiences.length : 3).map((ex, idx) => (
            <div className="timelineItem" key={idx}>
              <div className="timelineDate">{ex.date}</div>
              <div className="timelineBody card">
                <h3>
                  {ex.role} — {ex.company}
                </h3>
                <p className="muted">{ex.location}</p>
                <ul className="muted">
                  {ex.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {experiences.length > 3 && (
          <div style={{ marginTop: 14 }}>
            <button className="btn" onClick={() => setShowAllExperience((v) => !v)}>
              {showAllExperience ? "Show fewer" : `Show ${experiences.length - 3} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
