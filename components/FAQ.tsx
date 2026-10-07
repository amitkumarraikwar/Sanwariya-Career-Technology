"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Everything you need to know about our internship programs.
          </p>
        </FadeInOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeInOnScroll key={i} delay={i * 60}>
              <div className="border border-surface-100 rounded-xl overflow-hidden bg-surface-50 hover:border-primary-200 transition-colors">
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-semibold text-surface-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-surface-800/50 shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-surface-800/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
