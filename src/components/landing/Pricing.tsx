
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}

const PricingPlan = ({ name, price, description, features, highlight, buttonText }: PlanProps) => {
  return (
    <div 
      className={`rounded-2xl p-6 md:p-8 flex flex-col h-full border transition-all duration-300 ${
        highlight 
          ? "border-purple-200 shadow-lg bg-gradient-to-b from-white to-purple-50 transform hover:scale-105" 
          : "border-gray-200 shadow-md bg-white hover:shadow-lg"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex-grow space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <Button 
        className={`w-full ${
          highlight 
            ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600" 
            : ""
        }`}
        variant={highlight ? "default" : "outline"}
        asChild
      >
        <Link to="/signup">{buttonText}</Link>
      </Button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Basic AI study recommendations",
        "Limited practice questions",
        "Weekly progress reports",
        "Community forum access"
      ],
      buttonText: "Sign Up Free"
    },
    {
      name: "Pro",
      price: "$9",
      description: "Ideal for serious students",
      features: [
        "Advanced AI study plans",
        "Unlimited practice questions",
        "Detailed performance analytics",
        "Priority support",
        "Progress predictions"
      ],
      highlight: true,
      buttonText: "Get Pro"
    },
    {
      name: "Elite",
      price: "$19",
      description: "Complete preparation toolkit",
      features: [
        "Everything in Pro",
        "One-on-one virtual tutoring",
        "Essay review & feedback",
        "Guaranteed score improvement",
        "College admission guidance"
      ],
      buttonText: "Get Elite"
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Choose the plan that fits your needs. All plans include access to our AI-powered platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingPlan
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            highlight={plan.highlight}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
