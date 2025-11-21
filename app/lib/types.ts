export type FMGEMCQ = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicsCovered: string[];
  year: number | string;
  examSession?: string;
};
