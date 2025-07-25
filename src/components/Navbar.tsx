import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">BunkPlanner</span>
          </Link>
          
          <div className="flex space-x-4">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={location.pathname === "/planner" ? "default" : "ghost"}
              asChild
            >
              <Link to="/planner">Planner</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;