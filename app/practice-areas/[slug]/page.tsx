import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import PracticeIcon from '../../../components/PracticeIcon';
import EnquiryCta from '../../../components/EnquiryCta';
import JsonLd from '../../../components/JsonLd';
import { PRACTICES, getPractice } from '../../../lib/data/practices';
import { ATTORNEYS } from '../../../lib/data/attorneys';
import { INSIGHTS } from '../../../lib/data/insights';
import { SITE } from '../../../lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => PRACTICES.map((p) => ({ slug: p.id }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPractice((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/practice-areas/${p.id}/` } };
}

const h2 = 'font-cinzel text-xl font-bold text-white';
const li = 'flex items-start gap-2.5 font-sans-legal text-sm leading-relaxed text-[var(--text-secondary)]';

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPractice((await params).slug);
  if (!p) notFound();

  const lead = ATTORNEYS.find((a) => p.leadPartner.includes(a.name));
  // Match insights that mention one of this area's statute acronyms, e.g. "(CAMA 2020)" -> "CAMA".
  const acronyms = p.statutes.map((x) => x.match(/\(([A-Z]{2,7})\b/)?.[1]).filter((x): x is string => !!x);
  const related = INSIGHTS.filter((i) => acronyms.some((a) => `${i.title} ${i.abstract} ${i.citation}`.includes(a))).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <JsonLd data={{
          '@context': 'https://schema.org', '@type': 'Service', name: p.title, description: p.summary,
          provider: { '@id': `${SITE.url}/#firm` }, areaServed: 'NG',
        }} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <PageHeader
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Practice Areas', href: '/practice-areas/' }, { label: p.title }]}
            eyebrow="Practice Area" title={p.title} intro={p.summary}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <section>
                <h2 className={h2}>Representative Matters</h2>
                <ul className="mt-4 space-y-3">{p.representativeMatters.map((m) => <li key={m} className={li}><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />{m}</li>)}</ul>
              </section>
              <section>
                <h2 className={h2}>Legislation &amp; Regulation</h2>
                <ul className="mt-4 space-y-3">{p.statutes.map((s) => <li key={s} className={li}><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />{s}</li>)}</ul>
              </section>
              {related.length > 0 && (
                <section>
                  <h2 className={h2}>Related Insights</h2>
                  <ul className="mt-4 space-y-3">{related.map((i) => <li key={i.id}><Link href={`/insights/${i.id}/`} className="font-sans-legal text-sm text-[var(--accent-gold)] hover:underline">{i.title}</Link></li>)}</ul>
                </section>
              )}
            </div>
            <aside className="space-y-6">
              <div className="rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--border-prominent)] text-[var(--accent-gold)]"><PracticeIcon name={p.icon} className="h-5 w-5" /></div>
                <h2 className="font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Lead Partner</h2>
                <p className="mt-1 font-cinzel text-base font-bold text-white">
                  {lead ? <Link href={`/attorneys/${lead.id}/`} className="hover:text-[var(--accent-gold)]">{p.leadPartner}</Link> : p.leadPartner}
                </p>
                <h2 className="mt-5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Typical Clients</h2>
                <ul className="mt-2 space-y-1.5 font-sans-legal text-sm text-[var(--text-secondary)]">{p.clientTypes.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </aside>
          </div>
        </div>
        <EnquiryCta title={`Need advice on ${p.title.split(/[,&]/)[0].trim().toLowerCase()}?`} />
      </main>
      <Footer />
    </div>
  );
}
