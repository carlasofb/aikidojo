import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { tecnicas, categoriasCores } from "../components/aikidoData";

const kyuList = [
  {
    label: "Todas",
    active: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900",
    inactive: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
  },
  {
    label: "5º Kyu",
    active: "bg-yellow-400 text-white",
    inactive:
      "bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/50",
  },
  {
    label: "4º Kyu",
    active: "bg-orange-500 text-white",
    inactive:
      "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50",
  },
  {
    label: "3º Kyu",
    active: "bg-green-600 text-white",
    inactive:
      "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50",
  },
  {
    label: "2º Kyu",
    active: "bg-blue-600 text-white",
    inactive:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50",
  },
  {
    label: "1º Kyu",
    active: "bg-amber-800 text-white",
    inactive:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50",
  },
  {
    label: "Dan",
    active: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900",
    inactive:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600",
  },
];

export default function Tecnicas() {
  const { dark } = useTheme();
  const [busca, setBusca] = useState("");
  const [filtroKyu, setFiltroKyu] = useState("Todas");

  const filtradas = tecnicas.filter((t) => {
    const matchBusca =
      t.nome.toLowerCase().includes(busca.toLowerCase()) ||
      t.subtitulo.toLowerCase().includes(busca.toLowerCase()) ||
      t.japones.includes(busca);
    const matchKyu =
      filtroKyu === "Todas" || (t.kyu && t.kyu.includes(filtroKyu));
    return matchBusca && matchKyu;
  });

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
                Técnicas
              </h1>
              <p className="text-xs text-zinc-400 dark:text-zinc-600">
                Waza — {tecnicas.length} técnicas
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar técnica..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-sm outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
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

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {kyuList.map(({ label, active, inactive }) => (
            <button
              key={label}
              onClick={() => setFiltroKyu(label)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filtroKyu === label ? active : inactive
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-5 py-4 space-y-3 max-w-lg mx-auto">
        {filtradas.length === 0 && (
          <div className="text-center py-16 text-zinc-400">
            <p className="text-4xl mb-3">🥋</p>
            <p className="text-sm">Nenhuma técnica encontrada</p>
          </div>
        )}
        {filtradas.map((tecnica) => {
          const cat = categoriasCores[tecnica.categoria] || {};
          return (
            <Link
              key={tecnica.id}
              to={`/tecnicas/${tecnica.id}`}
              className="block p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
                      {tecnica.nome}
                    </span>
                    <span
                      className="text-zinc-400 dark:text-zinc-600 text-sm font-light"
                      style={{ fontFamily: "serif" }}
                    >
                      {tecnica.japones}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                    {tecnica.subtitulo}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {tecnica.descricao}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${cat.bg} ${cat.text}`}
                >
                  {tecnica.categoria}
                </span>
                {tecnica.kyu &&
                  tecnica.kyu.map((k) => (
                    <span
                      key={k}
                      className="px-2 py-0.5 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {k}
                    </span>
                  ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
