'use client';

import React, { useState } from 'react';
import { Briefcase, Gavel, Landmark, ShieldCheck, Cpu, Building2, ChevronRight, X, FileCheck, Users, Flame } from 'lucide-react';

interface PracticeAreaItem {
  id: string;
  title: string;
  leadPartner: string;
  statutes: string[];
  summary: string;
  representativeMatters: string[];
  clientTypes: string[];
  icon: any;
}

const PRACTICES: PracticeAreaItem[] = [
  {
    id: 'ma',
    title: 'Mergers, Acquisitions & Corporate Restructuring',
    leadPartner: 'Eleanor Vance-Knox, BL (Senior Partner)',
    statutes: [
      'Companies and Allied Matters Act (CAMA 2020)',
      'Federal Competition and Consumer Protection Act (FCCPA 2018 - Phase 1 & 2 Merger Clearance)',
      'Investments and Securities Act (ISA 2007) & SEC Nigeria Rules'
    ],
    summary: 'Structuring landmark domestic and cross-border M&A, schemes of arrangement, private equity buyouts, and joint ventures across West Africa.',
    representativeMatters: [
      'Advised leading African consumer conglomerate on ₦280 Billion strategic divestiture and scheme of external restructuring.',
      'Secured expedited unconditional merger clearance from FCCPA for a ₦145 Billion telecommunications infrastructure consolidation.',
      'Structured complex cross-border joint venture between a Nigerian indigenous energy group and European technical partners.'
    ],
    clientTypes: ['Multinational Enterprises', 'Private Equity Sponsors', 'Listed Companies on NGX'],
    icon: Building2
  },
  {
    id: 'energy',
    title: 'Energy, Natural Resources & Petroleum Transactions',
    leadPartner: 'Babajide Thorne, BL (Partner)',
    statutes: [
      'Petroleum Industry Act (PIA 2021)',
      'Nigerian Upstream Petroleum Regulatory Commission (NUPRC) Regulations',
      'Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010'
    ],
    summary: 'Advising upstream, midstream, and renewable energy operators on asset acquisitions, deepwater production sharing contracts, host community trusts, and energy transition governance.',
    representativeMatters: [
      'Advised indigenous upstream exploration operator on $420M acquisition of shallow-water OML assets from an international oil company (IOC).',
      'Structured comprehensive Host Community Development Trusts under Chapter 3 of the PIA 2021 across the Niger Delta.',
      'Drafted gas sales and purchase agreements (GSPAs) supporting an independent 250MW power project in Ogun State.'
    ],
    clientTypes: ['Indigenous E&P Operators', 'International Oil Companies (IOCs)', 'Independent Power Producers (IPPs)'],
    icon: Flame
  },
  {
    id: 'litigation',
    title: 'High-Stakes Commercial Litigation & Arbitration',
    leadPartner: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    statutes: [
      'Arbitration and Mediation Act (AMA 2023)',
      'High Court of Lagos State (Civil Procedure) Rules 2019',
      'Supreme Court Rules & Evidence Act 2011'
    ],
    summary: 'Led by a Senior Advocate of Nigeria (SAN), delivering trial and appellate advocacy across the High Court of Lagos State Commercial Division, Federal High Court, Court of Appeal, Supreme Court of Nigeria, and international arbitrations.',
    representativeMatters: [
      'Secured total dismissal of a ₦68 Billion banking syndicated debt enforcement action in the Federal High Court, Lagos Division.',
      'Represented multinational consortium in an ICC international arbitration seated in London governed by Nigerian law.',
      'Obtained emergency Mareva injunctions and Anton Piller orders in Lagos Commercial Division preserving critical corporate assets.'
    ],
    clientTypes: ['Commercial Banks', 'Industrial Conglomerates', 'Telecommunications Operators'],
    icon: Gavel
  },
  {
    id: 'banking',
    title: 'Banking, Fintech & Infrastructure Project Finance',
    leadPartner: 'Eleanor Vance-Knox, BL (Senior Partner)',
    statutes: [
      'Banks and Other Financial Institutions Act (BOFIA 2020)',
      'Central Bank of Nigeria (CBN) Foreign Exchange & Regulatory Sandbox Manuals',
      'Asset Management Corporation of Nigeria (AMCON) Act'
    ],
    summary: 'Structuring syndicated credit facilities, Eurobond issues, public-private partnership (PPP) infrastructure concessions, and CBN regulatory licensing for high-growth fintechs.',
    representativeMatters: [
      'Advised transaction parties on ₦120 Billion syndicated multicurrency facility for port logistics infrastructure at Lekki Free Zone.',
      'Secured CBN Payment Service Bank (PSB) and Payment Solution Service Provider (PSSP) licenses for Pan-African fintech.',
      'Counsel to sovereign development finance institutions on cross-border infrastructure financing.'
    ],
    clientTypes: ['Tier-1 Nigerian Banks', 'Development Finance Institutions', 'Fintech Unicorns'],
    icon: Landmark
  },
  {
    id: 'regulatory',
    title: 'White-Collar Defense & Financial Crimes Regulatory',
    leadPartner: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    statutes: [
      'Economic and Financial Crimes Commission (EFCC) Establishment Act',
      'Money Laundering (Prevention and Prohibition) Act 2022',
      'Corrupt Practices and Other Related Offences Act (ICPC Act)'
    ],
    summary: 'Defending financial institutions, corporate boards, and executive directors in high-profile investigations by the EFCC, ICPC, SEC Nigeria, and the Nigerian Financial Intelligence Unit (NFIU).',
    representativeMatters: [
      'Conducted internal forensic compliance review for an NGX-listed financial holding company, averting formal regulatory sanctions.',
      'Successfully defended managing director in landmark Federal High Court proceedings regarding foreign exchange allocations.',
      'Formulated enterprise Anti-Money Laundering (AML/CFT) frameworks aligned with FATF standards and CBN mandates.'
    ],
    clientTypes: ['Board Audit Committees', 'Commercial Bank Executives', 'Multinational Directors'],
    icon: ShieldCheck
  },
  {
    id: 'wealth',
    title: 'Private Client Wealth, Trusts & Family Office Governance',
    leadPartner: 'Dr. Amina Bello-Lindholm, FCIArb (Senior Counsel)',
    statutes: [
      'Administration of Estates Law of Lagos State',
      'Companies and Allied Matters Act (CAMA 2020 - Part C/F Trusts)',
      'Nigeria Data Protection Act (NDPA 2023)'
    ],
    summary: 'Structuring dynastic wealth holding vehicles, family constitutions, intergenerational probate administration, and offshore/onshore trust governance for prominent West African families.',
    representativeMatters: [
      'Architected bespoke multi-generational family office constitution and trust settlement for prominent Nigerian industrialist family.',
      'Resolved complex cross-border probate estate involving real property assets across Ikoyi, Victoria Island, London, and Dubai.',
      'Drafted protective revocable and irrevocable trust settlements preserving privately held operating enterprises.'
    ],
    clientTypes: ['Prominent West African Families', 'Single Family Offices', 'Estate Executors & Trustees'],
    icon: Briefcase
  }
];

