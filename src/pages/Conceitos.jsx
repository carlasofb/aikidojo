import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { conceitos, categoriasCores } from "../components/aikidoData";

export default function Conceitos() {
  const { dark } = useTheme();
  const [busca, setBusca] = useState("");

  const filtrados = conceitos.filter(
    (c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      c.categoria.toLowerCase().includes(busca.toLowerCase()) ||
      c.japones.includes(busca),
  );

  // Group by category
  const grupos = filtrados.reduce((acc, c) => {
    if (!acc[c.categoria]) acc[c.categoria] = [];
    acc[c.categoria].push(c);
    return acc;
  }, {});

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
                Conceitos
              </h1>
              <p className="text-xs text-zinc-400 dark:text-zinc-600">
                Princípios e filosofia do Aikido
              </p>
            </div>
          </div>
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
            placeholder="Buscar conceito..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-sm outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
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
        {Object.keys(grupos).length === 0 && (
          <div className="text-center py-16 text-zinc-400">
            <p className="text-4xl mb-3">🧘</p>
            <p className="text-sm">Nenhum conceito encontrado</p>
          </div>
        )}

        {Object.entries(grupos).map(([categoria, items]) => {
          const colors = categoriasCores[categoria] || {
            bg: "bg-zinc-100",
            text: "text-zinc-600",
            dot: "bg-zinc-500",
          };
          return (
            <div key={categoria} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                <span
                  className={`text-xs font-semibold tracking-widest uppercase ${colors.text}`}
                >
                  {categoria}
                </span>
              </div>
              <div className="space-y-3">
                {items.map((conceito) => (
                  <Link
                    key={conceito.id}
                    to={`/conceitos/${conceito.id}`}
                    className="block p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-zinc-900 dark:text-zinc-100">
                            {conceito.nome}
                          </span>
                          <span
                            className="text-zinc-300 dark:text-zinc-700 text-sm font-light"
                            style={{ fontFamily: "serif" }}
                          >
                            {conceito.japones}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {conceito.descricao}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
