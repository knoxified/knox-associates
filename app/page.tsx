'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import IntakeModal from '../components/IntakeModal';
import { 
  Building2, 
  Flame, 
  Gavel, 
  ShieldCheck, 
  Calculator, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  ChevronRight,
  Lock,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const [intakeOpen, setIntakeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Primary Navigation */}
      <Navbar onOpenIntake={() => setIntakeOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenIntake={() => setIntakeOpen(true)} />

        {/* Practice Disciplines Teaser Section */}
        <section className="py-20 md:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-2">
                  <Scale className="h-4 w-4" />
                  <span>Chambers Core Mandates</span>
                </div>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                  Practice Disciplines of Distinction
                </h2>
                <p className="mt-3 font-sans-legal text-sm text-[var(--text-secondary)] leading-relaxed">
                  Headquartered in Ikoyi, Lagos, our partners provide high-stakes counsel across Nigeria’s primary commercial, petroleum, and financial sectors.
                </p>
              </div>

              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-xs font-sans-legal font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:text-[var(--accent-gold-light)] transition-colors"
              >
                <span>View All 6 Practice Disciplines</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Curated 3 Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 space-y-4 hover:border-[var(--accent-gold)] transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors">
                  Corporate M&amp;A &amp; Restructuring
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans-legal leading-relaxed">
                  Advising on cross-border acquisitions, joint ventures, FCCPA merger clearances, and schemes of arrangement under CAMA 2020.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[var(--accent-gold)]">
                  Key Act: CAMA 2020 / FCCPA 2018
                </div>
              </div>

              <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 space-y-4 hover:border-[var(--accent-gold)] transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                  <Flame className="h-6 w-6" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors">
                  Energy &amp; Petroleum Industry
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans-legal leading-relaxed">
                  Upstream shallow-water farm-ins, deepwater concessions, gas commercialization pacts, and Host Community Trusts under the PIA 2021.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[var(--accent-gold)]">
                  Key Act: Petroleum Industry Act (PIA 2021)
                </div>
              </div>

              <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 space-y-4 hover:border-[var(--accent-gold)] transition-colors group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                  <Gavel className="h-6 w-6" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors">
                  Commercial Litigation &amp; Arbitration
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans-legal leading-relaxed">
                  First-chair courtroom command by Senior Advocates of Nigeria (SAN) before the Supreme Court, Lagos Commercial High Court, and arbitral tribunals.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[var(--accent-gold)]">
                  Key Act: Arbitration &amp; Mediation Act 2023
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Portals (Conflict Screening & Retainer Calculator) */}
        <section className="py-20 md:py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1 font-sans-legal">
                Client Engagement Infrastructure
              </div>
              <h2 className="font-cinzel text-3xl font-bold text-white">
                Fiduciary Transparency &amp; Ethical Safeguards
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans-legal mt-2 leading-relaxed">
                We empower prospective corporate clients with self-service tools for ethical conflict screening and transparent legal fee estimates prior to formal instruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans-legal">
              
              {/* Conflict Check Portal Card */}
              <div className="p-8 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] space-y-5 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--accent-gold)]">
                      <Lock className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                      Rule 17 RPC 2023
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Conflict-of-Interest Clearance Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Verify absence of adverse party representation with our automated screening engine before transmitting privileged commercial documents to our Lagos Chambers.
                  </p>
                  <div className="space-y-1.5 text-xs text-zinc-400 pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                      <span>Instant Preliminary Clearance Token generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                      <span>Automatic ethical hold firewall for contested entities</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href="/conflict-check"
                    className="w-full flex items-center justify-between rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0c10] transition-colors"
                  >
                    <span>Launch Dedicated Conflict Portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Retainer Calculator Portal Card */}
              <div className="p-8 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] space-y-5 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--accent-gold)]">
                      <Calculator className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                      ₦ NGN &amp; $ USD
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Retainer Scale &amp; Remuneration Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Calculate estimated initial trust retainers and blended team rates across practice complexity under the Legal Practitioners Remuneration Order.
                  </p>
                  <div className="space-y-1.5 text-xs text-zinc-400 pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                      <span>Segregated client escrow accounts in Nigerian tier-1 banks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                      <span>Limitation Law of Lagos State procedural deadline triage</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href="/fees"
                    className="w-full flex items-center justify-between rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0c10] transition-colors"
                  >
                    <span>Launch Retainer &amp; Deadline Calculator</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partners Spotlight Teaser */}
        <section className="py-20 md:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-2 font-sans-legal">
                  Chambers Leadership
                </div>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                  Senior Advocates of Nigeria &amp; Partners
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] font-sans-legal leading-relaxed">
                  Our litigation and advisory teams are led by advocates who have helped shape modern Nigerian commercial jurisprudence.
                </p>
              </div>

              <Link
                href="/attorneys"
                className="inline-flex items-center gap-2 text-xs font-sans-legal font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:text-[var(--accent-gold-light)] transition-colors"
              >
                <span>View Full Partners Roster &amp; Credentials</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans-legal">
              
              <div className="p-7 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-sm font-cinzel font-bold text-[var(--accent-gold)]">
                    SK
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Chief Sterling Knox <span className="text-[var(--accent-gold)]">SAN, FCIArb</span>
                    </h3>
                    <div className="text-xs text-[var(--accent-gold)]">Managing Partner · Conferred Senior Advocate of Nigeria</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Leading trial counsel with over 30 years of courtroom command across the Supreme Court of Nigeria, Court of Appeal, and Federal High Court dockets in ₦100B+ commercial and energy disputes.
                </p>
                <div className="text-[11px] text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-3">
                  Alum: University of Lagos (LL.B 1st Class) · Cambridge (LL.M) · Life Bencher
                </div>
              </div>

              <div className="p-7 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-sm font-cinzel font-bold text-[var(--accent-gold)]">
                    EV
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Eleanor Vance-Knox <span className="text-[var(--accent-gold)]">BL</span>
                    </h3>
                    <div className="text-xs text-[var(--accent-gold)]">Senior Partner · Cross-Border M&amp;A Lead</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Dual-qualified in Nigeria and England &amp; Wales, leading major corporate restructurings under CAMA 2020, syndicated project finance at Lekki Free Zone, and FCCPA merger clearances.
                </p>
                <div className="text-[11px] text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-3">
                  Alum: University of Ibadan (LL.B 1st Class) · Oxford University (B.C.L. 1st Class)
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Client Strategic Advisory Callout Banner */}
        <section className="py-20 md:py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase">
              <Scale className="h-4 w-4" />
              <span>Direct Chambers Consultation · Lagos &amp; Abuja</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              When Commercial Stakes Define the Enterprise
            </h2>
            <p className="mx-auto max-w-2xl font-sans-legal text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              We maintain absolute discretion and readiness. In emergency matters involving Mareva asset freeze orders, NUPRC regulatory notices, or contested CAMA corporate restructurings, our Senior Advocates of Nigeria (SAN) and partners mobilize immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/conflict-check"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-8 py-3.5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-all cursor-pointer shadow-md"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Submit Confidential Lagos Inquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-6 py-3.5 font-sans-legal text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
              >
                <span>Chambers Directory &amp; Locations</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Regulatory Footer */}
      <Footer onOpenIntake={() => setIntakeOpen(true)} />

      {/* Interactive Intake Modal */}
      <IntakeModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
      />
    </div>
  );
}
