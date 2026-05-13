import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function MediaCarrossel({ imagens = [], videos = [] }) {
  const items = [
    ...imagens.map((img) => ({ type: "image", ...img })),
    ...videos.map((vid) => ({ type: "video", ...vid })),
  ];

  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  if (items.length === 0) return null;

  const prev = () => setCurrent((i) => (i - 1 + items.length) % items.length);
  const next = () => setCurrent((i) => (i + 1) % items.length);

  const item = items[current];

  return (
    <div className="mb-6">
      {/* Slide */}
      <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
        {item.type === "image" ? (
          <div>
            <img
              src={item.url}
              alt={item.legenda}
              className="w-full object-cover cursor-zoom-in"
              style={{ aspectRatio: "16/9" }}
              onClick={() => setLightbox(item)}
            />
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-500 py-2 px-3">
              {item.legenda}
            </p>
          </div>
        ) : (
          <div>
            <div style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-500 py-2 px-3">
              {item.titulo}
            </p>
          </div>
        )}

        {/* Nav arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </>
        )}
      </div>

      {/* Dots with type indicator */}
      {items.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex items-center justify-center rounded-full transition-all ${
                i === current
                  ? "w-6 h-2.5 bg-blue-900 dark:bg-blue-200"
                  : "w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} className="text-white" />
          </button>
          <img
            src={lightbox.url}
            alt={lightbox.legenda}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox.legenda && (
            <p className="absolute bottom-6 text-center text-sm text-white/70 px-4">
              {lightbox.legenda}
            </p>
          )}
        </div>
      )}

      {/* Counter + type label */}
      <p className="text-center text-xs text-zinc-400 dark:text-zinc-600 mt-1.5">
        {current + 1} / {items.length} ·{" "}
        {item.type === "image" ? "Imagem" : "Vídeo"}
      </p>
    </div>
  );
}
