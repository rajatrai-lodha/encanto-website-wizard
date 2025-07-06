import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Projects",
    href: "/projects"
  }, {
    name: "Why Choose Us",
    href: "/why-choose-us"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center py-6 bg-white">
          {/* Enhanced Logo with Better Company Name Visibility */}
          <Link to="/" className="flex items-center space-x-6 group">
            <div className="p-2 drop-shadow-sm bg-white py-[10px] px-[19px] rounded-none">
              <img src="/lovable-uploads/74d07b43-ca4f-4186-979f-77ff43b96e58.png" alt="Encanto Industries Logo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 object-contain" />
            </div>
            <div className="">
              <h1 className="text-3xl font-bold text-slate-800 leading-tight drop-shadow-sm">
                Encanto Industries
              </h1>
              <p className="text-base text-slate-700 font-semibold">
                Smart Parking Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation with Smooth Animations */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ease-out overflow-hidden group ${isActive(item.href) ? 'bg-white text-primary shadow-md font-bold border-2 border-primary/20 transform scale-105' : 'text-foreground hover:text-primary hover:bg-white/20 hover:shadow-lg hover:scale-102'}`}>
                <span className="relative z-10 transition-all duration-300">
                  {item.name}
                </span>
                {/* Animated underline effect */}
                <div className={`absolute bottom-1 left-1/2 h-0.5 bg-primary transition-all duration-500 ease-out ${isActive(item.href) ? 'w-3/4 transform -translate-x-1/2' : 'w-0 group-hover:w-3/4 transform -translate-x-1/2'}`} />
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-12 h-12 p-0 hover:bg-primary/10 transition-all duration-300">
              <span className="sr-only">Open menu</span>
              <Menu className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
              <X className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 -rotate-90'}`} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Enhanced Animations */}
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-3">
            {navigation.map((item, index) => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`relative px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-500 ease-out overflow-hidden group ${isActive(item.href) ? 'bg-white text-primary shadow-md font-bold border-2 border-primary/20 transform scale-105' : 'text-foreground hover:text-primary hover:bg-white/20 hover:shadow-lg hover:scale-102'}`} style={{
            animationDelay: `${index * 100}ms`,
            animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
          }}>
                <span className="relative z-10 transition-all duration-300">
                  {item.name}
                </span>
                {/* Mobile animated underline */}
                <div className={`absolute bottom-2 left-6 h-0.5 bg-primary transition-all duration-500 ease-out ${isActive(item.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
                {/* Mobile background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Link>)}
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;