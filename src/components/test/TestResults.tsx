
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const TestResults = () => {
  const difficultyData = [
    { question: 1, difficulty: 3 },
    { question: 2, difficulty: 4 },
    { question: 3, difficulty: 3 },
    { question: 4, difficulty: 5 },
    { question: 5, difficulty: 4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <NavbarDashboard />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Test Complete!</h2>
              <p className="text-gray-600">Here's how you performed</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Score</p>
                <p className="text-3xl font-bold text-primary">85%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Time Taken</p>
                <p className="text-3xl font-bold">24:30</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Questions</p>
                <p className="text-3xl font-bold">8/10</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Difficulty Curve</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={difficultyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="question" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="difficulty"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Improvement Suggestions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-gray-700">Focus on geometry problems to improve accuracy</p>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-gray-700">Practice time management for word problems</p>
                </li>
              </ul>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button variant="outline">Review Answers</Button>
              <Button>Take Another Test</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
