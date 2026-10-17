'use client';

import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, X, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface LegalBrief {
  id: string;
  category: 'CAMA / Corporate' | 'Petroleum & Energy' | 'Arbitration & Litigation' | 'Fintech & Banking';
  title: string;
  author: string;
  date: string;
  readTime: string;
  abstract: string;
  citation: string;
  content: string;
}

const BRIEFS: LegalBrief[] = [
  {
    id: 'fccpa-merger-clearance-nigeria',
    category: 'CAMA / Corporate',
    title: 'Merger Control Under the Federal Competition & Consumer Protection Act (FCCPA 2018)',
    author: 'Eleanor Vance-Knox, BL (Senior Partner)',
    date: 'October 2026',
    readTime: '7 min read',
    citation: 'FCCPA 2018 Part XII; Merger Review Regulations 2020 (FCCPC)',
    abstract: 'An executive analysis of notification thresholds, negative control definitions, and expedited Phase 1 vs in-depth Phase 2 merger approvals in Nigerian cross-border acquisitions.',
    content: `Under the Federal Competition and Consumer Protection Act (FCCPA 2018), the Federal Competition and Consumer Protection Commission (FCCPC) exercises sole statutory jurisdiction over merger approvals in Nigeria, displacing the historical jurisdiction previously held by the SEC under the ISA 2007.

Strategic Deal Considerations:
1. Notification Thresholds: Mandatory pre-merger notification applies where the combined annual turnover of the acquirer and target in Nigeria equals or exceeds ₦1,000,000,000, or where the turnover of the target alone equals or exceeds ₦500,000,000.
2. The Concept of "Control": Section 92 of the FCCPA adopts an expansive standard of control encompassing minority equity stakes that confer veto rights over key commercial policies, board appointments, or business plans.
3. Gun-Jumping Sanctions: Parties must maintain strict operational independence prior to clearance. Implementing integration covenants prior to unconditional FCCPC approval incurs severe statutory penalties up to 10% of total annual turnover.`
  },
  {
    id: 'pia-host-community-trusts',
    category: 'Petroleum & Energy',
    title: 'Implementing Host Community Development Trusts (HCDTs) Under Chapter 3 of the PIA 2021',
    author: 'Babajide Thorne, BL (Partner)',
    date: 'September 2026',
    readTime: '8 min read',
    citation: 'Sections 234-257 Petroleum Industry Act 2021; NUPRC Host Community Regulations 2022',
    abstract: 'Practical guidance for upstream petroleum settlors on incorporating HCDTs, allocating the mandatory 3% Operating Expenditure (OPEX) fund, and establishing community management committees.',
    content: `Chapter 3 of the Petroleum Industry Act (PIA 2021) establishes a revolutionary statutory framework for sustainable peace and economic development in oil and gas producing areas, mandating every upstream petroleum licensee to incorporate a Host Community Development Trust with the Corporate Affairs Commission (CAC).

Key Governance Requirements for Operators:
1. Statutory OPEX Contribution: Settlors must make an annual statutory contribution of 3% of their operating expenditure from the preceding financial year directly into the Trust Fund account.
2. Needs Assessment Protocol: Prior to disbursing capital, trustees must conduct a formal, verified community needs assessment matrix aligned with NUPRC regulatory timelines.
3. Tax Deductibility: Contributions made by settlors to the Host Community Development Trust Fund are fully tax-deductible for the purposes of the Hydrocarbon Tax (HT) and Companies Income Tax (CIT).`
  },
  {
    id: 'ama-arbitral-enforcement-lagos',
    category: 'Arbitration & Litigation',
    title: 'Enforcing Commercial Arbitral Awards in the Lagos High Court Under the AMA 2023',
    author: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    date: 'August 2026',
    readTime: '6 min read',
    citation: 'Arbitration and Mediation Act 2023 (AMA 2023); Limitation Law of Lagos State § 8',
    abstract: 'How the landmark Arbitration and Mediation Act 2023 curtails interlocutory appeals, introduces the Award Review Tribunal (ART), and accelerates recognition of domestic and foreign arbitral awards.',
    content: `The Arbitration and Mediation Act (AMA 2023) fundamentally modernized Nigeria’s dispute resolution landscape by repealing the 1988 Arbitration and Conciliation Act.

Salient Enactments for Commercial Litigators:
1. Emergency Arbitrator Regime: Section 16 of the AMA formally enshrines the appointment and enforcement of emergency arbitrator interim orders, curbing the need for preemptive court litigation.
2. Limitation Period Consolidation: Section 34 resolves decades of conflicting appellate jurisprudence by explicitly providing that the statutory limitation period for enforcing an arbitral award is calculated from the date of the award, excluding the time elapsed during the arbitral proceedings.
3. Award Review Tribunal (ART): Parties can agree to an opt-in Award Review Tribunal mechanism, resolving challenges within 60 days before any recourse to judicial courts.`
  },
  {
    id: 'cama-director-fiduciary-veil',
    category: 'CAMA / Corporate',
    title: 'Director Fiduciary Duties and Piercing the Corporate Veil Under CAMA 2020',
    author: 'Eleanor Vance-Knox, BL (Senior Partner)',
    date: 'July 2026',
    readTime: '6 min read',
    citation: 'Sections 305, 316 & 343 Companies and Allied Matters Act 2020',
    abstract: 'Judicial interpretation of codification of directors’ common-law duties, derivative actions, and statutory liability for trading while insolvent under Nigerian company law.',
    content: `The Companies and Allied Matters Act (CAMA 2020) substantially enhanced the oversight and personal liability of corporate directors in Nigeria.

Core Defensive Principles:
1. Objective Standard of Care: Section 305(2) codifies both subjective and objective standards of skill and care; directors can no longer plead commercial inexperience to avoid liability.
2. Multiple Directorship Restrictions: Section 307 prohibits any individual from holding concurrent directorships in more than five public companies in Nigeria.
3. Unfairly Prejudicial Conduct: Section 353 provides enhanced remedies for minority shareholders to petition the Federal High Court for relief against oppressive board management or illegal transactions.`
  }
];

