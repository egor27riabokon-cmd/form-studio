import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Private residences, cultural buildings, hospitality spaces, and interiors designed by FORM.",
};

export default function ProjectsPage() {
  return (
    <main className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Selected work, 2019&ndash;2023
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)]">Projects</h1>
        </Reveal>
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
