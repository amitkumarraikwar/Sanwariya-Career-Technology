"use client";

import {
  Users,
  Award,
  Briefcase,
  DollarSign,
  BookOpen,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import { benefits } from "@/data/content";

const icons = [Users, Award, Briefcase, DollarSign, BookOpen, Headphones, Globe, Zap];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Why Choose <span className="text-primary-600">Us</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Comprehensive benefits and support systems designed to ensure your
            success throughout the internship and beyond.
          </p>
        </FadeInOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            // Make first two cards span 2 cols on large screens for bento effect
            const isLarge = index < 2;

            return (
              <FadeInOnScroll
                key={benefit.title}
                delay={index * 60}
                className={isLarge ? "lg:col-span-2" : ""}
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-surface-100 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-surface-800/70 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {benefit.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-0.5 text-xs font-medium text-primary-600 bg-primary-50 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>

        {/* Placement Assistance Note */}
        <FadeInOnScroll className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-50 border border-primary-200 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-800">
              95% Placement Assistance Rate (as of 2026)
            </span>
          </div>
          <p className="text-xs text-surface-800/50 mt-2">
            <a href="/placement-policy" className="underline hover:text-primary-600">
              View our placement policy
            </a>
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
