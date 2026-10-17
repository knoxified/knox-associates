import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ConflictCheckWizard from '../../components/ConflictCheckWizard';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conflict-of-Interest Screening Portal | Knox & Associates · Lagos',
  description: 'Confidential ethical screening pursuant to Rule 17 of the Rules of Professional Conduct (RPC 2023). Verify lack of conflicts before transmitting privileged instructions.',
};

export default function ConflictCheckPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase">
              <Lock className="h-4 w-4" />
              <span>Confidential Clearance Portal</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Ethical Conflict-of-Interest Screening
            </h1>
            <p className="font-sans-legal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Pursuant to Rule 17 of the Rules of Professional Conduct for Legal Practitioners in Nigeria (RPC 2023), Knox &amp; Associates maintains an uncompromising ethical firewall. Verify lack of adverse representation prior to disclosing substantive facts.
            </p>
          </div>

          {/* Interactive Wizard */}
          <ConflictCheckWizard isInline={false} isOpen={true} />

          {/* Security & Regulatory Assurance */}
          <div className="mt-12 p-6 rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-subtle)] font-sans-legal text-xs text-zinc-400 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Shield className="h-4 w-4 text-[var(--accent-gold)]" />
              <span>Privilege &amp; Data Security Protocol</span>
            </div>
            <p className="leading-relaxed">
              All queries entered into this portal are encrypted via TLS 1.3 and cross-referenced against our active CAC client records and adverse party databases in Ikoyi. No attorney-client relationship is created until an official letter of engagement is executed.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
