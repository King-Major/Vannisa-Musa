import { site, learn, testimonials } from '../config.js';

export default function About() {
  return (
    <>
      <section className="section" id="about" aria-labelledby="about-h">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow dark">Who&apos;s behind this</p>
            <h2 id="about-h">Hi, I&apos;m Vannisa.</h2>
            <p>
              I&apos;m a digital creator and financial educator. I teach money, marketing and sales in a way that
              feels doable, so you can build skills that pay and an online brand that is truly yours.
            </p>
            <p>
              No jargon, no gatekeeping. Just clear frameworks you can use this week. Come say hi on{' '}
              <a href={site.social.tiktok} rel="noopener">
                TikTok
              </a>{' '}
              or{' '}
              <a href={site.social.instagram} rel="noopener">
                Instagram
              </a>
              .
            </p>
          </div>
          <dl className="stats">
            <div>
              <dt>3</dt>
              <dd>Core skills: Money, Marketing, Sales</dd>
            </div>
            <div>
              <dt>Free</dt>
              <dd>Your first framework costs nothing</dd>
            </div>
            <div>
              <dt>Instant</dt>
              <dd>Download and start today</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section-sand" aria-labelledby="learn-h">
        <div className="wrap narrow">
          <p className="eyebrow dark">What you&apos;ll learn</p>
          <h2 id="learn-h">Where I can help.</h2>
          <div className="acc">
            {learn.map((l, i) => (
              <details key={l.title}>
                <summary>
                  <span className="num">0{i + 1}</span>
                  {l.title}
                </summary>
                <p>{l.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section" aria-labelledby="proof-h">
          <div className="wrap">
            <h2 id="proof-h">What people are saying.</h2>
            <div className="quotes">
              {testimonials.map((t) => (
                <figure key={t.name}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    {t.name}
                    {t.role ? `, ${t.role}` : ''}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
