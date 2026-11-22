/**
 * PLACEHOLDER CONTENT: replace with the firm's real articles.
 * One entry here automatically becomes one page at /insights/<slug>/ and an item in /feed.xml.
 */
export type InsightCategory = 'CAMA / Corporate' | 'Petroleum & Energy' | 'Arbitration & Litigation' | 'Fintech & Banking';

export interface Insight {
  id: string; // used as the URL slug
  category: InsightCategory;
  title: string;
  author: string;
  date: string;
  readTime: string;
  abstract: string;
  citation: string;
  content: string;
}

export const INSIGHTS: Insight[] = [
  {
    id: 'fccpa-merger-clearance-nigeria',
    category: 'CAMA / Corporate',
    title: 'Merger Control Under the Federal Competition & Consumer Protection Act (FCCPA 2018)',
    author: 'Eleanor Vance-Knox, BL (Senior Partner)',
    date: 'October 2026',
    readTime: '7 min read',
    citation: 'FCCPA 2018 Part XII; Merger Review Regulations 2020 (FCCPC)',
    abstract: 'An executive analysis of notification thresholds, negative control definitions, and expedited Phase 1 vs in-depth Phase 2 merger approvals in Nigerian cross-border acquisitions.',
    content: `Under the Federal Competition and Consumer Protection Act (FCCPA 2018), the Federal Competition and Consumer Protection Commission (FCCPC) exercises sole statutory jurisdiction over merger approvals in Nigeria, displacing the historical jurisdiction previously held by the SEC under the ISA 2007.

Strategic Deal Considerations:
1. Notification Thresholds: Mandatory pre-merger notification applies where the combined annual turnover of the acquirer and target in Nigeria equals or exceeds ₦1,000,000,000, or where the turnover of the target alone equals or exceeds ₦500,000,000.
2. The Concept of "Control": Section 92 of the FCCPA adopts an expansive standard of control encompassing minority equity stakes that confer veto rights over key commercial policies, board appointments, or business plans.
3. Gun-Jumping Sanctions: Parties must maintain strict operational independence prior to clearance. Implementing integration covenants prior to unconditional FCCPC approval incurs severe statutory penalties up to 10% of total annual turnover.`
  },
  {
    id: 'pia-host-community-trusts',
    category: 'Petroleum & Energy',
    title: 'Implementing Host Community Development Trusts (HCDTs) Under Chapter 3 of the PIA 2021',
    author: 'Babajide Thorne, BL (Partner)',
    date: 'September 2026',
    readTime: '8 min read',
    citation: 'Sections 234-257 Petroleum Industry Act 2021; NUPRC Host Community Regulations 2022',
    abstract: 'Practical guidance for upstream petroleum settlors on incorporating HCDTs, allocating the mandatory 3% Operating Expenditure (OPEX) fund, and establishing community management committees.',
    content: `Chapter 3 of the Petroleum Industry Act (PIA 2021) establishes a revolutionary statutory framework for sustainable peace and economic development in oil and gas producing areas, mandating every upstream petroleum licensee to incorporate a Host Community Development Trust with the Corporate Affairs Commission (CAC).

Key Governance Requirements for Operators:
1. Statutory OPEX Contribution: Settlors must make an annual statutory contribution of 3% of their operating expenditure from the preceding financial year directly into the Trust Fund account.
2. Needs Assessment Protocol: Prior to disbursing capital, trustees must conduct a formal, verified community needs assessment matrix aligned with NUPRC regulatory timelines.
3. Tax Deductibility: Contributions made by settlors to the Host Community Development Trust Fund are fully tax-deductible for the purposes of the Hydrocarbon Tax (HT) and Companies Income Tax (CIT).`
  },
  {
    id: 'ama-arbitral-enforcement-lagos',
    category: 'Arbitration & Litigation',
    title: 'Enforcing Commercial Arbitral Awards in the Lagos High Court Under the AMA 2023',
    author: 'Chief Sterling Knox, SAN, FCIArb (Managing Partner)',
    date: 'August 2026',
    readTime: '6 min read',
    citation: 'Arbitration and Mediation Act 2023 (AMA 2023); Limitation Law of Lagos State § 8',
    abstract: 'How the landmark Arbitration and Mediation Act 2023 curtails interlocutory appeals, introduces the Award Review Tribunal (ART), and accelerates recognition of domestic and foreign arbitral awards.',
    content: `The Arbitration and Mediation Act (AMA 2023) fundamentally modernized Nigeria’s dispute resolution landscape by repealing the 1988 Arbitration and Conciliation Act.

Salient Enactments for Commercial Litigators:
1. Emergency Arbitrator Regime: Section 16 of the AMA formally enshrines the appointment and enforcement of emergency arbitrator interim orders, curbing the need for preemptive court litigation.
2. Limitation Period Consolidation: Section 34 resolves decades of conflicting appellate jurisprudence by explicitly providing that the statutory limitation period for enforcing an arbitral award is calculated from the date of the award, excluding the time elapsed during the arbitral proceedings.
3. Award Review Tribunal (ART): Parties can agree to an opt-in Award Review Tribunal mechanism, resolving challenges within 60 days before any recourse to judicial courts.`
  },
  {
    id: 'cama-director-fiduciary-veil',
    category: 'CAMA / Corporate',
    title: 'Director Fiduciary Duties and Piercing the Corporate Veil Under CAMA 2020',
    author: 'Eleanor Vance-Knox, BL (Senior Partner)',
    date: 'July 2026',
    readTime: '6 min read',
    citation: 'Sections 305, 316 & 343 Companies and Allied Matters Act 2020',
    abstract: 'Judicial interpretation of codification of directors’ common-law duties, derivative actions, and statutory liability for trading while insolvent under Nigerian company law.',
    content: `The Companies and Allied Matters Act (CAMA 2020) substantially enhanced the oversight and personal liability of corporate directors in Nigeria.

Core Defensive Principles:
1. Objective Standard of Care: Section 305(2) codifies both subjective and objective standards of skill and care; directors can no longer plead commercial inexperience to avoid liability.
2. Multiple Directorship Restrictions: Section 307 prohibits any individual from holding concurrent directorships in more than five public companies in Nigeria.
3. Unfairly Prejudicial Conduct: Section 353 provides enhanced remedies for minority shareholders to petition the Federal High Court for relief against oppressive board management or illegal transactions.`
  }
];

export const getInsight = (slug: string) => INSIGHTS.find((x) => x.id === slug);
