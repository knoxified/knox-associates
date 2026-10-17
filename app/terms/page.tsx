import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Scale, FileText, AlertTriangle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Engagement & Legal Notices | Knox & Associates · Lagos, Nigeria',
  description: 'Terms of engagement, regulatory disclosures under RPC 2023, and SCUML AML compliance notices.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 font-sans-legal text-zinc-300">
          
          <div className="space-y-4 pb-8 border-b border-[var(--border-subtle)]">
            <div className="inline-flex items-center gap-2 text-xs text-[var(--accent-gold)] tracking-widest uppercase">
              <Scale className="h-4 w-4" />
              <span>Chambers Governance</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Terms of Engagement &amp; Regulatory Disclosures
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Governed by the Laws of the Federal Republic of Nigeria · Rules of Professional Conduct (RPC 2023)
            </p>
          </div>

          <div className="mt-8 space-y-8 text-xs sm:text-sm leading-relaxed">
            
            {/* 1. Absence of Relationship */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                1. Absence of Barrister-Client or Solicitor-Client Relationship
              </h2>
              <p>
                The materials, statutory briefs, retainer calculators, and case commentary provided on this website are for general informational purposes only. Accessing, browsing, or interacting with this platform does not create a Barrister-Client or Solicitor-Client relationship between you and Knox &amp; Associates.
              </p>
              <p>
                A formal professional relationship is established exclusively upon:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li>Completion and formal clearance of an ethical conflict-of-interest check under Rule 17 of RPC 2023;</li>
                <li>Execution of a formal written Letter of Engagement signed by an authorized partner of Knox &amp; Associates; and</li>
                <li>Payment of the agreed initial retainer into the Chambers’ dedicated client escrow account.</li>
              </ul>
            </section>

            {/* 2. Professional Ethics & Rule 39 */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                2. Compliance with Rule 39 of the Rules of Professional Conduct (RPC 2023)
              </h2>
              <p>
                Pursuant to Rule 39 of the Rules of Professional Conduct for Legal Practitioners in Nigeria (RPC 2023), any statements regarding past representative transactions, arbitral awards, or court judgments are accurate, factual recitals of past engagements. 
              </p>
              <div className="p-4 rounded bg-amber-950/20 border border-amber-900/30 text-amber-200 text-xs">
                <strong>Mandatory Statutory Notice:</strong> Past results do not guarantee, promise, or predict an identical outcome in any pending or future commercial dispute or transaction before the courts of Nigeria.
              </div>
            </section>

            {/* 3. Anti-Money Laundering & SCUML */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                3. Anti-Money Laundering &amp; SCUML Regulatory Compliance
              </h2>
              <p>
                Knox &amp; Associates adheres strictly to the <strong className="text-white">Money Laundering (Prevention and Prohibition) Act 2022</strong>, the Terrorism (Prevention and Prohibition) Act 2022, and the regulations of the Special Control Unit against Money Laundering (SCUML) / Economic and Financial Crimes Commission (EFCC).
              </p>
              <p>
                Before accepting corporate retainers or client funds into our trust accounts, we execute mandatory Know-Your-Customer (KYC) and Customer Due Diligence (CDD) procedures, including corporate registry verification with the Corporate Affairs Commission (CAC) and Ultimate Beneficial Ownership (UBO) declarations.
              </p>
            </section>

            {/* 4. Client Escrow Accounts */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                4. Client Escrow Accounts (Legal Practitioners Accounts Rules)
              </h2>
              <p>
                In compliance with the Legal Practitioners Accounts Rules, all client retainer advances, transaction escrow deposits, and settlement funds are held in segregated client trust accounts with licensed Nigerian commercial banks separate from the firm’s operating accounts. Funds are drawn down exclusively upon delivery of itemized fee notes.
              </p>
            </section>

            {/* 5. Intellectual Property */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                5. Intellectual Property in Chambers Briefs &amp; Treatises
              </h2>
              <p>
                All legal briefs, statutory analyses, commentary on CAMA 2020 and PIA 2021, visual insignias, and software logic embedded on <strong className="text-white">knox.associates</strong> are the intellectual property of Knox &amp; Associates, protected under the Nigerian Copyright Act 2022 and international treaties. Reproduction without prior written authorization is prohibited.
              </p>
            </section>

            {/* 6. Governing Law & Jurisdiction */}
            <section className="space-y-3">
              <h2 className="font-cinzel text-lg font-bold text-white">
                6. Governing Law &amp; Forum
              </h2>
              <p>
                These terms and any dispute arising from the use of this website shall be governed exclusively by the laws of the Federal Republic of Nigeria. The High Court of Lagos State (Commercial Division) shall have exclusive jurisdiction over any proceeding arising hereunder.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
