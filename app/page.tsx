import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { withBasePath } from "@/lib/basePath";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src={withBasePath("/images/hero-house.jpg")}
          alt="A glass-walled modern house set among mature trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
            Private houses &middot; Cultural buildings &middot; Hospitality &middot; Interiors
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.2rem)] italic leading-[1.02] text-white">
            Architecture that starts with the site, not the mood board.
          </h1>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-black transition-opacity hover:opacity-85"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="border border-white/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-white transition-colors hover:border-white"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="max-w-3xl font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-snug">
              FORM is a small studio working on a small number of buildings at a time — houses,
              cultural spaces, hotels, and the interiors inside them. We don&rsquo;t have a house
              style. We have a house process: survey first, draw second.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)]">
                Featured projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink sm:block"
            >
              All projects &rarr;
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                    {p.heroImage ? (
                      <Image
                        src={withBasePath(p.heroImage)}
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

          <Reveal className="mt-12 sm:hidden">
            <Link href="/projects" className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
              All projects &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              About the studio
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight">
              Twelve people. One or two new sites a year.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-muted">
              We turn down more work than we take. Every project gets the same first move &mdash;
              a structural and material survey before any design conversation &mdash; whether it&rsquo;s
              a private house or a 2,000 square meter cultural building. That discipline is slower.
              It&rsquo;s also the only way we know to make a building that still feels considered in
              twenty years.
            </p>
            <Link
              href="/studio"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.1em] text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              More about FORM &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-[1400px] text-center">
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] italic leading-tight">
            If the site has something to say, we&rsquo;d like to hear it too.
          </h2>
          <Link
            href="/contact"
            className="mt-9 inline-block bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-85"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
