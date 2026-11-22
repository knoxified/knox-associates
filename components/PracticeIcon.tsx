import React from 'react';
import { Briefcase, Building2, Flame, Gavel, Landmark, ShieldCheck } from 'lucide-react';
import type { PracticeIcon as Name } from '../lib/data/practices';

const MAP = { building: Building2, flame: Flame, gavel: Gavel, landmark: Landmark, shield: ShieldCheck, briefcase: Briefcase } as const;

export default function PracticeIcon({ name, className }: { name: Name; className?: string }) {
  const Icon = MAP[name] ?? Briefcase;
  return <Icon className={className} aria-hidden="true" />;
}
