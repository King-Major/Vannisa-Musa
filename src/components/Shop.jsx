import { site, products } from '../config.js';

function checkoutHref(p) {
  if (p.checkoutUrl) return p.checkoutUrl;
  const subject = encodeURIComponent(`Order: ${p.name}`);
  return `mailto:${site.email}?subject=${subject}`;
}

function Card({ p }) {
  const save = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
  return (
    <article id={p.id} className={'card' + (p.featured ? ' card-featured' : '')}>
      {p.badge && <span className="badge">{p.badge}</span>}
      <p className="type">{p.type}</p>
      <h3>{p.name}</h3>
      <p className="card-blurb">{p.blurb}</p>
      <ul className="ticks">
        {p.includes.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div className="price-row">
        <span className="price">
          {site.symbol}
          {p.price}
        </span>
        {p.compareAt && (
          <>
            <s className="was">
              {site.symbol}
              {p.compareAt}
            </s>
            <span className="save">Save {save}%</span>
          </>
        )}
      </div>
      <a
        className={'btn ' + (p.featured ? 'btn-gold' : 'btn-primary') + ' btn-block'}
        href={checkoutHref(p)}
        rel="noopener"
      >
        Get it now · {site.symbol}
        {p.price}
      </a>
      <p className="micro">Instant access · Secure checkout</p>
    </article>
  );
}

export default function Shop() {
  const featured = products.filter((p) => p.featured);
  const others = products.filter((p) => !p.featured);
  return (
    <section className="section section-sand" id="shop" aria-labelledby="shop-h">
      <div className="wrap">
        <p className="eyebrow dark">The shop</p>
        <h2 id="shop-h">Tools that pay for themselves.</h2>
        <p className="sub">
          Every product is built to be used today, not stored in a folder. {site.guarantee && `${site.guarantee}.`}
        </p>
        <div className="shop-grid">
          {featured.map((p) => (
            <Card key={p.id} p={p} />
          ))}
          {others.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
