
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Target, Clock, Star, X } from "lucide-react";

const StudyPlanForm = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generate Study Plan</CardTitle>
        <CardDescription>
          Tell us about your goals and we'll create a personalized study plan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Star className="h-4 w-4 text-yellow-500" />
              Strengths
            </label>
            <Textarea
              placeholder="What are your strongest subjects? (e.g., Algebra, Reading Comprehension)"
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <X className="h-4 w-4 text-red-500" />
              Areas to Improve
            </label>
            <Textarea
              placeholder="What subjects do you find challenging? (e.g., Geometry, Vocabulary)"
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4 text-blue-500" />
              Study Hours per Day
            </label>
            <Input type="number" placeholder="2" min="1" max="12" />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Target className="h-4 w-4 text-purple-500" />
              Target SAT Score
            </label>
            <Input type="number" placeholder="1400" min="400" max="1600" />
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          Generate Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudyPlanForm;
