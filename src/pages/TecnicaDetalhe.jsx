import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Zap,
  Layers,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import {
  tecnicas,
  categoriasCores,
  dificuldadeCores,
  tecnicaImagens,
  tecnicaVideos,
  tecnicaVariantes,
  kyuCores,
  tecnicaAtaqueKyu,
} from "../components/aikidoData";
import TecnicaCarrossel from "../components/TecnicaCarrossel";
import VideoCarrossel from "../components/VideoCarrossel";
import VariantesAccordion from "../components/VariantesAccordion";

export default function TecnicaDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dark } = useTheme();
  const tecnica = tecnicas.find((t) => t.id === id);
  const idx = tecnicas.findIndex((t) => t.id === id);

  if (!tecnica) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950">
        <p className="text-zinc-500">Técnica não encontrada</p>
        <Link to="/tecnicas" className="mt-4 text-indigo-500 text-sm">
          ← Voltar
        </Link>
      </div>
    );
  }

  const cat = categoriasCores[tecnica.categoria] || {};
  const dif = dificuldadeCores[tecnica.dificuldade] || {};
  const prev = idx > 0 ? tecnicas[idx - 1] : null;
  const next = idx < tecnicas.length - 1 ? tecnicas[idx + 1] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4 flex items-center justify-between">
        <Link
          to="/tecnicas"
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
        >
          <ArrowLeft size={18} className="text-zinc-700 dark:text-zinc-300" />
        </Link>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
          {idx + 1} / {tecnicas.length}
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto">
        {/* Title section */}
        <div className="mb-6">
          <div
            className="text-6xl font-thin text-zinc-200 dark:text-zinc-800 mb-2 select-none"
            style={{ fontFamily: "serif" }}
          >
            {tecnica.japones}
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            {tecnica.nome}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mb-4">
            {tecnica.subtitulo}
          </p>
          <div className="flex gap-2 flex-wrap">
            <span
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${cat.bg} ${cat.text}`}
            >
              {tecnica.categoria}
            </span>
            {/* <span
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${dif.bg} ${dif.text}`}
            >
              {tecnica.dificuldade}
            </span> */}
          </div>
        </div>

        {/* Image carousel */}
        <TecnicaCarrossel
          imagens={tecnicaImagens[tecnica.id]}
          nome={tecnica.nome}
        />

        {/* Description */}
        <div className="mb-6 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
            {tecnica.descricao}
          </p>
        </div>

        {/* Points */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={16} className="text-indigo-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Pontos-Chave
            </h2>
          </div>
          <div className="space-y-2">
            {tecnica.pontosClave.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-2.5 px-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/60"
              >
                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                  {i + 1}
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Variants */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-teal-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Variantes
            </h2>
          </div>
          {tecnicaVariantes[tecnica.id] ? (
            <VariantesAccordion variantes={tecnicaVariantes[tecnica.id]} />
          ) : (
            <div className="flex flex-wrap gap-2">
              {tecnica.variantes.map((v, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 text-xs font-medium border border-teal-100 dark:border-teal-900/50"
                >
                  {v}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Attacks */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={16} className="text-orange-500" />
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Ataques Aplicáveis
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tecnica.ataques.map((a, i) => {
              const kyu = tecnicaAtaqueKyu[tecnica.id]?.[a];
              const cor = kyu ? kyuCores[kyu] : null;
              return cor ? (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${cor.bg} ${cor.text}`}
                  >
                    {a}
                  </span>
                </div>
              ) : (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 text-xs font-medium border border-orange-100 dark:border-orange-900/50"
                >
                  {a}
                </span>
              );
            })}
          </div>
        </div>

        {/* Video carousel */}
        {tecnicaVideos[tecnica.id] && (
          <VideoCarrossel videos={tecnicaVideos[tecnica.id]} />
        )}

        {/* Navigation between techniques */}
        <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {prev ? (
            <Link
              to={`/tecnicas/${prev.id}`}
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
              to={`/tecnicas/${next.id}`}
              className="flex-1 flex items-center justify-end gap-2 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="min-w-0 text-right">
                <p className="text-xs text-zinc-400">Próxima</p>
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
