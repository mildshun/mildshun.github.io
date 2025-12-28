import { useMemo, useState } from "react";
import { projects } from "../data";

export default function ProjectsPage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = useMemo(() => {
    const all = new Set();
    projects.forEach((p) =>
      p.tags
        .split("·")
        .map((t) => t.trim())
        .filter(Boolean)
        .forEach((t) => all.add(t))
    );
    return ["All", ...Array.from(all)];
  }, []);

  const filtered = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) =>
      p.tags
        .split("·")
        .map((t) => t.trim())
        .includes(selectedTag)
    );
  }, [selectedTag]);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <h2>
          Projects <span className="secEmoji">📂</span>
        </h2>

        <div className="tagChips" aria-label="Filter by tag">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tagChip${selectedTag === tag ? " active" : ""}`}
              onClick={() => {
                setSelectedTag(tag);
                setShowAllProjects(false);
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projectsGrid">
          {filtered.slice(0, showAllProjects ? filtered.length : 4).map((p, i) => (
            <div className="projectCard card" key={i}>
              <div className="projectHeader">
                <h3 className="projectTitle">
                  <a className="projectLink" href={p.drivelink} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                </h3>
                <div className="projectDate">{p.date}</div>
              </div>
              <div className="projectMeta">{p.tags}</div>
              <p className="muted">{p.summary}</p>
              <a className="projectLink2" href={p.slidelink} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>

        {filtered.length > 4 && (
          <div style={{ marginTop: 14 }}>
            <button className="btn" onClick={() => setShowAllProjects((v) => !v)}>
              {showAllProjects ? "Show fewer" : `Show ${filtered.length - 4} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
