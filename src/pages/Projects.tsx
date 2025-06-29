import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      name: "Suman Apartments",
      client: "Nirmitee Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+1 Stack Parking",
      capacity: "24 Cars",
      year: "2023",
      description: "Advanced stack parking solution for modern residential complex with space optimization."
    },
    {
      name: "Kamal Nivas",
      client: "ESKAY ELEVATORS LTD",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+2 Stack Parking",
      capacity: "36 Cars",
      year: "2023",
      description: "Triple-level stacking system providing maximum parking capacity in limited space."
    },
    {
      name: "Hawa Mahal",
      client: "H. RISHABRAJ",
      location: "Rajasthan",
      type: "Commercial",
      system: "Puzzle Parking",
      capacity: "20 Cars",
      year: "2023",
      description: "Horizontal sliding puzzle system designed for heritage area with space constraints."
    },
    {
      name: "Sagar Darshan",
      client: "Anmol Nirmitee Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+1 Stack Parking",
      capacity: "28 Cars",
      year: "2023",
      description: "Efficient two-level parking solution for premium residential development."
    },
    {
      name: "21st Century Hospital",
      client: "Nadkarni Foundation",
      location: "Vapi, Gujarat",
      type: "Healthcare",
      system: "Tower Parking",
      capacity: "50 Cars",
      year: "2023",
      description: "Automated tower parking system for high-traffic healthcare facility."
    },
    {
      name: "Hemgiri Apartments",
      client: "Pyramid Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "Pit Stack Parking",
      capacity: "32 Cars",
      year: "2023",
      description: "Underground parking solution optimized for limited overhead space."
    }
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed", icon: Building },
    { number: 1000, suffix: "+", label: "Parking Spaces Created", icon: MapPin },
    { number: 45, suffix: "+", label: "Satisfied Clients", icon: Users }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential": return "bg-blue-100 text-blue-800";
      case "Commercial": return "bg-green-100 text-green-800";
      case "Healthcare": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100">
                Trusted by leading developers and institutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Project Gallery */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Project Gallery
              </h2>
              <p className="text-xl text-muted-foreground">
                Interactive showcase of our completed parking systems - click to explore
              </p>
            </div>
            <ImageGallery />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    className="text-3xl font-bold mb-2"
                  />
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Showcasing our expertise across different sectors and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <InteractiveCard key={index} hoverEffect="lift">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                    </div>
                    <CardDescription className="font-medium text-primary">
                      {project.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">System:</span>
                          <p className="text-muted-foreground">{project.system}</p>
                        </div>
                        <div>
                          <span className="font-medium">Capacity:</span>
                          <p className="text-muted-foreground">{project.capacity}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-muted-foreground">Completed: {project.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Providing parking solutions across diverse sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InteractiveCard hoverEffect="glow" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Residential Complexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Apartment buildings, housing societies, and residential towers requiring 
                    efficient parking solutions for residents and visitors.
                  </p>
                </CardContent>
              </InteractiveCard>
              
              <InteractiveCard hoverEffect="glow" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Commercial Buildings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Office complexes, shopping centers, and commercial establishments 
                    needing high-capacity parking for employees and customers.
                  </p>
                </CardContent>
              </InteractiveCard>
              
              <InteractiveCard hoverEffect="glow" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Healthcare Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hospitals, clinics, and medical centers requiring organized parking 
                    for patients, visitors, and medical staff.
                  </p>
                </CardContent>
              </InteractiveCard>
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
