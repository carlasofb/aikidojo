import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Circle,
  TrendingUp,
  Award,
} from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { initialStudyProgress } from "../../components/betaData";

const STORAGE_KEY = "aikido-study-progress";

export default function Progresso() {
  const { dark, toggle } = useTheme();
  const [progress, setProgress] = useState([]);
  const [streakDays, setStreakDays] = useState(4);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProgress(parsed);
          return;
        }
      } catch (error) {
        console.warn("Falha a ler progresso local:", error);
      }
    }
    setProgress(initialStudyProgress);
  }, []);

  useEffect(() => {
    if (progress.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const completedCount = useMemo(
    () => progress.filter((item) => item.completed).length,
    [progress],
  );

  const percent = progress.length
    ? Math.round((completedCount / progress.length) * 100)
    : 0;

  const categories = useMemo(() => {
    const map = {};
    progress.forEach((item) => {
      map[item.category] = map[item.category] || { total: 0, completed: 0 };
      map[item.category].total += 1;
      if (item.completed) map[item.category].completed += 1;
    });
    return Object.entries(map).map(([category, stats]) => ({
      category,
      ...stats,
    }));
  }, [progress]);

  const toggleItem = (id) => {
    setProgress((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

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
                Progresso
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Estudo pessoal
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <Sparkles
              size={18}
              className={dark ? "text-emerald-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Progresso de estudo
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Guarda o teu progresso localmente e acompanha as áreas já
                trabalhadas.
              </p>
            </div>
            <div className="grid gap-2 text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {percent}% completado
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Streak de {streakDays} dias
              </p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.category}
              className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-4"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 font-semibold">
                {item.category}
              </p>
              <p className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {Math.round((item.completed / item.total) * 100)}%
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {item.completed}/{item.total} concluídos
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {progress.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 flex items-start gap-4 transition-all hover:border-zinc-200 dark:hover:border-zinc-700"
            >
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
                  {item.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-950/60 p-5 text-sm text-zinc-500 dark:text-zinc-400">
          Os estados são guardados localmente no navegador. Em futuras versões,
          poderemos ligar este progresso ao perfil do utilizador.
        </div>
      </div>
    </div>
  );
}
