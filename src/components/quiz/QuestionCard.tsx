"use client";

import { useState, useEffect } from "react";
import { useQuiz } from "@/hooks/useQuiz";
import { Question } from "@/types/question";
import AnswerButton from "@/components/quiz/AnswerButton";
import FeedbackPanel from "@/components/quiz/FeedbackPanel";
import QuizProgressBar from "@/components/quiz/QuizProgressBar";

interface QuestionCardProps {
  blockId: string;
  topicId: string | null;
  questions: Question[];
  onFinish: (results: { correct: number; total: number }) => void;
}

export default function QuestionCard({ blockId, topicId, questions, onFinish, }: QuestionCardProps) {
  const [showTheory, setShowTheory] = useState(false);

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedAnswer,
    isAnswered,
    isFinished,
    results,
    answer,
    next,
  } = useQuiz({ blockId, topicId, questions });

  useEffect(() => {
    if (isFinished) {
      const correct = results.filter((r) => r.correct).length;
      onFinish({ correct, total: results.length });
    }
  }, [isFinished]);

  if (isFinished) return null;

  const locQ = currentQuestion.en;
  const letters = ["A", "B", "C"];

  const getAnswerState = (index: number) => {
    // Pure function that computes the state of each answer button.
    // If not answered yet — default.
    // If answered — the correct one gets "correct", the selected wrong one gets "wrong", the rest get "disabled".
    if (!isAnswered) return "default";
    if (index === locQ.correct) return "correct";
    if (index === selectedAnswer) return "wrong";
    return "disabled";
  };

  return (
    <div>
      <QuizProgressBar current={currentIndex + 1} total={totalQuestions} />

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 mb-4">
        <p className="text-xs font-semibold text-violet-500 uppercase tracking-wide mb-2">
          Question {currentIndex + 1}
        </p>
        <p className="text-lg font-semibold leading-relaxed">{locQ.q}</p>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        {locQ.options.map((option, index) => (
          <AnswerButton
            key={index}
            label={letters[index]}
            text={option}
            state={getAnswerState(index)}
            onClick={() => answer(index)}
          />
        ))}
      </div>

      {isAnswered && (
        <FeedbackPanel
          isCorrect={selectedAnswer === locQ.correct}
          explanation={locQ.explanation}
          onReadTheory={() => setShowTheory(true)}
        />
      )}

      {isAnswered && (
        <button
          onClick={next}
          className="mt-4 w-full py-3 font-bold text-white bg-violet-600 hover:bg-violet-700 rounded-2xl transition-colors cursor-pointer"
        >
          {currentIndex === totalQuestions - 1 ? "Finish →" : "Next →"}
        </button>
      )}

      {showTheory && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTheory(false)}
        >
          <div
            className="bg-white dark:bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
            // e.stopPropagation() — a click inside the modal shouldn't close it.
            // Without this, clicking the content would bubble up to the overlay and close the modal.
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg pr-4">{locQ.q}</h3>
              <button
                onClick={() => setShowTheory(false)}
                className="text-zinc-400 hover:text-zinc-600 text-2xl leading-none shrink-0"
              >
                ×
              </button>
            </div>
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: locQ.theory }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
