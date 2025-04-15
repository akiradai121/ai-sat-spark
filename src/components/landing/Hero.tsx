
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full py-12 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Smarter, AI-Powered <br />
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          SAT Prep
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Personalized study plans and adaptive tests powered by AI to help you achieve your target SAT score.
      </p>
      <Button 
        size="lg"
        className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg transition-all duration-300 transform hover:scale-105"
        asChild
      >
        <Link to="/signup">Start Free</Link>
      </Button>
    </div>
  );
};

export default Hero;
