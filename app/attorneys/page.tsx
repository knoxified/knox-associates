import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import EnquiryCta from '../../components/EnquiryCta';
import { ATTORNEYS } from '../../lib/data/attorneys';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the partners and lawyers of the firm: their experience, qualifications and areas of focus.',
  alternates: { canonical: '/attorneys/' },
};

const initials = (n: string) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

export default function AttorneysPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <PageHeader eyebrow="Our Team" title="Partners & Lawyers" intro="Experienced counsel across our practice areas." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ATTORNEYS.map((a) => (
              <Link key={a.id} href={`/attorneys/${a.id}/`} className="group space-y-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-6 transition-colors hover:border-[var(--accent-gold)]">
                <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] font-cinzel text-xl font-bold text-[var(--accent-gold)]">{initials(a.name)}</div>
                <h2 className="font-cinzel text-lg font-bold text-white group-hover:text-[var(--accent-gold)]">{a.name}{a.honorific && <span className="text-[var(--accent-gold)]">, {a.honorific}</span>}</h2>
                <div className="font-sans-legal text-xs text-[var(--accent-gold)]">{a.title}</div>
                <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{a.focus}</p>
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
