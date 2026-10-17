import test from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateConflictCheck,
  estimateLegalEngagement,
  calculateStatuteOfLimitations,
  generateIntakeReference,
  formatNaira
} from './legal-engine.ts';

test('conflict check flags Nigerian restricted entities pursuant to RPC 2023 Rule 17', () => {
  const result = evaluateConflictCheck('Dangote Sub-Saharan Logistics', 'Dangote Group');
  assert.equal(result.hasPotentialConflict, true);
  assert.equal(result.status, 'ETHICAL_HOLD');
  assert.equal(result.adversePartyFlagged, true);
});

test('conflict check clears non-conflicted prospective parties in Lagos jurisdiction', () => {
  const result = evaluateConflictCheck('Helios Atlantic Terminals Ltd', 'Lekki Free Zone Energy Corp');
  assert.equal(result.hasPotentialConflict, false);
  assert.equal(result.status, 'CLEARED_PRELIMINARY');
  assert.match(result.clearanceCode || '', /^CC-KNX-LOS-\d+/);
});

test('fee estimation formats in Nigerian Naira (₦) and scales with complexity', () => {
  const standardEstimate = estimateLegalEngagement({
    matterType: 'corporate_ma',
    complexity: 'standard',
    urgency: 'standard',
    engagementModel: 'hourly',
    currency: 'NGN'
  });

  const highStakesEstimate = estimateLegalEngagement({
    matterType: 'corporate_ma',
    complexity: 'high_stakes',
    urgency: 'immediate',
    engagementModel: 'hourly',
    currency: 'NGN'
  });

  assert.ok(highStakesEstimate.estimatedRetainerMin > standardEstimate.estimatedRetainerMin);
  assert.match(highStakesEstimate.formattedRetainer, /₦/);
  assert.equal(highStakesEstimate.estimatedDurationWeeks, 24);
});

test('fee estimation supports USD toggle for cross-border transactions', () => {
  const usdEstimate = estimateLegalEngagement({
    matterType: 'energy_natural_resources',
    complexity: 'complex',
    urgency: 'standard',
    engagementModel: 'hourly',
    currency: 'USD'
  });

  assert.equal(usdEstimate.currency, 'USD');
  assert.match(usdEstimate.formattedRetainer, /\$/);
});

test('statutory limitation calculates deadline under Lagos State Limitation Law', () => {
  // Incident 4 years ago for a 6-year Lagos State contract statute
  const result = calculateStatuteOfLimitations('breach_of_contract', '2022-10-16', '2026-10-16');
  assert.equal(result.statuteYears, 6);
  assert.equal(result.deadlineDate, '2028-10-16');
  assert.ok(result.daysRemaining > 0);
  assert.match(result.statuteCitation, /Limitation Law of Lagos State/);
});

test('intake reference code is formatted correctly with Lagos hub prefix', () => {
  const code = generateIntakeReference('Eko Atlantic Realty', 'commercial_litigation');
  assert.match(code, /^KNX-LOS-LIT-EKO-\d{4}$/);
});
