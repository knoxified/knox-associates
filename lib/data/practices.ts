/**
 * PLACEHOLDER CONTENT: replace every entry with the client's real practice areas.
 * One entry here automatically becomes one page at /practice-areas/<slug>/.
 */
export type PracticeIcon = 'building' | 'flame' | 'gavel' | 'landmark' | 'shield' | 'briefcase';

export interface PracticeArea {
  id: string; // used as the URL slug
  title: string;
  leadPartner: string;
  statutes: string[];
  summary: string;
  representativeMatters: string[];
  clientTypes: string[];
  icon: PracticeIcon;
}

export const PRACTICES: PracticeArea[] = [
  {
    id: 'ma',
    title: 'Mergers, Acquisitions & Corporate Restructuring',
    leadPartner: 'Eleanor Vance-Knox, BL (Senior Partner)',
    statutes: [
      'Companies and Allied Matters Act (CAMA 2020)',
      'Federal Competition and Consumer Protection Act (FCCPA 2018 - Phase 1 & 2 Merger Clearance)',
      'Investments and Securities Act (ISA 2007) & SEC Nigeria Rules'
    ],
    summary: 'Structuring landmark domestic and cross-border M&A, schemes of arrangement, private equity buyouts, and joint ventures across West Africa.',
    representativeMatters: [
      'Advised leading African consumer conglomerate on ₦280 Billion strategic divestiture and scheme of external restructuring.',
      'Secured expedited unconditional merger clearance from FCCPA for a ₦145 Billion telecommunications infrastructure consolidation.',
      'Structured complex cross-border joint venture between a Nigerian indigenous energy group and European technical partners.'
    ],
    clientTypes: ['Multinational Enterprises', 'Private Equity Sponsors', 'Listed Companies on NGX'],
    icon: 'building'
  },
  {
    id: 'energy',
    title: 'Energy, Natural Resources & Petroleum Transactions',
    leadPartner: 'Babajide Thorne, BL (Partner)',
    statutes: [
      'Petroleum Industry Act (PIA 2021)',
      'Nigerian Upstream Petroleum Regulatory Commission (NUPRC) Regulations',
      'Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010'
    ],
    summary: 'Advising upstream, midstream, and renewable energy operators on asset acquisitions, deepwater production sharing contracts, host community trusts, and energy transition governance.',
    representativeMatters: [
      'Advised indigenous upstream exploration operator on $420M acquisition of shallow-water OML assets from an international oil company (IOC).',
      'Structured comprehensive Host Community Development Trusts under Chapter 3 of the PIA 2021 across the Niger Delta.',
      'Drafted gas sales and purchase agreements (GSPAs) supporting an independent 250MW power project in Ogun State.'
    ],
    clientTypes: ['Indigenous E&P Operators', 'International Oil Companies (IOCs)', 'Independent Power Producers (IPPs)'],
    icon: 'flame'
  },
  {
    id: 'litigation',
    title: 'High-Stakes Commercial Litigation & Arbitration',
    leadPartner: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    statutes: [
      'Arbitration and Mediation Act (AMA 2023)',
      'High Court of Lagos State (Civil Procedure) Rules 2019',
      'Supreme Court Rules & Evidence Act 2011'
    ],
    summary: 'Led by a Senior Advocate of Nigeria (SAN), delivering trial and appellate advocacy across the High Court of Lagos State Commercial Division, Federal High Court, Court of Appeal, Supreme Court of Nigeria, and international arbitrations.',
    representativeMatters: [
      'Secured total dismissal of a ₦68 Billion banking syndicated debt enforcement action in the Federal High Court, Lagos Division.',
      'Represented multinational consortium in an ICC international arbitration seated in London governed by Nigerian law.',
      'Obtained emergency Mareva injunctions and Anton Piller orders in Lagos Commercial Division preserving critical corporate assets.'
    ],
    clientTypes: ['Commercial Banks', 'Industrial Conglomerates', 'Telecommunications Operators'],
    icon: 'gavel'
  },
  {
    id: 'banking',
    title: 'Banking, Fintech & Infrastructure Project Finance',
    leadPartner: 'Eleanor Vance-Knox, BL (Senior Partner)',
    statutes: [
      'Banks and Other Financial Institutions Act (BOFIA 2020)',
      'Central Bank of Nigeria (CBN) Foreign Exchange & Regulatory Sandbox Manuals',
      'Asset Management Corporation of Nigeria (AMCON) Act'
    ],
    summary: 'Structuring syndicated credit facilities, Eurobond issues, public-private partnership (PPP) infrastructure concessions, and CBN regulatory licensing for high-growth fintechs.',
    representativeMatters: [
      'Advised transaction parties on ₦120 Billion syndicated multicurrency facility for port logistics infrastructure at Lekki Free Zone.',
      'Secured CBN Payment Service Bank (PSB) and Payment Solution Service Provider (PSSP) licenses for Pan-African fintech.',
      'Counsel to sovereign development finance institutions on cross-border infrastructure financing.'
    ],
    clientTypes: ['Tier-1 Nigerian Banks', 'Development Finance Institutions', 'Fintech Unicorns'],
    icon: 'landmark'
  },
  {
    id: 'regulatory',
    title: 'White-Collar Defense & Financial Crimes Regulatory',
    leadPartner: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    statutes: [
      'Economic and Financial Crimes Commission (EFCC) Establishment Act',
      'Money Laundering (Prevention and Prohibition) Act 2022',
      'Corrupt Practices and Other Related Offences Act (ICPC Act)'
    ],
    summary: 'Defending financial institutions, corporate boards, and executive directors in high-profile investigations by the EFCC, ICPC, SEC Nigeria, and the Nigerian Financial Intelligence Unit (NFIU).',
    representativeMatters: [
      'Conducted internal forensic compliance review for an NGX-listed financial holding company, averting formal regulatory sanctions.',
      'Successfully defended managing director in landmark Federal High Court proceedings regarding foreign exchange allocations.',
      'Formulated enterprise Anti-Money Laundering (AML/CFT) frameworks aligned with FATF standards and CBN mandates.'
    ],
    clientTypes: ['Board Audit Committees', 'Commercial Bank Executives', 'Multinational Directors'],
    icon: 'shield'
  },
  {
    id: 'wealth',
    title: 'Private Client Wealth, Trusts & Family Office Governance',
    leadPartner: 'Dr. Amina Bello-Lindholm, FCIArb (Senior Counsel)',
    statutes: [
      'Administration of Estates Law of Lagos State',
      'Companies and Allied Matters Act (CAMA 2020 - Part C/F Trusts)',
      'Nigeria Data Protection Act (NDPA 2023)'
    ],
    summary: 'Structuring dynastic wealth holding vehicles, family constitutions, intergenerational probate administration, and offshore/onshore trust governance for prominent West African families.',
    representativeMatters: [
      'Architected bespoke multi-generational family office constitution and trust settlement for prominent Nigerian industrialist family.',
      'Resolved complex cross-border probate estate involving real property assets across Ikoyi, Victoria Island, London, and Dubai.',
      'Drafted protective revocable and irrevocable trust settlements preserving privately held operating enterprises.'
    ],
    clientTypes: ['Prominent West African Families', 'Single Family Offices', 'Estate Executors & Trustees'],
    icon: 'briefcase'
  }
];

export const getPractice = (slug: string) => PRACTICES.find((x) => x.id === slug);
