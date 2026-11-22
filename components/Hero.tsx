import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale, MapPin } from 'lucide-react';
import { SITE, ENQUIRY_HREF } from '../lib/site';
import { PRACTICES } from '../lib/data/practices';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-legal-grid pb-20 pt-12 md:pb-28 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/4 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 border-b border-[var(--border-prominent)] pb-3 font-sans-legal text-xs text-[var(--text-secondary)]">
            <span className="font-cinzel font-semibold uppercase tracking-widest text-[var(--accent-gold)]">{SITE.name}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-medium text-[var(--text-primary)]">
              <MapPin className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
              {SITE.offices.map((o) => o.city).join(' · ')}
            </span>
          </div>

          <h1 className="font-cinzel text-4xl font-bold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Precision in Advocacy. <br />
            <span className="font-playfair font-normal italic text-[var(--accent-gold)]">Practical Commercial Counsel.</span>
          </h1>

          <p className="mx-auto max-w-2xl font-sans-legal text-base font-light leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {SITE.description}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans-legal text-xs text-[var(--text-primary)] sm:text-sm">
            {PRACTICES.map((p, i) => (
              <li key={p.id} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="text-[var(--accent-gold)]">/</span>}
                <Link href={`/practice-areas/${p.id}/`} className="hover:text-[var(--accent-gold)]">{p.title.split(/[,&]/)[0].trim()}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link
              href={ENQUIRY_HREF}
              className="flex w-full items-center justify-center gap-3 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3.5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[#0b0c10] transition-colors hover:bg-[var(--accent-gold-light)] sm:w-auto"
            >
              Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/practice-areas"
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-6 py-3.5 font-sans-legal text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent-gold)] sm:w-auto"
            >
              <Scale className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" /> Our Practice Areas
            </Link>
          </div>
        </div>

        {SITE.stats.length > 0 && (
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-[var(--border-subtle)] pt-10 sm:mt-20 lg:grid-cols-4">
            {SITE.stats.map((s) => (
              <div key={s.label} className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 p-4">
                <dd className="font-cinzel text-2xl font-bold text-[var(--accent-gold)] sm:text-3xl">{s.value}</dd>
                <dt className="mt-1 font-sans-legal text-xs font-medium uppercase tracking-wider text-[var(--text-primary)]">{s.label}</dt>
                {s.note && <p className="mt-1 font-sans-legal text-[11px] text-[var(--text-muted)]">{s.note}</p>}
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
