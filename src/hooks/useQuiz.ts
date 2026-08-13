import { useState, useMemo } from "react";
import { useAppDispatch } from "@/store/hooks";
import { updateTopicProgress } from "@/store/slices/progressSlice";
import { addSession } from "@/store/slices/historySlice";
import { shuffle } from "@/lib/shuffle";
import { findTopicIdByQuestionId } from "@/lib/findTopic";
import { Question } from "@/types/question";
import { useLanguage } from "@/hooks/useLanguage";

interface AnswerResult {
  questionId: string;
  correct: boolean;
}

interface UseQuizProps {
  blockId: string;
  topicId: string | null;
  questions: Question[];
}

interface UseQuizReturn {
  currentQuestion: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  isFinished: boolean;
  results: AnswerResult[];
  answer: (optionIndex: number) => void;
  next: () => void;
}

export function useQuiz({ blockId, topicId, questions }: UseQuizProps): UseQuizReturn {
  const dispatch = useAppDispatch();
  const language = useLanguage();
  const shuffled = useMemo(() => shuffle(questions), [questions]);
  // Shuffle the questions once when the hook mounts.
  // Without useMemo, shuffle would run on every re-render and questions would keep reshuffling.

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState<AnswerResult[]>([]);

  const currentQuestion = shuffled[currentIndex];

  const answer = (optionIndex: number) => {
    if (isAnswered) return;
    // Guard against double-clicks. If the user already answered, ignore repeat clicks.

    const correct = optionIndex === currentQuestion[language].correct;

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);
    setResults((prev) => [
      ...prev,
      { questionId: currentQuestion.id, correct },
    ]);
  };

  const next = () => {
    if (isFinished) return;
    // Guard against double-clicks on "Finish" re-dispatching progress/history updates.

    const isLast = currentIndex === shuffled.length - 1;

    if (isLast) {
      // Count correct answers at the moment the quiz finishes.
      // We use local `results` instead of Redux — Redux is updated once at the end of the quiz, not after every question.
      const correct = results.filter((r) => r.correct).length;
      const total = results.length;
      const pct = Math.round((correct / total) * 100);

      if (topicId) {
        // Single-topic quiz
        dispatch(
          updateTopicProgress({
            blockId,
            topicId,
            answered: total,
            correct,
            total,
          })
        );
      } else {
        // All-topics quiz — group results by topicId
        const byTopic = results.reduce<Record<string, { correct: number; total: number }>>(
          (acc, result) => {
            // find the question's topic by its id
            const tId = findTopicIdByQuestionId(result.questionId, blockId);
            if (!tId) return acc;
            if (!acc[tId]) acc[tId] = { correct: 0, total: 0 };
            acc[tId].total += 1;
            acc[tId].correct += result.correct ? 1 : 0;
            return acc;
          },
          {}
        );

        Object.entries(byTopic).forEach(([tId, stat]) => {
          dispatch(
            updateTopicProgress({
              blockId,
              topicId: tId,
              answered: stat.total,
              correct: stat.correct,
              total: stat.total,
            })
          );
        });
      }

      dispatch(
        addSession({
          date: new Date().toLocaleDateString(),
          blockId,
          topicId,
          correct,
          total,
          pct,
        })
      );

      setIsFinished(true); // Signal to the page that the quiz is finished and the results screen should show.
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: shuffled.length,
    selectedAnswer,
    isAnswered,
    isFinished,
    results,
    answer,
    next,
  };
}
