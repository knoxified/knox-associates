'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ArrowRight, Scale, Award, Globe, FileText, CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenIntake: () => void;
  onOpenPsychology?: () => void;
}

export default function Hero({ onOpenIntake, onOpenPsychology }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-legal-grid border-b border-[var(--border-subtle)]">
      {/* Subtle radial ambient glow - restrained, warm gold */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent-gold)]/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Institutional Badge & Lagos HQ Credential */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-sans-legal text-[var(--text-secondary)] border-b border-[var(--border-prominent)] pb-1">
            <span className="text-[var(--accent-gold)] font-cinzel font-semibold tracking-widest uppercase">
              Knox &amp; Associates
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[var(--text-primary)] font-medium">
              <MapPin className="h-3 w-3 text-[var(--accent-gold)]" />
              Lagos Headquarters (Ikoyi)
            </span>
            <span aria-hidden="true">·</span>
            <span>Nigerian Bar Association (NBA) Accredited</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--text-primary)] font-mono font-medium">knox.associates</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            Precision in Advocacy. <br />
            <span className="text-[var(--accent-gold)] italic font-playfair font-normal">
              Uncompromising Distinction.
            </span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="mx-auto max-w-2xl font-sans-legal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
            Advising multinational conglomerates, Nigerian market leaders, private capital sponsors, and institutional lenders across energy transactions, cross-border investments, and commercial dispute resolution.
          </p>

          {/* Key Practice Focus - Clean editorial typographic layout (anti-pill discipline) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-sans-legal text-[var(--text-muted)]">
            <span className="text-[var(--text-primary)]">Corporate M&amp;A (CAMA 2020)</span>
            <span aria-hidden="true" className="text-[var(--accent-gold)]">/</span>
            <span className="text-[var(--text-primary)]">Energy &amp; Petroleum (PIA 2021)</span>
            <span aria-hidden="true" className="text-[var(--accent-gold)]">/</span>
            <span className="text-[var(--text-primary)]">Commercial Litigation &amp; Arbitration</span>
            <span aria-hidden="true" className="text-[var(--accent-gold)]">/</span>
            <span className="text-[var(--text-primary)]">Banking &amp; Project Finance</span>
            <span aria-hidden="true" className="text-[var(--accent-gold)]">/</span>
            <span className="text-[var(--text-primary)]">Private Client &amp; Family Wealth</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenIntake}
              className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3.5 font-sans-legal text-sm font-semibold tracking-wide text-[#0b0c10] hover:bg-[var(--accent-gold-light)] hover:shadow-lg transition-all duration-200 cursor-pointer shadow-md"
            >
              <Shield className="h-4 w-4" />
              <span>Initiate Confidential Lagos Intake</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="/practice-areas"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-6 py-3.5 font-sans-legal text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-200"
            >
              <Scale className="h-4 w-4" />
              <span>Explore Practice Disciplines</span>
            </Link>
          </div>

          {/* Privilege & Bar Disclaimer snippet */}
          <div className="pt-2">
            <p className="text-[11px] text-[var(--text-muted)] font-sans-legal">
              Strict Legal Practitioner Privilege · RPC 2023 Conflict Clearance Automated · Lagos State &amp; Federal Dockets
            </p>
          </div>

        </div>

        {/* Institutional Metrics Grid in Naira & Jurisprudence */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[var(--border-subtle)]">
          <div className="p-4 rounded-sm bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]">
            <div className="font-sans-legal text-2xl sm:text-3xl font-bold tracking-tight text-[var(--accent-gold)]">
              <span className="font-sans font-normal">₦</span>4.2 Trillion+
            </div>
            <div className="mt-1 font-sans-legal text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">
              Transactions Advised
            </div>
            <p className="mt-1 font-sans-legal text-[11px] text-[var(--text-muted)]">
              Cross-border M&amp;A, Eurobond issuances, syndicated loan facilities &amp; upstream farm-ins.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]">
            <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--accent-gold)]">
              SAN Led
            </div>
            <div className="mt-1 font-sans-legal text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">
              Senior Advocates of Nigeria
            </div>
            <p className="mt-1 font-sans-legal text-[11px] text-[var(--text-muted)]">
              First-chair courtroom command in Supreme Court, Court of Appeal, and Federal High Court dockets.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]">
            <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--accent-gold)]">
              98.4%
            </div>
            <div className="mt-1 font-sans-legal text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">
              Commercial Resolution Index
            </div>
            <p className="mt-1 font-sans-legal text-[11px] text-[var(--text-muted)]">
              Favorable bench judgments, arbitral awards under AMA 2023, and negotiated restructuring pacts.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]">
            <div className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--accent-gold)]">
              100%
            </div>
            <div className="mt-1 font-sans-legal text-xs font-medium text-[var(--text-primary)] uppercase tracking-wider">
              Ethical Firewall (RPC 2023)
            </div>
            <p className="mt-1 font-sans-legal text-[11px] text-[var(--text-muted)]">
              Strict conflict screening pursuant to Rule 17 of the Rules of Professional Conduct in Nigeria.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
