import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, CheckCircle2, XCircle } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { quizQuestions } from "../../components/betaData";

export default function Quiz() {
  const { dark, toggle } = useTheme();
  const [answers, setAnswers] = useState({});

  const score = useMemo(
    () =>
      Object.keys(answers).reduce((acc, key) => {
        const question = quizQuestions.find((item) => item.id === key);
        return acc + (question?.answer === answers[key] ? 1 : 0);
      }, 0),
    [answers],
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/beta"
              className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-200"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                Quiz
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Jogo de apreendizagem
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <HelpCircle
              size={18}
              className={dark ? "text-sky-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Testa o teu conhecimento
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Responde aos pequenos desafios e vê quantos acertos tens no final.
          </p>
        </div>

        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div
              key={question.id}
              className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {question.question}
                </h2>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Pergunta {question.id}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.value;
                  const isCorrect = question.answer === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option.value,
                        }))
                      }
                      className={`w-full rounded-2xl border p-4 text-left transition-all ${
                        selected
                          ? isCorrect
                            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50"
                            : "border-rose-500 bg-rose-50 dark:bg-rose-950/40"
                          : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-zinc-900 dark:text-zinc-100">
                          {option.label}
                        </span>
                        {selected && (
                          <span>
                            {isCorrect ? (
                              <CheckCircle2
                                size={18}
                                className="text-emerald-500"
                              />
                            ) : (
                              <XCircle size={18} className="text-rose-500" />
                            )}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5 text-sm text-zinc-600 dark:text-zinc-400">
          Resultado:{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {score}
          </span>{" "}
          de {quizQuestions.length} perguntas acertadas.
        </div>
      </div>
    </div>
  );
}
