import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full space-y-8 p-6 bg-background-paper rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            RPG 직업 추천 테스트
          </h1>
          <p className="text-text-secondary mb-8">
            당신에게 가장 잘 어울리는 RPG 직업을 찾아보세요!
          </p>
        </div>

        <Link
          href="/test"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
        >
          테스트 시작하기
        </Link>
      </div>
    </main>
  );
}
