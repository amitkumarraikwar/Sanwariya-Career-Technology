import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Internship Programs",
  description: "Explore our free internship programs in Tech and Non-Tech fields.",
};

export default function ProgramsPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <Programs />
        <HowItWorks />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
