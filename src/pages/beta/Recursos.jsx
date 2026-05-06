import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { resources } from "../../components/betaData";

export default function Recursos() {
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
                Recursos
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Prática guiada
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <BookOpen
              size={18}
              className={dark ? "text-sky-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Recursos para treinar fora do dojo
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Pequenas sugestões de leitura, vídeo e prática para reforçar o teu
            estudo.
          </p>
        </div>

        <div className="grid gap-4">
          {resources.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
                  {item.type}
                </span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400"
              >
                Abrir recurso →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
