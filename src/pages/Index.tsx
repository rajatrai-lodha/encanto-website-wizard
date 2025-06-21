
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const solutions = [
    {
      title: "G+1 Stack Parking",
      description: "Double your parking capacity with our efficient two-level stacking system.",
      icon: ArrowUp,
      features: ["Space efficient", "Cost effective", "Easy operation"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "G+2 Stack Parking", 
      description: "Triple your parking space with our advanced three-level stacking solution.",
      icon: ArrowUp,
      features: ["Maximum space utilization", "Advanced safety", "Quick retrieval"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution for limited overhead space areas.",
      icon: ArrowDown,
      features: ["Underground solution", "Weather protected", "Space optimization"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Puzzle Parking",
      description: "Horizontal sliding puzzle system for maximum space efficiency.",
      icon: CircleParking,
      features: ["Horizontal movement", "No pit required", "Modular design"],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Tower Parking",
      description: "Vertical automated parking towers for high-density parking needs.",
      icon: CircleParkingOff,
      features: ["Vertical storage", "Automated system", "High capacity"],
      color: "from-teal-500 to-teal-700"
    }
  ];

  const projects = [
    "Suman Apartments (Nirmitee Developers)",
    "Kamal Nivas (ESKAY ELEVATORS LTD)",
    "Hawa Mahal (H. RISHABRAJ)",
    "21st Century Hospital, Vapi (Nadkarni Foundation)"
  ];

  const stats = [
    { number: 1000, suffix: "+", label: "Parking Spaces Created" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 45, suffix: "+", label: "Satisfied Clients" },
    { number: 99, suffix: "%", label: "Uptime Reliability" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Dynamic Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-32 h-32 border border-primary/30 rotate-45 animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${6 + i}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Revolutionizing Urban Parking
              </h1>
              <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-100">
                with Smart Technology
              </h2>
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
                Welcome to Encanto Industries, your premier destination for innovative parking solutions 
                tailored to modern urban living.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/solutions">
                  <Button size="lg" className="btn-futuristic text-lg px-8 py-4 animate-pulse-glow">
                    Explore Solutions
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-background text-lg px-8 py-4 glass-effect"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    className="text-4xl md:text-6xl"
                  />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Encanto Industries
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are committed to revolutionizing parking with space-efficient systems, 
                optimizing convenience, efficiency, and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: CircleParking, title: "Innovation", desc: "Cutting-edge parking technology solutions" },
                { icon: ArrowUp, title: "Efficiency", desc: "Maximum space utilization with minimal footprint" },
                { icon: CircleParkingOff, title: "Reliability", desc: "Robust systems with minimal maintenance" }
              ].map((item, index) => (
                <InteractiveCard key={index} hoverEffect="glow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.desc}</p>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Solutions Showcase */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Parking Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive range of automated parking systems for every need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <InteractiveCard key={index} hoverEffect="tilt" className="group">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/solutions">
                <Button size="lg" className="btn-futuristic">
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Recent Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted by leading developers and institutions across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <InteractiveCard key={index} hoverEffect="lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{project}</CardTitle>
                    <CardDescription>
                      Advanced parking solution with reliable performance
                    </CardDescription>
                  </CardHeader>
                </InteractiveCard>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button size="lg" variant="outline" className="glass-effect hover:bg-primary hover:text-primary-foreground">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Ready to Transform Your Parking Space?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-blue-100">
              Contact us today for a free consultation and customized parking solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-futuristic text-lg px-8 py-4">
                  Get Free Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background glass-effect text-lg px-8 py-4">
                Call: 8097465332
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
