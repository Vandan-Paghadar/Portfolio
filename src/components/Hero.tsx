import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="hero-enter text-[11px] uppercase tracking-[0.28em] text-neutral-500">
          {site.statusLine}
        </p>

        <h1 className="mt-6 font-serif leading-[0.88] tracking-[-0.04em] text-black">
          <span className="hero-enter hero-delay-1 block text-[18vw] sm:text-[14vw] lg:text-[9.5rem]">
            {site.firstName.toUpperCase()}
          </span>
          <span className="hero-enter hero-delay-2 block text-[18vw] sm:text-[14vw] lg:text-[9.5rem]">
            {site.lastName.toUpperCase()}
          </span>
        </h1>

        <div className="hero-enter hero-delay-3 mt-10 max-w-xl">
          <p className="text-lg text-neutral-800 sm:text-xl">{site.roleLine}</p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {site.tagline}
          </p>
        </div>

        <div className="hero-enter hero-delay-4 mt-10 flex flex-wrap gap-3">
          <a
            href="#journey"
            className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm text-white transition-transform hover:scale-[1.02]"
          >
            Explore my journey
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-black/15 px-5 py-3 text-sm text-black transition-colors hover:border-black/40"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
