'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle2, AlertOctagon, Scale, FileText, ArrowRight, RefreshCw, Lock, Copy, Check, MapPin } from 'lucide-react';
import {
  evaluateConflictCheck,
  generateIntakeReference,
  MatterType,
  UrgencyLevel,
  ConflictCheckResult
} from '../lib/legal-engine';

interface ConflictCheckWizardProps {
  isOpen?: boolean;
  onClose?: () => void;
  isInline?: boolean;
}

export default function ConflictCheckWizard({
  isOpen = true,
  onClose,
  isInline = false
}: ConflictCheckWizardProps) {
  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState<'corporate' | 'individual' | 'fund' | 'parastatal'>('corporate');
  const [matterType, setMatterType] = useState<MatterType>('corporate_ma');
  const [adverseParty, setAdverseParty] = useState('');
  const [jurisdiction, setJurisdiction] = useState('High Court of Lagos State (Commercial Division, Osborne/TBS)');
  const [urgency, setUrgency] = useState<UrgencyLevel>('standard');
  const [briefSummary, setBriefSummary] = useState('');
  const [checkResult, setCheckResult] = useState<ConflictCheckResult | null>(null);
  const [dossierCode, setDossierCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  if (!isInline && !isOpen) return null;

  const handleRunCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    const result = evaluateConflictCheck(clientName, adverseParty);
    setCheckResult(result);

    if (result.status === 'CLEARED_PRELIMINARY') {
      const code = generateIntakeReference(clientName, matterType);
      setDossierCode(code);
    }
    setStep(2);
  };

  const handleReset = () => {
    setClientName('');
    setAdverseParty('');
    setBriefSummary('');
    setCheckResult(null);
    setDossierCode(null);
    setStep(1);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const content = (
    <div className="rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-prominent)] p-6 sm:p-8 font-sans-legal text-[var(--text-primary)] shadow-xl relative">
      {/* Wizard Header */}
      <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-gold)] tracking-widest uppercase mb-1">
            <Lock className="h-3.5 w-3.5" />
            <span>Ethical Screening &amp; Nigerian Bar Compliance (RPC 2023)</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Preliminary Conflict-of-Interest Screening
          </h3>
          <p className="mt-1 text-xs text-[var(--text-muted)] max-w-xl">
            Pursuant to Rule 17 of the Rules of Professional Conduct for Legal Practitioners (RPC 2023), Knox &amp; Associates conducts automated preliminary checks before receiving confidential instructions.
          </p>
        </div>
        {onClose && !isInline && (
          <button
            onClick={onClose}
            aria-label="Close intake modal"
            className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {step === 1 && (
        <form onSubmit={handleRunCheck} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Prospective Client Legal Name (or CAC RC Number) *
              </label>
              <input
                id="client-name"
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Atlantic Industrial Holdings Ltd (RC 149202)"
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="entity-type" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Entity Classification
              </label>
              <select
                id="entity-type"
                value={clientType}
                onChange={(e) => setClientType(e.target.value as any)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="corporate">Nigerian Corporate Entity (CAC Registered)</option>
                <option value="fund">Private Capital / Infrastructure Fund / Bank</option>
                <option value="parastatal">Sovereign / Federal Government Parastatal</option>
                <option value="individual">High-Net-Worth Principal / Family Office</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="matter-type" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Primary Practice Area
              </label>
              <select
                id="matter-type"
                value={matterType}
                onChange={(e) => setMatterType(e.target.value as MatterType)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="corporate_ma">Corporate M&amp;A / Restructuring (CAMA 2020 / FCCPA)</option>
                <option value="energy_natural_resources">Energy &amp; Petroleum Industry Transactions (PIA 2021)</option>
                <option value="commercial_litigation">High-Stakes Commercial Litigation &amp; Arbitration</option>
                <option value="private_wealth">Private Client Wealth &amp; Family Office Governance</option>
                <option value="intellectual_property">Fintech, IP &amp; NDPA Data Compliance</option>
                <option value="regulatory_defense">White-Collar &amp; Financial Crimes Defense (EFCC/SEC)</option>
                <option value="employment_executive">Executive Employment Dispute (National Industrial Court)</option>
              </select>
            </div>

            <div>
              <label htmlFor="adverse-party" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Known Adverse Parties / Counterparties
              </label>
              <input
                id="adverse-party"
                type="text"
                value={adverseParty}
                onChange={(e) => setAdverseParty(e.target.value)}
                placeholder="e.g. Dangote Group, Zenith Bank, Apex Global (or None)"
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
              />
              <span className="block text-[10px] text-[var(--text-muted)] mt-1">
                Checked strictly to prevent simultaneous representation under Rule 17 of RPC 2023.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jurisdiction-select" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Tribunal / Governing Jurisdiction
              </label>
              <select
                id="jurisdiction-select"
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="High Court of Lagos State Commercial Division">High Court of Lagos State (Commercial Division, Osborne/TBS)</option>
                <option value="Federal High Court Lagos Division">Federal High Court (Lagos Judicial Division, Ikoyi)</option>
                <option value="Supreme Court of Nigeria / Court of Appeal">Court of Appeal / Supreme Court of Nigeria (Abuja)</option>
                <option value="Lagos Court of Arbitration (LCA / AMA 2023)">Lagos Court of Arbitration (LCA / LCIA Seated Arbitration)</option>
                <option value="National Industrial Court Lagos Division">National Industrial Court of Nigeria (NICN, Lagos)</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency-select" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Matter Urgency Level
              </label>
              <select
                id="urgency-select"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="standard">Standard Inquiry (Chambers Response within 24 Hours)</option>
                <option value="immediate">Immediate Emergency (Mareva Injunction / EFCC Invitation / Asset Arrest)</option>
                <option value="prospective">Prospective Advisory / Next Fiscal Year Structuring</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="brief-summary" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
              High-Level Brief Summary (No Non-Public Trade Secrets)
            </label>
            <textarea
              id="brief-summary"
              rows={3}
              value={briefSummary}
              onChange={(e) => setBriefSummary(e.target.value)}
              placeholder="Provide a general overview of the commercial transaction or dispute. Avoid transmitting trade secrets or non-public factual documents until formal chambers engagement letter execution."
              className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
            <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[var(--accent-gold)] shrink-0" />
              <span>TLS 1.3 encrypted. Submission does not constitute formal retainer until confirmed by our Lagos Chambers.</span>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
            >
              <span>Execute Nigerian Conflict Check</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      )}

      {step === 2 && checkResult && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-200">
          {checkResult.status === 'CLEARED_PRELIMINARY' ? (
            <div className="rounded border border-emerald-900/50 bg-emerald-950/20 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                    Preliminary Conflict Clearance: GRANTED
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    Matter Approved for Lagos Chambers Consultation
                  </h4>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {checkResult.recommendation}
              </p>

              <div className="p-3.5 rounded bg-black/40 border border-emerald-900/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">
                    Conflict Clearance Token
                  </span>
                  <span className="font-mono text-sm font-bold text-[var(--accent-gold)]">
                    {checkResult.clearanceCode}
                  </span>
                </div>
                {dossierCode && (
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block tracking-wider">
                      Lagos Dossier Ref
                    </span>
                    <span className="font-mono text-sm font-bold text-white">
                      {dossierCode}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => copyCode(dossierCode || checkResult.clearanceCode || '')}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-zinc-700 bg-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Codes'}</span>
                </button>
              </div>

              <div className="border-t border-emerald-900/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
                <span>Chambers Lead: <strong className="text-white">Chief Sterling Knox, SAN / Eleanor Vance-Knox, BL</strong></span>
                <span>Response Target: <strong className="text-[var(--accent-gold)]">{urgency === 'immediate' ? 'Within 4 Hours (Expedited)' : 'Within 24 Hours'}</strong></span>
              </div>
            </div>
          ) : (
            <div className="rounded border border-red-900/50 bg-red-950/20 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <AlertOctagon className="h-7 w-7 text-red-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-red-400">
                    Ethical Screening Hold Flagged (RPC 2023 Rule 17)
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    Direct Conflict / Restricted Entity Detected
                  </h4>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {checkResult.recommendation}
              </p>

              <div className="p-3.5 rounded bg-black/40 border border-red-900/30 text-xs text-zinc-400">
                <span className="text-white font-medium block mb-1">Managing Partner Protocol:</span>
                In fidelity to our fiduciary duties and professional obligations under the Rules of Professional Conduct in Nigeria, substantive discussions regarding this matter are held in abeyance pending formal conflict waiver assessment.
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Start New Conflict Inquiry</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
              >
                Done
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (isInline) {
    return (
      <section id="conflict-check" className="py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-3xl">
        {content}
      </div>
    </div>
  );
}
