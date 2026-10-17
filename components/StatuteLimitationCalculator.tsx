'use client';

import React, { useState, useMemo } from 'react';
import { Calendar, AlertCircle, Clock, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { calculateStatuteOfLimitations, StatuteLimitationResult } from '../lib/legal-engine';

interface StatuteLimitationCalculatorProps {
  onOpenIntake?: () => void;
}

export default function StatuteLimitationCalculator({ onOpenIntake }: StatuteLimitationCalculatorProps) {
  const [claimType, setClaimType] = useState<'breach_of_contract' | 'commercial_fraud' | 'ip_infringement' | 'breach_fiduciary'>('breach_of_contract');
  const [incidentDate, setIncidentDate] = useState('2023-06-15');

  const result: StatuteLimitationResult = useMemo(() => {
    return calculateStatuteOfLimitations(claimType, incidentDate, '2026-10-16');
  }, [claimType, incidentDate]);

  const claimLabels = {
    breach_of_contract: 'Commercial Breach of Contract (Section 8(1)(a) Limitation Law of Lagos State - 6 Years)',
    commercial_fraud: 'Commercial Securities & Corporate Fraud (Section 29 Limitation Law of Lagos State - 6 Years from Discovery)',
    ip_infringement: 'Copyright & Patent Infringement (Section 31 Nigerian Copyright Act 2022 - 3 Years)',
    breach_fiduciary: 'Breach of Director Fiduciary Duty (Sections 305 & 316 CAMA 2020 - 6 Years)'
  };

  return (
    <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70 p-6 sm:p-8 font-sans-legal text-[var(--text-primary)]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1">
        <Clock className="h-4 w-4" />
        <span>Lagos State Limitation Law &amp; Federal Docket Triage</span>
      </div>
      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
        Statute of Limitations Calculator (Lagos State Jurisdiction)
      </h3>
      <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
        Under Nigerian law, claims filed past statutory limitation periods are statute-barred, irrevocably stripping the court of jurisdiction. Calculate estimated limitation horizons under the Limitation Law of Lagos State.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <div>
          <label htmlFor="statute-claim-type" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
            Select Legal Cause of Action
          </label>
          <select
            id="statute-claim-type"
            value={claimType}
            onChange={(e) => setClaimType(e.target.value as any)}
            className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
          >
            <option value="breach_of_contract">{claimLabels.breach_of_contract}</option>
            <option value="commercial_fraud">{claimLabels.commercial_fraud}</option>
            <option value="ip_infringement">{claimLabels.ip_infringement}</option>
            <option value="breach_fiduciary">{claimLabels.breach_fiduciary}</option>
          </select>
        </div>

        <div>
          <label htmlFor="statute-incident-date" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
            Date of Breach, Cause of Action Accrual or Discovery
          </label>
          <input
            id="statute-incident-date"
            type="date"
            value={incidentDate}
            onChange={(e) => setIncidentDate(e.target.value)}
            className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-xs text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
          />
        </div>
      </div>

      {/* Triage Output */}
      <div className="mt-6 p-4 rounded-sm bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            Statutory Period ({result.statuteYears} Years under Nigerian Law)
          </div>
          <div className="font-cinzel text-lg sm:text-xl font-bold text-white mt-0.5">
            Statutory Deadline: <span className="text-[var(--accent-gold)] font-mono">{result.deadlineDate}</span>
          </div>
          <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
            Authority: {result.statuteCitation}
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs">
            {result.status === 'EXPIRED' ? (
              <span className="flex items-center gap-1 text-red-400 font-semibold">
                <AlertCircle className="h-3.5 w-3.5" /> Claim Likely Statute-Barred ({Math.abs(result.daysRemaining)} days ago)
              </span>
            ) : result.status === 'CRITICAL_URGENT' ? (
              <span className="flex items-center gap-1 text-amber-400 font-semibold animate-pulse">
                <ShieldAlert className="h-3.5 w-3.5" /> Critical Filing Urgency ({result.daysRemaining} days remaining)
              </span>
            ) : (
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" /> Active Limitation Window ({result.daysRemaining} days remaining)
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            if (onOpenIntake) {
              onOpenIntake();
            } else if (typeof window !== 'undefined') {
              window.location.href = '/conflict-check';
            }
          }}
          className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-4 py-2 text-xs font-semibold text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0c10] transition-colors cursor-pointer shrink-0"
        >
          <span>Instruct Lagos Litigation Team</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-3 text-[10px] text-[var(--text-muted)] italic">
        * Under Supreme Court of Nigeria jurisprudence (e.g. Egbe v. Adefarasin), once a suit is statute-barred, the plaintiff’s right of action is extinguished. Tolling factors like disability, fraud concealment, or written acknowledgment of debt require formal chambers evaluation.
      </div>
    </div>
  );
}
