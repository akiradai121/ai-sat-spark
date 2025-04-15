
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import CalloutSection from "@/components/landing/CalloutSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CalloutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
