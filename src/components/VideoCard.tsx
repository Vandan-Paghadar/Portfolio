"use client";

import { useRef, useState } from "react";

type VideoCardProps = {
  title: string;
  description: string;
  src: string;
  poster?: string;
};

export function VideoCard({ title, description, src, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [missing, setMissing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [posterMissing, setPosterMissing] = useState(false);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-black/8 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-6">
      <h3 className="font-serif text-2xl tracking-tight text-black">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-black/8 bg-black">
        {missing ? (
          <div className="flex aspect-video items-center justify-center bg-neutral-50 px-6 text-center">
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Add your project video here:
              <br />
              <code className="mt-2 inline-block text-[13px] text-neutral-800">
                public/videos/water-level-indicator.mp4
              </code>
              {poster ? (
                <>
                  <br />
                  Optional poster:
                  <br />
                  <code className="inline-block text-[13px] text-neutral-800">
                    public/videos/water-level-indicator-poster.jpg
                  </code>
                </>
              ) : null}
            </p>
          </div>
        ) : (
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={poster && !posterMissing ? poster : undefined}
              onError={() => setMissing(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={src} type="video/mp4" />
            </video>
            {poster ? (
              // Hidden probe so a missing poster does not break the player.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt=""
                className="hidden"
                onError={() => setPosterMissing(true)}
              />
            ) : null}
            {!playing ? (
              <button
                type="button"
                onClick={play}
                className="absolute inset-x-0 top-0 bottom-12 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
                aria-label="Play video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/40 text-white transition-transform hover:scale-105">
                  <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-white" />
                </span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
