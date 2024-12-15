'use client';

import { JobType } from '@/types/test';

interface JobImageProps {
  jobType: JobType;
}

const jobImages = {
  warrior: '⚔️',
  mage: '🔮',
  rogue: '🗡️',
  priest: '✨',
} as const;

export default function JobImage({ jobType }: JobImageProps) {
  return (
    <div className="text-8xl mb-8 animate-bounce">{jobImages[jobType]}</div>
  );
}
