import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy (NDPA 2023) | Knox & Associates · Lagos, Nigeria',
  description: 'Data protection and privacy notice compliant with the Nigeria Data Protection Act (NDPA 2023) and NDPC regulations.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 font-sans-legal text-zinc-300">
          
          <div className="space-y-4 pb-8 border-b border-[var(--border-subtle)]">
            <div className="inline-flex items-center gap-2 text-xs text-[var(--accent-gold)] tracking-widest uppercase">
              <Lock className="h-4 w-4" />
              <span>Statutory Compliance Notice</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Privacy Policy &amp; Data Protection Notice
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Pursuant to the Nigeria Data Protection Act (NDPA 2023) · Last Updated: October 2026
            </p>
          </div>

          <div className="mt-8 space-y-8 text-xs sm:text-sm leading-relaxed">
            
            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                1. Data Controller &amp; Statutory Framework
              </h2>
              <p>
                This Privacy Notice is issued by <strong className="text-white">Knox &amp; Associates</strong> (referred to herein as "the Firm", "we", "us", or "our"), having its principal chambers at Kingsway Tower, 11th Floor, Alfred Rewane Road, Ikoyi, Lagos, Nigeria. 
              </p>
              <p>
                We process personal data in strict compliance with the <strong className="text-white">Nigeria Data Protection Act (NDPA 2023)</strong>, the General Application and Implementation Directive (GAID), the Nigeria Data Protection Commission (NDPC) guidelines, and applicable international data protection frameworks including the UK GDPR for cross-border instructions.
              </p>
            </section>

            {/* 2. Lawful Basis */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                2. Lawful Bases for Processing (Section 25, NDPA 2023)
              </h2>
              <p>
                We only process personal data where there is a recognized lawful basis under Section 25 of the NDPA 2023, specifically:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2">
                <li><strong className="text-zinc-200">Contractual Performance:</strong> Processing necessary for the execution and fulfillment of legal retainer agreements, corporate transactional briefs, and dispute representation.</li>
                <li><strong className="text-zinc-200">Legal &amp; Regulatory Obligations:</strong> Compliance with the Legal Practitioners Act (Cap L11 LFN 2004), Rules of Professional Conduct (RPC 2023), Money Laundering (Prevention and Prohibition) Act 2022, SCUML obligations, and court procedural orders.</li>
                <li><strong className="text-zinc-200">Legitimate Interests:</strong> Necessary for preliminary conflict checks (Rule 17 RPC 2023), prevention of fraudulent claims, and physical/cybersecurity of chambers infrastructure.</li>
                <li><strong className="text-zinc-200">Consent:</strong> Where explicitly provided for communications, client seminars, and jurisprudence briefings.</li>
              </ul>
            </section>

            {/* 3. Categories of Data Collected */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                3. Personal Data Collected
              </h2>
              <p>In discharging our professional duties, we collect:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <span className="font-bold text-white block mb-1">Corporate Client Representatives</span>
                  <span className="text-zinc-400">Full legal names, CAC registration documentation, corporate designations, National Identification Numbers (NIN), passport data, and ultimate beneficial ownership (UBO) records.</span>
                </div>
                <div className="p-3.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <span className="font-bold text-white block mb-1">Litigation &amp; Transactional Parties</span>
                  <span className="text-zinc-400">Witness statements, affidavits, deposition transcripts, corporate contracts, and adverse party names for conflict screening.</span>
                </div>
              </div>
            </section>

            {/* 4. Data Subject Rights */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                4. Rights of Data Subjects (Section 34, NDPA 2023)
              </h2>
              <p>Under Section 34 of the Nigeria Data Protection Act 2023, you are entitled to:</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <span><strong>Right of Confirmation &amp; Access:</strong> Obtain confirmation whether your personal data is being processed and request a copy of such data.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <span><strong>Right to Rectification:</strong> Require the rectification of inaccurate or incomplete personal records without undue delay.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <span><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of data where retention is no longer warranted under Nigerian statutory limitation laws.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <span><strong>Right to Lodge a Complaint:</strong> Complain directly to the Nigeria Data Protection Commission (NDPC) if you believe your statutory data rights have been infringed.</span>
                </div>
              </div>
            </section>

            {/* 5. Cross-Border Transfers */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                5. Cross-Border Data Transfers (Section 41, NDPA 2023)
              </h2>
              <p>
                In international transactions, Eurobond issues, and foreign-seated arbitrations, personal data may be shared with our London Desk or co-counsel in the United Kingdom, Switzerland, or the United States. Such transfers occur strictly in compliance with Section 41 of the NDPA 2023 through Standard Contractual Clauses (SCCs) and binding confidentiality undertakings.
              </p>
            </section>

            {/* 6. DPO Contact */}
            <section className="p-6 rounded bg-[var(--bg-secondary)] border border-[var(--border-prominent)] space-y-2">
              <h3 className="font-cinzel text-base font-bold text-white">
                Data Protection Officer (DPO) Inquiries
              </h3>
              <p className="text-xs text-zinc-300">
                To exercise any statutory data subject rights under the NDPA 2023, address your formal inquiry to:
              </p>
              <div className="text-xs font-mono text-[var(--accent-gold)]">
                The Data Protection Officer <br />
                Knox &amp; Associates <br />
                Kingsway Tower, 11th Floor, Alfred Rewane Road, Ikoyi, Lagos, Nigeria <br />
                Email: admin@knox.associates (Attn: DPO) · Copy: info@knox.associates | Tel: +234 (1) 295-0199
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
