'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/types/test';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import FadeTransition from '@/components/FadeTransition';
import StepIndicator from '@/components/StepIndicator';

const questions: Question[] = [
  {
    id: 1,
    text: '전투가 시작되었을 때, 당신은 어떤 포지션을 선호하시나요?',
    options: [
      {
        text: '최전방에서 적과 맞서 싸운다',
        scores: { warrior: 3, mage: 0, rogue: 1, priest: 0 },
      },
      {
        text: '후방에서 마법으로 지원한다',
        scores: { warrior: 0, mage: 3, rogue: 0, priest: 1 },
      },
      {
        text: '측면에서 기회를 노린다',
        scores: { warrior: 1, mage: 0, rogue: 3, priest: 0 },
      },
      {
        text: '동료들을 보호하고 치유한다',
        scores: { warrior: 0, mage: 1, rogue: 0, priest: 3 },
      },
    ],
  },
  {
    id: 2,
    text: '당신이 선호하는 무기는 무엇인가요?',
    options: [
      {
        text: '강력한 대검이나 도끼',
        scores: { warrior: 3, mage: 0, rogue: 1, priest: 0 },
      },
      {
        text: '마법 지팡이나 오브',
        scores: { warrior: 0, mage: 3, rogue: 0, priest: 1 },
      },
      {
        text: '빠른 단검이나 활',
        scores: { warrior: 0, mage: 0, rogue: 3, priest: 0 },
      },
      {
        text: '신성한 지팡이나 성서',
        scores: { warrior: 0, mage: 1, rogue: 0, priest: 3 },
      },
    ],
  },
  {
    id: 3,
    text: '파티원이 위험에 처했을 때, 당신은 어떻게 대처하시나요?',
    options: [
      {
        text: '적의 주의를 끌어 파티원을 보호한다',
        scores: { warrior: 3, mage: 0, rogue: 0, priest: 2 },
      },
      {
        text: '강력한 마법으로 적을 제압한다',
        scores: { warrior: 0, mage: 3, rogue: 1, priest: 0 },
      },
      {
        text: '재빠르게 적의 약점을 공격한다',
        scores: { warrior: 1, mage: 0, rogue: 3, priest: 0 },
      },
      {
        text: '즉시 파티원을 치유한다',
        scores: { warrior: 0, mage: 0, rogue: 0, priest: 3 },
      },
    ],
  },
  {
    id: 4,
    text: '던전에서 보물 상자를 발견했을 때, 당신의 첫 반응은?',
    options: [
      {
        text: '함정이 있는지 신중하게 확인한다',
        scores: { warrior: 1, mage: 2, rogue: 3, priest: 1 },
      },
      {
        text: '마법으로 내용물을 감지한다',
        scores: { warrior: 0, mage: 3, rogue: 1, priest: 1 },
      },
      {
        text: '과감하게 열어본다',
        scores: { warrior: 3, mage: 0, rogue: 2, priest: 0 },
      },
      {
        text: '파티원들과 상의한다',
        scores: { warrior: 1, mage: 1, rogue: 0, priest: 3 },
      },
    ],
  },
  {
    id: 5,
    text: '당신이 가장 중요하게 생각하는 가치는?',
    options: [
      {
        text: '용기와 명예',
        scores: { warrior: 3, mage: 0, rogue: 0, priest: 2 },
      },
      {
        text: '지식과 지혜',
        scores: { warrior: 0, mage: 3, rogue: 1, priest: 1 },
      },
      {
        text: '자유와 모험',
        scores: { warrior: 1, mage: 1, rogue: 3, priest: 0 },
      },
      {
        text: '조화와 평화',
        scores: { warrior: 0, mage: 1, rogue: 0, priest: 3 },
      },
    ],
  },
];

export default function TestPage() {
  const [showQuestion, setShowQuestion] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    warrior: 0,
    mage: 0,
    rogue: 0,
    priest: 0,
  });

  const router = useRouter();

  const handleAnswer = (optionIndex: number) => {
    const option = questions[currentQuestion].options[optionIndex];
    const newScores = { ...scores };

    Object.entries(option.scores).forEach(([job, score]) => {
      newScores[job as keyof typeof scores] += score;
    });

    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setShowQuestion(false);
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setShowQuestion(true);
      }, 500);
    } else {
      const result = Object.entries(newScores).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];
      router.push(`/result/${result}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full space-y-8 p-6 bg-background-paper rounded-xl shadow-lg">
        <StepIndicator
          currentStep={currentQuestion}
          totalSteps={questions.length}
          className="mb-8"
        />
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <FadeTransition show={showQuestion}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              질문 {currentQuestion + 1} / {questions.length}
            </h2>
            <p className="text-xl text-text-primary mb-8">
              {questions[currentQuestion].text}
            </p>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                variant="outline"
                className="p-4 text-left hover:scale-[1.02] hover:shadow-lg"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </FadeTransition>
      </div>
    </main>
  );
}
