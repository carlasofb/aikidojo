import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export default function VariantesAccordion({ variantes }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-2">
      {variantes.map((v, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl border border-teal-100 dark:border-teal-900/50 overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-teal-50 dark:bg-teal-950/30 text-left"
            >
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm">
                  {v.nome}
                </p>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-0.5">
                  {v.subtitulo}
                </p>
              </div>
              <ChevronDown
                size={16}
                className={`text-teal-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 py-4 bg-white dark:bg-zinc-900 border-t border-teal-100 dark:border-teal-900/40">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {v.descricao}
                </p>
                <div className="space-y-2">
                  {v.pontos.map((p, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="text-teal-500 flex-shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
