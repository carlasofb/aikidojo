import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Dumbbell, CheckCircle2, Circle } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { trainingPlan } from "../../components/betaData";

export default function Treino() {
  const { dark, toggle } = useTheme();
  const [plan, setPlan] = useState(trainingPlan);

  const toggleTask = (id) => {
    setPlan((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const completedCount = plan.filter((item) => item.completed).length;
  const percent = plan.length
    ? Math.round((completedCount / plan.length) * 100)
    : 0;

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
                Treino
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Plano de treino
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <Dumbbell
              size={18}
              className={dark ? "text-emerald-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Hoje no dojo
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Um plano simples para que cada treino tenha foco e progressão.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {percent}%
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {completedCount} de {plan.length}
              </p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {plan.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => toggleTask(item.id)}
              className="w-full rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 text-left transition-all hover:border-zinc-200 dark:hover:border-zinc-700"
            >
              <div className="flex items-center gap-4">
                <div className="mt-1 text-emerald-500">
                  {item.completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Circle size={22} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h2>
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
