'use client';

import { JobType } from '@/types/test';
import Link from 'next/link';
import JobImage from '@/components/JobImage';
import ShareIcon from '@/components/ShareIcon';
import JobStats from '@/components/JobStats';
import Button from '@/components/Button';
import { useCallback, useEffect, useState } from 'react';
import { jobDescriptions } from './jobDescriptions';
import { GetStaticProps } from 'next';

type JobInfo = (typeof jobDescriptions)[JobType];

interface ResultClientProps {
  params: { type: JobType };
  jobInfo: JobInfo;
}

export default function ResultClient({ params, jobInfo }: ResultClientProps) {
  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator
        .share({
          title: 'RPG 직업 추천 테스트',
          text: `나의 RPG 직업은 ${jobInfo.title}입니다!\n${jobInfo.description}`,
          url: window.location.href,
        })
        .catch((error) => {
          console.log('공유하기 실패:', error);
        });
    } else {
      const text = `나의 RPG 직업은 ${jobInfo.title}입니다!\n${jobInfo.description}\n\n테스트 하러가기: ${window.location.origin}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('클립보드에 복사되었습니다!');
      });
    }
  }, [jobInfo]);

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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div
        className="max-w-2xl w-full space-y-8 p-8 bg-background-paper rounded-xl shadow-lg animate-slide-up 
                     border border-primary/10 backdrop-blur-sm"
      >
        <div className="text-center">
          <JobImage jobType={params.type} />
          <h1 className="text-3xl font-bold text-text-primary mb-2 animate-fade-in">
            당신의 RPG 직업은...
          </h1>
          <h2 className={`text-4xl font-bold mb-4 text-accent-${params.type}`}>
            {jobInfo.title}
          </h2>
          <p className="text-text-secondary mb-8">{jobInfo.description}</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary">
              주요 특성
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              {jobInfo.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary">능력치</h3>
            <JobStats stats={jobInfo.stats} />
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            className="flex-1 rounded-md flex items-center justify-center bg-primary text-white hover:bg-primary-dark active:bg-primary-dark/90 text-center"
            href="/"
          >
            <p>다시 테스트하기</p>
          </Link>
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex items-center justify-center row-auto"
          >
            <ShareIcon />
            결과 공유하기
          </Button>
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { type } = context.params as { type: JobType };
  const jobInfo = jobDescriptions[type]; // jobDescriptions에서 데이터 가져오기

  if (!jobInfo) {
    return {
      notFound: true, // jobInfo가 없으면 404 페이지 리다이렉트
    };
  }

  return {
    props: {
      jobInfo,
    },
  };
};
