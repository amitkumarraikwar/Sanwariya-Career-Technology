import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}`,
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-surface-800/80">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services of {siteConfig.name}, you
            agree to be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">2. Our Services</h2>
          <p>
            We provide free internship programs in technology and non-technology
            domains. These programs include mentorship, project-based learning,
            industry certifications, and placement assistance.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">3. Eligibility</h2>
          <p>
            Our programs are open to students currently pursuing undergraduate or
            postgraduate degrees, as well as recent graduates. Applicants must be
            at least 18 years old or have parental consent.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">4. Free of Charge</h2>
          <p>
            All internship programs offered by {siteConfig.name} are completely
            free. We do not charge any registration fees, tuition fees, or hidden
            costs at any point during the program.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">5. Code of Conduct</h2>
          <p>
            Participants are expected to maintain professional conduct,
            complete assigned projects on time, and respect fellow participants
            and mentors. Any form of plagiarism, harassment, or misconduct may
            result in removal from the program.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">6. Intellectual Property</h2>
          <p>
            Projects completed during the internship may be used by both the
            participant (for their portfolio) and {siteConfig.name} (for
            showcasing program outcomes), unless otherwise agreed in writing.
          </p>

          <h2 className="text-xl font-bold text-surface-900 mt-8">7. Contact</h2>
          <p>
            For questions regarding these terms, please contact{" "}
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
