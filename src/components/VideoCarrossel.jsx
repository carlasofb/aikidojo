import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function VideoCarrossel({ videos }) {
  const [idx, setIdx] = useState(0);

  if (!videos || videos.length === 0) return null;

  const video = videos[idx];
  const prev = () => setIdx((i) => (i - 1 + videos.length) % videos.length);
  const next = () => setIdx((i) => (i + 1) % videos.length);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Play size={16} className="text-red-500" />
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
          Vídeos
        </h2>
        <span className="text-xs text-zinc-400">
          {idx + 1}/{videos.length}
        </span>
      </div>

      <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-black">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            key={video.youtubeId}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {video.titulo && (
        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2 px-1">
          {video.titulo}
        </p>
      )}

      {videos.length > 1 && (
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <ChevronLeft
              size={18}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </button>
          <div className="flex gap-1.5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-zinc-800 dark:bg-zinc-200 w-4" : "bg-zinc-300 dark:bg-zinc-600"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <ChevronRight
              size={18}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </button>
        </div>
      )}
    </div>
  );
}
