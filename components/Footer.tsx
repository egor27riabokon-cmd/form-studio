import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-display text-xl">FORM</span>
          <nav className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            <Link href="/projects" className="hover:text-ink">
              Projects
            </Link>
            <Link href="/studio" className="hover:text-ink">
              Studio
            </Link>
            <Link href="/contact" className="hover:text-ink">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          <p>Studio FORM &middot; 14 Amberline Way &middot; By appointment</p>
          <p>
            Demo portfolio project. Select photography courtesy of Wikimedia Commons contributors
            (CC BY-SA) &mdash; credited on each project page.
          </p>
        </div>
      </div>
    </footer>
  );
}
