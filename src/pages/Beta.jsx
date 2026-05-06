import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Newspaper,
  Signal,
  CalendarDays,
} from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const betaCards = [
  {
    to: "/noticias",
    icon: Newspaper,
    title: "Notícias",
    description: "Últimas do dojo, artigos e novidades do Aikido.",
    accent: "from-sky-500 to-cyan-600",
  },
  {
    to: "/progresso",
    icon: Signal,
    title: "Progresso",
    description: "Regista o teu estudo e acompanha a evolução pessoal.",
    accent: "from-emerald-500 to-lime-600",
  },
  {
    to: "/eventos",
    icon: CalendarDays,
    title: "Eventos",
    description: "Treinos, workshops e encontros do clube.",
    accent: "from-violet-500 to-fuchsia-600",
  },
];

export default function Beta() {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-200"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                BETA
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Novas funcionalidades
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <Sparkles
              size={18}
              className={dark ? "text-amber-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5 text-sm text-zinc-600 dark:text-zinc-400">
          Estas funcionalidades estão em fase BETA. Ainda estamos a testar o
          fluxo, mas já podes usar notícias, acompanhar o progresso de estudo e
          ver os próximos eventos do clube.
        </div>

        <div className="grid gap-4">
          {betaCards.map(({ to, icon: Icon, title, description, accent }) => (
            <Link
              key={to}
              to={to}
              className={`group block rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-3xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
