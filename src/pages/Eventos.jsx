import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Clock3 } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { eventos } from "../components/betaData";

export default function Eventos() {
  const { dark, toggle } = useTheme();

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
                Eventos
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Agenda do clube
              </h1>
            </div>
          </div>
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
          >
            <CalendarDays
              size={18}
              className={dark ? "text-violet-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-4">
        {eventos.map((event) => (
          <article
            key={event.id}
            className="rounded-3xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {event.title}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <CalendarDays size={16} className="text-emerald-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Clock3 size={16} className="text-sky-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin size={16} className="text-violet-500" />
                <span>{event.location}</span>
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-950/60 p-5 text-sm text-zinc-500 dark:text-zinc-400">
          Os eventos são uma forma prática de acompanhar o calendário do dojo.
          Em breve podemos adicionar inscrições e convidados.
        </div>
      </div>
    </div>
  );
}
