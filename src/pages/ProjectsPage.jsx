import { useMemo, useState } from "react";
import { projects } from "../data";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showAllTags, setShowAllTags] = useState(false);

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

  const visibleTags = showAllTags ? tags : tags.slice(0, 6);
  const moreCount = Math.max(tags.length - 6, 0);

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
          {visibleTags.map((tag) => (
            <button
              key={tag}
              className={`tagChip${selectedTag === tag ? " active" : ""}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
          {tags.length > 6 && (
            <button className="btn small" onClick={() => setShowAllTags((v) => !v)}>
              {showAllTags ? "Show fewer tags" : `Show ${moreCount} more tags`}
            </button>
          )}
        </div>

        <div className="projectsGrid">
          {filtered.map((p, i) => (
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
      </div>
    </section>
  );
}
