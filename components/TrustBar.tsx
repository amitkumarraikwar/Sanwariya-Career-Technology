"use client";

import { partnerLogos } from "@/data/content";

export default function TrustBar() {
  // Double the logos for seamless marquee loop
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-8 border-y border-surface-100 bg-surface-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-surface-800/50">
          Our students intern & get placed at
        </p>
      </div>
      <div className="relative">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {doubled.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="text-lg font-bold text-surface-800/25 select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
