
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBackground from "@/components/PageBackground";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedSection from "@/components/EnhancedSection";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff, Zap, Shield, Award } from "lucide-react";
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
      features: ["200% space efficiency", "Quick 60-sec retrieval", "Weather protection"],
      color: "from-blue-500 to-cyan-500",
      animation: "hover-lift"
    },
    {
      title: "G+2 Stack Parking", 
      description: "Triple your parking space with our advanced three-level stacking solution.",
      icon: ArrowUp,
      features: ["300% capacity increase", "Advanced safety systems", "Automated operation"],
      color: "from-indigo-500 to-blue-500",
      animation: "hover-tilt"
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution for limited overhead space areas.",
      icon: ArrowDown,
      features: ["Underground optimization", "Aesthetic preservation", "Complete protection"],
      color: "from-purple-500 to-indigo-500",
      animation: "hover-glow"
    },
    {
      title: "Puzzle Parking",
      description: "Horizontal sliding puzzle system for maximum space efficiency.",
      icon: CircleParking,
      features: ["Horizontal movement", "No excavation needed", "Flexible configuration"],
      color: "from-cyan-500 to-teal-500",
      animation: "hover-lift"
    },
    {
      title: "Tower Parking",
      description: "Vertical automated parking towers for high-density parking needs.",
      icon: CircleParkingOff,
      features: ["Vertical excellence", "Minimal footprint", "High-speed automation"],
      color: "from-teal-500 to-emerald-500",
      animation: "hover-tilt"
    }
  ];

  const projects = [
    { name: "Suman Apartments", client: "Nirmitee Developers", type: "Residential", capacity: "24 Cars" },
    { name: "Kamal Nivas", client: "ESKAY ELEVATORS LTD", type: "Residential", capacity: "36 Cars" },
    { name: "21st Century Hospital", client: "Nadkarni Foundation", type: "Healthcare", capacity: "50 Cars" },
    { name: "Hawa Mahal", client: "H. RISHABRAJ", type: "Heritage", capacity: "20 Cars" }
  ];

  const stats = [
    { number: 1000, suffix: "+", label: "Parking Spaces Created", icon: CircleParking },
    { number: 50, suffix: "+", label: "Projects Completed", icon: Award },
    { number: 45, suffix: "+", label: "Satisfied Clients", icon: Shield },
    { number: 99, suffix: "%", label: "Uptime Reliability", icon: Zap }
  ];

  return (
    <PageBackground variant="home">
      <Header />
      
      {/* Enhanced Hero Section */}
      <EnhancedHero
        title="Smarter Parking Starts Here"
        subtitle="Revolutionizing Urban Parking with Smart Technology"
        description="Welcome to Encanto Industries, your premier destination for innovative parking solutions tailored to modern urban living. Unlock space. Unlock value."
        primaryCTA={{ text: "Explore Solutions", href: "/solutions" }}
        secondaryCTA={{ text: "Get Free Quote", href: "/contact" }}
        backgroundVariant="home"
        height="full"
      />

      {/* Animated Stats Section */}
      <EnhancedSection spacing="large">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-cyan group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-10 w-10 text-cyan-400" />
              </div>
              <AnimatedCounter
                end={stat.number}
                suffix={stat.suffix}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
              />
              <p className="text-slate-300 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </EnhancedSection>

      {/* About Section with Enhanced Cards */}
      <EnhancedSection 
        title="Why Choose Encanto Industries?"
        subtitle="Leading the revolution in smart parking solutions across India"
        background="gradient"
        divider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: "Innovation First", 
              desc: "Cutting-edge parking technology solutions that set industry standards",
              color: "neon-cyan"
            },
            { 
              icon: ArrowUp, 
              title: "Maximum Efficiency", 
              desc: "Optimize space utilization with minimal footprint and maximum capacity",
              color: "neon-green"
            },
            { 
              icon: Shield, 
              title: "Proven Reliability", 
              desc: "Robust systems engineered for 99%+ uptime with minimal maintenance",
              color: "neon-orange"
            }
          ].map((item, index) => (
            <InteractiveCard key={index} hoverEffect="lift" className="glass-card group">
              <CardHeader className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 ${item.color} group-hover:animate-pulse-glow transition-all duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center leading-relaxed">{item.desc}</p>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
      </EnhancedSection>

      {/* Interactive Solutions Showcase */}
      <EnhancedSection 
        title="Our Parking Solutions"
        subtitle="Comprehensive range of automated parking systems engineered for every space and requirement"
        spacing="xlarge"
        divider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <InteractiveCard key={index} hoverEffect={solution.animation as any} className="glass-card group">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow shadow-lg`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">{solution.title}</CardTitle>
                <CardDescription className="text-slate-300 text-lg">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className={`w-3 h-3 bg-gradient-to-r ${solution.color} rounded-full mr-3 animate-pulse`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/solutions">
            <Button size="lg" className="btn-premium text-xl px-12 py-6">
              Discover All Solutions
            </Button>
          </Link>
        </div>
      </EnhancedSection>

      {/* Enhanced Projects Section */}
      <EnhancedSection 
        title="Our Recent Projects"
        subtitle="Trusted by leading developers and institutions across India"
        background="gradient"
        divider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <InteractiveCard key={index} hoverEffect="lift" className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl text-white font-bold">{project.name}</CardTitle>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-medium text-white">
                    {project.type}
                  </span>
                </div>
                <CardDescription className="text-lg font-medium text-cyan-300">
                  {project.client}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Capacity:</span>
                  <span className="font-bold text-white text-lg">{project.capacity}</span>
                </div>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="glass-effect hover-glow text-white border-cyan-400 text-xl px-12 py-6">
              View All Projects
            </Button>
          </Link>
        </div>
      </EnhancedSection>

      {/* Enhanced CTA Section */}
      <EnhancedSection spacing="xlarge" background="gradient">
        <div className="text-center glass-card p-12 rounded-2xl">
          <h2 className="heading-md mb-6 text-white">
            Ready to Transform Your Parking Space?
          </h2>
          <p className="text-xl mb-12 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how our smart parking solutions 
            can revolutionize your space utilization and enhance user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-premium text-xl px-12 py-6">
                Get Free Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 glass-effect text-xl px-12 py-6">
              Call: 8097465332
            </Button>
          </div>
        </div>
      </EnhancedSection>

      <Footer />
      <WhatsAppButton />
    </PageBackground>
  );
};

export default Index;
