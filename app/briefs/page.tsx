import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LegalBriefs from '../../components/LegalBriefs';
import { BookOpen, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nigerian Legal Briefs & Scholarship | Knox & Associates',
  description: 'Scholarly statutory analyses and court commentary on CAMA 2020, Petroleum Industry Act (PIA 2021), and the Arbitration and Mediation Act (AMA 2023).',
};

export default function BriefsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-8">
        <LegalBriefs />

        {/* Advisory Banner */}
        <section className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] text-center">
          <div className="mx-auto max-w-3xl px-4 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Need Tailored Statutory Advisory for Your Transaction?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans-legal max-w-lg mx-auto">
              Our partners author specialized legal memorandums and formal opinions for corporate boards, lenders, and sovereign entities.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors"
              >
                <span>Request Custom Legal Opinion</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
