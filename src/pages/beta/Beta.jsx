import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  Camera,
  BookOpen,
  Flag,
  Signal,
  MessageCircle,
  User,
  HelpCircle,
  CalendarDays,
  Instagram,
  Youtube,
  Mail,
  Dumbbell,
} from "lucide-react";
import { useTheme } from "../../components/ThemeContext";

const betaCards = [
  {
    to: "/treino",
    icon: Dumbbell,
    title: "Plano de treino",
    description: "O que treinar hoje com checklist pessoal.",
    accent: "from-sky-500 to-indigo-600",
  },
  {
    to: "/desafios",
    icon: Flag,
    title: "Desafios",
    description: "Metas e desafios para manter o foco na prática.",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    to: "/progresso",
    icon: Signal,
    title: "Progresso",
    description: "Vê percentuais, categorias e streaks de estudo.",
    accent: "from-emerald-500 to-lime-600",
  },
  {
    to: "/recursos",
    icon: BookOpen,
    title: "Recursos",
    description: "Dicas, vídeos e material para praticar fora do dojo.",
    accent: "from-cyan-500 to-sky-600",
  },
  {
    to: "/perfil",
    icon: User,
    title: "Perfil",
    description: "Objetivos, faixa atual e pontos da comunidade.",
    accent: "from-amber-500 to-orange-600",
  },
  {
    to: "/feedback",
    icon: MessageCircle,
    title: "Sugestões",
    description: "Diz-nos o que o clube precisa ou o tema que queres.",
    accent: "from-rose-500 to-pink-600",
  },
  {
    to: "/quiz",
    icon: HelpCircle,
    title: "Quiz",
    description: "Testa o teu vocabulário e cultura de Aikido.",
    accent: "from-lime-500 to-emerald-600",
  },
  {
    to: "/exames",
    icon: Camera,
    title: "Exames",
    description: "Notícias e fotos dos exames do clube.",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    to: "/eventos",
    icon: CalendarDays,
    title: "Eventos",
    description: "Treinos, workshops e encontros do clube.",
    accent: "from-slate-500 to-slate-700",
  },
];

const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/aikido_clube",
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/aikidoclube",
  },
  {
    id: "mail",
    label: "Contacto",
    icon: Mail,
    url: "mailto:contacto@aikidoclube.com",
  },
];

export default function Beta() {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-200"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                BETA
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Novas funcionalidades
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <Sparkles
              size={18}
              className={dark ? "text-amber-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5 text-sm text-zinc-600 dark:text-zinc-400">
          Estas funcionalidades estão em fase BETA. Já podes explorar plano de
          treino, desafios, progresso pessoal, recursos, perfil, quizzes e a
          galeria de exames.
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {betaCards.map(({ to, icon: Icon, title, description, accent }) => (
            <Link
              key={to}
              to={to}
              className="group block rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-3xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 font-semibold">
            Redes sociais
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {socialLinks.map(({ id, label, icon: Icon, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-4 flex flex-col items-center gap-2 text-center transition-all hover:border-zinc-200 dark:hover:border-zinc-700"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
