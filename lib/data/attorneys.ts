/**
 * PLACEHOLDER CONTENT: replace with the client's real lawyers, credentials and photos.
 * One entry here automatically becomes one page at /attorneys/<slug>/.
 * Never publish a title (SAN, FCIArb, etc.) or a case result the person cannot prove.
 */
export interface Attorney {
  id: string; // used as the URL slug
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

export const ATTORNEYS: Attorney[] = [
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

export const getAttorney = (slug: string) => ATTORNEYS.find((x) => x.id === slug);
