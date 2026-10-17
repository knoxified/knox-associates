'use client';

import React, { useState } from 'react';
import { Users, Award, GraduationCap, Scale, ChevronRight, X, Mail, Phone } from 'lucide-react';

interface Attorney {
  id: string;
  name: string;
  title: string;
  honorific?: string;
  focus: string;
  education: string[];
  admissions: string[];
  callToBar: string;
  bio: string;
  landmarks: string[];
}

const ATTORNEYS: Attorney[] = [
  {
    id: 'sterling-knox',
    name: 'Chief Sterling Knox',
    honorific: 'SAN, FCIArb',
    title: 'Managing Partner & Senior Advocate of Nigeria',
    focus: 'Commercial Trial Advocacy · Appellate Jurisprudence · Energy Disputes',
    education: [
      'University of Cambridge (LL.M., Commercial Law & International Arbitration)',
      'University of Lagos (LL.B., First Class Honours; Best Graduating Student)',
      'Nigerian Law School, Lagos (B.L.)'
    ],
    admissions: [
      'Supreme Court of Nigeria (Conferred Senior Advocate of Nigeria - SAN)',
      'Fellow, Chartered Institute of Arbitrators UK (FCIArb)',
      'Body of Benchers (Life Bencher)'
    ],
    callToBar: 'Called to the Nigerian Bar, 1993',
    bio: 'Chief Sterling Knox, SAN, is one of Nigeria’s most formidable courtroom trial strategists. For over three decades, he has represented commercial banks, oil and gas operators, and multinationals before the Supreme Court of Nigeria, the Court of Appeal, and the Federal High Court.',
    landmarks: [
      'Prevailed before the Supreme Court of Nigeria in landmark ₦140 Billion oil bloc asset title dispute.',
      'Secured complete discharge for commercial bank board directors in contested capital adequacy enforcement.',
      'Lead counsel in cross-border LCIA arbitration involving a deepwater gas processing concession.'
    ]
  },
  {
    id: 'eleanor-vance',
    name: 'Eleanor Vance-Knox',
    honorific: 'BL',
    title: 'Senior Partner',
    focus: 'Cross-Border M&A · CAMA 2020 Corporate Restructuring · Banking & Finance',
    education: [
      'University of Oxford (B.C.L., First Class Honours)',
      'University of Ibadan (LL.B., First Class Honours)',
      'Nigerian Law School, Abuja (B.L.)'
    ],
    admissions: [
      'Barrister and Solicitor of the Supreme Court of Nigeria',
      'Solicitor of the Senior Courts of England & Wales (SRA Dual-Qualified)',
      'Capital Market Consultant (Securities and Exchange Commission Nigeria)'
    ],
    callToBar: 'Called to the Nigerian Bar, 2001',
    bio: 'Eleanor Vance-Knox leads the transactional chambers. She specializes in corporate acquisitions, FCCPA merger clearances, and syndicated project finance across the Lagos-London commercial corridor.',
    landmarks: [
      'Lead counsel in ₦280 Billion FMCG corporate restructuring and scheme of arrangement under CAMA 2020.',
      'Advised lenders on ₦120 Billion syndicated credit facility for port logistics infrastructure at Lekki Free Zone.',
      'Structured first-tier Eurobond issuance for Nigerian financial holding institution.'
    ]
  },
  {
    id: 'babajide-thorne',
    name: 'Babajide Thorne',
    honorific: 'BL',
    title: 'Partner',
    focus: 'Petroleum Industry Act (PIA 2021) · Power & Infrastructure · Gas Commercialization',
    education: [
      'Harvard Law School (LL.M., Energy & Environmental Law)',
      'Obafemi Awolowo University, Ile-Ife (LL.B., Second Class Upper)',
      'Nigerian Law School, Lagos (B.L.)'
    ],
    admissions: [
      'Barrister and Solicitor of the Supreme Court of Nigeria',
      'Member, Nigerian Association of Petroleum Explorationists (NAPE)',
      'Member, International Bar Association (Energy Law Section)'
    ],
    callToBar: 'Called to the Nigerian Bar, 2008',
    bio: 'Babajide Thorne advises upstream operators, marginal field awardees, and independent power producers on regulatory licensing before the NUPRC, gas sales agreements, and Host Community Development Trusts under the PIA 2021.',
    landmarks: [
      'Advised indigenous consortium on $420M acquisition and farm-in of shallow-water OML assets.',
      'Formulated governance constitutions for 14 Host Community Development Trusts in the Niger Delta.',
      'Negotiated milestone take-or-pay gas commercialization agreements for an industrial hub in Ogun State.'
    ]
  },
  {
    id: 'amina-bello',
    name: 'Dr. Amina Bello-Lindholm',
    honorific: 'FCIArb',
    title: 'Senior Counsel',
    focus: 'International Arbitration · Sovereign Debt · Private Client Succession',
    education: [
      'Georgetown University Law Center (Doctor of Juridical Science, S.J.D.)',
      'Ahmadu Bello University, Zaria (LL.B., First Class Honours)',
      'Nigerian Law School, Bwari (B.L.)'
    ],
    admissions: [
      'Barrister and Solicitor of the Supreme Court of Nigeria',
      'Fellow, Chartered Institute of Arbitrators UK (FCIArb)',
      'Accredited Arbitrator, Lagos Court of Arbitration (LCA)'
    ],
    callToBar: 'Called to the Nigerian Bar, 2004',
    bio: 'Dr. Amina Bello-Lindholm represents corporate parties and sovereign entities in commercial arbitrations seated in Lagos, London, and Paris under the Arbitration and Mediation Act 2023, while advising high-net-worth Nigerian families on estate succession.',
    landmarks: [
      'Co-arbitrator in $380M bilateral investment treaty dispute concerning West African mining concession.',
      'Architected multi-branch dynastic family trust holding prime real estate across Ikoyi, London, and Dubai.',
      'Advised federal agencies on cross-border sovereign asset protection and sovereign immunity waivers.'
    ]
  }
];

