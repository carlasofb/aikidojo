import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TecnicaCarrossel({ imagens, nome }) {
  const [atual, setAtual] = useState(0);

  if (!imagens || imagens.length === 0) return null;

  const prev = () => setAtual(i => (i - 1 + imagens.length) % imagens.length);
  const next = () => setAtual(i => (i + 1) % imagens.length);

  return (
    <div className="mb-6">
      <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 aspect-[4/3]">
        <img
          key={atual}
          src={imagens[atual].url}
          alt={`${nome} — ${imagens[atual].legenda}`}
          className="w-full h-full object-cover"
        />

        {/* Legenda */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
          <p className="text-white text-xs font-medium">{imagens[atual].legenda}</p>
        </div>

        {/* Prev button */}
        {imagens.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {imagens.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              className={`rounded-full transition-all ${
                i === atual
                  ? 'w-4 h-1.5 bg-zinc-800 dark:bg-zinc-200'
                  : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-700'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}