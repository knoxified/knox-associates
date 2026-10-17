import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PracticeAreas from '../../components/PracticeAreas';
import { Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Practice Disciplines | Knox & Associates · Lagos, Nigeria',
  description: 'Explore the commercial practice disciplines of Knox & Associates: CAMA 2020 M&A, Petroleum Industry Act (PIA 2021), Commercial Litigation, Banking & Fintech, and Regulatory Defense.',
};

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-8">
        <PracticeAreas />

        {/* Action Callout */}
        <section className="py-16 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Retain Specialized Counsel for Your Matter
            </h2>
            <p className="font-sans-legal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
              Every practice group is directed by a Senior Advocate of Nigeria (SAN) or Senior Partner with decades of courtroom command and commercial closing experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/conflict-check"
                className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Screen for Potential Conflicts</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/fees"
                className="flex items-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-6 py-3 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <span>Calculate Engagement Retainer (₦)</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