export default function AttorneysRoster() {
  const [activeAttorney, setActiveAttorney] = useState<Attorney | null>(null);

  return (
    <section id="attorneys" className="py-20 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase mb-2">
            <Users className="h-4 w-4" />
            <span>Partners &amp; Advocates</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Senior Advocates of Nigeria &amp; Commercial Counsel
          </h2>
          <p className="mt-4 font-sans-legal text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Our Chambers are led by Senior Advocates of Nigeria (SAN), Cambridge and Oxford alumni, and Fellows of the Chartered Institute of Arbitrators. Every brief receives direct partner involvement.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATTORNEYS.map((attorney) => (
            <div
              key={attorney.id}
              className="group flex flex-col justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-6 transition-all duration-300 hover:border-[var(--accent-gold)] hover:bg-[var(--bg-secondary)]"
            >
              <div>
                {/* Monogram Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-sm font-cinzel font-bold text-[var(--accent-gold)] group-hover:border-[var(--accent-gold)] transition-colors mb-4">
                  {attorney.name.replace('Chief ', '').replace('Dr. ', '').split(' ').map(n => n[0]).join('')}
                </div>

                <div className="flex items-center gap-1.5">
                  <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                    {attorney.name}
                  </h3>
                  {attorney.honorific && (
                    <span className="font-sans-legal text-xs font-bold text-[var(--accent-gold)]">
                      {attorney.honorific}
                    </span>
                  )}
                </div>

                <div className="font-sans-legal text-xs font-medium text-[var(--accent-gold)] tracking-wide mt-0.5">
                  {attorney.title}
                </div>

                <p className="mt-3 font-sans-legal text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                  {attorney.focus}
                </p>

                {/* Admission Snippet (No Pills) */}
                <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] text-[11px] font-sans-legal text-[var(--text-muted)] space-y-1">
                  <div>Status: <span className="text-zinc-300 font-medium">{attorney.callToBar}</span></div>
                  <div>Alum: <span className="text-zinc-300">{attorney.education[0].split('(')[0]}</span></div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={() => setActiveAttorney(attorney)}
                  className="w-full flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2 text-xs font-sans-legal font-medium text-[var(--text-primary)] group-hover:border-[var(--accent-gold)] group-hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
                >
                  <span>Full Credentials &amp; Bio</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Attorney Bio Modal */}
      {activeAttorney && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="w-full max-w-2xl rounded-lg bg-[#11131a] border border-[var(--border-prominent)] text-[#f4f3ef] p-6 sm:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="attorney-modal-name"
          >
            <div className="flex items-start justify-between pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="text-xs font-semibold uppercase text-[var(--accent-gold)] tracking-widest mb-1">
                  Nigerian Bar &amp; International Jurisprudence Record
                </div>
                <h3 id="attorney-modal-name" className="font-cinzel text-2xl font-bold text-white">
                  {activeAttorney.name} <span className="text-[var(--accent-gold)]">{activeAttorney.honorific}</span>
                </h3>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {activeAttorney.title} · <span className="text-zinc-300">{activeAttorney.callToBar}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveAttorney(null)}
                aria-label="Close attorney bio"
                className="rounded-sm border border-[var(--border-subtle)] p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 font-sans-legal text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                  Biography &amp; Nigerian Commercial Practice
                </h4>
                <p className="leading-relaxed text-zinc-300">
                  {activeAttorney.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[var(--accent-gold)]" />
                  Education &amp; Legal Qualifications
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                  {activeAttorney.education.map((edu, idx) => (
                    <li key={idx}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-[var(--accent-gold)]" />
                  Bar Admissions &amp; Professional Distinctions
                </h4>
                <ul className="space-y-1 text-xs text-zinc-300 list-disc list-inside">
                  {activeAttorney.admissions.map((adm, idx) => (
                    <li key={idx}><span className="font-mono text-zinc-200">{adm}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[var(--accent-gold)]" />
                  Landmark Nigerian Engagements
                </h4>
                <div className="space-y-2">
                  {activeAttorney.landmarks.map((mark, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#171a24] border border-zinc-800 text-xs text-zinc-300">
                      {mark}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex justify-between items-center">
              <span className="text-[11px] text-zinc-500">
                Direct partner-led counsel guaranteed under Rule 14 of RPC 2023.
              </span>
              <button
                onClick={() => setActiveAttorney(null)}
                className="rounded-sm bg-[var(--accent-gold)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
