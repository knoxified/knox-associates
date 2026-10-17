import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeeEstimator from '../../components/FeeEstimator';
import StatuteLimitationCalculator from '../../components/StatuteLimitationCalculator';
import { Calculator, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retainer Scale & Fee Estimator | Knox & Associates · Lagos, Nigeria',
  description: 'Transparent legal remuneration calculator in Nigerian Naira (₦) and USD ($). Predictable retainers governed by the Legal Practitioners Remuneration Order.',
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-8">
        {/* Interactive Fee Estimator */}
        <FeeEstimator />

        {/* Procedural Deadline & Statute of Limitations Triage */}
        <section className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1">
                Procedural Risk Management
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Statutory Limitation Periods in Lagos State
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                Before evaluating engagement budgets, ensure your commercial cause of action remains actionable under the Limitation Law of Lagos State.
              </p>
            </div>

            <StatuteLimitationCalculator />
          </div>
        </section>

        {/* Next Step Banner */}
        <section className="py-16 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center">
          <div className="mx-auto max-w-3xl px-4 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Ready to Advance to Formal Engagement?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans-legal max-w-lg mx-auto">
              Once you have reviewed the retainer benchmark, execute a preliminary conflict check to begin chambers consultation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/conflict-check"
                className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Begin Conflict Screening</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="text-xs text-[var(--accent-gold)] hover:underline font-semibold"
              >
                Direct Chambers Inquiries &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
