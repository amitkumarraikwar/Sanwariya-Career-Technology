"use client";

import { Users, BookOpen, Award, Building } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import CountUp from "./CountUp";
import { impactStats } from "@/data/content";

const icons = [Users, BookOpen, Award, Building];

export default function ImpactCounters() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Our <span className="text-primary-600">Impact</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Numbers that showcase our commitment to student success.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <FadeInOnScroll key={stat.label} delay={index * 100}>
                <div className="text-center p-8 bg-surface-50 rounded-2xl border border-surface-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-surface-900 mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-medium text-surface-800/60">
                    {stat.label}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>

        {/* Verified note */}
        <FadeInOnScroll className="mt-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-surface-800/50">
            <span>95% Placement Assistance · <em>as of 2026</em></span>
            <span>4.8/5 Student Rating · <em>verified</em></span>
            <span>100% Free Programs · <em>always</em></span>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
