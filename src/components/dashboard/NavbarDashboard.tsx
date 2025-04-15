
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

const NavbarDashboard = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold gradient-text">
          SAT Spark
        </h1>
        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
          Free Plan
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="gap-2">
          <User className="h-4 w-4" />
          Profile
        </Button>
        <Button variant="ghost" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
