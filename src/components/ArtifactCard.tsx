"use client";

import { useCallback, useEffect, useState } from "react";

type ArtifactCardProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function ArtifactCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}: ArtifactCardProps) {
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <article className="flex h-full flex-col rounded-2xl border border-black/8 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-6">
        <h3 className="font-serif text-2xl tracking-tight text-black">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {description}
        </p>

        <div className="mt-6">
          {missing ? (
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-black/20 bg-neutral-50 px-6 text-center">
              <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                Add your certificate image here:
                <br />
                <code className="mt-2 inline-block text-[13px] text-neutral-800">
                  public/certificate/hour-of-code.png
                </code>
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group block w-full overflow-hidden rounded-xl border border-black/8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform hover:scale-[1.01]"
              aria-label="Open certificate preview"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover"
                onError={() => setMissing(true)}
              />
            </button>
          )}
        </div>
      </article>

      {open && !missing ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-sm text-white/80 hover:text-white"
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
