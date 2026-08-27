import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "FORM's philosophy, approach, team, and history — an architecture studio built around structural surveys, not mood boards.",
};

const TEAM = [
  { name: "Elena Marsh", role: "Founding Partner" },
  { name: "Yusuf Demir", role: "Founding Partner" },
  { name: "Priya Chandran", role: "Director of Interiors" },
  { name: "Tomas Reyes", role: "Structural Lead" },
  { name: "Nadia Kovač", role: "Project Architect" },
  { name: "Ben Okafor", role: "Project Architect" },
];

const TIMELINE = [
  { year: "2009", text: "Founded by Elena Marsh and Yusuf Demir out of a shared studio flat." },
  { year: "2013", text: "First cultural commission — a 300-seat pavilion that never got past the concept stage, but got the studio noticed." },
  { year: "2016", text: "Opened a second discipline: interiors, led by Priya Chandran." },
  { year: "2019", text: "Fold Pavilion completed — the studio's first building without a single interior column." },
  { year: "2023", text: "Twelve people, five active commissions, and a waiting list we're honest about." },
];

export default function StudioPage() {
  return (
    <main>
      <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Studio</p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] italic leading-tight">
              We turn down more work than we take.
            </h1>
            <p className="mt-6 max-w-xl text-muted">
              FORM is a twelve-person studio working on private houses, cultural buildings,
              hospitality, and interiors. We keep the practice small on purpose &mdash; every
              project gets partner-level attention from survey to handover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/project-fold-hero.jpg"
          alt="Board-formed concrete facade detail with autumn branches"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Stats */}
      <section className="border-b border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { num: "12", label: "People" },
            { num: "1–2", label: "New sites per year" },
            { num: "14", label: "Buildings completed" },
            { num: "0", label: "House styles" },
          ].map((s) => (
            <Reveal key={s.label}>
              <p className="font-mono text-[clamp(2rem,4vw,3rem)] text-accent">{s.num}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy / approach */}
      <section className="border-b border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Philosophy
            </p>
            <h2 className="mt-3 font-display text-2xl leading-snug">
              A building should answer a question the site already asked.
            </h2>
            <p className="mt-4 text-muted">
              We don&rsquo;t start with references or a stylistic direction. We start by asking what
              the site, the client&rsquo;s way of living, and the structure itself can actually
              support &mdash; and treat the answer as the design brief, not a constraint on it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Approach
            </p>
            <ol className="mt-3 space-y-5">
              {[
                ["Survey", "Structural, material, and site conditions documented before any sketch."],
                ["Draft", "A small number of plan options, tested against the survey, not against a mood board."],
                ["Refine", "One direction developed in depth, in close, frequent contact with the client."],
                ["Deliver", "Construction documentation and site visits through to handover."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <div>
                    <p className="font-display text-lg">{title}</p>
                    <p className="mt-1 text-sm text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Team</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.4rem)]">
              Twelve people, six shown here
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <div className="aspect-[3/4] bg-surface-2" />
                <p className="mt-3 font-display text-lg">{t.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                  {t.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">History</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.4rem)]">Fifteen years</h2>
          </Reveal>
          <div className="space-y-8">
            {TIMELINE.map((t) => (
              <Reveal key={t.year}>
                <div className="grid grid-cols-[80px_1fr] gap-6 border-t border-line pt-6 sm:grid-cols-[120px_1fr]">
                  <p className="font-mono text-sm text-accent">{t.year}</p>
                  <p className="text-muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-[1400px] text-center">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(2rem,5vw,3.2rem)] italic">
            Have a site in mind?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
