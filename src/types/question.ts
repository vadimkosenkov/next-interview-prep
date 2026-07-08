export interface LocalizedMeta {
  title: string;
  desc: string;
}

export interface LocalizedTitle {
  title: string;
}

export interface QuestionContent {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
  theory: string;
}

export interface Question {
  id: string;
  ru: QuestionContent;
  en: QuestionContent;
}

export interface Topic {
  icon: string;
  ru: LocalizedTitle;
  en: LocalizedTitle;
  questions: Question[];
}

export interface QuestionBlock {
  meta: {
    icon: string;
    color: string;
    ru: LocalizedMeta;
    en: LocalizedMeta;
  };
  topics: Record<string, Topic>;
}

export type QuestionsDB = Record<string, QuestionBlock>;