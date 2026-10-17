import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Scale, Award, Globe, Building2, ShieldCheck, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Chambers | Knox & Associates · Lagos, Nigeria',
  description: 'History, leadership, and jurisprudence of Knox & Associates. Founded in 1994 in Lagos, Nigeria. Led by Senior Advocates of Nigeria (SAN).',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase">
              <Scale className="h-4 w-4" />
              <span>Chambers Profile &amp; Jurisprudence</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Three Decades of Distinction in Nigerian Jurisprudence
            </h1>
            <p className="font-sans-legal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
              Founded in 1994 on Lagos Island and now headquartered in Kingsway Tower, Ikoyi, Knox &amp; Associates has grown from a boutique litigation practice into one of West Africa’s most formidable commercial partnerships.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Senior Advocate Leadership</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans-legal">
                Our trial advocacy is directed personally by Senior Advocates of Nigeria (SAN)—the highest echelon of legal distinction in the Federation, with rights of audience before the Supreme Court of Nigeria and the Body of Benchers.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Commercial Pragmatism</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans-legal">
                We understand that commercial clients do not seek abstract legal memorandums; they require decisive transaction closing, risk insulation under CAMA 2020 and PIA 2021, and aggressive asset preservation.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Pan-African &amp; Global Reach</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans-legal">
                From our Ikoyi headquarters, Abuja federal office, and London desk, we coordinate multi-jurisdictional financings, Eurobond issuances, and international arbitrations seated across London, Paris, and Lagos.
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="mt-16 pt-16 border-t border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans-legal">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-snug">
                Institutional Memory. Unyielding Trial Fortitude.
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Over the past thirty years, Knox &amp; Associates has acted as trusted counsel to Nigerian commercial banks, international oil companies (IOCs), indigenous energy producers, and federal regulatory bodies.
              </p>
              <div className="p-4 rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2 text-xs">
                <div className="text-[var(--accent-gold)] font-bold uppercase tracking-wider text-[10px]">
                  Accreditations &amp; Institutional Memberships
                </div>
                <div className="text-zinc-300 space-y-1">
                  <div>· Nigerian Bar Association (NBA Section on Business Law - SBL)</div>
                  <div>· International Bar Association (IBA)</div>
                  <div>· Lagos Court of Arbitration (LCA)</div>
                  <div>· Chartered Institute of Arbitrators UK (Nigeria Branch)</div>
                  <div>· Capital Market Consultants (Securities and Exchange Commission Nigeria)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Our chambers were established during a pivotal epoch in Nigeria’s commercial development. As the nation transitioned into democratic governance in 1999 and subsequently enacted transformative economic reforms—culminating in the Investments and Securities Act, the Federal Competition and Consumer Protection Act (FCCPA 2018), CAMA 2020, and the landmark Petroleum Industry Act (PIA 2021)—Knox &amp; Associates has stood at the vanguard of statutory interpretation.
              </p>
              <p>
                We maintain an uncompromising standard of legal scholarship. Our partners regularly serve on statutory law reform committees, publish treatises on Nigerian corporate governance and appellate practice, and mentor the next generation of Nigerian advocates through our rigorous pupillage program.
              </p>
              <div className="p-6 rounded-sm bg-black/40 border border-[var(--border-prominent)] space-y-3">
                <h4 className="font-cinzel text-base font-bold text-white">Chambers Operating Principles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Every matter directed by a Senior Advocate (SAN) or Senior Partner.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Strict compliance with Rule 17 &amp; 39 of RPC 2023.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Dedicated IOLTA escrow client accounts in tier-1 banks.</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Rigorous anti-money laundering (SCUML) protocols.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors"
                >
                  <span>Consult Lagos Chambers</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/#attorneys"
                  className="text-xs text-[var(--accent-gold)] hover:underline font-semibold"
                >
                  Meet Senior Advocates &amp; Partners &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
