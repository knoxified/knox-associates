import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import InsightsList from '../../components/InsightsList';
import { INSIGHTS } from '../../lib/data/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Legal analysis and commentary from our lawyers on Nigerian corporate, energy, finance and dispute resolution developments.',
  alternates: { canonical: '/insights/' },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <PageHeader eyebrow="Insights" title="Legal Analysis & Commentary" intro="General information for clients and colleagues. Not legal advice." />
        <div className="mt-12"><InsightsList items={INSIGHTS} /></div>
      </main>
      <Footer />
    </div>
  );
}
