"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const socialLinks = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Apply Now", href: "/#apply" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-surface-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-primary-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">{siteConfig.shortName}</p>
                <p className="text-xs text-surface-200/60">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-surface-200/70 leading-relaxed mb-6">
              Empowering the next generation of tech professionals through
              comprehensive, hands-on free internship programs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-surface-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-200/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-3">
              {["Web Development", "App Development", "AI / ML", "Blockchain", "Human Resources", "Digital Marketing"].map(
                (p) => (
                  <li key={p}>
                    <a
                      href="#programs"
                      className="text-sm text-surface-200/70 hover:text-white transition-colors"
                    >
                      {p}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <a 
                  href={siteConfig.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-200/70 hover:text-white transition-colors"
                >
                  {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-sm text-surface-200/70 hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-surface-200/70 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-surface-200/50">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-surface-200/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-surface-200/50 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/placement-policy"
                className="text-xs text-surface-200/50 hover:text-white transition-colors"
              >
                Placement Policy
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-9 h-9 rounded-lg bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
