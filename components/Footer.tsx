import React from 'react';
import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { SITE, NAV, whatsappHref } from '../lib/site';
import { PRACTICES } from '../lib/data/practices';

const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'x', label: 'X (Twitter)', Icon: Twitter },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
] as const;

export default function Footer() {
  const wa = whatsappHref();
  return (
    <footer className="border-t border-[var(--border-prominent)] bg-[var(--bg-primary)] font-sans-legal text-xs text-[var(--text-secondary)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--border-prominent)] text-[var(--accent-gold)]">
              <Scale className="h-4 w-4" aria-hidden="true" />
            </div>
            <span className="font-cinzel text-base font-bold tracking-wider text-[var(--text-primary)]">{SITE.nameCaps}</span>
          </div>
          <p className="max-w-xs leading-relaxed">{SITE.description}</p>
          <div className="flex gap-3">
            {SOCIALS.map(({ key, label, Icon }) =>
              SITE.social[key] ? (
                <a key={key} href={SITE.social[key]} aria-label={label} rel="noopener noreferrer" target="_blank" className="rounded-sm border border-[var(--border-subtle)] p-2 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]">
                  <Icon className="h-4 w-4" />
                </a>
              ) : null
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-cinzel text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">Practice Areas</h2>
          <ul className="space-y-2.5">
            {PRACTICES.map((p) => (
              <li key={p.id}>
                <Link href={`/practice-areas/${p.id}/`} className="hover:text-[var(--accent-gold)]">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-cinzel text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">The Firm</h2>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-[var(--accent-gold)]">{n.label}</Link></li>
            ))}
            <li><Link href="/pro-bono" className="hover:text-[var(--accent-gold)]">Pro Bono</Link></li>
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">Contact</h2>
          {SITE.offices.map((o) => (
            <address key={o.id} className="not-italic leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />
                <span><strong className="text-[var(--text-primary)]">{o.city}</strong> · {o.address}</span>
              </div>
            </address>
          ))}
          <div className="space-y-2">
            <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)]"><Phone className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />{SITE.phone.display}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)]"><Mail className="h-3.5 w-3.5 text-[var(--accent-gold)]" aria-hidden="true" />{SITE.email}</a>
            {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--accent-gold)]">WhatsApp us</a>}
          </div>
        </div>
      </div>

      {(SITE.memberships.length > 0) && (
        <div className="border-t border-[var(--border-subtle)] px-4 py-5 text-center text-[11px] text-[var(--text-muted)]">
          Member of: {SITE.memberships.map((m, i) => (
            <span key={m.name}>{i > 0 && ' · '}{m.url ? <a href={m.url} rel="noopener noreferrer" target="_blank" className="hover:text-[var(--accent-gold)]">{m.name}</a> : m.name}</span>
          ))}
        </div>
      )}

      <div className="border-t border-[var(--border-subtle)] px-4 py-6 text-[11px] text-[var(--text-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed">
            The content of this website is for general information only and is not legal advice. Viewing it does not create a lawyer–client relationship.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--accent-gold)]">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--accent-gold)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
