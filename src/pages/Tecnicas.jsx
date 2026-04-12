import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { Sun, Moon } from "lucide-react";
import {
  tecnicas,
  categoriasCores,
  dificuldadeCores,
} from "../components/aikidoData";

export default function Tecnicas() {
  const { dark, toggle } = useTheme();
  const [busca, setBusca] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroDificuldade, setFiltroDificuldade] = useState("Todas");

  const categorias = ["Todas", "Controle", "Projeção"];
  const dificuldades = ["Todas", "Iniciante", "Intermediário", "Avançado"];

  const filtradas = tecnicas.filter((t) => {
    const matchBusca =
      t.nome.toLowerCase().includes(busca.toLowerCase()) ||
      t.subtitulo.toLowerCase().includes(busca.toLowerCase()) ||
      t.japones.includes(busca);
    const matchCat =
      filtroCategoria === "Todas" || t.categoria === filtroCategoria;
    const matchDif =
      filtroDificuldade === "Todas" || t.dificuldade === filtroDificuldade;
    return matchBusca && matchCat && matchDif;
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
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setFiltroCategoria(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filtroCategoria === c
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="w-px bg-zinc-200 dark:bg-zinc-700 mx-1" />
          {dificuldades.slice(1).map((d) => (
            <button
              key={d}
              onClick={() =>
                setFiltroDificuldade(filtroDificuldade === d ? "Todas" : d)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filtroDificuldade === d
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {d}
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
          const dif = dificuldadeCores[tecnica.dificuldade] || {};
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
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${dif.bg} ${dif.text}`}
                >
                  {tecnica.dificuldade}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
