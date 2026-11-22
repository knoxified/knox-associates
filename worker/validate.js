// @ts-check
/** Pure validation for the contact endpoint, kept separate so it can be unit tested. */

export const PRACTICE_IDS = new Set([
  '', 'ma', 'energy', 'litigation', 'banking', 'regulatory', 'wealth',
]); // keep in sync with lib/data/practices.ts (a test enforces this)

export const ROLE_IDS = new Set(['pupillage', 'associate', 'clerkship', 'other']);

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/[\n\t]+/g, ' ');

/**
 * @param {unknown} body
 * @returns {{ ok: true, value: Record<string, string> } | { ok: false, error: string, silent?: boolean }}
 */
export function validate(body) {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request.' };
  const b = /** @type {Record<string, unknown>} */ (body);

  // Honeypot: bots fill it. Pretend success so they do not retry.
  if (clean(b.website, 10)) return { ok: false, error: 'Rejected.', silent: true };

  const kind = b.kind === 'careers' ? 'careers' : 'enquiry';
  const name = oneLine(b.name, 120);
  const email = oneLine(b.email, 200);
  const message = clean(b.message, 4000);
  const practice = oneLine(b.practice, 40);
  const role = oneLine(b.role, 40);

  if (name.length < 2) return { ok: false, error: 'Please enter your name.' };
  if (!EMAIL.test(email)) return { ok: false, error: 'Please enter a valid email address.' };
  if (message.length < 10) return { ok: false, error: 'Please tell us a little more in your message.' };
  if (b.consent !== 'on' && b.consent !== true) return { ok: false, error: 'Please tick the consent box.' };
  if (kind === 'enquiry' && !PRACTICE_IDS.has(practice)) return { ok: false, error: 'Unknown area of law.' };
  if (kind === 'careers' && role && !ROLE_IDS.has(role)) return { ok: false, error: 'Unknown role.' };

  return {
    ok: true,
    value: {
      kind,
      name,
      email,
      phone: oneLine(b.phone, 40),
      organization: oneLine(b.organization, 160),
      education: oneLine(b.education, 200),
      practice,
      role,
      message,
    },
  };
}

export function makeRef(kind, now = new Date(), rand = crypto.getRandomValues(new Uint8Array(3))) {
  const d = now.toISOString().slice(2, 10).replace(/-/g, '');
  const r = Array.from(rand, (x) => x.toString(16).padStart(2, '0')).join('').toUpperCase();
  return `${kind === 'careers' ? 'CAR' : 'ENQ'}-${d}-${r}`;
}
