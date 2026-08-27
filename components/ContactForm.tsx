"use client";

import { useState, type FormEvent } from "react";

// Demo-only: this portfolio has no backend, so submission just shows a
// confirmation state locally rather than sending anywhere.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line p-8">
        <p className="font-display text-2xl italic">Message received.</p>
        <p className="mt-3 text-muted">We reply to every enquiry within two working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none focus:border-ink"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none focus:border-ink"
          />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          Project type
        </span>
        <select
          name="type"
          defaultValue="Residential"
          className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none focus:border-ink"
        >
          <option>Residential</option>
          <option>Cultural</option>
          <option>Hospitality</option>
          <option>Interiors</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="bg-ink px-8 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-bg transition-opacity hover:opacity-85"
      >
        Send message
      </button>
    </form>
  );
}
