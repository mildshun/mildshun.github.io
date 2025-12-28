import { certs } from "../data";

export default function CertificationPage() {
  return (
    <section id="certification" className="section reveal">
      <div className="container">
        <h2>
          Certifications <span className="secEmoji">📜</span>
        </h2>
        <div className="certGrid">
          {certs.map((c, i) => (
            <div className="certCard card" key={i}>
              <div className="certHeader">
                <h3>{c.title}</h3>
                <span className="certIssuer">{c.issuer}</span>
              </div>
              <div className="certMeta">
                <span className="certDate">📅 {c.issued}</span>
                {c.expires && <span className="certExpiry">⏳ Expires: {c.expires}</span>}
                {!c.expires && <span className="certNoExpiry">♾️ No expiry</span>}
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
