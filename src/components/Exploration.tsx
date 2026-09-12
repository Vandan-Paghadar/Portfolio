import { Reveal } from "@/components/Reveal";
import { exploring } from "@/data/site";

export function Exploration() {
  return (
    <section id="exploring" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            06 — Exploring
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-black sm:text-5xl">
            What I’m exploring
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
            A map of curiosity — not a résumé of completed skills.
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-black/8 border-y border-black/8">
          {exploring.map((item, index) => (
            <li key={item}>
              <Reveal delay={index * 40}>
                <div className="group flex items-baseline justify-between gap-6 py-5 sm:py-6">
                  <span className="font-serif text-2xl tracking-tight text-black transition-transform group-hover:translate-x-1 sm:text-3xl">
                    {item}
                  </span>
                  <span className="hidden text-[11px] uppercase tracking-[0.2em] text-neutral-400 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
