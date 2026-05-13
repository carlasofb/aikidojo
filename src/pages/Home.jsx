import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../components/ThemeContext";
import {
  Sun,
  Moon,
  BookOpen,
  Brain,
  BookMarked,
  ChevronRight,
  TestTube,
  GraduationCap,
  Users,
} from "lucide-react";
import { tecnicas, conceitos } from "../components/aikidoData";

const frasesSensei = [
  "O Aikido não é uma técnica para derrubar o inimigo pela força — é o caminho da paz para a humanidade.",
  "Para praticar Aikido corretamente, deve aceitar o mundo como ele é e construir a partir disso.",
  "A vitória sobre si mesmo é o verdadeiro budo. Budo significa amar e nutrir todos os seres, não lutar uns com os outros.",
  "O espírito do Aikido é o grande amor pelo universo — amor que tudo sustenta.",
  "Treine arduamente com a espada e o bastão do bokken dia após dia. Assim te tornarás o mestre do espírito.",
  "No Aikido nunca atacamos. Um ataque é prova de que alguém perdeu o controlo.",
  "O Aikido é medicina para um mundo doente.",
  "Cria cada dia um ser humano novo. Não pares de criar a ti mesmo.",
  "A vida em si é sempre um professor, se vivermos com os olhos abertos.",
  "A chave para o budo é honestidade. Com honestidade no coração, torna-te um com o céu e a terra.",
  "O caminho do guerreiro é o caminho do amor divino.",
  "O Aikido não tem adversários. Ele absorve e harmoniza com tudo.",
  "Quando atacado, passa à ação antes mesmo que o adversário pense em atacar.",
  "Pratica o caminho com o corpo e a mente juntos — assim encontrarás a essência.",
];

