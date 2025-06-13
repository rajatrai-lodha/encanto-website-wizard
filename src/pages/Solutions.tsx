
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBackground from "@/components/PageBackground";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedSection from "@/components/EnhancedSection";
import InteractiveCard from "@/components/InteractiveCard";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff, CheckCircle, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Solutions = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const solutions = [
    {
      title: "G+1 Stack Parking",
      description: "Revolutionary two-level stacking system that doubles your parking capacity while maintaining easy accessibility and user convenience.",
      icon: ArrowUp,
      features: [
        "Doubles parking capacity instantly",
        "60-second automated retrieval",
        "Remote control operation",
        "Universal car compatibility",
        "Professional installation service",
        "Comprehensive maintenance support"
      ],
      benefits: [
        "200% ROI within 2-3 years",
        "Complete weather protection",
        "Enhanced vehicle security",
        "Minimal space requirements"
      ],
      color: "from-blue-500 to-cyan-500",
      specs: { height: "3.5m", capacity: "2 cars per unit", power: "3 kW" }
    },
    {
      title: "G+2 Stack Parking",
      description: "Advanced three-level parking solution engineered for maximum space optimization with cutting-edge safety systems.",
      icon: ArrowUp,
      features: [
        "Triples parking capacity",
        "Multi-level safety systems",
        "90-second quick retrieval",
        "IoT monitoring capability",
        "Customizable dimensions",
        "Emergency manual override"
      ],
      benefits: [
        "300% increase in capacity",
        "Automated error prevention",
        "High-traffic optimization",
        "Long-term cost efficiency"
      ],
      color: "from-indigo-500 to-purple-500",
      specs: { height: "5.5m", capacity: "3 cars per unit", power: "5 kW" }
    },
    {
      title: "Pit Stack Parking",
      description: "Innovative underground parking solution perfect for areas with limited overhead space but available ground excavation options.",
      icon: ArrowDown,
      features: [
        "Underground space utilization",
        "No overhead structure needed",
        "Completely weather-proof",
        "Hydraulic precision lifting",
        "Advanced safety sensors",
        "Space-efficient design"
      ],
      benefits: [
        "Perfect for low-ceiling areas",
        "100% weather protection",
        "Maintains aesthetic appeal",
        "Energy-efficient operation"
      ],
      color: "from-purple-500 to-pink-500",
      specs: { depth: "2.2m", capacity: "2 cars per unit", power: "4 kW" }
    },
    {
      title: "Puzzle Parking System",
      description: "Intelligent horizontal sliding system that maximizes space efficiency through smart movement patterns and modular design.",
      icon: CircleParking,
      features: [
        "Horizontal sliding mechanism",
        "Zero excavation required",
        "Modular expandable design",
        "Multiple size configurations",
        "Intuitive user operation",
        "Minimal structural impact"
      ],
      benefits: [
        "Flexible installation options",
        "Reduced installation costs",
        "Rapid vehicle access",
        "Retrofit-friendly design"
      ],
      color: "from-cyan-500 to-teal-500",
      specs: { area: "Variable", capacity: "6-20 cars", power: "2 kW" }
    },
    {
      title: "Tower Parking System",
      description: "State-of-the-art vertical automated parking towers designed for maximum capacity in minimal ground footprint.",
      icon: CircleParkingOff,
      features: [
        "Vertical storage up to 25 levels",
        "Fully automated operation",
        "Maximum capacity solution",
        "Advanced control systems",
        "Multiple entry/exit points",
        "24/7 operational capability"
      ],
      benefits: [
        "Ultimate space utilization",
        "Minimal ground footprint",
        "High-speed parking/retrieval",
        "Commercial-grade reliability"
      ],
      color: "from-teal-500 to-emerald-500",
      specs: { height: "25m", capacity: "50+ cars", power: "15 kW" }
    }
  ];

  return (
    <PageBackground variant="solutions">
      <Header />
      
      {/* Enhanced Hero Section */}
      <EnhancedHero
        title="Smart Parking Solutions"
        subtitle="Engineering the Future of Urban Parking"
        description="Comprehensive range of automated parking systems designed for every space constraint and requirement, from residential complexes to commercial facilities."
        primaryCTA={{ text: "Request Demo", href: "/contact" }}
        secondaryCTA={{ text: "Download Brochure", href: "#" }}
        backgroundVariant="solutions"
      />

      {/* Interactive Project Gallery */}
      <EnhancedSection 
        title="See Our Solutions in Action"
        subtitle="Interactive showcase of completed parking systems - click to explore real installations"
        background="gradient"
      >
        <ImageGallery />
      </EnhancedSection>

      {/* Enhanced Solutions Showcase */}
      <EnhancedSection 
        title="Complete Solution Portfolio"
        subtitle="Choose the perfect parking system for your specific requirements"
        spacing="xlarge"
        divider={true}
      >
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <InteractiveCard hoverEffect="lift" className="glass-card h-full">
                  <CardHeader>
                    <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 animate-pulse-glow shadow-2xl`}>
                      <solution.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-white mb-4">{solution.title}</CardTitle>
                    <CardDescription className="text-xl text-slate-300 leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-cyan-300 flex items-center">
                          <Zap className="h-5 w-5 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-slate-300">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-emerald-300 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-slate-300">
                              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Technical Specs */}
                    <div className="border-t border-slate-600 pt-6">
                      <h4 className="text-lg font-bold mb-4 text-orange-300 flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(solution.specs).map(([key, value]) => (
                          <div key={key} className="text-center glass-effect rounded-lg p-3">
                            <div className="text-sm text-slate-400 capitalize">{key}</div>
                            <div className="text-lg font-bold text-white">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </InteractiveCard>
              </div>
              
              {/* Visual */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="glass-card rounded-xl p-8 h-96 flex items-center justify-center neon-cyan group hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <solution.icon className="h-32 w-32 text-cyan-400 mx-auto mb-6 animate-float" />
                    <div className="space-y-2">
                      <p className="text-slate-300 font-medium">System Visualization</p>
                      <p className="text-sm text-slate-400">{solution.title}</p>
                      <div className={`w-24 h-1 bg-gradient-to-r ${solution.color} rounded-full mx-auto animate-pulse`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </EnhancedSection>

      {/* Enhanced CTA Section */}
      <EnhancedSection spacing="xlarge" background="gradient">
        <div className="text-center glass-card p-12 rounded-2xl">
          <h2 className="heading-md mb-6 text-white">
            Need a Custom Parking Solution?
          </h2>
          <p className="text-xl mb-12 text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Our experienced engineering team specializes in designing and implementing customized parking solutions 
            tailored to your unique space constraints, capacity requirements, and operational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-premium text-xl px-12 py-6">
                Request Custom Solution
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 glass-effect text-xl px-12 py-6">
              Download Technical Specs
            </Button>
          </div>
        </div>
      </EnhancedSection>

      <Footer />
      <WhatsAppButton />
    </PageBackground>
  );
};

export default Solutions;
