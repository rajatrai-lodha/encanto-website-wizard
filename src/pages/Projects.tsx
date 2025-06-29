
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Calendar, CheckCircle, Phone } from "lucide-react";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Suman Apartments",
      client: "Nirmitee Developers",
      location: "Malad, Mumbai",
      year: "2024",
      category: "Residential",
      status: "Completed",
      description: "A state-of-the-art tower parking system designed for a premium residential complex. The solution maximizes parking capacity while maintaining the aesthetic appeal of the building.",
      features: [
        "24 car capacity tower parking system",
        "Automated retrieval in under 2 minutes",
        "Weather-resistant construction",
        "Emergency backup systems",
        "Smart monitoring and alerts"
      ],
      images: [
        "/lovable-uploads/0e8eefac-ba45-43fa-b8c2-2949682c4bdc.png",
        "/lovable-uploads/1e5e40d0-2411-45d5-947b-ff24aecc2b92.png",
        "/lovable-uploads/2c017785-0a73-4f9a-aa75-3749e785d9b3.png"
      ]
    },
    {
      id: 2,
      title: "21st Century Hospital",
      client: "Nadkarni Foundation",
      location: "Pune, Maharashtra",
      year: "2023",
      category: "Healthcare",
      status: "Completed",
      description: "A multi-level automated parking solution for a busy hospital, ensuring quick and convenient parking for patients and visitors during critical times.",
      features: [
        "36 car capacity multi-level system",
        "Priority access for emergency vehicles",
        "Integrated payment systems",
        "Real-time availability display",
        "Barrier-free access for ambulances"
      ],
      images: [
        "/lovable-uploads/314201f5-dc0d-4e1b-802f-1b0d33172a9d.png",
        "/lovable-uploads/33071eca-b479-4777-946a-807e2e52ed64.png",
        "/lovable-uploads/388dc65b-9dca-4bf6-b927-2e6dc6288219.png"
      ]
    },
    {
      id: 3,
      title: "Commercial Plaza Parking",
      client: "Metro Developers",
      location: "Bangalore, Karnataka",
      year: "2023",
      category: "Commercial",
      status: "Completed",
      description: "A comprehensive parking management system for a commercial complex with high traffic volume and diverse parking requirements.",
      features: [
        "48 car capacity distributed system",
        "Multi-entrance access points",
        "Visitor management integration",
        "Revenue management system",
        "Mobile app integration"
      ],
      images: [
        "/lovable-uploads/3969b05d-9ed6-4d5b-9cfc-f26f542367f1.png",
        "/lovable-uploads/39b5c100-1f9e-4367-9443-f494841a2f95.png",
        "/lovable-uploads/3fb4ab07-360c-4b78-9243-524b8cd231a4.png"
      ]
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Healthcare"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36B5FF] to-[#36B5FF] opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Showcasing our expertise in delivering innovative parking solutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Project Categories Filter */}
        <section className="py-8 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-[#36B5FF] text-white hover:bg-[#36B5FF]/90"
                    : "border-[#36B5FF] text-[#36B5FF] hover:bg-[#36B5FF] hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-[#F3F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <InteractiveCard key={project.id} hoverEffect="lift" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <div className="relative">
                    <ImageGallery 
                      images={project.images} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-[#36B5FF] hover:bg-[#36B5FF]/90'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-[#36B5FF] text-[#36B5FF]">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Building2 className="h-4 w-4 mr-2 text-[#36B5FF]" />
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-[#36B5FF]" />
                        {project.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#36B5FF]">
                Project Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                The numbers speak for our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-[#36B5FF] mb-2">50+</div>
                <p className="text-slate-700 font-medium">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-[#36B5FF] mb-2">1000+</div>
                <p className="text-slate-700 font-medium">Parking Spaces</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-[#36B5FF] mb-2">45+</div>
                <p className="text-slate-700 font-medium">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-[#36B5FF] mb-2">99%</div>
                <p className="text-slate-700 font-medium">Uptime Record</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#36B5FF] to-[#36B5FF] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our growing list of satisfied clients with a custom parking solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#36B5FF] hover:bg-white/90">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#36B5FF]">
                View All Projects
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

export default Projects;
