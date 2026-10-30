# Musa Vannisa website (React + Vite)

Fast, pre-rendered, SEO-ready single-page site. Only React as a dependency, no UI libraries, no web fonts.

## Run
```
npm install
npm run dev        # develop at http://localhost:5173
npm run build      # outputs dist/ (pre-rendered HTML, robots.txt, sitemap.xml)
npm run preview    # test the production build
```
Deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages or any static host.

## Before launch (everything is in src/config.js)
1. `site.url` and `site.email`: set your real domain and inbox.
2. Products, prices and descriptions are SAMPLES: replace with the real ones.
3. `checkoutUrl` on each product: paste a Stripe / PayPal / Flutterwave / Paystack payment link.
   (Empty = the button opens an email to you.)
4. `endpoints.newsletter` / `endpoints.booking`: connect a form service or email provider.
   Until the newsletter endpoint is set, the live site shows an error instead of pretending signup worked.
5. `leadMagnet.fileUrl`: upload your free PDF to `public/downloads/` and set the path.
6. Portrait is `public/hero.jpg` and the social preview is `public/og-image.jpg` (swap either any time, keep sizes small).
7. `site.guarantee`: keep only if it is your real refund policy.
8. `testimonials`: add real ones; the section appears automatically.
9. Confirm the TikTok and Instagram links in `site.social`.
