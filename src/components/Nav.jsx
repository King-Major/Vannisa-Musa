import { site } from '../config.js';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label={`${site.name} home`}>
          {site.name}
        </a>
        <nav aria-label="Main" className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#free">Free guide</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#book" className="btn btn-ghost btn-sm">
          Book Vannisa
        </a>
      </div>
    </header>
  );
}
