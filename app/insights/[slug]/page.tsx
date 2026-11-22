import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import RichText from '../../../components/RichText';
import EnquiryCta from '../../../components/EnquiryCta';
import JsonLd from '../../../components/JsonLd';
import { INSIGHTS, getInsight } from '../../../lib/data/insights';
import { ATTORNEYS } from '../../../lib/data/attorneys';
import { SITE } from '../../../lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => INSIGHTS.map((i) => ({ slug: i.id }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = getInsight((await params).slug);
  if (!i) return {};
  return {
    title: i.title, description: i.abstract, alternates: { canonical: `/insights/${i.id}/` },
    openGraph: { type: 'article', title: i.title, description: i.abstract, url: `${SITE.url}/insights/${i.id}/` },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const i = getInsight((await params).slug);
  if (!i) notFound();
  const author = ATTORNEYS.find((a) => i.author.includes(a.name));
  const more = INSIGHTS.filter((x) => x.id !== i.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <JsonLd data={{
          '@context': 'https://schema.org', '@type': 'Article', headline: i.title, description: i.abstract,
          author: { '@type': 'Person', name: i.author }, publisher: { '@id': `${SITE.url}/#firm` },
          mainEntityOfPage: `${SITE.url}/insights/${i.id}/`,
        }} />
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <PageHeader
            crumbs={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights/' }, { label: i.category }]}
            eyebrow={i.category} title={i.title}
          />
          <p className="mt-4 font-sans-legal text-xs text-[var(--text-muted)]">
            {author ? <Link href={`/attorneys/${author.id}/`} className="text-[var(--accent-gold)] hover:underline">{i.author}</Link> : i.author} · {i.date} · {i.readTime}
          </p>
          <p className="mt-8 border-l-2 border-[var(--accent-gold)] pl-4 font-sans-legal text-base font-light italic leading-relaxed text-[var(--text-primary)]">{i.abstract}</p>
          <div className="mt-8"><RichText text={i.content} /></div>
          {i.citation && <p className="mt-10 border-t border-[var(--border-subtle)] pt-4 font-mono text-[11px] text-[var(--text-muted)]">{i.citation}</p>}
          <p className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-4 font-sans-legal text-[11px] leading-relaxed text-[var(--text-muted)]">
            This article is for general information only and is not legal advice. Please obtain advice on your specific circumstances.
          </p>
          {more.length > 0 && (
            <div className="mt-12 space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">Keep reading</h2>
              <ul className="space-y-2">{more.map((m) => <li key={m.id}><Link href={`/insights/${m.id}/`} className="font-sans-legal text-sm text-[var(--accent-gold)] hover:underline">{m.title}</Link></li>)}</ul>
            </div>
          )}
        </article>
        <EnquiryCta />
      </main>
      <Footer />
    </div>
  );
}
