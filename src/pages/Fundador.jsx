import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const eventos = [
  {
    ano: 1883,
    titulo: "Nascimento",
    local: "Tanabe, Wakayama",
    descricao:
      "Morihei Ueshiba nasce a 14 de dezembro em Tanabe, no Japão. Filho único do samurai Yoroku Ueshiba, cresce numa família budista.",
    icon: "🌸",
    tipo: "vida",
  },
  {
    ano: 1898,
    titulo: "Primeiros Treinos",
    local: "Tanabe",
    descricao:
      "Com 15 anos começa a estudar Jujutsu Tenshin Shinyū-ryū e esgrima Yagyu Shingan-ryū, mostrando desde cedo uma aptidão extraordinária.",
    icon: "⚔️",
    tipo: "arte",
  },
  {
    ano: 1903,
    titulo: "Serviço Militar",
    local: "Osaka",
    descricao:
      "Alista-se no exército japonês e serve na Guerra Russo-Japonesa. Destaca-se pela força física e combate corpo a corpo excecionais.",
    icon: "🎖️",
    tipo: "vida",
  },
  {
    ano: 1911,
    titulo: "Encontro com Takeda",
    local: "Hokkaido",
    descricao:
      "Encontra Sokaku Takeda, mestre de Daitō-ryū Aiki-jūjutsu. Este encontro transforma radicalmente a sua visão das artes marciais.",
    icon: "🤝",
    tipo: "arte",
  },
  {
    ano: 1919,
    titulo: "Encontro com Onisaburo",
    local: "Ayabe",
    descricao:
      "Conhece Onisaburo Deguchi, líder espiritual do movimento Omoto-kyo. Este encontro aprofunda a dimensão espiritual da sua prática marcial.",
    icon: "☯️",
    tipo: "espiritual",
  },
  {
    ano: 1925,
    titulo: "A Grande Iluminação",
    local: "Ayabe",
    descricao:
      "Após derrotar um oficial naval sem esforço e banhar-se de luz dourada no jardim — Ueshiba experiencia o satori: 'Percebi que o universo é uno.' O Aikido nasce aqui.",
    icon: "✨",
    tipo: "espiritual",
    destaque: true,
  },
  {
    ano: 1931,
    titulo: "Kobukan Dojo",
    local: "Tóquio",
    descricao:
      "Abre o Kobukan Dojo em Tóquio — o 'Inferno do Treino'. Forma os primeiros grandes mestres: Shioda, Tomiki, Mochizuki.",
    icon: "🏯",
    tipo: "ensino",
  },
  {
    ano: 1942,
    titulo: "O Nome Aikido",
    local: "Japão",
    descricao:
      "A arte é oficialmente batizada de Aikidō — 合気道 — 'O Caminho da Harmonização do Ki'. O nome distingue-a definitivamente de todas as suas influências.",
    icon: "合",
    tipo: "arte",
    destaque: true,
  },
  {
    ano: 1948,
    titulo: "Aikikai Foundation",
    local: "Tóquio",
    descricao:
      "Fundação da Aikikai — organização mundial do Aikido. O filho Kisshomaru assume a direção administrativa, permitindo ao O'Sensei focar no ensino.",
    icon: "🌍",
    tipo: "ensino",
  },
  {
    ano: 1955,
    titulo: "Abertura ao Ocidente",
    local: "Iwama",
    descricao:
      "Início das primeiras demonstrações públicas. O mundo começa a descobrir o Aikido. Discípulos como Koichi Tohei partem para disseminar a arte globalmente.",
    icon: "🌐",
    tipo: "ensino",
  },
  {
    ano: 1964,
    titulo: "Ordem do Sol Nascente",
    local: "Tóquio",
    descricao:
      "O Imperador do Japão condecora Ueshiba com a Ordem do Sol Nascente — a mais alta distinção civil do país — pelo contributo para a cultura japonesa.",
    icon: "🏅",
    tipo: "vida",
  },
  {
    ano: 1969,
    titulo: "Partida do O'Sensei",
    local: "Tóquio",
    descricao:
      "Morihei Ueshiba falece a 26 de abril, aos 86 anos. As suas últimas palavras: 'O Aikido é para todo o mundo.' Deixa um legado que hoje une milhões de praticantes em todo o planeta.",
    icon: "🌿",
    tipo: "vida",
    ultimo: true,
  },
];

const tipoCores = {
  vida: {
    dot: "bg-zinc-500",
    line: "from-zinc-300 to-zinc-200",
    badge: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
  },
  arte: {
    dot: "bg-indigo-500",
    line: "from-indigo-300 to-indigo-200",
    badge:
      "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400",
  },
  espiritual: {
    dot: "bg-amber-500",
    line: "from-amber-300 to-amber-200",
    badge:
      "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400",
  },
  ensino: {
    dot: "bg-teal-500",
    line: "from-teal-300 to-teal-200",
    badge: "bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
  },
};

