"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="font-display text-2xl tracking-wide" onClick={() => setOpen(false)}>
            FORM
          </Link>
          <div className="hidden items-center gap-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </Link>
            ))}
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-1.5 sm:hidden"
          >
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-bg px-8 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.3,1)] sm:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
