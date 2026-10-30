import { useState } from 'react';
import { endpoints, leadMagnet } from '../config.js';
import { submitForm } from '../lib/submit.js';

export default function LeadMagnet() {
  const [state, setState] = useState('idle'); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    setState('sending');
    const res = await submitForm(endpoints.newsletter, { email, source: 'lead-magnet', magnet: leadMagnet.title });
    setState(res.ok ? 'done' : 'error');
  }

  return (
    <section className="section section-dark" id="free" aria-labelledby="free-h">
      <div className="wrap narrow center">
        <p className="eyebrow">Free</p>
        <h2 id="free-h">Get {leadMagnet.title}, on the house.</h2>
        <p className="sub light">{leadMagnet.blurb}</p>

        {state === 'done' ? (
          <div className="success" role="status">
            <p>You&apos;re in! Check your inbox for your guide.</p>
            {leadMagnet.fileUrl && (
              <a className="btn btn-gold" href={leadMagnet.fileUrl} download>
                Download now
              </a>
            )}
          </div>
        ) : (
          <form className="inline-form" onSubmit={onSubmit}>
            <label htmlFor="lm-email" className="sr">
              Email address
            </label>
            <input id="lm-email" name="email" type="email" required placeholder="Your best email" autoComplete="email" />
            <button className="btn btn-gold" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending...' : 'Send me the free guide'}
            </button>
          </form>
        )}
        {state === 'error' && (
          <p className="error" role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        )}
        <p className="micro light">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
