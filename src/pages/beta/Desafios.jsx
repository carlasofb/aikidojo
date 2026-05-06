import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Flag } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { weeklyChallenges } from "../../components/betaData";

export default function Desafios() {
  const { dark, toggle } = useTheme();

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
                Desafios
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Metas da semana
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <Flag
              size={18}
              className={dark ? "text-violet-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Queres algo para focar esta semana?
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Escolhe um desafio e usa-o como meta para os próximos treinos.
          </p>
        </div>

        <div className="grid gap-4">
          {weeklyChallenges.map((challenge) => (
            <article
              key={challenge.id}
              className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 font-semibold">
                    {challenge.focus}
                  </p>
                  <h2 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {challenge.title}
                  </h2>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {challenge.tag}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