export default function PracticeAreas() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeAreaItem | null>(null);

  return (
    <section id="practice-areas" className="py-20 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-2">
            <Briefcase className="h-4 w-4" />
            <span>Practice Disciplines</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Nigerian &amp; Cross-Border Jurisprudence
          </h2>
          <p className="mt-4 font-sans-legal text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Headquartered in Lagos with nationwide reach across all 36 states and the FCT, we represent clients on transactions and disputes of national and continental significance under CAMA 2020, the PIA 2021, and the AMA 2023.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <div
                key={practice.id}
                className="group flex flex-col justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-6 sm:p-7 transition-all duration-300 hover:border-[var(--accent-gold)] hover:bg-[var(--bg-secondary)] shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)] group-hover:border-[var(--accent-gold)] transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-sans-legal text-[11px] text-[var(--accent-gold)] font-medium">
                      SAN / Partner-Led
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                    {practice.title}
                  </h3>

                  <p className="mt-3 font-sans-legal text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {practice.summary}
                  </p>

                  {/* Clean unboxed metadata (anti-pill discipline) */}
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] space-y-2">
                    <div className="text-[11px] font-sans-legal text-[var(--text-muted)]">
                      Lead: <span className="text-[var(--text-primary)] font-medium">{practice.leadPartner.split('(')[0]}</span>
                    </div>
                    <div className="text-[11px] font-sans-legal text-[var(--text-muted)] truncate">
                      Statutory Basis: <span className="text-zinc-300">{practice.statutes[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => setSelectedPractice(practice)}
                    className="w-full flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-2.5 text-xs font-sans-legal font-semibold text-[var(--text-primary)] group-hover:border-[var(--accent-gold)] group-hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
                  >
                    <span>View Nigerian Statutory Framework</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practice Area Detail Modal */}
      {selectedPractice && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-3xl rounded-lg bg-[#11131a] border border-[var(--border-prominent)] text-[#f4f3ef] p-6 sm:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="practice-modal-title"
          >
            <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--accent-gold)] tracking-widest mb-1">
                  Nigerian Practice Discipline Briefing
                </div>
                <h3 id="practice-modal-title" className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {selectedPractice.title}
                </h3>
                <div className="mt-1 text-xs text-zinc-400">
                  Chambers Lead: <span className="text-white font-medium">{selectedPractice.leadPartner}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPractice(null)}
                aria-label="Close practice briefing"
                className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 font-sans-legal text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                  Scope &amp; Commercial Mandate
                </h4>
                <p className="leading-relaxed text-zinc-300">
                  {selectedPractice.summary} Our team coordinates directly with Nigerian regulatory bodies including the Corporate Affairs Commission (CAC), the Securities and Exchange Commission (SEC), the NUPRC, and the Nigerian Bar Association (NBA).
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-[var(--accent-gold)]" />
                  Nigerian Statutory &amp; Regulatory Instruments
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-400 list-disc list-inside">
                  {selectedPractice.statutes.map((s, idx) => (
                    <li key={idx}><span className="text-zinc-200 font-mono">{s}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <Gavel className="h-4 w-4 text-[var(--accent-gold)]" />
                  Representative Matters &amp; Precedents
                </h4>
                <div className="space-y-2">
                  {selectedPractice.representativeMatters.map((matter, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#171a24] border border-zinc-800 text-xs text-zinc-300">
                      {matter}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--accent-gold)]" />
                  Client Entities Advised
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                  {selectedPractice.clientTypes.map((type, idx) => (
                    <span key={idx} className="border-b border-zinc-700 pb-0.5 text-zinc-300">
                      {type} {idx < selectedPractice.clientTypes.length - 1 ? '·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex justify-between items-center">
              <span className="text-[11px] text-zinc-500">
                Prior engagements do not guarantee identical outcomes pursuant to Rule 39 of RPC 2023.
              </span>
              <button
                onClick={() => setSelectedPractice(null)}
                className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
