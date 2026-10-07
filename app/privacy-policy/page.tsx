import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}`,
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-surface-800/80">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>
          <p>
            <strong>Last Updated:</strong> October 2026
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide when applying for internship
            programs, including your name, email address, phone number, college
            name, academic year, and resume. We may also collect usage data
            through standard web analytics.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">2. How We Use Your Information</h2>
          <p>
            Your information is used to process internship applications,
            communicate program updates, provide mentorship and placement
            assistance, and improve our services. We do not sell your personal
            data to third parties.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">3. Data Storage & Security</h2>
          <p>
            We store your data securely using industry-standard encryption
            and access controls. Application data is stored in secured databases
            and retained for the duration of your engagement with our programs.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">4. Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Forms, Google
            Analytics, and email providers. These services have their own privacy
            policies governing the use of your information.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">5. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">6. Contact</h2>
          <p>
            For privacy-related inquiries, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-600 hover:underline">
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary-600 hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
