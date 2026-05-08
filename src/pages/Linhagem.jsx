import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const linhagem = [
  {
    nome: "Sokaku Takeda",
    anos: "1859 – 1943",
    titulo: "Mestre de Daitō-ryū Aiki-jūjutsu",
    papel: "Predecessor",
    descricao:
      "Grande mestre do Daitō-ryū Aiki-jūjutsu — a arte que mais influenciou Ueshiba. Takeda foi o professor direto de Morihei entre 1911 e 1919, transmitindo-lhe os segredos do aiki.",
    imagem: null,
    cor: "border-zinc-200 dark:border-zinc-700",
    badge: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
    dot: "bg-zinc-400",
  },
  {
    nome: "Morihei Ueshiba",
    anos: "1883 – 1969",
    titulo: "O'Sensei — Fundador do Aikido",
    papel: "Fundador",
    descricao:
      "Criou o Aikido ao sintetizar décadas de treino em diversas artes marciais com uma visão espiritual profunda. Após uma experiência mística em 1925, desenvolveu o Aikido como arte de paz e harmonia universal.",
    imagem:
      "https://media.base44.com/images/public/69b471f424b585c11577b1b3/6ff7af9a7_generated_image.png",
    cor: "border-amber-300 dark:border-amber-600",
    badge:
      "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    destaque: true,
  },
  {
    nome: "Kisshomaru Ueshiba",
    anos: "1921 – 1999",
    titulo: "2º Doshu — Filho do Fundador",
    papel: "2º Doshu",
    descricao:
      "Filho de Morihei, tornou-se o segundo Doshu (líder do Aikido mundial) e foi responsável por sistematizar e difundir o Aikido internacionalmente. Fundou a Aikikai Foundation em Tóquio.",
    imagem: null,
    cor: "border-indigo-200 dark:border-indigo-700",
    badge:
      "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
  {
    nome: "Moriteru Ueshiba",
    anos: "1951 –",
    titulo: "3º Doshu — Neto do Fundador",
    papel: "3º Doshu",
    descricao:
      "Neto de Morihei e atual Doshu da Aikikai. Lidera a organização mundial do Aikido a partir do Hombu Dojo em Tóquio, continuando a missão de preservar e expandir a arte do fundador.",
    imagem: null,
    cor: "border-teal-200 dark:border-teal-700",
    badge: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
    dot: "bg-teal-500",
  },
  {
    nome: "Luís Antunes",
    anos: "",
    titulo: "7º Dan Aikikai",
    papel: "7º Dan",
    descricao:
      "Mestre de referência do Aikido em Portugal, portador de 7º Dan Aikikai. A sua prática e ensino contribuem para a difusão e aprofundamento do Aikido no contexto nacional e internacional.",
    imagem: null,
    cor: "border-blue-200 dark:border-blue-700",
    badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  {
    nome: "Francisco Carvalho",
    anos: "",
    titulo: "6º Dan Aikikai",
    papel: "6º Dan",
    descricao:
      "Mestre com 6º Dan Aikikai, dedicado ao ensino e desenvolvimento do Aikido em Portugal. A sua experiência e dedicação são pilares fundamentais na transmissão desta arte marcial.",
    imagem: null,
    cor: "border-cyan-200 dark:border-cyan-700",
    badge: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-500",
  },
];

const discipulos = [
  {
    nome: "Gozo Shioda",
    anos: "1915 – 1994",
    estilo: "Yoshinkan",
    descricao:
      "Fundou o Yoshinkan Aikido, conhecido pelo estilo dinâmico e marcial. Treinou a polícia metropolitana de Tóquio.",
    badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
  },
  {
    nome: "Kenji Tomiki",
    anos: "1900 – 1979",
    estilo: "Tomiki / Shodokan",
    descricao:
      "Criou o Tomiki Aikido com sistema de competição. Foi também mestre de Judo com 8º Dan.",
    badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  },
  {
    nome: "Koichi Tohei",
    anos: "1920 – 2011",
    estilo: "Ki Society",
    descricao:
      "Principal responsável pela difusão do Aikido no Ocidente, especialmente nos EUA. Fundou a Ki Society com foco no desenvolvimento do Ki.",
    badge:
      "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  },
  {
    nome: "Mitsugi Saotome",
    anos: "1937 –",
    estilo: "ASU",
    descricao:
      "Discípulo direto de O'Sensei. Fundou a Aikido Schools of Ueshiba nos EUA. Preservou muitos dos ensinamentos mais profundos do fundador.",
    badge:
      "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  },
  {
    nome: "Morihiro Saito",
    anos: "1928 – 2002",
    estilo: "Iwama Ryu",
    descricao:
      "Treinou por 23 anos no dojo de Iwama com O'Sensei. Preservou e documentou o Aikido de armas (bokken e jo) com enorme detalhe.",
    badge:
      "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
  },
  {
    nome: "Nobuyoshi Tamura",
    anos: "1933 – 2010",
    estilo: "Europa",
    descricao:
      "Foi o principal responsável pelo desenvolvimento do Aikido na Europa, especialmente em França. Discípulo direto de O'Sensei.",
    badge: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
  },
];

export default function Linhagem() {
  const { dark, toggle } = useTheme();

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
            backgroundImage: `radial-gradient(circle at 70% 40%, #6366f1 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-lg mx-auto text-center">
          <div
            className="text-6xl font-thin text-white/20 mb-2 select-none"
            style={{ fontFamily: "serif" }}
          >
            系譜
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Linhagem do Aikido
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Do Daitō-ryū até ao Aikido moderno — os mestres que moldaram esta
            arte ao longo de gerações.
          </p>
        </div>
      </div>

      {/* Linha principal */}
      <div className="px-5 py-6 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-5">
          Linha principal — Doshu
        </p>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-zinc-100 dark:bg-zinc-800" />
          <div className="space-y-2">
            {linhagem.map((pessoa, i) => (
              <div key={i} className="relative flex gap-4">
                <div className="flex-shrink-0 z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2
                    ${pessoa.destaque ? "border-amber-400 ring-2 ring-amber-300/50 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950" : "border-zinc-200 dark:border-zinc-700"}
                    bg-zinc-100 dark:bg-zinc-800`}
                  >
                    {pessoa.imagem ? (
                      <img
                        src={pessoa.imagem}
                        alt={pessoa.nome}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-zinc-500 dark:text-zinc-400 text-lg font-light"
                        style={{ fontFamily: "serif" }}
                      >
                        {pessoa.nome.split(" ").pop()[0]}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className={`flex-1 mb-5 p-4 rounded-2xl border ${pessoa.cor} ${pessoa.destaque ? "bg-amber-50/30 dark:bg-amber-950/10" : "bg-white dark:bg-zinc-900"}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-semibold ${pessoa.badge}`}
                    >
                      {pessoa.papel}
                    </span>
                    <span className="text-xs text-zinc-400">{pessoa.anos}</span>
                  </div>
                  <h3
                    className={`font-bold text-base ${pessoa.destaque ? "text-amber-800 dark:text-amber-300" : "text-zinc-900 dark:text-zinc-100"}`}
                  >
                    {pessoa.nome}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-2">{pessoa.titulo}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pessoa.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discípulos notáveis */}
      <div className="px-5 pb-6 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-4">
          Discípulos notáveis de O'Sensei
        </p>
        <div className="space-y-3">
          {discipulos.map((d, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                  {d.nome}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium flex-shrink-0 ${d.badge}`}
                >
                  {d.estilo}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-2">{d.anos}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {d.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