const tipoLabel = {
  vida: "Vida",
  arte: "Arte Marcial",
  espiritual: "Espiritual",
  ensino: "Ensino",
};

const stats = [
  { valor: "86", label: "Anos de vida" },
  { valor: "60+", label: "Anos de treino" },
  { valor: "1M+", label: "Praticantes hoje" },
  { valor: "140+", label: "Países com Aikido" },
];

export default function Fundador() {
  const { dark } = useTheme();
  const [filtro, setFiltro] = useState("todos");

  const filtrados =
    filtro === "todos" ? eventos : eventos.filter((e) => e.tipo === filtro);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 dark:bg-zinc-800"
        >
          <ArrowLeft size={18} className="text-zinc-700 dark:text-zinc-300" />
        </Link>
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          O Fundador
        </span>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:to-zinc-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #6366f1 0%, transparent 60%),
                            radial-gradient(circle at 80% 30%, #f59e0b 0%, transparent 50%)`,
          }}
        />
        <div className="relative px-6 pt-10 pb-10 max-w-lg mx-auto flex gap-5 items-center">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/20">
              <img
                src="https://media.base44.com/images/public/69b471f424b585c11577b1b3/6ff7af9a7_generated_image.png"
                alt="Morihei Ueshiba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-zinc-400 text-xs tracking-widest uppercase mb-1">
              1883 — 1969
            </p>
            <h1 className="text-2xl font-bold text-white mb-1">
              Morihei Ueshiba
            </h1>
            <p className="text-zinc-400 text-sm">植芝 盛平 · O'Sensei</p>
            <p className="text-zinc-300 text-xs mt-2 leading-relaxed italic">
              "O Aikido é amor."
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="relative px-6 pb-8">
          <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center bg-white/5 rounded-xl py-3 px-1"
              >
                <p className="text-white font-bold text-lg leading-none">
                  {s.valor}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="px-5 pt-6 pb-2 max-w-lg mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            { key: "todos", label: "Todos" },
            { key: "arte", label: "Arte Marcial" },
            { key: "espiritual", label: "Espiritual" },
            { key: "ensino", label: "Ensino" },
            { key: "vida", label: "Vida" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFiltro(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                filtro === key
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 py-4 max-w-lg mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-zinc-100 dark:bg-zinc-800" />

          <div className="space-y-1">
            {filtrados.map((ev, i) => {
              const cores = tipoCores[ev.tipo];
              return (
                <div key={ev.ano} className="relative flex gap-4">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                      ${
                        ev.destaque
                          ? "bg-amber-50 dark:bg-amber-950/50 ring-2 ring-amber-400 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950"
                          : "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                      }`}
                    >
                      {typeof ev.icon === "string" && ev.icon.length > 1 ? (
                        <span className="text-base">{ev.icon}</span>
                      ) : (
                        <span
                          className="text-zinc-600 dark:text-zinc-300 font-bold text-sm"
                          style={{ fontFamily: "serif" }}
                        >
                          {ev.icon}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 mb-6 rounded-2xl border p-4 transition-all
                    ${
                      ev.destaque
                        ? "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50"
                        : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800/60"
                    }`}
                  >
                    {/* Year + badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-2xl font-bold tracking-tight ${ev.destaque ? "text-amber-600 dark:text-amber-400" : "text-zinc-300 dark:text-zinc-700"}`}
                      >
                        {ev.ano}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${cores.badge}`}
                      >
                        {tipoLabel[ev.tipo]}
                      </span>
                    </div>

                    <h3
                      className={`font-bold text-base mb-0.5 ${ev.destaque ? "text-amber-800 dark:text-amber-300" : "text-zinc-900 dark:text-zinc-100"}`}
                    >
                      {ev.titulo}
                    </h3>
                    <p className="text-xs text-zinc-400 mb-2">📍 {ev.local}</p>
                    <p
                      className={`text-sm leading-relaxed ${ev.destaque ? "text-amber-900 dark:text-amber-200" : "text-zinc-600 dark:text-zinc-400"}`}
                    >
                      {ev.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy */}
        <div className="mt-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
          <p className="text-3xl mb-3">植</p>
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-2">
            Legado
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            O Aikido pratica-se hoje em mais de 140 países, com milhões de
            praticantes. A visão de Ueshiba — uma arte que transforma o conflito
            em harmonia — continua a inspirar gerações.
          </p>
        </div>
      </div>
    </div>
  );
}
