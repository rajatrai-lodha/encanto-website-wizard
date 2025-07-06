import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Users } from "lucide-react";
import { useEffect, useState } from "react";
const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const projects = [{
    name: "Suman Apartments",
    client: "Nirmitee Developers",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    system: "G+1 Stack Parking",
    capacity: "24 Cars",
    year: "2023",
    description: "Advanced stack parking solution for modern residential complex with space optimization."
  }, {
    name: "Kamal Nivas",
    client: "ESKAY ELEVATORS LTD",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    system: "G+2 Stack Parking",
    capacity: "36 Cars",
    year: "2023",
    description: "Triple-level stacking system providing maximum parking capacity in limited space."
  }, {
    name: "Hawa Mahal",
    client: "H. RISHABRAJ",
    location: "Rajasthan",
    type: "Commercial",
    system: "Puzzle Parking",
    capacity: "20 Cars",
    year: "2023",
    description: "Horizontal sliding puzzle system designed for heritage area with space constraints."
  }, {
    name: "Sagar Darshan",
    client: "Anmol Nirmitee Developers",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    system: "G+1 Stack Parking",
    capacity: "28 Cars",
    year: "2023",
    description: "Efficient two-level parking solution for premium residential development."
  }, {
    name: "21st Century Hospital",
    client: "Nadkarni Foundation",
    location: "Vapi, Gujarat",
    type: "Healthcare",
    system: "Tower Parking",
    capacity: "50 Cars",
    year: "2023",
    description: "Automated tower parking system for high-traffic healthcare facility."
  }, {
    name: "Hemgiri Apartments",
    client: "Pyramid Developers",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    system: "Pit Stack Parking",
    capacity: "32 Cars",
    year: "2023",
    description: "Underground parking solution optimized for limited overhead space."
  }];
  const stats = [{
    number: 50,
    suffix: "+",
    label: "Projects Completed",
    icon: Building
  }, {
    number: 1000,
    suffix: "+",
    label: "Parking Spaces Created",
    icon: MapPin
  }, {
    number: 45,
    suffix: "+",
    label: "Satisfied Clients",
    icon: Users
  }];
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300";
      case "Commercial":
        return "bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300";
      case "Healthcare":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300";
    }
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse-slow font-bold md:text-6xl">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100 animate-slideInRight delay-300">
                Trusted by leading developers and institutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Project Gallery */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 bg-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                Project Gallery
              </h2>
              <p className="text-xl text-muted-foreground animate-slideInRight delay-200">
                Interactive showcase of our completed parking systems - click to explore
              </p>
            </div>
            <div className="animate-fade-in-up delay-400">
              <ImageGallery />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => <div key={index} className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up group" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-primary group-hover:animate-bounce" />
                  </div>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300" />
                  <div className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground animate-slideInRight delay-200">
                Showcasing our expertise across different sectors and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => <InteractiveCard key={index} hoverEffect="lift" className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.name}</CardTitle>
                      <Badge className={`${getTypeColor(project.type)} transform transition-all duration-300 hover:scale-110`}>{project.type}</Badge>
                    </div>
                    <CardDescription className="font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {project.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                        <MapPin className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-300" />
                        {project.location}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">System:</span>
                          <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">{project.system}</p>
                        </div>
                        <div>
                          <span className="font-medium">Capacity:</span>
                          <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">{project.capacity}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-muted-foreground group-hover:text-slate-600 transition-colors duration-300">Completed: {project.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </InteractiveCard>)}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 bg-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground animate-slideInRight delay-200">
                Providing parking solutions across diverse sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InteractiveCard hoverEffect="glow" className="text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: '100ms'
            }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <Building className="h-8 w-8 text-primary group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">Residential Complexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                    Apartment buildings, housing societies, and residential towers requiring 
                    efficient parking solutions for residents and visitors.
                  </p>
                </CardContent>
              </InteractiveCard>
              
              <InteractiveCard hoverEffect="glow" className="text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: '200ms'
            }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-8 w-8 text-primary group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">Commercial Buildings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                    Office complexes, shopping centers, and commercial establishments 
                    needing high-capacity parking for employees and customers.
                  </p>
                </CardContent>
              </InteractiveCard>
              
              <InteractiveCard hoverEffect="glow" className="text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: '300ms'
            }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <Users className="h-8 w-8 text-primary group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">Healthcare Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                    Hospitals, clinics, and medical centers requiring organized parking 
                    for patients, visitors, and medical staff.
                  </p>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 bg-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 hover:scale-105 text-slate-900">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90 animate-slideInRight delay-200 text-zinc-500">
                Contact us today to discuss your parking solution requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Button size="lg" className="btn-futuristic interactive-button transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  Get Quote
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>;
};
export default Projects;