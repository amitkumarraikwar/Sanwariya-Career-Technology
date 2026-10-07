"use client";

import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-md"
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-surface-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Go to top">
            <div className="relative w-9 h-9">
              <Image
                src="/svg-img.png"
                alt={`${siteConfig.shortName} logo`}
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block font-display font-bold text-lg text-surface-900 group-hover:text-primary-600 transition-colors">
              {siteConfig.shortName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-surface-800 hover:text-primary-600 hover:bg-surface-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#apply"
              className="ml-3 inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-secondary-500 hover:bg-secondary-600 rounded-full transition-colors shadow-sm"
            >
              Apply Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-surface-800 hover:bg-surface-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={closeDrawer}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 border-b border-surface-100">
                <span className="font-display font-bold text-lg">Menu</span>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-lg hover:bg-surface-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeDrawer}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-surface-800 hover:bg-surface-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="p-4 border-t border-surface-100">
                <Link
                  href="/#apply"
                  onClick={closeDrawer}
                  className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-secondary-500 hover:bg-secondary-600 rounded-full transition-colors"
                >
                  Apply Free
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
