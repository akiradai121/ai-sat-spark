
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CalloutSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-500/10 border border-purple-100 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your SAT prep?</h2>
            <p className="text-gray-600">
              Join thousands of students who have achieved their target scores with our AI-powered platform.
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md text-lg px-8 py-6"
            asChild
          >
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
