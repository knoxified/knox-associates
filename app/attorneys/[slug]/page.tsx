import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle2, GraduationCap, Scale } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import EnquiryCta from '../../../components/EnquiryCta';
import JsonLd from '../../../components/JsonLd';
import { ATTORNEYS, getAttorney } from '../../../lib/data/attorneys';
import { SITE } from '../../../lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => ATTORNEYS.map((a) => ({ slug: a.id }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getAttorney((await params).slug);
  if (!a) return {};
  return { title: `${a.name}, ${a.title}`, description: a.bio.slice(0, 160), alternates: { canonical: `/attorneys/${a.id}/` } };
}

const h2 = 'font-cinzel text-xl font-bold text-white';
const li = 'flex items-start gap-2.5 font-sans-legal text-sm leading-relaxed text-[var(--text-secondary)]';

export default async function AttorneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getAttorney((await params).slug);
  if (!a) notFound();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <JsonLd data={{
          '@context': 'https://schema.org', '@type': 'Person', name: a.name, jobTitle: a.title,
          description: a.bio, worksFor: { '@id': `${SITE.url}/#firm` }, url: `${SITE.url}/attorneys/${a.id}/`,
        }} />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <PageHeader
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Team', href: '/attorneys/' }, { label: a.name }]}
            eyebrow={a.title} title={`${a.name}${a.honorific ? `, ${a.honorific}` : ''}`} intro={a.focus}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <section><h2 className={h2}>Profile</h2><p className="mt-4 font-sans-legal text-[15px] leading-relaxed text-[var(--text-secondary)]">{a.bio}</p></section>
              <section>
                <h2 className={h2}>Notable Work</h2>
                <ul className="mt-4 space-y-3">{a.landmarks.map((l) => <li key={l} className={li}><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />{l}</li>)}</ul>
              </section>
            </div>
            <aside className="space-y-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] p-6">
              <section>
                <h2 className="flex items-center gap-2 font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"><GraduationCap className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" /> Education</h2>
                <ul className="mt-2 space-y-1.5 font-sans-legal text-sm text-[var(--text-secondary)]">{a.education.map((e) => <li key={e}>{e}</li>)}</ul>
              </section>
              <section>
                <h2 className="flex items-center gap-2 font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"><Scale className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" /> Admissions</h2>
                <ul className="mt-2 space-y-1.5 font-sans-legal text-sm text-[var(--text-secondary)]">{a.admissions.map((e) => <li key={e}>{e}</li>)}<li>{a.callToBar}</li></ul>
              </section>
            </aside>
          </div>
        </div>
        <EnquiryCta title={`Work with ${a.name.split(' ')[0]}`} />
      </main>
      <Footer />
    </div>
  );
}
