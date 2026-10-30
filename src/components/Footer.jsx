import { site } from '../config.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name}. All rights reserved.
        </p>
        <p>
          <a href={site.social.tiktok} rel="noopener">
            TikTok
          </a>
          <a href={site.social.instagram} rel="noopener">
            Instagram
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </p>
      </div>
    </footer>
  );
}
