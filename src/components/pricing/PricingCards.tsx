
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingCardsProps {
  onPlanSelect: (planName: string) => void;
}

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic AI study recommendations",
      "10-question adaptive test",
      "Basic progress tracking",
      "Community forum access"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$9",
    description: "Most popular for serious students",
    features: [
      "Full AI study plan",
      "Unlimited adaptive tests",
      "Advanced progress analytics",
      "Priority support",
      "Score predictions"
    ],
    highlight: true
  },
  {
    name: "Elite",
    price: "$19",
    description: "Complete preparation toolkit",
    features: [
      "Everything in Pro plan",
      "Weekly mock exams",
      "Personalized feedback",
      "Score improvement guarantee",
      "College admissions guidance"
    ],
    highlight: false
  }
];

const PricingCards = ({ onPlanSelect }: PricingCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <Card 
          key={plan.name}
          className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
            plan.highlight 
              ? "border-purple-200 shadow-lg bg-gradient-to-b from-white to-purple-50" 
              : "border-gray-200"
          }`}
        >
          {plan.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm">
              Popular
            </div>
          )}
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <div className="mb-2">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.price !== "Free" && (
                <span className="text-gray-600 ml-1">/month</span>
              )}
            </div>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  : ""
              }`}
              variant={plan.highlight ? "default" : "outline"}
              onClick={() => onPlanSelect(plan.name)}
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCards;
