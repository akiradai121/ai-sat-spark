
import { useState } from "react";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TestQuestion } from "@/components/test/TestQuestion";
import { TestResults } from "@/components/test/TestResults";
import { Timer, HelpCircle } from "lucide-react";

const AdaptiveTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes per question
  const [isComplete, setIsComplete] = useState(false);
  
  const totalQuestions = 10;
  const progress = (currentQuestion / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleEndTest = () => {
    setIsComplete(true);
  };

  if (isComplete) {
    return <TestResults />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <NavbarDashboard />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Progress value={progress} className="w-32" />
              <span className="text-sm text-gray-600">
                {currentQuestion}/{totalQuestions}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Intermediate</span>
              </div>
            </div>
          </div>

          <TestQuestion questionNumber={currentQuestion} />

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handleEndTest}>
              End Test
            </Button>
            <Button onClick={handleNext}>
              {currentQuestion === totalQuestions ? "Finish" : "Next"}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AdaptiveTest;
