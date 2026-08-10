import { useState, useMemo } from "react";
import { useAppDispatch } from "@/store/hooks";
import { updateTopicProgress } from "@/store/slices/progressSlice";
import { addSession } from "@/store/slices/historySlice";
import { shuffle } from "@/lib/shuffle";
import { findTopicIdByQuestionId } from "@/lib/findTopic";
import { Question } from "@/types/question";

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
  const shuffled = useMemo(() => shuffle(questions), [questions]);
  // Перемешиваем вопросы один раз при монтировании хука.
  // Без useMemo shuffle вызывался бы при каждом ре-рендере и вопросы постоянно перемешивались бы.

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState<AnswerResult[]>([]);

  const currentQuestion = shuffled[currentIndex];

  const answer = (optionIndex: number) => {
    if (isAnswered) return;
    // Защита от двойного клика. Если пользователь уже ответил — игнорируем повторные нажатия.

    const correct = optionIndex === currentQuestion.en.correct;

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);
    setResults((prev) => [
      ...prev,
      { questionId: currentQuestion.id, correct },
    ]);
  };

  const next = () => {
    const isLast = currentIndex === shuffled.length - 1;

    if (isLast) {
      // Считаем правильные ответы в момент завершения.
      // Используем локальный results а не Redux — Redux обновляем один раз в конце квиза, не после каждого вопроса.
      const correct = results.filter((r) => r.correct).length;
      const total = results.length;
      const pct = Math.round((correct / total) * 100);

      if (topicId) {
        // Квиз по одной теме
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
        // Квиз по всем темам — группируем результаты по topicId
        const byTopic = results.reduce<Record<string, { correct: number; total: number }>>(
          (acc, result) => {
            // находим тему вопроса по его id
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

      setIsFinished(true); // Cигнал для страницы что квиз завершён и нужно показать экран результатов.
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