import { journey } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Journey() {
  return (
    <section id="journey" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            02 — Journey
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-black sm:text-5xl">
            Started curious. Still building.
          </h2>
        </Reveal>

        <ol className="relative mt-16 border-l border-black/10 pl-6 sm:pl-10">
          {journey.map((item, index) => (
            <li key={`${item.label}-${item.title}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-black bg-[#f6f5f2] sm:-left-[calc(2.5rem+5px)]" />
              <Reveal delay={Math.min(index * 40, 200)}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  {item.label}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-black sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
