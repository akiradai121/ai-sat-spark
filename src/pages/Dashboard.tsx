
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import StudyPlanForm from "@/components/dashboard/StudyPlanForm";
import AdaptiveTest from "@/components/dashboard/AdaptiveTest";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <NavbarDashboard />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <StudyPlanForm />
          <AdaptiveTest />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
