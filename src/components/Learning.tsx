import { learning } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Learning() {
  return (
    <section id="learning" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            03 — Currently learning
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight text-black sm:text-5xl">
            What I’m spending time on
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
            These are areas I’m learning and exploring — not certifications or
            a finished skill list.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {learning.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <article>
                <h3 className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-serif text-2xl tracking-tight text-black sm:text-3xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
