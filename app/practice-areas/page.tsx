import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import PracticeIcon from '../../components/PracticeIcon';
import EnquiryCta from '../../components/EnquiryCta';
import { PRACTICES } from '../../lib/data/practices';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Corporate and M&A, energy and petroleum, banking and finance, litigation and arbitration, regulatory and private client work across Nigeria.',
  alternates: { canonical: '/practice-areas/' },
};

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <PageHeader eyebrow="Practice Areas" title="What We Do" intro="Select an area to see our approach, the legislation we work with and the clients we act for." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRACTICES.map((p) => (
              <Link key={p.id} href={`/practice-areas/${p.id}/`} className="group flex gap-5 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 transition-colors hover:border-[var(--accent-gold)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                  <PracticeIcon name={p.icon} className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-cinzel text-lg font-bold text-white group-hover:text-[var(--accent-gold)]">{p.title}</h2>
                  <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{p.summary}</p>
                  <span className="inline-flex items-center gap-1.5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)]">Read more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <EnquiryCta />
      </main>
      <Footer />
    </div>
  );
}
