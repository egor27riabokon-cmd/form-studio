import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Atmosphere from "@/components/Atmosphere";
import { projects, getProject, getAdjacentProject } from "@/lib/projects";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — FORM`,
      description: project.summary,
      images: project.heroImage ? [withBasePath(project.heroImage)] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getAdjacentProject(slug);

  return (
    <main>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        {project.heroImage ? (
          <Image
            src={withBasePath(project.heroImage)}
            alt={project.gallery[0]?.alt ?? project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <Atmosphere tone={2} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
            {project.category} &middot; {project.location} &middot; {project.year}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.4rem,6vw,4.4rem)] text-white">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="border-b border-line px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Type", value: project.type },
            { label: "Location", value: project.location },
            { label: "Year", value: project.year },
            { label: "Area", value: project.area },
          ].map((f) => (
            <div key={f.label}>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
                {f.label}
              </p>
              <p className="mt-1.5 text-sm">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Description
            </p>
            <div className="mt-4 space-y-4 text-muted">
              {project.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Concept
            </p>
            <div className="mt-4 space-y-4 text-muted">
              {project.concept.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Gallery
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal key={g.src} delay={(i % 2) * 100} className={i === 0 ? "sm:col-span-2" : ""}>
                  <figure>
                    <div
                      className={`relative overflow-hidden bg-surface-2 ${
                        i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={withBasePath(g.src)}
                        alt={g.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {g.credit && (
                      <figcaption className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted">
                        {g.credit}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Technical information
            </p>
          </Reveal>
          <Reveal>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {project.facts.map((f) => (
                <div key={f.label} className="flex justify-between border-b border-line py-3">
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="font-mono text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-[1400px]">
          <Link href={`/projects/${next.slug}`} className="group block">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Next project
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.6rem)] italic transition-opacity group-hover:opacity-70">
              {next.name} &rarr;
            </h2>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
