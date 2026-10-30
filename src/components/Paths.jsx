import { paths } from '../config.js';

export default function Paths() {
  return (
    <section className="section" aria-labelledby="paths-h">
      <div className="wrap">
        <p className="eyebrow dark">Start here</p>
        <h2 id="paths-h">Not sure where to begin? Pick what sounds like you.</h2>
        <div className="paths">
          {paths.map((p) => (
            <a key={p.productId} href={`#${p.productId}`} className="path">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="arrow">See what I recommend →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
