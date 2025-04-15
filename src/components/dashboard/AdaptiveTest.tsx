
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardCheck, AlertCircle } from "lucide-react";

const AdaptiveTest = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Take Adaptive Test</CardTitle>
        <CardDescription>
          Test your knowledge with our AI-powered adaptive questions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4 bg-blue-50/50">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-blue-900">
                Free Plan Restrictions
              </p>
              <p className="text-sm text-blue-700">
                Free users get 10 adaptive questions per test. Upgrade to Pro or
                Elite for full-length practice tests.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg bg-gradient-to-r from-purple-50 to-blue-50">
          <p className="text-sm font-medium mb-2">Current Difficulty Level</p>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Intermediate
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          <ClipboardCheck className="h-4 w-4" />
          Start Test
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdaptiveTest;
