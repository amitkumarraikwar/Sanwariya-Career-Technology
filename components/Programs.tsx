"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import { programs, type Program } from "@/data/programs";

type Filter = "all" | "tech" | "non-tech";

export default function Programs() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Internship <span className="text-primary-600">Programs</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Choose from our comprehensive range of internship programs designed
            to give you hands-on experience in cutting-edge technologies.
          </p>
        </FadeInOnScroll>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(["all", "tech", "non-tech"] as Filter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tab
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-white text-surface-800/70 hover:bg-surface-100 border border-surface-200"
              }`}
            >
              {tab === "all" ? "All Programs" : tab === "tech" ? "Tech" : "Non-Tech"}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = program.icon;

  return (
    <FadeInOnScroll delay={index * 80}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-surface-100 transition-shadow h-full flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-surface-900">{program.title}</h3>
            <p className="text-xs text-surface-800/60">{program.duration}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-surface-800/70 leading-relaxed mb-5 flex-1">
          {program.description}
        </p>

        {/* Project count */}
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="font-medium text-surface-900">Projects</span>
          <span className="text-surface-800/60">{program.projects}</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {program.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Apply CTA */}
        <a
          href="#apply"
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </FadeInOnScroll>
  );
}
