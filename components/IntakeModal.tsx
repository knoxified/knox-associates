'use client';

import React from 'react';
import ConflictCheckWizard from './ConflictCheckWizard';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeModal({ isOpen, onClose }: IntakeModalProps) {
  if (!isOpen) return null;

  return (
    <ConflictCheckWizard isOpen={isOpen} onClose={onClose} isInline={false} />
  );
}
