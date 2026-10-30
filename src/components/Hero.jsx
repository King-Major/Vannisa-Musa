import { site, products } from '../config.js';

export default function Hero() {
  const bundle = products.find((p) => p.featured) || products[0];

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Money · Marketing · Sales</p>
          <h1>
            Turn what you know into <em>income you can count on.</em>
          </h1>
          <p className="lead">
            Practical, no-jargon frameworks for creators and small business owners. Start free, or grab the core toolkit.
          </p>
          <div className="cta-row">
            <a href="#shop" className="btn btn-gold">
              Shop {bundle.name} · {site.symbol}{bundle.price}
            </a>
            <a href="#free" className="btn btn-ghost-light">
              Start free &rarr;
            </a>
          </div>
          <div className="hero-micro-trust">
            <span className="stars">★★★★★</span>
            <span>Trusted by 1,000+ creators &amp; founders</span>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src={site.heroImage}
            width="640"
            height="800"
            alt={`${site.name}, financial literacy and marketing educator`}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}