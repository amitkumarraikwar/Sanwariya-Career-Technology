"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Meet Our <span className="text-primary-600">Expert Team</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Our passionate team of industry experts, educators, and mentors are
            dedicated to helping you succeed in your tech career.
          </p>
        </FadeInOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <FadeInOnScroll key={member.name} delay={index * 80}>
              <div className="bg-surface-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-surface-100 group">
                {/* Photo */}
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden bg-surface-200 border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="128px"
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-surface-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-600">
                    {member.role}
                  </p>
                  <p className="text-sm text-surface-800/60 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-medium text-primary-700 bg-primary-50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary-600 hover:text-white hover:bg-primary-600 bg-primary-50 rounded-full transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
