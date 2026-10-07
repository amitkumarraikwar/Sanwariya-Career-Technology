"use client";

import FadeInOnScroll from "./FadeInOnScroll";
import { timelineItems } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            About{" "}
            <span className="text-primary-600">Sanwariya Career Technology</span>
          </h2>
          <p className="text-lg text-surface-800/70 leading-relaxed">
            We democratize quality tech education by providing free,
            industry-relevant internships that transform students into job-ready
            professionals. Every student deserves a successful career in
            technology, regardless of financial background.
          </p>
        </FadeInOnScroll>

        {/* Vertical animated timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-300 lg:-translate-x-px" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <FadeInOnScroll key={item.year} delay={index * 100}>
                <div
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-primary-100 -translate-x-1.5 lg:-translate-x-1.5 mt-2 z-10" />

                  {/* Content card */}
                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8 lg:ml-auto"}`}>
                    <div className="bg-surface-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 text-xs font-bold text-primary-700 bg-primary-100 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-surface-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-surface-800/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
