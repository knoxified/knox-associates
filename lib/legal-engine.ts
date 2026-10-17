/**
 * Pure legal logic engine for Knox & Associates.
 * Anchored in Nigerian Jurisprudence: CAMA 2020, Limitation Law of Lagos State,
 * Arbitration and Mediation Act 2023, and Rules of Professional Conduct (RPC 2023).
 */

export type MatterType = 
  | 'corporate_ma'
  | 'commercial_litigation'
  | 'energy_natural_resources'
  | 'private_wealth'
  | 'intellectual_property'
  | 'regulatory_defense'
  | 'employment_executive';

export type EngagementModel = 'hourly' | 'fixed_milestone' | 'outside_general_counsel' | 'hybrid_success';

export type UrgencyLevel = 'immediate' | 'standard' | 'prospective';

export type CurrencyMode = 'NGN' | 'USD';

export interface FeeEstimateInput {
  matterType: MatterType;
  complexity: 'standard' | 'complex' | 'high_stakes';
  urgency: UrgencyLevel;
  engagementModel: EngagementModel;
  currency?: CurrencyMode;
}

export interface FeeEstimateResult {
  currency: CurrencyMode;
  estimatedRetainerMin: number;
  estimatedRetainerMax: number;
  blendedHourlyRate: number;
  recommendedModel: EngagementModel;
  estimatedDurationWeeks: number;
  billingNotes: string[];
  formattedRetainer: string;
}

export interface ConflictCheckResult {
  hasPotentialConflict: boolean;
  status: 'CLEARED_PRELIMINARY' | 'ETHICAL_HOLD' | 'INSUFFICIENT_DATA';
  adversePartyFlagged: boolean;
  clearanceCode?: string;
  recommendation: string;
}

export interface StatuteLimitationResult {
  statuteYears: number;
  deadlineDate: string;
  daysRemaining: number;
  status: 'CRITICAL_URGENT' | 'MONITOR_CLOSELY' | 'STANDARD_TIMELINE' | 'EXPIRED';
  jurisdictionNotice: string;
  statuteCitation: string;
}

// Restricted institutional entities / counterparties for preliminary conflict screening
export const KNOWN_RESTRICTED_ENTITIES = [
  'dangote group',
  'apex global holdings',
  'zenith bank plc',
  'seplat energy plc',
  'meridian capital',
  'vanguard sovereign partners',
  'first bank nigeria',
  'solaris tech ventures'
];

/**
 * Formats Nigerian Naira values with the ₦ symbol and commas
 */
export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

/**
 * Validates a conflict check inquiry pursuant to Rule 17 of the Rules of Professional Conduct for Legal Practitioners (RPC 2023).
 */
export function evaluateConflictCheck(
  prospectiveClient: string,
  adverseParty: string,
  restrictedEntities: string[] = KNOWN_RESTRICTED_ENTITIES
): ConflictCheckResult {
  const cleanClient = prospectiveClient.trim().toLowerCase();
  const cleanAdverse = adverseParty.trim().toLowerCase();

  if (!cleanClient || cleanClient.length < 2) {
    return {
      hasPotentialConflict: false,
      status: 'INSUFFICIENT_DATA',
      adversePartyFlagged: false,
      recommendation: 'Applicant identification requires verified CAC corporate entity name or individual full legal name.'
    };
  }

  // Check if adverse party matches any currently represented client
  const adverseConflict = cleanAdverse.length > 2 && restrictedEntities.some(entity => 
    cleanAdverse.includes(entity) || entity.includes(cleanAdverse)
  );

  // Check if client themselves is a restricted/conflicted entity
  const clientRestricted = restrictedEntities.some(entity =>
    cleanClient.includes(entity) || entity.includes(cleanClient)
  );

  if (adverseConflict || clientRestricted) {
    return {
      hasPotentialConflict: true,
      status: 'ETHICAL_HOLD',
      adversePartyFlagged: adverseConflict,
      recommendation: 'Potential direct conflict under Rule 17 of the Rules of Professional Conduct (RPC 2023). Ethical firewall established; requires Managing Partner / Senior Advocate of Nigeria (SAN) formal clearance.'
    };
  }

  // Generate deterministic clearance checksum
  const hash = Math.abs(
    (cleanClient + cleanAdverse).split('').reduce((acc, char) => acc + char.charCodeAt(0), 1000)
  ) % 9000 + 1000;

  return {
    hasPotentialConflict: false,
    status: 'CLEARED_PRELIMINARY',
    adversePartyFlagged: false,
    clearanceCode: `CC-KNX-LOS-${hash}`,
    recommendation: 'Preliminary conflict check cleared. Matter may proceed to confidential Partner / SAN consultation in our Lagos Chambers.'
  };
}

/**
 * Calculates estimated retainer in Nigerian Naira (₦) or USD ($) for legal engagements.
 */
