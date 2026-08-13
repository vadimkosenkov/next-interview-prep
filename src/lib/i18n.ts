export const i18n = {
  ru: {
    appTitle: "⚡ PrepFlow",

    common: {
      back: "← Назад",
    },

    home: {
      title: "Подготовка к собеседованию",
      subtitle: "Выбери блок и начни прокачивать знания",
      viewStats: "📊 Статистика и прогресс",
    },

    blocks: {
      startAll: "🚀 Начать все темы",
      notStarted: "Не начато",
      answered: "Отвечено",
      questions: "вопросов",
      topic: "тема",
      topics: "темы",
      correctSuffix: "правильно",
    },

    quiz: {
      questionNumber: (n: number) => `Вопрос ${n}`,
      questionProgress: (current: number, total: number) => `Вопрос ${current} из ${total}`,
      correct: "Правильно! ✅",
      wrong: "Неправильно ❌",
      next: "Следующий →",
      finish: "Завершить →",
      retry: "🔄 Повторить",
      backToBlock: "🏠 К блоку",
      readTheory: "📖 Читать теорию",
      resultPerfect: "Идеально! Ты мастер!",
      resultGreat: "Отличный результат!",
      resultOk: "Есть куда расти",
      resultMore: "Нужно больше практики",
    },

    dashboard: {
      title: "📊 Статистика и прогресс",
      totalAnswered: "Всего ответов",
      correctCount: "Правильных",
      accuracy: "Точность",
      sessions: "Сессии",
      progressByTopic: "Прогресс по темам",
      sessionHistory: "История сессий",
      noHistory: "Пока нет истории. Сначала пройди тест!",
      resetProgress: "🗑 Сбросить весь прогресс",
      resetConfirm: "Сбросить весь прогресс и историю?",
    },
  },
  en: {
    appTitle: "⚡ PrepFlow",

    common: {
      back: "← Back",
    },

    home: {
      title: "Interview Preparation",
      subtitle: "Choose a block and start leveling up",
      viewStats: "📊 Statistics & Progress",
    },

    blocks: {
      startAll: "🚀 Start all topics",
      notStarted: "Not started",
      answered: "answered",
      questions: "questions",
      topic: "topic",
      topics: "topics",
      correctSuffix: "correct",
    },

    quiz: {
      questionNumber: (n: number) => `Question ${n}`,
      questionProgress: (current: number, total: number) => `Question ${current} of ${total}`,
      correct: "Correct! ✅",
      wrong: "Wrong ❌",
      next: "Next →",
      finish: "Finish →",
      retry: "🔄 Retry",
      backToBlock: "🏠 Back to block",
      readTheory: "📖 Read theory",
      resultPerfect: "Perfect! You're a master!",
      resultGreat: "Great result!",
      resultOk: "Room to grow",
      resultMore: "More practice needed",
    },

    dashboard: {
      title: "📊 Statistics & Progress",
      totalAnswered: "Total answered",
      correctCount: "Correct",
      accuracy: "Accuracy",
      sessions: "Sessions",
      progressByTopic: "Progress by topic",
      sessionHistory: "Session history",
      noHistory: "No history yet. Complete a quiz first!",
      resetProgress: "🗑 Reset all progress",
      resetConfirm: "Reset all progress and history?",
    },
  },
} as const;

export type Lang = keyof typeof i18n;
