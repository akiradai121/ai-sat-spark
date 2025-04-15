
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  progress: number;
}

export const CircularProgress = ({ progress }: CircularProgressProps) => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Overall Progress</h3>
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-32 h-32">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="58"
            cx="64"
            cy="64"
          />
          <circle
            className="text-primary"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="58"
            cx="64"
            cy="64"
            style={{
              strokeDasharray: `${2 * Math.PI * 58}`,
              strokeDashoffset: `${2 * Math.PI * 58 * (1 - progress / 100)}`,
              transformOrigin: "50% 50%",
              transform: "rotate(-90deg)",
            }}
          />
        </svg>
        <span className="absolute text-2xl font-bold">{progress}%</span>
      </div>
    </div>
  );
};
