"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import { galleryImages } from "@/data/content";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const navTo = useCallback(
    (dir: "prev" | "next") => {
      if (lightboxIndex === null) return;
      setLightboxIndex(
        dir === "prev"
          ? lightboxIndex === 0
            ? galleryImages.length - 1
            : lightboxIndex - 1
          : lightboxIndex === galleryImages.length - 1
          ? 0
          : lightboxIndex + 1
      );
    },
    [lightboxIndex]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navTo("prev");
      if (e.key === "ArrowRight") navTo("next");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, navTo]);

  // Masonry-ish: tall items at certain indices
  const getSpan = (i: number) => {
    if (i === 0 || i === 5 || i === 8) return "row-span-2";
    return "";
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Campus <span className="text-primary-600">Gallery</span>
          </h2>
          <p className="text-lg text-surface-800/70">
            A glimpse into our vibrant learning environment and community.
          </p>
        </FadeInOnScroll>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryImages.map((img, i) => (
            <FadeInOnScroll
              key={img.src}
              delay={i * 50}
              className={`${getSpan(i)} cursor-pointer group`}
            >
              <div
                className="relative w-full h-full rounded-xl overflow-hidden"
                onClick={() => open(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && open(i)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navTo("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navTo("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
