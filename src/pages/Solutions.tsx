import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff } from "lucide-react";
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
      description: "Double your parking capacity with our efficient two-level stacking system perfect for residential and commercial spaces.",
      icon: ArrowUp,
      features: [
        "Doubles parking capacity",
        "Cost-effective solution",
        "Easy operation with remote control",
        "Suitable for all car types",
        "Quick installation",
        "Minimal maintenance required"
      ],
      benefits: [
        "50% space saving compared to conventional parking",
        "ROI within 2-3 years",
        "Weather protection for vehicles",
        "Enhanced security"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "G+2 Stack Parking",
      description: "Triple your parking space with our advanced three-level stacking solution for maximum space optimization.",
      icon: ArrowUp,
      features: [
        "Triples parking capacity",
        "Advanced safety systems",
        "Quick retrieval time (90 seconds)",
        "Remote monitoring capability",
        "Customizable dimensions",
        "Emergency manual operation"
      ],
      benefits: [
        "200% increase in parking capacity",
        "Automated operation reduces human error",
        "Suitable for high-traffic areas",
        "Long-term cost savings"
      ],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution designed for areas with limited overhead space but available ground excavation.",
      icon: ArrowDown,
      features: [
        "Underground space utilization",
        "No overhead structure required",
        "Weather-proof parking",
        "Hydraulic lifting system",
        "Safety sensors and alarms",
        "Compact design"
      ],
      benefits: [
        "Ideal for low-ceiling areas",
        "Complete weather protection",
        "Aesthetic appeal maintained",
        "Energy-efficient operation"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Puzzle Parking System",
      description: "Horizontal sliding puzzle system that maximizes space efficiency through intelligent movement patterns.",
      icon: CircleParking,
      features: [
        "Horizontal sliding mechanism",
        "No pit excavation required",
        "Modular design for easy expansion",
        "Multiple size configurations",
        "User-friendly operation",
        "Minimal structural requirements"
      ],
      benefits: [
        "Flexible installation options",
        "Lower installation costs",
        "Quick vehicle retrieval",
        "Suitable for retrofit projects"
      ],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Tower Parking System",
      description: "Vertical automated parking towers for high-density parking needs in minimal ground space.",
      icon: CircleParkingOff,
      features: [
        "Vertical storage up to 20+ levels",
        "Fully automated operation",
        "High-capacity parking solution",
        "Advanced control systems",
        "Multiple entry/exit points",
        "24/7 operational capability"
      ],
      benefits: [
        "Maximum space utilization",
        "Minimal ground footprint",
        "Faster parking and retrieval",
        "Suitable for commercial complexes"
      ],
      color: "from-teal-500 to-teal-700"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Our Parking Solutions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100">
                Comprehensive range of automated parking systems designed for every space and requirement
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Projects in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Click on each image to discover more about our parking solutions
              </p>
            </div>
            <ImageGallery />
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solution Details
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our comprehensive range of parking systems
              </p>
            </div>
            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <InteractiveCard hoverEffect="lift" className="h-full">
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 animate-pulse-glow`}>
                          <solution.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{solution.title}</CardTitle>
                        <CardDescription className="text-lg">{solution.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-2 mt-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Benefits:</h4>
                            <ul className="space-y-2">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-2 mt-2"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </InteractiveCard>
                  </div>
                  <div className={`glass-effect rounded-lg p-8 h-80 flex items-center justify-center neon-blue ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <solution.icon className="h-24 w-24 text-primary mx-auto mb-4 animate-float" />
                      <p className="text-muted-foreground">System Diagram</p>
                      <p className="text-sm text-muted-foreground mt-2">{solution.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-blue-100">
              Our engineering team can design and implement customized parking solutions 
              tailored to your specific requirements and space constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-futuristic">
                  Request Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background glass-effect">
                Download Brochure
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

export default Solutions;
