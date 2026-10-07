"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroStats } from "@/data/content";

const backgroundImages = [
  "/campus/campuss1.jpeg",
  "/campus/campuss2.jpeg",
  "/campus/campuss3.jpeg",
  "/campus/campuss18.jpeg",
  "/campus/campuss16.jpeg",
  "/campus/campuss14.jpeg",
  "/campus/campuss19.jpeg",
  "/campus/campuss21.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-surface-900">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Campus Background"
              fill
              className="object-cover object-center"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 flex flex-col items-center max-w-4xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm">
            <span>Real Internships.</span>
            <br />
            <span className="text-primary-400">Real Skills.</span>
            <br />
            <span className="text-secondary-400">Zero Cost.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Join India&apos;s leading free internship program and gain hands-on
            experience with real projects. Build your career with expert
            mentorship and industry-recognised certifications.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-secondary-500 hover:bg-secondary-600 rounded-full shadow-lg shadow-secondary-500/25 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full transition-colors"
              >
                View Programs
              </Link>
            </motion.div>
          </div>

          {/* Stat strip */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 pt-12 border-t border-white/20 w-full mt-12">
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-white/70 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
