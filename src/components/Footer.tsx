import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-black/8 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{site.name}</p>
        <p>Learning, experimenting, building.</p>
      </div>
    </footer>
  );
}
