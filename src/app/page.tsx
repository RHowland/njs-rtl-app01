import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
     <div className=" xl:mt-24">
     <Footer />
     </div>
    </main>
  );
}
