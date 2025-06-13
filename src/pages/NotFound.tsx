
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Oops! Page not found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a href="/">
            <Button size="lg" className="btn-futuristic">
              Return to Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
