
import { Book, CheckCircle, LineChart } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "AI Study Plans",
      description: "Personalized learning paths that adapt to your strengths and weaknesses."
    },
    {
      icon: CheckCircle,
      title: "Adaptive Tests",
      description: "Practice questions that adjust to your skill level for maximum improvement."
    },
    {
      icon: LineChart,
      title: "Progress Tracker",
      description: "Visualize your improvement over time with detailed analytics."
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-purple-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features That Make a Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
