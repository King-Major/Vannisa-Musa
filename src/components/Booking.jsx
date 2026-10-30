import { useState } from 'react';
import { site, endpoints } from '../config.js';
import { submitForm } from '../lib/submit.js';

export default function Booking() {
  const [state, setState] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState('sending');
    if (!endpoints.booking) {
      // No form service connected yet: open the visitor's email app instead.
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company || '-'}\nEnquiry: ${data.type}\n\n${data.message || ''}`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Booking enquiry: ' + data.type)}&body=${body}`;
      setState('idle');
      return;
    }
    const res = await submitForm(endpoints.booking, data);
    setState(res.ok ? 'done' : 'error');
  }

  return (
    <section className="section section-dark" id="book" aria-labelledby="book-h">
      <div className="wrap narrow">
        <p className="eyebrow">Work with me</p>
        <h2 id="book-h">Book Vannisa.</h2>
        <p className="sub light">
          Corporate training, consulting or a speaking engagement? Tell me a little about it and I&apos;ll get back to
          you.
        </p>
        {state === 'done' ? (
          <p className="success" role="status">
            Thank you! Your request has been received and you&apos;ll hear back soon.
          </p>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <label>
              Full name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email address
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Company or event
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              I&apos;m interested in
              <select name="type" defaultValue="Corporate training">
                <option>Corporate training</option>
                <option>Consulting</option>
                <option>Speaking engagement</option>
              </select>
            </label>
            <label>
              Tell me more
              <textarea name="message" rows="4" />
            </label>
            <button className="btn btn-gold btn-block" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending...' : 'Send enquiry'}
            </button>
            {state === 'error' && (
              <p className="error" role="alert">
                Something went wrong. Please try again or email {site.email}.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
