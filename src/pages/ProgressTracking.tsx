
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import { CircularProgress } from "@/components/tracking/CircularProgress";
import { StudyTimeline } from "@/components/tracking/StudyTimeline";
import { StreakCounter } from "@/components/tracking/StreakCounter";
import { Leaderboard } from "@/components/tracking/Leaderboard";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProgressTracking = () => {
  const { toast } = useToast();
  const isProOrElite = false; // TODO: Replace with actual plan check

  const handleLeaderboardClick = () => {
    if (!isProOrElite) {
      toast({
        title: "Pro/Elite Feature",
        description: "Upgrade your plan to access the leaderboard feature.",
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <NavbarDashboard />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <CircularProgress progress={65} />
          </Card>
          
          <Card className="p-6">
            <StreakCounter streak={5} />
          </Card>

          <Card className="p-6">
            <StudyTimeline />
          </Card>

          <Card className="relative p-6 overflow-hidden" onClick={handleLeaderboardClick}>
            {!isProOrElite && (
              <div className="absolute inset-0 bg-gray-100/90 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                  <p className="text-sm text-gray-600">Pro/Elite feature</p>
                </div>
              </div>
            )}
            <Leaderboard />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProgressTracking;
