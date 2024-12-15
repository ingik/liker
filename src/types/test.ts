export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: {
      warrior: number;
      mage: number;
      rogue: number;
      priest: number;
    };
  }[];
}

export type JobType = 'warrior' | 'mage' | 'rogue' | 'priest';
