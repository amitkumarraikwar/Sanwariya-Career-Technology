import About from "@/components/About";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us",
  description: "Learn more about Sanwariya Career Technology and our mission.",
};

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <About />
        <WhyChooseUs />
        <Team />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
