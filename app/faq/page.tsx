import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our internship programs.",
};

export default function FAQPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
