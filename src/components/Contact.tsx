import { socials } from "@/data/site";

const links = [socials.github, socials.linkedin, socials.email];

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
          07 — Contact
        </p>
        <h2 className="mt-4 font-serif text-5xl tracking-tight text-black sm:text-6xl">
          Let’s connect.
        </h2>
        {/*<p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-600">
          Links live in{" "}
          <code className="text-neutral-800">src/data/site.ts</code>. Add your
          GitHub, LinkedIn, and email there when you’re ready.
        </p>*/}

        <ul className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10">
          {links.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  className="font-serif text-2xl tracking-tight text-black underline-offset-4 transition-opacity hover:opacity-60"
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  {link.label}
                </a>
              ) : (
                <span className="font-serif text-2xl tracking-tight text-neutral-400">
                  {link.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
