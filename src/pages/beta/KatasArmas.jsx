import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Video, ShieldCheck } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";

export default function KatasArmas() {
  const { dark } = useTheme();

  const videos = [
    {
      id: "jo",
      title: "Kata com bastão (Jō)",
      description:
        "Um kata clássico de técnicas com bastão para controlar a distância e o ritmo.",
    },
    {
      id: "ken",
      title: "Kata com espada de madeira (Ken)",
      description:
        "Sequência de movimentos com espada para desenvolver postura e timing.",
    },
    {
      id: "tanto",
      title: "Kata com faca (Tantō)",
      description:
        "Trabalho de defesa e resposta em espaços curtos, com foco em fluidez.",
    },
  ];

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
                className="text-zinc-700 dark:text-zinc-300"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                Katas de Armas
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Katas de Armas
              </h1>
            </div>
          </div>
          <button className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
            <ShieldCheck
              size={18}
              className={dark ? "text-emerald-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Katas de armas em foco
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
              Nesta página vai encontrar exemplos de katas com bastão, espada e
              faca, com espaços reservados para incluir vídeos demonstrativos e
              notas de treino.
            </p>
          </div>

          <div className="space-y-4">
            {videos.map((video) => (
              <article
                key={video.id}
                className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {video.title}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                      {video.description}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-800/30 dark:text-sky-200">
                    <Video size={18} />
                  </span>
                </div>

                <div className="mt-5 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                    Espaço para vídeo demonstrativo
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Como usar esta página
          </h2>
          <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400 list-disc list-inside">
            <li>Adicione vídeos de demonstração para cada kata.</li>
            <li>Inclua comentários sobre postura, respiração e ritmo.</li>
            <li>Use este espaço como guia para o treino de armas no dojo.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
