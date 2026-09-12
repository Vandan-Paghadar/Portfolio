import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            05 — Projects
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-black sm:text-5xl">
            Projects
          </h2>
          <p className="mt-5 max-w-xl text-lg text-neutral-600">
            More things are being built.
          </p>
        </Reveal>

        {projects.length === 0 ? (
          <Reveal>
            <div className="mt-12 rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                Projects coming soon.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
                Add entries to{" "}
                <code className="text-neutral-800">src/data/site.ts</code> — they
                will render with the reusable{" "}
                <code className="text-neutral-800">ProjectCard</code>.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
