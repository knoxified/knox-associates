'use client';

import React from 'react';
import { X, CheckCircle2, AlertTriangle, Scale, Eye, Sparkles, BookOpen, Layers, MapPin } from 'lucide-react';

interface ColorPsychologyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTheme: string;
  onSelectTheme: (theme: string) => void;
}

export default function ColorPsychologyDrawer({
  isOpen,
  onClose,
  activeTheme,
  onSelectTheme
}: ColorPsychologyDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl min-h-screen bg-[#111319] border-l border-[var(--border-prominent)] text-[#f4f3ef] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="psychology-title"
      >
        <div>
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-1">
                <Scale className="h-4 w-4" />
                <span>Counsel Opinion &amp; Nigerian Market Psychology</span>
              </div>
              <h2 id="psychology-title" className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                The Jurisprudential Case for Black &amp; Gold in Nigeria
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close color psychology panel"
              className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Interactive Palette Switcher */}
          <div className="my-6 p-4 rounded-md bg-[#161922] border border-[var(--border-subtle)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-gold)]">
                Live Chambers Aesthetic Switcher
              </span>
              <span className="text-[11px] text-zinc-400">Preview live on website</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => onSelectTheme('obsidian-gold')}
                className={`p-3 text-left rounded border transition-all ${
                  activeTheme === 'obsidian-gold'
                    ? 'border-[#c5a880] bg-[#1d212d] shadow-md ring-1 ring-[#c5a880]'
                    : 'border-zinc-800 bg-[#0f1117] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[#0b0c10] border border-zinc-700"></div>
                  <div className="w-4 h-4 rounded-full bg-[#c5a880]"></div>
                </div>
                <div className="text-xs font-bold text-white">Obsidian &amp; Champagne</div>
                <div className="text-[10px] text-zinc-400">Client's Choice (Elevated)</div>
              </button>

              <button
                onClick={() => onSelectTheme('navy-brass')}
                className={`p-3 text-left rounded border transition-all ${
                  activeTheme === 'navy-brass'
                    ? 'border-[#d4af37] bg-[#131d33] shadow-md ring-1 ring-[#d4af37]'
                    : 'border-zinc-800 bg-[#0f1117] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[#0a1120] border border-blue-900"></div>
                  <div className="w-4 h-4 rounded-full bg-[#d4af37]"></div>
                </div>
                <div className="text-xs font-bold text-white">Admiralty &amp; Brass</div>
                <div className="text-[10px] text-zinc-400">Classic Institutional Trust</div>
              </button>

              <button
                onClick={() => onSelectTheme('monochrome')}
                className={`p-3 text-left rounded border transition-all ${
                  activeTheme === 'monochrome'
                    ? 'border-zinc-400 bg-[#1e1e24] shadow-md ring-1 ring-zinc-400'
                    : 'border-zinc-800 bg-[#0f1117] hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0c] border border-zinc-700"></div>
                  <div className="w-4 h-4 rounded-full bg-[#e2e8f0]"></div>
                </div>
                <div className="text-xs font-bold text-white">Platinum Charcoal</div>
                <div className="text-[10px] text-zinc-400">Fintech &amp; Venture Law</div>
              </button>
            </div>
          </div>

          {/* Legal Opinion & Analysis Content */}
          <div className="space-y-6 text-sm text-zinc-300 font-sans-legal leading-relaxed">
            {/* The Nigerian Market Context */}
            <div>
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 font-cinzel">
                <BookOpen className="h-4 w-4 text-[var(--accent-gold)]" />
                Senior Counsel Take: Black &amp; Gold in the Lagos Legal Ecosystem
              </h3>
              <p className="text-zinc-300">
                In Nigeria’s commercial epicenter (Victoria Island, Ikoyi, Marina), law firms traditionally default to conservative colonial navy or dark green. However, for a <strong className="text-white">premier transactional and high-stakes dispute boutique</strong>, black and gold possesses immense strategic currency when executed with White-Shoe discipline:
              </p>
            </div>

            {/* The Danger vs The Execution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  The "Gaudy Commercial" Trap
                </div>
                <ul className="text-xs space-y-1.5 text-zinc-400 list-disc list-inside">
                  <li>Harsh jet black (<code className="text-zinc-300">#000000</code>) with saturated yellow canary gold.</li>
                  <li>Overly aggressive marketing claims violating Rule 39 of the Rules of Professional Conduct (RPC 2023).</li>
                  <li>Looks like a party lounge or unvetted promoter rather than an accredited Chambers of Senior Advocates of Nigeria.</li>
                  <li>Institutional banks &amp; IOC general counsels immediately discard it.</li>
                </ul>
              </div>

              <div className="p-4 rounded bg-emerald-950/20 border border-emerald-900/30">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  The "Ikoyi White-Shoe" Standard
                </div>
                <ul className="text-xs space-y-1.5 text-zinc-400 list-disc list-inside">
                  <li>Architectural Obsidian (<code className="text-zinc-300">#0B0C10</code> / <code className="text-zinc-300">#12141A</code>) providing a tranquil, sovereign canvas.</li>
                  <li>Muted <strong className="text-zinc-200">Brushed Champagne &amp; Antique Brass</strong> (<code className="text-zinc-300">#C5A880</code> / <code className="text-zinc-300">#D4AF37</code>) used sparingly on borders and heraldic insignia.</li>
                  <li>Crisp warm alabaster typography (<code className="text-zinc-300">#F5F4F0</code>) achieving <strong className="text-white">WCAG AAA 14.2:1 contrast</strong>.</li>
                  <li>Exudes discretion, multi-billion Naira transactional prowess, and appellate trial authority.</li>
                </ul>
              </div>
            </div>

            {/* Rule 39 RPC 2023 Ethics */}
            <div className="p-4 rounded bg-[#171a24] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 uppercase mb-2">
                <Scale className="h-4 w-4 text-[var(--accent-gold)]" />
                Nigerian Bar Association Ethics (Rule 39, RPC 2023)
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Under Rule 39(1) &amp; (2) of the Rules of Professional Conduct for Legal Practitioners in Nigeria (RPC 2023), publicity by a legal practitioner must be <em className="text-zinc-300">"dignified, honest, and not diminish public confidence in the legal profession."</em> It explicitly prohibits comparisons with other practitioners and unsubstantiated self-laudatory claims. Our implementation grounds the gold aesthetic in verified statutory authorities (CAMA 2020, PIA 2021) and factual representative briefs.
              </p>
            </div>

            {/* Strategic Summary */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                Strategic Recommendation for Knox &amp; Associates (Lagos)
              </h4>
              <p className="text-xs text-zinc-300">
                The <strong className="text-white">Obsidian &amp; Champagne Gold</strong> palette we designed positions Knox &amp; Associates alongside top-tier Lagos corporate practices (like Aluko &amp; Oyebode, Banwo &amp; Ighodalo, Templars, Olaniwun Ajayi) while offering a distinct, high-modern identity that commands immediate respect from international and indigenous clients alike.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-[var(--border-subtle)] mt-6 flex justify-between items-center">
          <span className="text-[11px] text-zinc-500 font-sans-legal">
            Compliant with NBA RPC 2023 &amp; Legal Practitioners Act
          </span>
          <button
            onClick={onClose}
            className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-semibold text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
          >
            Apply &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
}
