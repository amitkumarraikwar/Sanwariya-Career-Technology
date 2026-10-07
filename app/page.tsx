import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import ImpactCounters from "@/components/ImpactCounters";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ImpactCounters />
        <Testimonials />
        <ApplicationForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
