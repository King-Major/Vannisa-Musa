// Pre-renders the React app to static HTML at build time so the page paints
// instantly and search engines read full content without running JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { site, products, faqs, leadMagnet } from '../src/config.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const json = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.handle,
  url: site.url,
  jobTitle: 'Financial literacy educator and digital creator',
  sameAs: Object.values(site.social),
};
const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital products by ' + site.name,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.blurb,
      brand: { '@type': 'Brand', name: site.name },
      offers: {
        '@type': 'Offer',
        price: String(p.price),
        priceCurrency: site.currency,
        availability: 'https://schema.org/InStock',
        url: site.url + '/#' + p.id,
      },
    },
  })),
};
const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
html = html
  .replaceAll('__SITE_URL__', site.url)
  .replace('<!--head-tags-->', [person, itemList, faqPage].map(json).join('\n    '))
  .replace('<!--app-html-->', render());
fs.writeFileSync(path.join(dist, 'index.html'), html);

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${site.url}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`,
);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html (' + Math.round(html.length / 1024) + ' KB), robots.txt, sitemap.xml');
