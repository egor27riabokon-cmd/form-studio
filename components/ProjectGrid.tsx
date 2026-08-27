"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import Reveal from "@/components/Reveal";

const CATEGORIES = ["All", "Residential", "Cultural", "Hospitality", "Interiors"] as const;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <div>
      <div className="mb-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-line pb-6">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`font-mono text-xs uppercase tracking-[0.1em] transition-colors ${
              active === c ? "text-ink" : "text-muted hover:text-ink"
            }`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs uppercase tracking-[0.1em] text-muted">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 80}>
            <Link href={`/projects/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                {p.heroImage ? (
                  <Image
                    src={p.heroImage}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d6c9bb] to-[#6e5738]" />
                )}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{p.name}</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                {p.category} &middot; {p.location}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