export function estimateLegalEngagement(input: FeeEstimateInput): FeeEstimateResult {
  const currency = input.currency || 'NGN';

  // Base rates in Nigerian Naira (NGN)
  const baseRatesNGN: Record<MatterType, { partnerRate: number; baseHours: number; retainerBase: number }> = {
    corporate_ma: { partnerRate: 650000, baseHours: 40, retainerBase: 35000000 },
    commercial_litigation: { partnerRate: 850000, baseHours: 50, retainerBase: 45000000 },
    energy_natural_resources: { partnerRate: 900000, baseHours: 45, retainerBase: 50000000 },
    private_wealth: { partnerRate: 500000, baseHours: 25, retainerBase: 20000000 },
    intellectual_property: { partnerRate: 550000, baseHours: 30, retainerBase: 25000000 },
    regulatory_defense: { partnerRate: 800000, baseHours: 40, retainerBase: 40000000 },
    employment_executive: { partnerRate: 450000, baseHours: 20, retainerBase: 15000000 }
  };

  const config = baseRatesNGN[input.matterType] || baseRatesNGN.corporate_ma;

  const complexityMultiplier = {
    standard: 1.0,
    complex: 1.6,
    high_stakes: 2.5
  }[input.complexity];

  const urgencyMultiplier = {
    immediate: 1.35,
    standard: 1.0,
    prospective: 0.95
  }[input.urgency];

  let calculatedRetainerMin = Math.round(config.retainerBase * complexityMultiplier * urgencyMultiplier);
  let calculatedRetainerMax = Math.round(calculatedRetainerMin * 1.5);
  let blendedRate = Math.round(config.partnerRate * (input.complexity === 'high_stakes' ? 1.1 : 0.95));

  let formattedRetainer = `${formatNaira(calculatedRetainerMin)} – ${formatNaira(calculatedRetainerMax)}`;

  if (currency === 'USD') {
    // Conversion benchmark (approx 1,500 NGN/USD benchmark)
    const fx = 1500;
    calculatedRetainerMin = Math.round(calculatedRetainerMin / fx);
    calculatedRetainerMax = Math.round(calculatedRetainerMax / fx);
    blendedRate = Math.round(blendedRate / fx);
    formattedRetainer = `$${calculatedRetainerMin.toLocaleString()} – $${calculatedRetainerMax.toLocaleString()}`;
  }

  const durationWeeks = input.complexity === 'high_stakes' ? 24 : input.complexity === 'complex' ? 12 : 6;

  const notes: string[] = [
    `Lead Partner / Senior Advocate of Nigeria (SAN) trial team oversight.`,
    `Client trust deposit held in segregated escrow account pursuant to Legal Practitioners Accounts Rules.`,
    `Detailed itemized invoices formatted to Nigerian Bar Association and international commercial standards.`
  ];

  if (input.engagementModel === 'outside_general_counsel') {
    notes.push('Includes dedicated monthly corporate retainer with CAC, SEC Nigeria, and regulatory compliance cover.');
  } else if (input.engagementModel === 'hybrid_success') {
    notes.push('Contingency fee structures governed strictly by Rule 50 of the Rules of Professional Conduct (RPC 2023).');
  }

  return {
    currency,
    estimatedRetainerMin: calculatedRetainerMin,
    estimatedRetainerMax: calculatedRetainerMax,
    blendedHourlyRate: blendedRate,
    recommendedModel: input.engagementModel,
    estimatedDurationWeeks: durationWeeks,
    billingNotes: notes,
    formattedRetainer
  };
}

/**
 * Computes statutory filing limitation deadlines based on Nigerian statutes:
 * - Limitation Law of Lagos State (Cap L84, Laws of Lagos State 2015)
 * - Nigerian Copyright Act 2022
 * - CAMA 2020 Director Misfeasance
 */
export function calculateStatuteOfLimitations(
  claimType: 'breach_of_contract' | 'commercial_fraud' | 'ip_infringement' | 'breach_fiduciary',
  incidentDateStr: string,
  referenceDateStr: string = '2026-10-16'
): StatuteLimitationResult {
  const statuteConfig: Record<string, { years: number; citation: string }> = {
    breach_of_contract: {
      years: 6,
      citation: 'Section 8(1)(a), Limitation Law of Lagos State (Cap L84, Laws of Lagos State 2015)'
    },
    commercial_fraud: {
      years: 6,
      citation: 'Section 29, Limitation Law of Lagos State (Time runs from discovery of fraud)'
    },
    ip_infringement: {
      years: 3,
      citation: 'Section 31, Nigerian Copyright Act 2022 / Patent Act (Cap P2 LFN 2004)'
    },
    breach_fiduciary: {
      years: 6,
      citation: 'Sections 305 & 316, Companies and Allied Matters Act (CAMA 2020)'
    }
  };

  const config = statuteConfig[claimType] || statuteConfig.breach_of_contract;
  const years = config.years;
  const incidentDate = new Date(incidentDateStr);
  const referenceDate = new Date(referenceDateStr);

  const deadline = new Date(incidentDate);
  deadline.setFullYear(deadline.getFullYear() + years);

  const diffMs = deadline.getTime() - referenceDate.getTime();
  const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  let status: StatuteLimitationResult['status'] = 'STANDARD_TIMELINE';
  if (daysRemaining <= 0) {
    status = 'EXPIRED';
  } else if (daysRemaining <= 90) {
    status = 'CRITICAL_URGENT';
  } else if (daysRemaining <= 180) {
    status = 'MONITOR_CLOSELY';
  }

  return {
    statuteYears: years,
    deadlineDate: deadline.toISOString().split('T')[0],
    daysRemaining,
    status,
    jurisdictionNotice: 'Calculated under the Limitation Law of Lagos State and Nigerian Federal statutes. Specific accrual dates and written acknowledgments may reset limitation periods.',
    statuteCitation: config.citation
  };
}

/**
 * Formats a secure client intake dossier reference code with Lagos hub code.
 */
export function generateIntakeReference(clientName: string, matterType: MatterType): string {
  const prefix = 'KNX-LOS';
  const matterAbbr: Record<MatterType, string> = {
    corporate_ma: 'CAMA',
    commercial_litigation: 'LIT',
    energy_natural_resources: 'PIA',
    private_wealth: 'PW',
    intellectual_property: 'IP',
    regulatory_defense: 'REG',
    employment_executive: 'NICN'
  };
  const abbr = matterAbbr[matterType] || 'GEN';
  const clean = clientName.replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'CLI';
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${abbr}-${clean}-${randomSuffix}`;
}
