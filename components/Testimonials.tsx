"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    []
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Student <span className="text-primary-600">Success Stories</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Hear from our alumni who successfully transitioned from students to
            industry professionals.
          </p>
        </FadeInOnScroll>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-surface-100 p-8 lg:p-12 min-h-[320px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Avatar with initials fallback */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-primary-100 flex items-center justify-center text-3xl font-bold text-primary-600 relative">
                      {t.initials}
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-surface-900 text-center">
                      {t.name}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 text-center">
                      {t.role}
                    </p>
                    <p className="text-xs text-surface-800/60 text-center mt-0.5">
                      {t.program}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg text-surface-800/80 leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Outcome badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-sm font-medium text-green-800">
                        {t.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-surface-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-surface-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-surface-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-surface-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-primary-600"
                    : "w-2 bg-surface-200 hover:bg-surface-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
