import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AttorneysRoster from '../../components/AttorneysRoster';
import { Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partners & Senior Advocates of Nigeria (SAN) | Knox & Associates',
  description: 'Meet the advocates leading Knox & Associates: Senior Advocates of Nigeria (SAN), Cambridge and Oxford alumni, and Fellows of the Chartered Institute of Arbitrators.',
};

export default function AttorneysPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-8">
        <AttorneysRoster />

        {/* Chambers Leadership Notice */}
        <section className="py-16 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Direct Partner Accountability
            </h2>
            <p className="font-sans-legal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
              In fidelity to Rule 14 of the Rules of Professional Conduct (RPC 2023), our partners personally steer every docket. We reject the model where client matters are delegated to unvetted junior associates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors"
              >
                <span>Instruct Chambers Partners</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-6 py-3 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <span>Read Chambers Heritage</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
