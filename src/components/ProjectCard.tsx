type ProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  status: "in-progress" | "learning" | "experiment" | "paused";
};

const statusLabel = {
  "in-progress": "In progress",
  learning: "Learning project",
  experiment: "Experiment",
  paused: "Paused",
} as const;

export function ProjectCard({
  name,
  description,
  technologies,
  github,
  demo,
  media,
  status,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-white">
      {media ? (
        <div className="aspect-video overflow-hidden bg-neutral-100">
          {media.type === "video" ? (
            <video
              src={media.src}
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media.src}
              alt={media.alt ?? name}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          {statusLabel[status]}
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight text-black">
          {name}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {description}
        </p>
        {technologies.length > 0 ? (
          <p className="mt-4 text-sm text-neutral-500">
            {technologies.join(" · ")}
          </p>
        ) : null}
        <div className="mt-auto flex gap-4 pt-6 text-sm">
          {github ? (
            <a
              href={github}
              className="text-black underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {demo ? (
            <a
              href={demo}
              className="text-black underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
