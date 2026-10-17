'use client';

import React, { useState, useMemo } from 'react';
import { DollarSign, Clock, ShieldCheck, CheckCircle2, Info, ArrowUpRight, Calculator } from 'lucide-react';
import {
  estimateLegalEngagement,
  MatterType,
  EngagementModel,
  UrgencyLevel,
  CurrencyMode,
  formatNaira
} from '../lib/legal-engine';

interface FeeEstimatorProps {
  onOpenIntake?: () => void;
}

export default function FeeEstimator({ onOpenIntake }: FeeEstimatorProps) {
  const [matterType, setMatterType] = useState<MatterType>('corporate_ma');
  const [complexity, setComplexity] = useState<'standard' | 'complex' | 'high_stakes'>('complex');
  const [urgency, setUrgency] = useState<UrgencyLevel>('standard');
  const [model, setModel] = useState<EngagementModel>('hourly');
  const [currency, setCurrency] = useState<CurrencyMode>('NGN');

  const estimate = useMemo(() => {
    return estimateLegalEngagement({
      matterType,
      complexity,
      urgency,
      engagementModel: model,
      currency
    });
  }, [matterType, complexity, urgency, model, currency]);

  return (
    <section id="fee-structure" className="py-20 md:py-32 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-2">
              <Calculator className="h-4 w-4" />
              <span>Legal Practitioners Remuneration</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Retainer Scale &amp; Fee Transparency
            </h2>
            <p className="mt-3 font-sans-legal text-sm text-[var(--text-secondary)] leading-relaxed">
              Pursuant to the Legal Practitioners Remuneration Order and Rule 50 of the Rules of Professional Conduct (RPC 2023), Knox &amp; Associates offers predictable retainer frameworks for domestic and cross-border transactions.
            </p>
          </div>

          {/* Currency Toggle (NGN / USD) */}
          <div className="p-1 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center self-start md:self-end">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-3 py-1.5 text-xs font-sans-legal font-bold rounded-sm transition-colors cursor-pointer ${
                currency === 'NGN'
                  ? 'bg-[var(--accent-gold)] text-[#0b0c10]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ₦ Nigerian Naira (NGN)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-sans-legal font-bold rounded-sm transition-colors cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[var(--accent-gold)] text-[#0b0c10]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              $ US Dollar (Cross-Border)
            </button>
          </div>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 sm:p-8 font-sans-legal space-y-6">
            
            {/* Practice Selection */}
            <div>
              <label htmlFor="estimator-matter" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                1. Select Practice Discipline
              </label>
              <select
                id="estimator-matter"
                value={matterType}
                onChange={(e) => setMatterType(e.target.value as MatterType)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="corporate_ma">Corporate Mergers &amp; Restructuring (CAMA 2020)</option>
                <option value="energy_natural_resources">Energy &amp; Petroleum Industry Transactions (PIA 2021)</option>
                <option value="commercial_litigation">High-Stakes Commercial Litigation &amp; Arbitration (AMA 2023)</option>
                <option value="private_wealth">Private Client Wealth &amp; Family Office Succession</option>
                <option value="intellectual_property">Fintech, Data Protection &amp; IP Transactions (NDPA 2023)</option>
                <option value="regulatory_defense">White-Collar &amp; Financial Crimes Defense (EFCC / SEC Nigeria)</option>
                <option value="employment_executive">Executive Employment Disputes (National Industrial Court)</option>
              </select>
            </div>

            {/* Matter Complexity */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                2. Matter Scale &amp; Commercial Exposure
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard', desc: 'Bilateral commercial agreement or single-court action' },
                  { id: 'complex', label: 'Complex', desc: 'Multi-party, cross-border or high exposure' },
                  { id: 'high_stakes', label: 'High Stakes', desc: 'Appellate / Supreme Court, PIA asset buyout or EFCC inquiry' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setComplexity(item.id as any)}
                    className={`p-3 rounded-sm text-left border transition-all cursor-pointer ${
                      complexity === item.id
                        ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-white'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-zinc-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-1 hidden sm:block">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Engagement Model */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                3. Engagement Arrangement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'hourly', title: 'Hourly Scale (SAN & Partner)', desc: 'Transparent itemized time entries with LEDES format' },
                  { id: 'fixed_milestone', title: 'Milestone Fixed-Fee Staging', desc: 'Defined caps per transaction phase or trial stage' },
                  { id: 'outside_general_counsel', title: 'Outside General Counsel (OGC)', desc: 'Monthly retainer for ongoing corporate & regulatory coverage' },
                  { id: 'hybrid_success', title: 'Hybrid Risk-Sharing / Contingency', desc: 'Compliant with Rule 50 of RPC 2023' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModel(item.id as any)}
                    className={`p-3 rounded-sm text-left border transition-all cursor-pointer ${
                      model === item.id
                        ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 text-white ring-1 ring-[var(--accent-gold)]'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-zinc-600'
                    }`}
                  >
                    <div className="text-xs font-bold text-[var(--text-primary)]">{item.title}</div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="urgency-timeline" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                4. Procedural Urgency &amp; Filing Horizon
              </label>
              <select
                id="urgency-timeline"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="standard">Standard Horizon (Regular court term or transaction schedule)</option>
                <option value="immediate">Urgent Emergency (Ex-parte injunction, arrest of vessel, or EFCC summons)</option>
                <option value="prospective">Prospective Strategic Planning (Next quarterly cycle)</option>
              </select>
            </div>

          </div>

          {/* Results Card Column (5 cols) */}
          <div className="lg:col-span-5 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] p-6 sm:p-8 font-sans-legal shadow-xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)]">
                Chambers Retainer Benchmark
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">Client Escrow Account</span>
            </div>

            <div className="mt-6 space-y-6">
              {/* Estimated Retainer */}
              <div>
                <span className="text-xs text-[var(--text-secondary)] block mb-1">
                  Estimated Initial Engagement Retainer ({currency})
                </span>
                <div className="font-sans-legal text-2xl sm:text-3xl font-bold tracking-tight text-[var(--accent-gold)]">
                  {estimate.formattedRetainer}
                </div>
                <span className="text-[11px] text-[var(--text-muted)] mt-1 block">
                  Deposited in dedicated client trust escrow account pursuant to the Legal Practitioners Accounts Rules.
                </span>
              </div>

              {/* Blended Rate & Duration */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--border-subtle)]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                    Blended Team Rate
                  </span>
                  <div className="font-sans-legal text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
                    {currency === 'NGN' ? formatNaira(estimate.blendedHourlyRate) : `$${estimate.blendedHourlyRate.toLocaleString()}`} 
                    <span className="text-xs font-normal text-zinc-400"> / hr</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block">
                    Active Horizon
                  </span>
                  <div className="font-cinzel text-lg sm:text-xl font-bold text-white mt-0.5">
                    ~{estimate.estimatedDurationWeeks} <span className="text-xs font-normal text-zinc-400">weeks</span>
                  </div>
                </div>
              </div>

              {/* Billing Principles List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] block">
                  Nigerian Bar Governance Standards
                </span>
                {estimate.billingNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    if (onOpenIntake) {
                      onOpenIntake();
                    } else if (typeof window !== 'undefined') {
                      window.location.href = '/conflict-check';
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
                >
                  <span>Request Custom Engagement Proposal</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-center text-[10px] text-[var(--text-muted)]">
                  Estimates are illustrative pursuant to the Legal Practitioners Act. Formal retainer begins upon execution of a letter of engagement.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
