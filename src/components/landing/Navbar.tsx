
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold gradient-text">
          SAT Spark
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link to="/login">Log in</Link>
        </Button>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md">
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
