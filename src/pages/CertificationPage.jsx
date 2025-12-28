import { useMemo, useState } from "react";
import { certs } from "../data";

export default function CertificationPage() {
  const [issuer, setIssuer] = useState("All");

  const issuers = useMemo(() => {
    const all = new Set(certs.map((c) => c.issuer));
    return ["All", ...Array.from(all)];
  }, []);

  const filtered = useMemo(() => {
    if (issuer === "All") return certs;
    return certs.filter((c) => c.issuer === issuer);
  }, [issuer]);

  return (
    <section id="certification" className="section reveal">
      <div className="container">
        <h2>
          Certifications <span className="secEmoji">📜</span>
        </h2>

        <div className="tagChips" aria-label="Filter by issuer">
          {issuers.map((iss) => (
            <button
              key={iss}
              className={`tagChip${issuer === iss ? " active" : ""}`}
              onClick={() => setIssuer(iss)}
            >
              {iss}
            </button>
          ))}
        </div>

        <div className="certGrid">
          {filtered.map((c, i) => (
            <div className="certCard card" key={i}>
              <div className="certHeader">
                <h3>{c.title}</h3>
                <span className="certIssuer">{c.issuer}</span>
              </div>
              <div className="certMeta">
                <span className="certDate">Issued: {c.issued}</span>
                {c.expires && <span className="certExpiry">Expires: {c.expires}</span>}
                {!c.expires && <span className="certNoExpiry">No expiry</span>}
              </div>
              <a className="certLink" href={c.link} target="_blank" rel="noreferrer">
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
