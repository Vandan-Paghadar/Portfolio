import { ArtifactCard } from "@/components/ArtifactCard";
import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";
import { earlyWork } from "@/data/site";

export function EarlyWork() {
  return (
    <section id="early-work" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            04 — Where it started
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-black sm:text-5xl">
            Where it started
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
            Early experiments from when I was still discovering what I liked —
            kept here, honestly, as the beginning.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ArtifactCard
              title={earlyWork.certificate.title}
              subtitle={earlyWork.certificate.subtitle}
              description={earlyWork.certificate.description}
              imageSrc={earlyWork.certificate.imageSrc}
              imageAlt={earlyWork.certificate.imageAlt}
            />
          </Reveal>
          <Reveal delay={80}>
            <VideoCard
              title={earlyWork.video.title}
              description={earlyWork.video.description}
              src={earlyWork.video.src}
              poster={earlyWork.video.poster}
              external={earlyWork.video.external}
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-12 text-center font-serif text-lg italic text-neutral-500 sm:text-xl">
            {earlyWork.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
