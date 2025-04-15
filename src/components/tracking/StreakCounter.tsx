
import { Flame } from "lucide-react";

interface StreakCounterProps {
  streak: number;
}

export const StreakCounter = ({ streak }: StreakCounterProps) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Study Streak</h3>
      <div className="flex items-center justify-center gap-3">
        <Flame className="w-8 h-8 text-orange-500" />
        <span className="text-3xl font-bold">{streak}</span>
        <span className="text-gray-600">days</span>
      </div>
      <p className="mt-2 text-sm text-gray-500">Keep up the great work!</p>
    </div>
  );
};
