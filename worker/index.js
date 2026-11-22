// @ts-check
import { validate, makeRef } from './validate.js';

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

async function verifyTurnstile(secret, token, ip) {
  if (!token) return false;
  const body = new FormData();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const out = /** @type {{ success?: boolean }} */ (await res.json().catch(() => ({})));
  return out.success === true;
}

async function handleContact(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed.' }, 405);

  // Same-origin only.
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false, error: 'Forbidden.' }, 403);

  const raw = await request.text();
  if (raw.length > 20_000) return json({ ok: false, error: 'Request too large.' }, 413);

  let body;
  try { body = JSON.parse(raw); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }

  const checked = validate(body);
  if (!checked.ok) {
    if (checked.silent) return json({ ok: true, ref: '' });
    return json({ ok: false, error: checked.error }, 400);
  }
  const v = checked.value;

  if (env.TURNSTILE_SECRET_KEY) {
    const pass = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, String(body.turnstileToken || ''), request.headers.get('CF-Connecting-IP'));
    if (!pass) return json({ ok: false, error: 'Verification failed. Please try again.' }, 400);
  }

  // Never pretend a message was sent when email is not configured.
  if (!env.RESEND_API_KEY || !env.MAIL_FROM || !env.CONTACT_TO) {
    console.error('contact: RESEND_API_KEY / MAIL_FROM / CONTACT_TO not configured');
    return json({ ok: false, error: 'Our contact form is temporarily unavailable.' }, 503);
  }

  const ref = makeRef(v.kind);
  const to = v.kind === 'careers' ? env.CAREERS_TO || env.CONTACT_TO : env.CONTACT_TO;
  const lines = [
    `Reference: ${ref}`,
    `Type: ${v.kind === 'careers' ? 'Careers application' : 'Client enquiry'}`,
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.phone && `Phone: ${v.phone}`,
    v.organization && `Organisation: ${v.organization}`,
    v.practice && `Area of law: ${v.practice}`,
    v.role && `Role: ${v.role}`,
    v.education && `Education: ${v.education}`,
    '',
    v.message,
  ].filter((l) => typeof l === 'string');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [to],
      reply_to: v.email,
      subject: `[${v.kind === 'careers' ? 'Careers' : 'Enquiry'}] ${v.name} (${ref})`,
      text: lines.join('\n'),
    }),
  });

  if (!res.ok) {
    console.error('contact: resend failed', res.status, await res.text().catch(() => ''));
    return json({ ok: false, error: 'We could not send your message right now.' }, 502);
  }
  return json({ ok: true, ref });
}

const worker = {
  /** @param {Request} request @param {any} env */
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact') {
      try { return await handleContact(request, env); }
      catch (e) { console.error('contact: unexpected', e); return json({ ok: false, error: 'Something went wrong.' }, 500); }
    }
    if (pathname.startsWith('/api/')) return json({ ok: false, error: 'Not found.' }, 404);
    return env.ASSETS.fetch(request);
  },
};

export default worker;
