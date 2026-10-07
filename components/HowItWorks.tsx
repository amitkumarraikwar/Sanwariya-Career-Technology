"use client";

import { FileText, UserCheck, Briefcase, Award } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description: "Fill out our simple application form — takes only 5 minutes.",
  },
  {
    icon: UserCheck,
    title: "Shortlisting",
    description: "Our team reviews applications and selects based on enthusiasm.",
  },
  {
    icon: Briefcase,
    title: "Project Assignment",
    description: "Get assigned to real-world projects with dedicated mentors.",
  },
  {
    icon: Award,
    title: "Completion & Rewards",
    description: "Receive certificates, build your portfolio, and earn rewards.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            How It <span className="text-primary-600">Works</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Our streamlined process ensures you get from application to
            completion with clear guidance at every step.
          </p>
        </FadeInOnScroll>

        {/* Desktop: horizontal stepper */}
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-300" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInOnScroll key={step.title} delay={index * 120}>
                  <div className="relative text-center group">
                    {/* Step circle */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-primary-50 flex items-center justify-center border-4 border-white shadow-md group-hover:shadow-lg group-hover:bg-primary-100 transition-all">
                      <Icon className="w-8 h-8 text-primary-600" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-surface-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-surface-800/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
