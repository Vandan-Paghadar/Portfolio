import { about } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            01 — About
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-black sm:text-5xl">
            About me
          </h2>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 80}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
