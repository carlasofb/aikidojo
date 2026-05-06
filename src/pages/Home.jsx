import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../components/ThemeContext";
import {
  Sun,
  Moon,
  Sparkles,
  BookOpen,
  Brain,
  BookMarked,
  ChevronRight,
} from "lucide-react";
import { tecnicas, conceitos } from "../components/aikidoData";

export default function Home() {
  const { dark, toggle } = useTheme();

  const sections = [
    {
      to: "/tecnicas",
      icon: BookOpen,
      label: "Técnicas",
      desc: "Projeções e imobilizações",
      count: tecnicas.length,
      accent: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50 dark:bg-blue-950/40",
      border: "border-blue-100 dark:border-blue-900/50",
    },
    {
      to: "/conceitos",
      icon: Brain,
      label: "Conceitos",
      desc: "Princípios e filosofia",
      count: conceitos.length,
      accent: "from-purple-500 to-violet-600",
      bg: "bg-purple-50 dark:bg-purple-950/40",
      border: "border-purple-100 dark:border-purple-900/50",
    },
    {
      to: "/glossario",
      icon: BookMarked,
      label: "Glossário",
      desc: "Termos japoneses",
      count: "35+",
      accent: "from-teal-500 to-emerald-600",
      bg: "bg-teal-50 dark:bg-teal-950/40",
      border: "border-teal-100 dark:border-teal-900/50",
    },
    {
      to: "/beta",
      icon: Sparkles,
      label: "BETA",
      desc: "Notícias, progresso e eventos do clube",
      count: "Novo",
      accent: "from-emerald-500 to-lime-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-100 dark:border-emerald-900/50",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 40%)`,
          }}
        />

        <div className="relative px-6 pt-16 pb-14">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
          >
            {dark ? (
              <Sun size={18} className="text-amber-300" />
            ) : (
              <Moon size={18} className="text-white/80" />
            )}
          </button>

          {/* Japanese character decoration */}
          <div className="flex flex-col items-center text-center">
            <div
              className="text-7xl font-thin text-white/20 mb-1 select-none"
              style={{ fontFamily: "serif" }}
            >
              合気道
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
              Aikido
            </h1>
            <p className="text-zinc-400 text-sm font-light tracking-widest uppercase">
              O Caminho da Harmonia
            </p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 py-8 border-b border-zinc-100 dark:border-zinc-800/60">
        <blockquote className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm italic leading-relaxed">
            "O Aikido não usa a força bruta para vencer o inimigo — <br />
            usa o amor universal para transformar o conflito em harmonia."
          </p>
          <footer className="mt-2 text-xs text-zinc-400 dark:text-zinc-600 tracking-wider uppercase">
            — Morihei Ueshiba, O'Sensei
          </footer>
        </blockquote>
      </div>

      {/* Navigation sections */}
      <div className="px-5 py-7 space-y-4 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase px-1 mb-5">
          Explorar
        </p>
        {sections.map(
          ({ to, icon: Icon, label, desc, count, accent, bg, border }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} ${border} transition-all active:scale-98 group`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0 shadow-sm`}
              >
                <Icon size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                    {label}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">
                    {count}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                  {desc}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="text-zinc-300 dark:text-zinc-700 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          ),
        )}
      </div>

      {/* Founder info */}
      <div className="mx-5 mb-8 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-3">
          O Fundador
        </p>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex-shrink-0 flex items-center justify-center">
            <span
              className="text-white text-sm font-light"
              style={{ fontFamily: "serif" }}
            >
              植
            </span>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Morihei Ueshiba (1883–1969)
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1 leading-relaxed">
              Mestre de artes marciais japonês que sintetizou décadas de treino
              em Jujutsu, Kenjutsu e Spear fighting para criar o Aikido — uma
              arte que enfatiza harmonia, ética e paz.{" "}
              <Link
                to="/fundador"
                className="font-semibold text-zinc-900 dark:text-zinc-100 underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Ler mais →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
