import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validate, makeRef, PRACTICE_IDS } from './validate.js';

const good = { name: 'Ada Obi', email: 'ada@example.com', message: 'We need help with an acquisition.', consent: 'on', practice: 'ma' };

test('accepts a valid enquiry', () => {
  const r = validate(good);
  assert.equal(r.ok, true);
  assert.equal(r.value.kind, 'enquiry');
});

test('rejects bad email, short message, missing consent, unknown practice', () => {
  assert.equal(validate({ ...good, email: 'nope' }).ok, false);
  assert.equal(validate({ ...good, message: 'hi' }).ok, false);
  assert.equal(validate({ ...good, consent: undefined }).ok, false);
  assert.equal(validate({ ...good, practice: 'hacking' }).ok, false);
});

test('honeypot is rejected silently', () => {
  const r = validate({ ...good, website: 'http://spam' });
  assert.equal(r.ok, false);
  assert.equal(r.silent, true);
});

test('newlines in single-line fields cannot inject headers', () => {
  const r = validate({ ...good, name: 'Ada\r\nBcc: evil@x.com' });
  assert.equal(r.ok, true);
  assert.ok(!/[\r\n]/.test(r.value.name));
});

test('careers accepts known roles only', () => {
  assert.equal(validate({ ...good, kind: 'careers', practice: undefined, role: 'pupillage' }).ok, true);
  assert.equal(validate({ ...good, kind: 'careers', role: 'ceo' }).ok, false);
});

test('reference format', () => {
  assert.match(makeRef('enquiry'), /^ENQ-\d{6}-[0-9A-F]{6}$/);
  assert.match(makeRef('careers'), /^CAR-\d{6}-[0-9A-F]{6}$/);
});

test('worker practice ids stay in sync with site data', () => {
  const src = readFileSync(new URL('../lib/data/practices.ts', import.meta.url), 'utf8');
  const ids = [...src.matchAll(/^\s{4}id: '([a-z0-9-]+)'/gm)].map((m) => m[1]);
  assert.ok(ids.length > 0);
  for (const id of ids) assert.ok(PRACTICE_IDS.has(id), `missing "${id}" in worker/validate.js`);
});
