import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Sanwariya Career Technology.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
