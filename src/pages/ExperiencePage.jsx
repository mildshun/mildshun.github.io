import { experiences } from "../data";

export default function ExperiencePage() {
  return (
    <section id="experience" className="section alt reveal">
      <div className="container">
        <h2>
          Work Experience <span className="secEmoji">dY'¬</span>
        </h2>

        <div className="timeline">
          {experiences.map((ex, idx) => (
            <div className="timelineItem" key={idx}>
              <div className="timelineDate">{ex.date}</div>
              <div className="timelineBody card">
                <h3>
                  {ex.role} ƒ?" {ex.company}
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
      </div>
    </section>
  );
}
