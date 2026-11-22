import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import PracticeIcon from '../components/PracticeIcon';
import { SITE, ENQUIRY_HREF } from '../lib/site';
import { PRACTICES } from '../lib/data/practices';
import { ATTORNEYS } from '../lib/data/attorneys';
import { INSIGHTS } from '../lib/data/insights';

const eyebrow = 'font-sans-legal text-xs uppercase tracking-widest text-[var(--accent-gold)]';
const h2 = 'font-cinzel text-3xl font-bold text-white sm:text-4xl';
const more = 'inline-flex items-center gap-2 font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:text-[var(--accent-gold-light)]';

export default function HomePage() {
  const leaders = ATTORNEYS.slice(0, 3);
  const latest = INSIGHTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <Hero />

        {SITE.recognitions.length > 0 && (
          <section aria-label="Recognition" className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-8">
            <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 font-sans-legal text-xs text-[var(--text-secondary)]">
              {SITE.recognitions.map((r) => (
                <li key={r.name} className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />
                  <span><strong className="text-[var(--text-primary)]">{r.name}</strong>{r.detail && ` · ${r.detail}`}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-b border-[var(--border-subtle)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 border-b border-[var(--border-subtle)] pb-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className={eyebrow}>Practice Areas</div>
                <h2 className={`mt-2 ${h2}`}>Where We Advise</h2>
              </div>
              <Link href="/practice-areas" className={more}>All practice areas <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PRACTICES.map((p) => (
                <Link key={p.id} href={`/practice-areas/${p.id}/`} className="group space-y-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 transition-colors hover:border-[var(--accent-gold)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                    <PracticeIcon name={p.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white transition-colors group-hover:text-[var(--accent-gold)]">{p.title}</h3>
                  <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{p.summary}</p>
                  <span className={more}>Read more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 border-b border-[var(--border-subtle)] pb-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className={eyebrow}>Our Team</div>
                <h2 className={`mt-2 ${h2}`}>Leadership</h2>
              </div>
              <Link href="/attorneys" className={more}>Meet the full team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {leaders.map((a) => (
                <Link key={a.id} href={`/attorneys/${a.id}/`} className="group space-y-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 transition-colors hover:border-[var(--accent-gold)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] font-cinzel text-lg font-bold text-[var(--accent-gold)]" aria-hidden="true">
                    {a.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[var(--accent-gold)]">
                    {a.name} {a.honorific && <span className="text-[var(--accent-gold)]">{a.honorific}</span>}
                  </h3>
                  <div className="font-sans-legal text-xs text-[var(--accent-gold)]">{a.title}</div>
                  <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{a.focus}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {SITE.testimonials.length > 0 && (
          <section className="border-b border-[var(--border-subtle)] py-20">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
              {SITE.testimonials.map((t) => (
                <figure key={t.attribution} className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6">
                  <Quote className="mb-3 h-5 w-5 text-[var(--accent-gold)]" aria-hidden="true" />
                  <blockquote className="font-sans-legal text-sm leading-relaxed text-[var(--text-primary)]">{t.quote}</blockquote>
                  <figcaption className="mt-4 font-sans-legal text-xs text-[var(--text-muted)]">{t.attribution}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="border-b border-[var(--border-subtle)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 border-b border-[var(--border-subtle)] pb-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className={eyebrow}>Insights</div>
                <h2 className={`mt-2 ${h2}`}>Latest Thinking</h2>
              </div>
              <Link href="/insights" className={more}>All insights <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {latest.map((i) => (
                <Link key={i.id} href={`/insights/${i.id}/`} className="group flex flex-col justify-between gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-6 transition-colors hover:border-[var(--accent-gold)]">
                  <div className="space-y-3">
                    <div className="font-sans-legal text-[11px] uppercase tracking-wider text-[var(--accent-gold)]">{i.category}</div>
                    <h3 className="font-cinzel text-base font-bold leading-snug text-white group-hover:text-[var(--accent-gold)]">{i.title}</h3>
                    <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{i.abstract}</p>
                  </div>
                  <div className="font-sans-legal text-[11px] text-[var(--text-muted)]">{i.date} · {i.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-secondary)] py-20 md:py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
            <h2 className={h2}>Speak to a Lawyer</h2>
            <p className="mx-auto max-w-xl font-sans-legal text-sm leading-relaxed text-[var(--text-secondary)]">
              Tell us about your matter and we will respond within one business day. Offices in {SITE.offices.map((o) => o.city).join(' and ')}.
            </p>
            <Link href={ENQUIRY_HREF} className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent-gold)] px-8 py-3.5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)]">
              Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
