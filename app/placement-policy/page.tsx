import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Placement Policy",
  description: `Placement Assistance Policy for ${siteConfig.name}`,
};

export default function PlacementPolicy() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary-600 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl font-bold text-surface-900 mb-8">
          Placement Assistance Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-surface-800/80">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>
          <p>
            <strong>Last Updated:</strong> October 2026
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">1. Overview</h2>
          <p>
            {siteConfig.name} is a <strong>100% free</strong> internship and
            career-training program. We provide <strong>placement
            assistance</strong> — not a placement guarantee. Our role is to
            equip you with the skills, portfolio, and connections needed to
            secure employment.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">2. What Placement Assistance Includes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Professional resume and portfolio review</li>
            <li>Mock interviews with industry professionals</li>
            <li>Direct referrals to our 50+ industry partners</li>
            <li>Job opportunity alerts and career counselling sessions</li>
            <li>LinkedIn profile optimization</li>
            <li>Soft skills and communication workshops</li>
          </ul>

          <h2 className="text-xl font-bold text-surface-900 mt-8">3. Placement Rate Claim</h2>
          <p>
            Our stated 95% placement assistance rate means that 95% of
            students who successfully complete the full program and actively
            participate in the placement process receive at least one job
            offer or freelance engagement within 6 months of completion. This
            figure is based on internal data as of 2026 and is subject to
            change.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">4. Student Responsibilities</h2>
          <p>
            To benefit from placement assistance, students must:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Complete all assigned projects and coursework</li>
            <li>Maintain at least 80% attendance in sessions</li>
            <li>Actively participate in mock interviews and resume workshops</li>
            <li>Respond to placement opportunities within reasonable timelines</li>
          </ul>

          <h2 className="text-xl font-bold text-surface-900 mt-8">5. No Financial Obligation</h2>
          <p>
            Since all our programs are free, there is no &ldquo;money-back
            guarantee&rdquo; concept. Students are never charged any fees, and
            placement assistance is provided at no cost.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">6. Contact</h2>
          <p>
            For placement-related queries, reach out at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
