import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Campus Gallery",
  description: "A glimpse into our vibrant learning environment and community.",
};

export default function GalleryPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