export default function LegalBriefs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBrief, setActiveBrief] = useState<LegalBrief | null>(null);

  const filteredBriefs = BRIEFS.filter((brief) => {
    const matchesCategory = selectedCategory === 'All' || brief.category === selectedCategory;
    const matchesSearch =
      brief.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brief.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brief.citation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="jurisprudence" className="py-20 md:py-32 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-2">
              <BookOpen className="h-4 w-4" />
              <span>Nigerian Legal Scholarship &amp; Advisories</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Chambers Legal Briefs &amp; Statutory Reviews
            </h2>
            <p className="mt-3 font-sans-legal text-sm text-[var(--text-secondary)] leading-relaxed">
              Authoritative statutory analysis on the CAMA 2020, PIA 2021, FCCPA 2018, and landmark Supreme Court of Nigeria rulings authored by Knox &amp; Associates partners.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search CAMA, PIA, AMA statutes..."
              className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] pl-9 pr-4 py-2 text-xs text-[var(--text-primary)] placeholder-zinc-500 focus:border-[var(--accent-gold)] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter Tabs - Clean segmented controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {['All', 'CAMA / Corporate', 'Petroleum & Energy', 'Arbitration & Litigation'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-xs font-sans-legal font-medium rounded-sm border transition-colors cursor-pointer ${
                selectedCategory === category
                  ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-white'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Briefs Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBriefs.map((brief) => (
            <article
              key={brief.id}
              className="group flex flex-col justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 sm:p-7 transition-all duration-300 hover:border-[var(--accent-gold)]"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--text-muted)] mb-3">
                  <span className="text-[var(--accent-gold)] font-medium">{brief.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{brief.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{brief.readTime}</span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors leading-snug">
                  {brief.title}
                </h3>

                <p className="mt-3 font-sans-legal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {brief.abstract}
                </p>

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)] truncate">
                  Authority: <span className="text-zinc-300">{brief.citation}</span>
                </div>
              </div>

              <div className="mt-6 pt-2 flex items-center justify-between">
                <span className="text-xs font-sans-legal text-zinc-400">
                  By {brief.author.split(',')[0]}
                </span>
                <button
                  onClick={() => setActiveBrief(brief)}
                  className="flex items-center gap-1.5 text-xs font-sans-legal font-semibold text-[var(--accent-gold)] hover:text-[var(--accent-gold-light)] transition-colors cursor-pointer"
                >
                  <span>Read Complete Brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Brief Reading Modal */}
      {activeBrief && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-3xl rounded-lg bg-[#11131a] border border-[var(--border-prominent)] text-[#f4f3ef] p-6 sm:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="brief-title"
          >
            <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] uppercase tracking-widest mb-1">
                  <span>{activeBrief.category} Practice Brief</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeBrief.date}</span>
                </div>
                <h3 id="brief-title" className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeBrief.title}
                </h3>
                <div className="text-xs text-zinc-400 mt-1">
                  Author: <span className="text-white font-medium">{activeBrief.author}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveBrief(null)}
                aria-label="Close legal brief"
                className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5 font-sans-legal text-sm text-zinc-300">
              <div className="p-3.5 rounded bg-[#171a24] border border-zinc-800 font-mono text-xs text-[var(--accent-gold)]">
                Statutory Reference: {activeBrief.citation}
              </div>

              <div className="prose prose-invert max-w-none text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {activeBrief.content}
              </div>

              <div className="p-4 rounded bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400">
                <span className="font-semibold text-zinc-200 block mb-1">Notice under Rule 39 of the Rules of Professional Conduct (RPC 2023):</span>
                This publication is provided for general academic and commercial informational purposes. It does not constitute formal legal opinion or establish a barrister-client relationship. Specific legal advice should be sought from Knox &amp; Associates regarding your particular transaction or dispute in Nigeria.
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex justify-between items-center">
              <span className="text-[11px] text-zinc-500">
                Knox &amp; Associates Nigerian Jurisprudence Series
              </span>
              <button
                onClick={() => setActiveBrief(null)}
                className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
