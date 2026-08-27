import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FORM about a private residence, cultural building, hospitality, or interiors project.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <Reveal className="mx-auto max-w-[1400px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Contact</p>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.4rem,6vw,4rem)] italic">
            Tell us about the site.
          </h1>
        </Reveal>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={100} className="space-y-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Studio</p>
              <p className="mt-2">
                14 Amberline Way
                <br />
                Riverside District
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Email</p>
              <p className="mt-2">studio@form-architecture.example</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Phone</p>
              <p className="mt-2">+1 (555) 019&ndash;0472</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                Elsewhere
              </p>
              <div className="mt-2 flex gap-5">
                <a href="#" className="hover:text-accent">
                  Instagram
                </a>
                <a href="#" className="hover:text-accent">
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative aspect-[16/7] w-full overflow-hidden border-t border-line">
        <Image
          src={withBasePath("/images/hero-house.jpg")}
          alt="Glass-walled house among trees, seen from the terrace"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>
    </main>
  );
}
