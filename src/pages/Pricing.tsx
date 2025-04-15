
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import PricingCards from "@/components/pricing/PricingCards";
import AuthModal from "@/components/auth/AuthModal";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/landing/Footer";

const Pricing = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { toast } = useToast();

  const handlePlanSelect = (planName: string) => {
    // Show auth modal for unauthenticated users
    const isAuthenticated = false; // TODO: Replace with actual auth check
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    // For authenticated users on free plan trying to access premium features
    if (planName !== "Free") {
      toast({
        title: "Upgrade Required",
        description: `Please upgrade to the ${planName} plan to access premium features.`,
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your SAT preparation needs. All plans include access to our AI-powered platform.
          </p>
        </div>
        <PricingCards onPlanSelect={handlePlanSelect} />
      </main>
      <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Pricing;
