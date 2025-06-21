import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff, CheckCircle } from "lucide-react";
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
    },
    {
      title: "G+2 Stack Parking", 
      description: "Triple your parking space with our advanced three-level stacking solution.",
      icon: ArrowUp,
      features: ["Maximum space utilization", "Advanced safety", "Quick retrieval"],
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution for limited overhead space areas.",
      icon: ArrowDown,
      features: ["Underground solution", "Weather protected", "Space optimization"],
    },
    {
      title: "Puzzle Parking",
      description: "Horizontal sliding puzzle system for maximum space efficiency.",
      icon: CircleParking,
      features: ["Horizontal movement", "No pit required", "Modular design"],
    },
    {
      title: "Tower Parking",
      description: "Vertical automated parking towers for high-density parking needs.",
      icon: CircleParkingOff,
      features: ["Vertical storage", "Automated system", "High capacity"],
    }
  ];

  const projects = [
    "Suman Apartments (Nirmitee Developers)",
    "Kamal Nivas (ESKAY ELEVATORS LTD)",
    "Hawa Mahal (H. RISHABRAJ)",
    "21st Century Hospital, Vapi (Nadkarni Foundation)"
  ];

  const stats = [
    { number: "1000+", label: "Parking Spaces Created" },
    { number: "50+", label: "Projects Completed" },
    { number: "45+", label: "Satisfied Clients" },
    { number: "99%", label: "Uptime Reliability" }
  ];

  const whyChooseUs = [
    { icon: CheckCircle, title: "Expert Engineering", desc: "15+ years of experience in parking solutions" },
    { icon: CheckCircle, title: "Quality Assured", desc: "ISO certified manufacturing and installation" },
    { icon: CheckCircle, title: "24/7 Support", desc: "Round-the-clock maintenance and support" },
    { icon: CheckCircle, title: "Cost Effective", desc: "Maximize space utilization, minimize costs" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="hero-title mb-6">
              Revolutionizing Urban Parking
            </h1>
            <h2 className="hero-subtitle mb-8">
              with Smart Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Welcome to Encanto Industries, your premier destination for innovative parking solutions 
              tailored to modern urban living.
            </p>
            
            <div className="flex justify-center">
              <Link to="/solutions">
                <Button className="btn-primary text-lg px-8 py-4">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">About Encanto Industries</h2>
            <p className="section-subtitle">
              We are committed to revolutionizing parking with space-efficient systems, 
              optimizing convenience, efficiency, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="professional-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Parking Solutions</h2>
            <p className="section-subtitle">
              Comprehensive range of automated parking systems for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="professional-card group hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button className="btn-primary">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              Trusted by leading developers and institutions across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="professional-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{project}</CardTitle>
                  <CardDescription>
                    Advanced parking solution with reliable performance and customer satisfaction
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-secondary">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Parking Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized parking solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Call: 8097465332
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
