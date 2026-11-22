'use client';

import React, { useCallback, useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import Turnstile, { TURNSTILE_SITE_KEY } from './Turnstile';
import { PRACTICES } from '../lib/data/practices';
import { SITE, FORM_DISCLAIMER } from '../lib/site';

type Kind = 'enquiry' | 'careers';

const ROLES = [
  ['pupillage', 'Pupillage / newly called'],
  ['associate', 'Associate'],
  ['clerkship', 'Vacation clerkship / internship'],
  ['other', 'Other'],
] as const;

const field =
  'w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)] focus:outline-none';
const label = 'mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]';

export default function ContactForm({ kind = 'enquiry' }: { kind?: Kind }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');
  const [ref, setRef] = useState('');
  const [token, setToken] = useState('');
  const [reset, setReset] = useState(0);
  const onToken = useCallback((t: string) => setToken(t), []);
  const isCareers = kind === 'careers';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (TURNSTILE_SITE_KEY && !token) {
      setStatus('error');
      setError('Please complete the verification challenge and try again.');
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, kind, turnstileToken: token }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'We could not send your message.');
      setRef(json.ref || '');
      setStatus('done');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(
        (err instanceof Error ? err.message : 'We could not send your message.') +
          ` You can also email us directly at ${isCareers ? SITE.careersEmail : SITE.email}.`
      );
      setReset((n) => n + 1);
      setToken('');
    }
  }

  if (status === 'done') {
    return (
      <div role="status" className="space-y-3 rounded-sm border border-emerald-900/50 bg-emerald-950/20 p-6 font-sans-legal text-sm text-zinc-300">
        <div className="flex items-center gap-2 font-bold text-emerald-400"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /> {isCareers ? 'Application received' : 'Enquiry received'}</div>
        <p>
          Thank you. {isCareers ? 'Our recruitment team will review your details and contact shortlisted candidates.' : 'A member of our team will respond within one business day.'}
        </p>
        {ref && <p className="text-xs text-[var(--text-muted)]">Your reference: <span className="font-mono text-[var(--accent-gold)]">{ref}</span></p>}
        {isCareers && <p className="text-xs text-[var(--text-muted)]">Please email your CV to {SITE.careersEmail} quoting your reference.</p>}
        <button type="button" onClick={() => setStatus('idle')} className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)] hover:underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 font-sans-legal" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor={`${kind}-name`} className={label}>Full name *</label><input id={`${kind}-name`} name="name" required maxLength={120} autoComplete="name" className={field} /></div>
        <div><label htmlFor={`${kind}-email`} className={label}>Email *</label><input id={`${kind}-email`} name="email" type="email" required maxLength={200} autoComplete="email" className={field} /></div>
        <div><label htmlFor={`${kind}-phone`} className={label}>Phone</label><input id={`${kind}-phone`} name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+234 …" className={field} /></div>
        {isCareers ? (
          <div>
            <label htmlFor="careers-role" className={label}>Role of interest</label>
            <select id="careers-role" name="role" className={field} defaultValue="pupillage">
              {ROLES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor="enquiry-organization" className={label}>Organisation</label>
            <input id="enquiry-organization" name="organization" maxLength={160} autoComplete="organization" className={field} />
          </div>
        )}
      </div>

      {isCareers ? (
        <div><label htmlFor="careers-education" className={label}>University &amp; qualification</label><input id="careers-education" name="education" maxLength={200} className={field} /></div>
      ) : (
        <div>
          <label htmlFor="enquiry-practice" className={label}>Area of law</label>
          <select id="enquiry-practice" name="practice" className={field} defaultValue="">
            <option value="">General enquiry</option>
            {PRACTICES.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
          </select>
        </div>
      )}

      <div>
        <label htmlFor={`${kind}-message`} className={label}>{isCareers ? 'Cover note *' : 'How can we help? *'}</label>
        <textarea id={`${kind}-message`} name="message" required minLength={10} maxLength={4000} rows={5} className={field} />
      </div>

      {/* Honeypot: real users never see or fill this. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-secondary)]">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-[#c5a880]" />
        <span>I agree that {SITE.name} may use these details to respond to me, as described in the <a href="/privacy/" className="text-[var(--accent-gold)] underline">Privacy Policy</a>.</span>
      </label>

      <Turnstile onToken={onToken} resetSignal={reset} />

      {!isCareers && <p className="text-[11px] leading-relaxed text-[var(--text-muted)]">{FORM_DISCLAIMER}</p>}

      <div aria-live="polite">
        {status === 'error' && (
          <div role="alert" className="flex items-start gap-2 rounded-sm border border-red-900/50 bg-red-950/20 p-3 text-xs text-red-300">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> <span>{error}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--accent-gold)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b0c10] transition-colors hover:bg-[var(--accent-gold-light)] disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</> : <><Send className="h-4 w-4" aria-hidden="true" /> {isCareers ? 'Submit application' : 'Send enquiry'}</>}
      </button>
    </form>
  );
}
