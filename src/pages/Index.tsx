
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff, CheckCircle, Building, Users, Shield, Zap } from "lucide-react";
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
      image: "/lovable-uploads/e3478f7c-bec3-4dec-b41c-8035d4461ff3.png"
    },
    {
      title: "G+2 Stack Parking", 
      description: "Triple your parking space with our advanced three-level stacking solution.",
      icon: ArrowUp,
      features: ["Maximum space utilization", "Advanced safety", "Quick retrieval"],
      image: "/lovable-uploads/33071eca-b479-4777-946a-807e2e52ed64.png"
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution for limited overhead space areas.",
      icon: ArrowDown,
      features: ["Underground solution", "Weather protected", "Space optimization"],
      image: "/lovable-uploads/2c017785-0a73-4f9a-aa75-3749e785d9b3.png"
    },
    {
      title: "Puzzle Parking",
      description: "Horizontal sliding puzzle system for maximum space efficiency.",
      icon: CircleParking,
      features: ["Horizontal movement", "No pit required", "Modular design"],
      image: "/lovable-uploads/afe66f3d-b0ac-493c-a429-015287bc5098.png"
    },
    {
      title: "Tower Parking",
      description: "Vertical automated parking towers for high-density parking needs.",
      icon: CircleParkingOff,
      features: ["Vertical storage", "Automated system", "High capacity"],
      image: "/lovable-uploads/3fb4ab07-360c-4b78-9243-524b8cd231a4.png"
    }
  ];

  const projects = [
    {
      name: "Suman Apartments",
      client: "Nirmitee Developers",
      description: "Advanced stack parking solution for modern residential complex",
      image: "/lovable-uploads/43aa289b-6da1-4e50-be48-1a08832804e6.png"
    },
    {
      name: "Tower Parking Installation",
      client: "Commercial Complex",
      description: "Multi-level automated parking tower for urban spaces",
      image: "/lovable-uploads/f98454ef-8973-4a8a-bd1c-7c47b86b4e35.png"
    },
    {
      name: "Puzzle System Setup",
      client: "Residential Building",
      description: "Horizontal sliding puzzle parking system implementation",
      image: "/lovable-uploads/e42c0120-3dbf-43b8-b97a-ab71474d4cc7.png"
    },
    {
      name: "Underground Platform",
      client: "Housing Society",
      description: "Pit stack parking solution for space-constrained areas",
      image: "/lovable-uploads/1e5e40d0-2411-45d5-947b-ff24aecc2b92.png"
    }
  ];

  const stats = [
    { number: "1000+", label: "Parking Spaces Created" },
    { number: "50+", label: "Projects Completed" },
    { number: "45+", label: "Satisfied Clients" },
    { number: "99%", label: "Uptime Reliability" }
  ];

  const whyChooseUs = [
    { 
      icon: Shield, 
      title: "Expert Engineering", 
      desc: "15+ years of experience in automated parking solutions" 
    },
    { 
      icon: CheckCircle, 
      title: "Quality Assured", 
      desc: "ISO certified manufacturing and installation processes" 
    },
    { 
      icon: Zap, 
      title: "24/7 Support", 
      desc: "Round-the-clock maintenance and technical support" 
    },
    { 
      icon: Building, 
      title: "Cost Effective", 
      desc: "Maximize space utilization while minimizing operational costs" 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 section-padding hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="hero-title mb-8">
              Revolutionizing Urban Parking
            </h1>
            <h2 className="hero-subtitle">
              with Smart Technology
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Welcome to Encanto Industries, your premier destination for innovative parking solutions 
              tailored to modern urban living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/projects">
                <Button className="btn-primary text-xl px-10 py-5">
                  Explore Solutions
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary text-xl px-10 py-5">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="section-padding section-bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="stat-number group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="section-padding section-bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">About Encanto Industries</h2>
            <p className="section-subtitle">
              We are committed to revolutionizing parking with space-efficient systems, 
              optimizing convenience, efficiency, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="professional-card text-center group">
                <CardHeader>
                  <div className="solution-icon mx-auto">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Solutions Showcase */}
      <section className="section-padding section-bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Parking Solutions</h2>
            <p className="section-subtitle">
              Comprehensive range of automated parking systems for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="professional-card group overflow-hidden">
                <div className="project-image mb-6">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="solution-icon">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="section-padding section-bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              Trusted by leading developers and institutions across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="professional-card group overflow-hidden">
                <div className="project-image mb-6">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-muted-foreground">
                    {project.client}
                  </CardDescription>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    {project.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-primary text-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding cta-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="section-title-white">
            Ready to Transform Your Parking Space?
          </h2>
          <p className="section-subtitle-white mb-12">
            Contact us today for a free consultation and customized parking solution
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 text-xl px-10 py-5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Free Quote
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-10 py-5 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
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
