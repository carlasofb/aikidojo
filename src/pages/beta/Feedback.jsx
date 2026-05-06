import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import { feedbackTopics } from "../../components/betaData";

export default function Feedback() {
  const { dark, toggle } = useTheme();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/beta"
              className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-200"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                Sugestões
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Feedback do clube
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <MessageCircle
              size={18}
              className={dark ? "text-rose-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-5">
        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Conta-nos o que achas
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Usa este espaço para sugerir temas de treino, horários ou melhorias
            no clube.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950 p-5 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {feedbackTopics.map((topic) => (
              <div
                key={topic.id}
                className="rounded-3xl bg-zinc-50 dark:bg-zinc-900 p-4"
              >
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {topic.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreve a tua ideia ou pedido aqui..."
            className="w-full min-h-[140px] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          />

          <button
            type="button"
            onClick={() => {
              setSent(true);
              setMessage("");
            }}
            className="inline-flex items-center gap-2 rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 transition-all"
          >
            <Send size={16} />
            Enviar feedback
          </button>

          {sent && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Obrigado! O teu feedback foi registado localmente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
