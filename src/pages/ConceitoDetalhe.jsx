import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ListChecks,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { conceitos, categoriasCores } from "../components/aikidoData";

export default function ConceitoDetalhe() {
  const { id } = useParams();
  const { dark, toggle } = useTheme();
  const conceito = conceitos.find((c) => c.id === id);
  const idx = conceitos.findIndex((c) => c.id === id);

  if (!conceito) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950">
        <p className="text-zinc-500">Conceito não encontrado</p>
        <Link to="/conceitos" className="mt-4 text-purple-500 text-sm">
          ← Voltar
        </Link>
      </div>
    );
  }

  const colors = categoriasCores[conceito.categoria] || {};
  const prev = idx > 0 ? conceitos[idx - 1] : null;
  const next = idx < conceitos.length - 1 ? conceitos[idx + 1] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4 flex items-center justify-between">
        <Link
          to="/conceitos"
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
        >
          <ArrowLeft size={18} className="text-zinc-700 dark:text-zinc-300" />
        </Link>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
          {idx + 1} / {conceitos.length}
        </span>
        <button
          onClick={toggle}
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
        >
          {dark ? (
            <Sun size={16} className="text-amber-400" />
          ) : (
            <Moon size={16} className="text-zinc-600" />
          )}
        </button>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto">
        {/* Title */}
        <div className="mb-6">
          <div
            className="text-6xl font-thin text-zinc-200 dark:text-zinc-800 mb-2 select-none"
            style={{ fontFamily: "serif" }}
          >
            {conceito.japones}
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            {conceito.nome}
          </h1>
          <span
            className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${colors.bg} ${colors.text}`}
          >
            {conceito.categoria}
          </span>
        </div>

        {/* Short description */}
        <div className="mb-6 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-medium">
            {conceito.descricao}
          </p>
        </div>

        {/* Detailed explanation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-amber-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Aprofundamento
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {conceito.detalhes}
          </p>
        </div>

        {/* Practices */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks size={16} className="text-teal-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Como Praticar
            </h2>
          </div>
          <div className="space-y-2">
            {conceito.praticas.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-2.5 px-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/60"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {prev ? (
            <Link
              to={`/conceitos/${prev.id}`}
              className="flex-1 flex items-center gap-2 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft size={16} className="text-zinc-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-zinc-400">Anterior</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                  {prev.nome}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              to={`/conceitos/${next.id}`}
              className="flex-1 flex items-center justify-end gap-2 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="min-w-0 text-right">
                <p className="text-xs text-zinc-400">Próximo</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                  {next.nome}
                </p>
              </div>
              <ChevronRight size={16} className="text-zinc-400 flex-shrink-0" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
