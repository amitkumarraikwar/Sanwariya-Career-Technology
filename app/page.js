"use client";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InternshipCategories from "./components/InternshipCategories";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Perks from "./components/Perks";
import Gallery from "./components/Gallery";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="font-inter overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <InternshipCategories />
          <HowItWorks />
          <Team />
          <Testimonials />
          <Stats />
          <Perks />
          <Gallery />
          <ApplicationForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
