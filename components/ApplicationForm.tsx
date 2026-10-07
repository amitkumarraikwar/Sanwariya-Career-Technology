"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, ExternalLink, Loader2 } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import { siteConfig } from "@/data/site";
import { programs } from "@/data/programs";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  college: z.string().min(2, "College name is required"),
  year: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"], {
    errorMap: () => ({ message: "Please select your year" }),
  }),
  program: z.string().min(1, "Please select a program"),
  resumeLink: z.string().url("Please enter a valid URL").or(z.literal("")),
  message: z.string().max(500, "Message too long").optional(),
});

type FormData = z.infer<typeof schema>;

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      resumeLink: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }

      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try the Google Form."
      );
    }
  };

  return (
    <section id="apply" className="py-20 lg:py-28 bg-primary-50/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Ready to{" "}
            <span className="text-primary-600">Kickstart Your Career?</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Apply now for our free internship programs — it only takes 5 minutes.
          </p>
        </FadeInOnScroll>

        {submitted ? (
          <FadeInOnScroll>
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-surface-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-surface-900 mb-3">
                Application Submitted!
              </h3>
              <p className="text-surface-800/70 mb-6">
                Thank you for applying. Our team will review your application and
                get back to you within 48 hours via email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Submit another application
              </button>
            </div>
          </FadeInOnScroll>
        ) : (
          <FadeInOnScroll>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-surface-100 space-y-6"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your full name"
                    className="form-input"
                    autoComplete="name"
                  />
                </Field>

                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="10-digit mobile number"
                    className="form-input"
                    autoComplete="tel"
                  />
                </Field>

                <Field label="College" error={errors.college?.message}>
                  <input
                    {...register("college")}
                    type="text"
                    placeholder="Your college name"
                    className="form-input"
                    autoComplete="organization"
                  />
                </Field>

                <Field label="Year" error={errors.year?.message}>
                  <select {...register("year")} className="form-input">
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </Field>

                <Field label="Program" error={errors.program?.message}>
                  <select {...register("program")} className="form-input">
                    <option value="">Select program</option>
                    {programs.map((p) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Resume Link (optional)" error={errors.resumeLink?.message}>
                <input
                  {...register("resumeLink")}
                  type="url"
                  placeholder="https://drive.google.com/..."
                  className="form-input"
                />
              </Field>

              <Field label="Message (optional)" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us about yourself and why you want to join..."
                  className="form-input resize-none"
                />
              </Field>

              {serverError && (
                <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                  {serverError}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-secondary-500 hover:bg-secondary-600 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>

                <a
                  href={siteConfig.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-xl border border-primary-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Use Google Form
                </a>
              </div>
            </form>
          </FadeInOnScroll>
        )}
      </div>

      {/* Scoped form styles */}
      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          background: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .form-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        .form-input::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-surface-900 mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
