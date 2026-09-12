"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-black/8 bg-[#f6f5f2]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="text-sm tracking-tight text-black">
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] text-neutral-600 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-black transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-5 bg-black transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-px w-5 bg-black transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-16 bg-[#f6f5f2] md:hidden">
          <ul className="flex flex-col gap-2 px-8 py-10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-3xl tracking-tight text-black"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
