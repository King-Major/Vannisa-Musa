import { site, products, leadMagnet } from '../config.js';

export default function Hero() {
  const bundle = products.find((p) => p.featured) || products[0];
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Money · Marketing · Sales</p>
          <h1>
            Welcome. Let&apos;s turn what you know into <em>income you can count on.</em>
          </h1>
          <p className="lead">
            Practical, no-jargon frameworks for creators and small business owners. Start free, then pick the
            tool that fits where you are right now.
          </p>
          <div className="cta-row">
            <a href="#shop" className="btn btn-primary">
              Shop the {bundle.name} · {site.symbol}
              {bundle.price}
            </a>
            <a href="#free" className="btn btn-ghost-light">
              Or start free →
            </a>
          </div>
          <ul className="trust">
            <li>Instant download</li>
            <li>Secure checkout</li>
            {site.guarantee && <li>{site.guarantee}</li>}
          </ul>
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
          <a href="#free" className="float-badge">
            <span>Free</span>
            {leadMagnet.title}
          </a>
        </div>
      </div>
    </section>
  );
}
