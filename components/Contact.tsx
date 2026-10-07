"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Get in <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            Have questions? We&apos;d love to hear from you. Reach out anytime.
          </p>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <FadeInOnScroll>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-100 space-y-6 h-full">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Address</h3>
                  <a 
                    href={siteConfig.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-800/70 hover:text-primary-600 transition-colors"
                  >
                    {siteConfig.address.line1},{" "}
                    {siteConfig.address.line2},{" "}
                    {siteConfig.address.city},{" "}
                    {siteConfig.address.state} {siteConfig.address.zip}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">WhatsApp</h3>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-surface-900 mb-1">Business Hours</h3>
                  <p className="text-sm text-surface-800/70">
                    {siteConfig.businessHours.weekdays}
                    <br />
                    {siteConfig.businessHours.saturday}
                    <br />
                    {siteConfig.businessHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Google Map */}
          <FadeInOnScroll delay={100}>
            <div className="bg-white rounded-2xl shadow-sm border border-surface-100 overflow-hidden h-full min-h-[400px]">
              <iframe
                title="Sanwariya Career Technology Location"
                src="https://maps.google.com/maps?q=IET+DAVV+Incubation+Centre,+Khandwa+Road,+Indore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
