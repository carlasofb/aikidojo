import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { glossario } from "../components/aikidoData";

export default function Glossario() {
  const { dark, toggle } = useTheme();
  const [busca, setBusca] = useState("");

  const filtrados = glossario.filter(
    (g) =>
      g.termo.toLowerCase().includes(busca.toLowerCase()) ||
      g.descricao.toLowerCase().includes(busca.toLowerCase()),
  );

  // Group alphabetically
  const grupos = filtrados.reduce((acc, g) => {
    const letra = g.termo[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(g);
    return acc;
  }, {});

  const letrasOrdenadas = Object.keys(grupos).sort();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-300"
              />
            </Link>
            <div>
              <h1 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg leading-tight">
                Glossário
              </h1>
              <p className="text-xs text-zinc-400 dark:text-zinc-600">
                {glossario.length} termos japoneses
              </p>
            </div>
          </div>
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

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar termo..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-sm outline-none focus:ring-2 focus:ring-teal-500/40 transition-all"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X size={16} className="text-zinc-400" />
            </button>
          )}
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto">
        {letrasOrdenadas.length === 0 && (
          <div className="text-center py-16 text-zinc-400">
            <p className="text-4xl mb-3">📖</p>
            <p className="text-sm">Nenhum termo encontrado</p>
          </div>
        )}

        {letrasOrdenadas.map((letra) => (
          <div key={letra} className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider">
                {letra}
              </span>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            </div>
            <div className="space-y-2">
              {grupos[letra].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900"
                >
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    {item.termo}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        {letrasOrdenadas.length > 0 && !busca && (
          <div className="mt-8 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              Os termos são em japonês (romanizado). <br />A pronúncia segue o
              sistema Hepburn de romanização.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
