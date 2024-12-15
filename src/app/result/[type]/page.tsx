import { JobType } from '@/types/test';
import ResultClient from './ResultClient';
import { jobDescriptions } from './jobDescriptions';
import Link from 'next/link';
import Button from '@/components/Button';

interface PageProps {
  params: Promise<{
    type: JobType;
  }>;
}

export default async function ResultPage({ params }: PageProps) {
  const resolvedParams = await params;
  const jobInfo = jobDescriptions[resolvedParams.type];

  if (!jobInfo) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            잘못된 접근입니다
          </h1>
          <Button variant="primary">
            <Link href="/">처음으로 돌아가기</Link>
          </Button>
        </div>
      </main>
    );
  }

  return <ResultClient params={resolvedParams} jobInfo={jobInfo} />;
}

export function generateStaticParams() {
  return [
    { type: 'warrior' },
    { type: 'mage' },
    { type: 'rogue' },
    { type: 'priest' },
  ];
}
