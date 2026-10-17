'use client';

import React, { useState } from 'react';
import { X, Server, GitBranch, Cloud, Check, Copy, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface ArchitectureGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchitectureGuideModal({ isOpen, onClose }: ArchitectureGuideModalProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const wranglerConfig = `# wrangler.toml (for Cloudflare Pages / Workers Sites)
name = "knox-associates"
compatibility_date = "2026-10-16"
pages_build_output_dir = "out"

[vars]
FIRM_DOMAIN = "knox.associates"
ENVIRONMENT = "production"
ENABLE_INTAKE_FIREWALL = "true"
`;

  const deployCommands = `# 1. Push code to your Git repository (GitHub / GitLab)
git init
git add .
git commit -m "feat: initial Knox & Associates white-shoe law firm platform"
git branch -M main
git remote add origin https://github.com/your-username/knox-associates.git
git push -u origin main

# 2. Deploy directly to Cloudflare Pages via CLI (or connect Git repo in Cloudflare Dashboard)
npx wrangler pages deploy out --project-name=knox-associates
`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#11131a] border border-[var(--border-prominent)] text-[#f4f3ef] p-6 sm:p-8 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="architecture-guide-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-1">
              <Server className="h-4 w-4" />
              <span>Architectural Counsel &amp; Infrastructure Blueprint</span>
            </div>
            <h2 id="architecture-guide-title" className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Plain HTML vs. Next.js Static Export on Cloudflare
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close architecture blueprint"
            className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Executive Summary */}
        <div className="my-6 p-4 rounded-md bg-[#161922] border border-[var(--border-subtle)] font-sans-legal">
          <h3 className="text-sm font-semibold text-[var(--accent-gold)] mb-1 flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Executive Recommendation for Knox &amp; Associates
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            You are correct that a continuous Node.js runtime server is unnecessary and costly for this law firm. 
            However, <strong className="text-white">hand-crafting raw plain HTML/CSS files is a trap</strong> for a modern firm with multiple practice areas, ethics disclosures, and interactive intake tools. 
            The gold standard is <strong className="text-emerald-400">Component-Based Static Site Generation (SSG) with Next.js</strong>, exported directly to <strong className="text-orange-400">Cloudflare Pages/Workers</strong> with automated Git CI/CD.
          </p>
        </div>

        {/* Trade-off Matrix */}
        <div className="space-y-6 font-sans-legal text-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-zinc-800">
              <thead className="bg-[#181b26] text-zinc-300 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="p-3 border-b border-zinc-800">Evaluation Factor</th>
                  <th className="p-3 border-b border-zinc-800 text-amber-300">Plain Vanilla HTML/CSS/JS</th>
                  <th className="p-3 border-b border-zinc-800 text-blue-300">Traditional Node.js Server</th>
                  <th className="p-3 border-b border-zinc-800 text-emerald-400 bg-emerald-950/20">
                    Next.js Static Export to Cloudflare (Recommended)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-400">
                <tr>
                  <td className="p-3 font-medium text-zinc-200">Maintenance &amp; DRY</td>
                  <td className="p-3 text-red-400">High Risk: Must manually copy navbar/footer/disclaimer changes across every HTML file.</td>
                  <td className="p-3 text-zinc-300">High: Templated server views, but requires server ops &amp; monitoring.</td>
                  <td className="p-3 text-emerald-400 bg-emerald-950/10 font-medium">Optimal: Modular reusable components compiled into 100% static HTML.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-200">Cloudflare Hosting Cost</td>
                  <td className="p-3 text-emerald-400">$0 / month (Cloudflare Pages free tier).</td>
                  <td className="p-3 text-red-400">$10 - $40/mo VPS/Container + cold start latency.</td>
                  <td className="p-3 text-emerald-400 bg-emerald-950/10 font-medium">$0 / month on Cloudflare Pages (Free unlimited bandwidth &amp; edge SSL).</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-200">Performance &amp; Latency</td>
                  <td className="p-3 text-emerald-400">Instant edge delivery (0ms cold start).</td>
                  <td className="p-3 text-amber-400">Subject to compute server geographic distance &amp; cold starts.</td>
                  <td className="p-3 text-emerald-400 bg-emerald-950/10 font-medium">Instant edge delivery (300+ global Cloudflare datacenters, sub-20ms).</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-200">Legal SEO &amp; Schema</td>
                  <td className="p-3 text-amber-400">Manual JSON-LD script tags; prone to syntax breaking.</td>
                  <td className="p-3 text-zinc-300">Dynamic render.</td>
                  <td className="p-3 text-emerald-400 bg-emerald-950/10 font-medium">Automated static JSON-LD &amp; OpenGraph tags baked directly into HTML.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-200">Interactive Features</td>
                  <td className="p-3 text-red-400">Difficult to build clean conflict checks or multi-step intake wizards.</td>
                  <td className="p-3 text-zinc-300">Supported.</td>
                  <td className="p-3 text-emerald-400 bg-emerald-950/10 font-medium">Rich, reactive client-side states with type-safe verification.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deployment Code & Git Guide */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Cloud className="h-4 w-4 text-orange-400" />
              1. Cloudflare Configuration (`wrangler.toml`)
            </h4>
            <div className="relative">
              <pre className="p-4 rounded bg-[#0a0c10] border border-zinc-800 text-xs text-emerald-400 font-mono overflow-x-auto">
                {wranglerConfig}
              </pre>
              <button
                onClick={() => copyToClipboard(wranglerConfig, 'wrangler')}
                className="absolute top-3 right-3 flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
              >
                {copiedSection === 'wrangler' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedSection === 'wrangler' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 pt-2">
              <GitBranch className="h-4 w-4 text-purple-400" />
              2. Git Version Control &amp; Cloudflare CI/CD Pipeline
            </h4>
            <div className="relative">
              <pre className="p-4 rounded bg-[#0a0c10] border border-zinc-800 text-xs text-amber-300 font-mono overflow-x-auto">
                {deployCommands}
              </pre>
              <button
                onClick={() => copyToClipboard(deployCommands, 'git')}
                className="absolute top-3 right-3 flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
              >
                {copiedSection === 'git' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedSection === 'git' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-4 rounded bg-emerald-950/20 border border-emerald-900/30 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-300">
                <strong className="text-emerald-400">Zero Attack Surface:</strong> A static export on Cloudflare has no vulnerable operating system, no open server ports, no Node.js runtime process to exploit, and automatic SSL certificates renewal. For a law firm handling sensitive matters, this provides unmatched cybersecurity and client confidentiality peace of mind.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-6 border-t border-[var(--border-subtle)] mt-6 flex justify-between items-center">
          <span className="text-[11px] text-zinc-500 font-sans-legal">
            Production-ready for Cloudflare Pages, Cloudflare Workers KV, and GitHub Actions
          </span>
          <button
            onClick={onClose}
            className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-semibold text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
          >
            Acknowledge Blueprint
          </button>
        </div>
      </div>
    </div>
  );
}
