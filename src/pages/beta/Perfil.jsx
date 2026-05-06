import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Trophy } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { communityHighlights, memberProfile } from "../../components/betaData";

export default function Perfil() {
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
                Perfil
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Membro do clube
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <User
              size={18}
              className={dark ? "text-amber-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white text-2xl">
              {memberProfile.initials}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {memberProfile.name}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {memberProfile.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 font-semibold">
                  Faixa atual
                </p>
                <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {memberProfile.grade}
                </h3>
              </div>
              <Trophy size={28} className="text-amber-500" />
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {memberProfile.goal}
            </p>
          </article>

          <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 font-semibold">
              Comunidade
            </p>
            <div className="mt-4 space-y-3">
              {communityHighlights.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-4"
                >
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
