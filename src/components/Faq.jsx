import { faqs } from '../config.js';

export default function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="wrap narrow">
        <p className="eyebrow dark">Questions</p>
        <h2 id="faq-h">Good to know.</h2>
        <div className="acc">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
