import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, ChevronRight } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const ataques = [
  {
    id: "shomen",
    nome: "Shomen Uchi",
    japones: "正面打ち",
    descricao:
      "Golpe vertical descendente à cabeça, como um corte de espada. É o ataque base de muitas técnicas de Aikido.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/b171b3056_generated_image.png",
    tipo: "Ataque",
    cor: "bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50",
    badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
  },
  {
    id: "yokomen",
    nome: "Yokomen Uchi",
    japones: "横面打ち",
    descricao:
      "Golpe diagonal ao lado da cabeça ou pescoço. Treina a entrada e o desvio lateral do corpo.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/555072a8b_generated_image.png",
    tipo: "Ataque",
    cor: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900/50",
    badge:
      "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
  },
  {
    id: "tsuki",
    nome: "Tsuki",
    japones: "突き",
    descricao:
      "Soco ou empurrão direto ao tronco ou rosto. Ensina a defender ataques lineares com desvio do corpo.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/114c48f3d_generated_image.png",
    tipo: "Ataque",
    cor: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900/50",
    badge:
      "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
  },
  {
    id: "katateDori",
    nome: "Katate Dori",
    japones: "片手取り",
    descricao:
      "Agarrar um pulso com uma mão. É o agarre mais comum no Aikido e ponto de partida para dezenas de técnicas.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/62c3d7edf_generated_image.png",
    tipo: "Agarre",
    cor: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/50",
    badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  },
  {
    id: "maeMukemi",
    nome: "Mae Ukemi",
    japones: "前受身",
    descricao:
      "Rolamento para a frente. É a primeira queda aprendida — protege em projeções frontais e é essencial para treinar com segurança.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/995a24d5c_generated_image.png",
    tipo: "Queda",
    cor: "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900/50",
    badge: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
  },
  {
    id: "ushiroUkemi",
    nome: "Ushiro Ukemi",
    japones: "後ろ受身",
    descricao:
      "Queda para trás com rolamento. Protege a coluna e a cabeça em projeções para trás. Base do treino de ukemi.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/5318e4070_generated_image.png",
    tipo: "Queda",
    cor: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50",
    badge:
      "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
  },
  {
    id: "yokoUkemi",
    nome: "Yoko Ukemi",
    japones: "横受身",
    descricao:
      "Queda lateral plana. Usada em técnicas de imobilização ou quando o rolamento não é possível. Bate com o braço para absorver o impacto.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/624d766ef_generated_image.png",
    tipo: "Queda",
    cor: "bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/50",
    badge:
      "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  },
];

const stats = [
  { valor: "~160", label: "países" },
  { valor: "1.5M+", label: "praticantes" },
  { valor: "1942", label: "fundado" },
  { valor: "∞", label: "variantes" },
];

export default function Iniciantes() {
  const { dark, toggle } = useTheme();
  const [filtro, setFiltro] = useState("Todos");

  const tipos = ["Todos", "Ataque", "Agarre", "Queda"];
  const filtrados =
    filtro === "Todos" ? ataques : ataques.filter((a) => a.tipo === filtro);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pb-16">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
        >
          <ArrowLeft size={18} className="text-zinc-700 dark:text-zinc-300" />
        </Link>
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

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:to-zinc-900 px-6 pt-10 pb-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #10b981 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-lg mx-auto">
          <span
            className="text-6xl font-thin text-white/20 select-none"
            style={{ fontFamily: "serif" }}
          >
            合気道
          </span>
          <h1 className="text-2xl font-bold text-white mt-1 mb-2">
            O que é o Aikido?
          </h1>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Aikido (合気道) é uma arte marcial japonesa criada por{" "}
            <strong className="text-white">Morihei Ueshiba</strong> no século
            XX. Em vez de usar força contra força, o Aikido redireciona a
            energia do atacante — aproveitando o movimento dele para o
            desequilibrar. É uma arte de <em>harmonia</em>, não de destruição.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center bg-white/5 rounded-xl py-3 px-1"
              >
                <p className="text-white font-bold text-base leading-none">
                  {s.valor}
                </p>
                <p className="text-zinc-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Significado */}
      <div className="px-5 py-6 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-4">
          O significado do nome
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { kanji: "合", romaji: "Ai", sig: "Harmonia / União" },
            { kanji: "気", romaji: "Ki", sig: "Energia vital" },
            { kanji: "道", romaji: "Do", sig: "Caminho / Via" },
          ].map(({ kanji, romaji, sig }) => (
            <div
              key={kanji}
              className="text-center p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <div
                className="text-4xl font-thin text-zinc-800 dark:text-zinc-200 mb-1"
                style={{ fontFamily: "serif" }}
              >
                {kanji}
              </div>
              <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                {romaji}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">{sig}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contagem em japonês */}
      <div className="px-5 pb-6 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-4">
          Contagem — Kazoe kata
        </p>
        <div className="grid grid-cols-5 gap-2">
          {[
            { num: "一", romaji: "Ichi", valor: "1" },
            { num: "二", romaji: "Ni", valor: "2" },
            { num: "三", romaji: "San", valor: "3" },
            { num: "四", romaji: "Shi", valor: "4" },
            { num: "五", romaji: "Go", valor: "5" },
            { num: "六", romaji: "Roku", valor: "6" },
            { num: "七", romaji: "Shichi", valor: "7" },
            { num: "八", romaji: "Hachi", valor: "8" },
            { num: "九", romaji: "Ku", valor: "9" },
            { num: "十", romaji: "Jū", valor: "10" },
          ].map(({ num, romaji, valor }) => (
            <div
              key={valor}
              className="text-center p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <div
                className="text-3xl font-thin text-zinc-800 dark:text-zinc-200 leading-none mb-1"
                style={{ fontFamily: "serif" }}
              >
                {num}
              </div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">
                {romaji}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{valor}</div>
            </div>
          ))}
        </div>

        {/* Sistema depois de 10 */}
        <div className="mt-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-3">
            Como contar depois de 10
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
            A partir de 10, os números formam-se combinando{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              Jū (十)
            </span>{" "}
            com os dígitos anteriores:
          </p>
          <div className="space-y-1.5">
            {[
              { ex: "Jū-ichi", kanji: "十一", val: "11", regra: "10 + 1" },
              { ex: "Jū-ni", kanji: "十二", val: "12", regra: "10 + 2" },
              { ex: "Ni-jū", kanji: "二十", val: "20", regra: "2 × 10" },
              {
                ex: "Ni-jū-ichi",
                kanji: "二十一",
                val: "21",
                regra: "2×10 + 1",
              },
              { ex: "San-jū", kanji: "三十", val: "30", regra: "3 × 10" },
              { ex: "Hyaku", kanji: "百", val: "100", regra: "novo termo" },
            ].map(({ ex, kanji, val, regra }) => (
              <div
                key={val}
                className="flex items-center justify-between gap-2 py-1.5 px-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm w-24">
                  {ex}
                </span>
                <span
                  className="text-zinc-400 text-sm font-light"
                  style={{ fontFamily: "serif" }}
                >
                  {kanji}
                </span>
                <span className="text-xs text-zinc-400 w-12 text-center">
                  {val}
                </span>
                <span className="text-xs text-zinc-400 italic">{regra}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ataques e quedas */}
      <div className="px-5 pb-6 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-4">
          Ataques & Quedas básicas
        </p>

        {/* Filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {tipos.map((t) => (
            <button
              key={t}
              onClick={() => setFiltro(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                filtro === t
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtrados.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border overflow-hidden ${item.cor}`}
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {item.nome}
                  </span>
                  <span
                    className="text-zinc-400 dark:text-zinc-600 text-sm font-light"
                    style={{ fontFamily: "serif" }}
                  >
                    {item.japones}
                  </span>
                </div>
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium mb-2 ${item.badge}`}
                >
                  {item.tipo}
                </span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 max-w-lg mx-auto">
        <Link
          to="/tecnicas"
          className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
        >
          <div>
            <p className="font-bold text-sm">Pronto para aprender técnicas?</p>
            <p className="text-xs opacity-60 mt-0.5">
              Ver todas as técnicas do Aikido
            </p>
          </div>
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}