const fundos = [
  // 4 gradientes
  {
    type: "gradient",
    style: {
      background:
        "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    },
  },
  {
    type: "gradient",
    style: {
      background:
        "linear-gradient(135deg, #0d1b2a 0%, #1b4332 50%, #081c15 100%)",
    },
  },
  {
    type: "gradient",
    style: { background: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)" },
  },
  {
    type: "gradient",
    style: {
      background:
        "linear-gradient(135deg, #1a0533 0%, #6b2fa0 50%, #c0392b 100%)",
    },
  },
  // 4 imagens Enso geradas
  {
    type: "image",
    url: "https://media.base44.com/images/public/69b471f424b585c11577b1b3/434520a68_generated_image.png",
  }, // cerejeira
  {
    type: "image",
    url: "https://media.base44.com/images/public/69b471f424b585c11577b1b3/5df5bbb3e_generated_image.png",
  }, // torii
  {
    type: "image",
    url: "https://media.base44.com/images/public/69b471f424b585c11577b1b3/4b8c00cb8_generated_image.png",
  }, // aikidokas
  {
    type: "image",
    url: "https://media.base44.com/images/public/69b471f424b585c11577b1b3/3a8a28242_generated_image.png",
  }, // fuji
];

export default function Home() {
  const { dark, toggle } = useTheme();
  const [frase] = useState(
    () => frasesSensei[Math.floor(Math.random() * frasesSensei.length)],
  );
  const [fundo] = useState(
    () => fundos[Math.floor(Math.random() * fundos.length)],
  );

  const sections = [
    {
      to: "/iniciantes",
      icon: GraduationCap,
      label: "Guia de Iniciantes",
      desc: "Ataques, quedas e significado do Aikido",
      accent: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-100 dark:border-emerald-900/50",
    },
    {
      to: "/tecnicas",
      icon: BookOpen,
      label: "Técnicas",
      desc: "Projeções e imobilizações",
      count: tecnicas.length,
      accent: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50 dark:bg-blue-950/40",
      border: "border-blue-100 dark:border-blue-900/50",
    },
    // juntar estes 3 horizontalmente
    {
      to: "/conceitos",
      icon: Brain,
      label: "Conceitos",
      desc: "Princípios e filosofia",
      count: conceitos.length,
      accent: "from-purple-500 to-violet-600",
      bg: "bg-purple-50 dark:bg-purple-950/40",
      border: "border-purple-100 dark:border-purple-900/50",
    },
    {
      to: "/glossario",
      icon: BookMarked,
      label: "Glossário",
      desc: "Termos japoneses",
      count: "35+",
      accent: "from-teal-500 to-emerald-600",
      bg: "bg-teal-50 dark:bg-teal-950/40",
      border: "border-teal-100 dark:border-teal-900/50",
    },
    {
      to: "/linhagem",
      icon: Users,
      label: "Linhagem",
      desc: "Mestres e discípulos notáveis",
      accent: "from-violet-500 to-indigo-600",
      bg: "bg-violet-50 dark:bg-violet-950/40",
      border: "border-violet-100 dark:border-violet-900/50",
    },
    {
      to: "/beta",
      icon: TestTube,
      label: "BETA",
      desc: "Mais recursos, eventos do clube, perfil (funcionalidades não completas)",
      count: "Novo",
      accent: "from-emerald-500 to-lime-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-100 dark:border-emerald-900/50",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <div className="relative overflow-hidden">
        {fundo.type === "image" ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${fundo.url})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </>
        ) : (
          <div className="absolute inset-0" style={fundo.style} />
        )}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 40%)`,
          }}
        />

        <div className="relative px-6 pt-16 pb-14">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
          >
            {dark ? (
              <Sun size={18} className="text-amber-300" />
            ) : (
              <Moon size={18} className="text-white/80" />
            )}
          </button>

          {/* Japanese character decoration */}
          <div className="flex flex-col items-center text-center">
            <div
              className="text-7xl font-thin text-white/20 mb-1 select-none"
              style={{ fontFamily: "serif" }}
            >
              合気道
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
              Aikido
            </h1>
            <p className="text-zinc-400 text-sm font-light tracking-widest uppercase">
              O Caminho da Harmonia
            </p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 py-8 border-b border-zinc-100 dark:border-zinc-800/60">
        <blockquote className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm italic leading-relaxed">
            "{frase}"
          </p>
          <footer className="mt-2 text-xs text-zinc-400 dark:text-zinc-600 tracking-wider uppercase">
            — Morihei Ueshiba, O'Sensei
          </footer>
        </blockquote>
      </div>

      {/* Navigation sections */}
      <div className="px-5 py-7 space-y-4 max-w-xl mx-auto">
        {/*  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase px-1 mb-5">
          Explorar
        </p> */}
        {sections.map(
          ({ to, icon: Icon, label, desc, count, accent, bg, border }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-4 p-4 rounded-2xl border ${bg} ${border} transition-all active:scale-98 group`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0 shadow-sm`}
              >
                <Icon size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                    {label}
                  </span>
                  {/* <span className="text-xs text-zinc-400 dark:text-zinc-600 font-medium">
                    {count}
                  </span> */}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">
                  {desc}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="text-zinc-300 dark:text-zinc-700 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          ),
        )}
      </div>

      {/* Founder info */}
      <div className="mx-5 mb-8 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 max-w-xl mx-auto">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-3">
          O Fundador
        </p>
        <div className="flex items-start gap-3">
          {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex-shrink-0 flex items-center justify-center">
            <span
              className="text-white text-sm font-light"
              style={{ fontFamily: "serif" }}
            >
              植
            </span>
          </div> */}
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Morihei Ueshiba (1883–1969)
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1 leading-relaxed">
              Mestre de artes marciais japonês que sintetizou décadas de treino
              em Jujutsu, Kenjutsu e Spear fighting para criar o Aikido — uma
              arte que enfatiza harmonia, ética e paz.
              <br />
              <Link
                to="/fundador"
                className="font-semibold text-zinc-900 dark:text-zinc-100 underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Ler mais →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
