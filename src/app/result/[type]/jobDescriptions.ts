export const jobDescriptions = {
  warrior: {
    title: '전사',
    description:
      '당신은 용감하고 강인한 전사입니다. 전투의 최전선에서 동료들을 보호하고, 강력한 힘으로 적을 제압하는 것을 선호합니다.',
    characteristics: ['강인한 체력', '높은 방어력', '근접 전투 특화', '리더십'],
    stats: [
      { label: '물리 공격력', value: 9, color: 'bg-accent-warrior' },
      { label: '방어력', value: 8, color: 'bg-accent-warrior' },
      { label: '마법 저항력', value: 6, color: 'bg-accent-warrior' },
      { label: '생존력', value: 8, color: 'bg-accent-warrior' },
    ],
  },
  mage: {
    title: '마법사',
    description:
      '당신은 지적이고 신중한 마법사입니다. 강력한 마법으로 전장을 지배하고, 전략적인 사고로 승리를 이끄는 것을 선호합니다.',
    characteristics: [
      '강력한 마법 공격력',
      '원거리 전투',
      '지적 통찰력',
      '다양한 마법 활용',
    ],
    stats: [
      { label: '마법 공격력', value: 9, color: 'bg-accent-mage' },
      { label: '마법 지속력', value: 7, color: 'bg-accent-mage' },
      { label: '마나 회복력', value: 8, color: 'bg-accent-mage' },
      { label: '스킬 효과', value: 8, color: 'bg-accent-mage' },
    ],
  },
  rogue: {
    title: '도적',
    description:
      '당신은 민첩하고 영리한 도적입니다. 빠른 판단력과 정확한 타격으로 적의 약점을 공략하는 것을 선호합니다.',
    characteristics: [
      '높은 민첩성',
      '치명타 특화',
      '은신 능력',
      '재빠른 기동성',
    ],
    stats: [
      { label: '치명타 확률', value: 9, color: 'bg-accent-rogue' },
      { label: '회피율', value: 8, color: 'bg-accent-rogue' },
      { label: '은신 능력', value: 7, color: 'bg-accent-rogue' },
      { label: '이동 속도', value: 8, color: 'bg-accent-rogue' },
    ],
  },
  priest: {
    title: '성직자',
    description:
      '당신은 자비롭고 신적인 성직자입니다. 동료들을 보호하고 치유하며, 신성한 힘으로 파티를 지원하는 것을 선호합니다.',
    characteristics: [
      '강력한 치유력',
      '버프/디버프 특화',
      '파티 지원',
      '신성 마법',
    ],
    stats: [
      { label: '치유력', value: 9, color: 'bg-accent-priest' },
      { label: '버프 효과', value: 8, color: 'bg-accent-priest' },
      { label: '신성 마법', value: 7, color: 'bg-accent-priest' },
      { label: '마나 회복', value: 8, color: 'bg-accent-priest' },
    ],
  },
} as const;
