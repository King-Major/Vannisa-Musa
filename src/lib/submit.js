// Sends form data to the endpoint set in config.js.
// If no endpoint is configured: works silently in dev, and reports
// "not-configured" in production so a visitor is never told a signup worked when it did not.
export async function submitForm(endpoint, data) {
  if (!endpoint) {
    return import.meta.env.DEV ? { ok: true } : { ok: false, reason: 'not-configured' };
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false, reason: 'network' };
  }
}

export const money = (symbol, n) => `${symbol}${n}`;
