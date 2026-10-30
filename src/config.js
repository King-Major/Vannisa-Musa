// ============================================================
//  EDIT THIS FILE to change copy, prices, links and products.
//  Everything on the website reads from here.
// ============================================================

export const site = {
  name: 'Musa Vannisa',
  handle: '@vannisa_thefinfluencer',
  url: 'https://www.musavannisa.com', // <- change to your real domain before launch
  email: 'hello@musavannisa.com', // <- change to your real inbox
  currency: 'USD', // ISO code used in SEO data
  symbol: '$',
  heroImage: '/hero.jpg', // your portrait lives at public/hero.jpg
  social: {
    tiktok: 'https://www.tiktok.com/@vannisa_thefinfluencer',
    instagram: 'https://www.instagram.com/vannisa_thefinfluencer',
  },
  guarantee: '7-day money-back guarantee', // <- keep only if this is your real policy
};

// Where forms send data. Use any form service (Formspree, Getform, Basin) or
// your email provider's form endpoint (ConvertKit, MailerLite, Beehiiv).
export const endpoints = {
  newsletter: '', // e.g. 'https://formspree.io/f/xxxx'
  booking: '', // leave empty to fall back to opening the visitor's email app
};

export const leadMagnet = {
  title: 'The Creator Money Map',
  blurb:
    'A free one-page framework that shows you how to turn your skills into your first income stream, step by step.',
  fileUrl: '', // e.g. '/downloads/creator-money-map.pdf' (put the PDF in public/downloads)
};

// checkoutUrl = Stripe / PayPal / Flutterwave / Paystack payment link for each product.
export const products = [
  {
    id: 'tracker',
    name: 'Money Clarity Tracker',
    type: 'Template',
    price: 15,
    blurb: 'See exactly where your money goes and where it should go next.',
    includes: ['Monthly budget dashboard', 'Savings goal planner', 'Income and expense log'],
    checkoutUrl: '',
  },
  {
    id: 'templates',
    name: 'Content-to-Cash Template Pack',
    type: 'Templates',
    price: 19,
    blurb: 'Plan content that builds trust, then turn that attention into paying customers.',
    includes: ['Content calendar', 'Offer launch planner', 'Pricing worksheet'],
    checkoutUrl: '',
  },
  {
    id: 'playbook',
    name: 'The Persuasion Playbook',
    type: 'E-book',
    price: 29,
    badge: 'Start here',
    blurb: 'Simple, non-technical sales and persuasion frameworks you can use in your next conversation.',
    includes: ['Step-by-step sales framework', 'Word-for-word message examples', 'Objection-handling cheat sheet'],
    checkoutUrl: '',
  },
  {
    id: 'bundle',
    name: 'The Creator Income Bundle',
    type: 'Bundle',
    price: 39,
    compareAt: 63,
    badge: 'Best value',
    featured: true,
    blurb: 'Everything above in one purchase: manage your money, create your content, close your sales.',
    includes: ['Money Clarity Tracker', 'Content-to-Cash Template Pack', 'The Persuasion Playbook'],
    checkoutUrl: '',
  },
];

// "Not sure where to start?" cards. productId must match a product above.
export const paths = [
  {
    title: "I'm building my creator brand",
    text: 'Structure your content and turn attention into income.',
    productId: 'templates',
  },
  {
    title: 'I run a small business',
    text: 'Learn persuasion and sales frameworks that actually close.',
    productId: 'playbook',
  },
  {
    title: 'I want the full toolkit',
    text: 'Get all three tools at the lowest price.',
    productId: 'bundle',
  },
];

export const learn = [
  {
    title: 'Financial literacy',
    text: 'Budgeting, saving and understanding money in plain language, so you make confident decisions instead of guessing.',
  },
  {
    title: 'Marketing frameworks',
    text: 'Clear, repeatable ways to position yourself, create content people respond to, and grow an audience that buys.',
  },
  {
    title: 'Sales and persuasion',
    text: 'Practical coaching on how to communicate value, handle objections and close without sounding pushy.',
  },
  {
    title: 'Building your creator brand',
    text: 'Document your journey, structure your offers and build an online presence you own, not just rent from an algorithm.',
  },
  {
    title: 'Corporate training and speaking',
    text: 'Workshops and talks for teams and events on money, marketing and sales skills.',
  },
];

// Add real testimonials here. The section stays hidden until you add at least one.
// { quote: '...', name: 'First L.', role: 'Small business owner' }
export const testimonials = [];

export const faqs = [
  {
    q: 'How do I receive my download?',
    a: 'Right after checkout you get instant access to your files, and a copy is sent to your email so you always have it.',
  },
  {
    q: 'Are these beginner friendly?',
    a: 'Yes. Everything is written in plain language with no jargon, built for people who are just getting started.',
  },
  {
    q: 'What payment methods can I use?',
    a: 'Checkout is secure and supports major credit and debit cards and popular digital wallets.',
  },
  {
    q: 'What if it is not right for me?',
    a: 'Your purchase is covered by our guarantee. Reach out through the contact form and we will make it right.',
  },
  {
    q: 'Can I book Vannisa for a workshop or speaking event?',
    a: 'Yes. Use the booking form at the bottom of the page and tell us about your team or event.',
  },
];
