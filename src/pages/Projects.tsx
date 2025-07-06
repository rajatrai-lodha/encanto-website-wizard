
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      name: "Suman Apartments",
      client: "Nirmitee Developers"
    },
    {
      name: "Kamal Nivas", 
      client: "ESKAY ELEVATORS LTD"
    },
    {
      name: "Hawa Mahal",
      client: "H. RISHABRAJ"
    },
    {
      name: "Sagar Darshan",
      client: "Anmol Nirmitee Developers"
    },
    {
      name: "21st Century Hospital",
      client: "Nadkarni Foundation"
    },
    {
      name: "Hemgiri Apartments",
      client: "Pyramid Developers"
    }
  ];

  const stats = [
    {
      number: 50,
      suffix: "+",
      label: "Projects Completed", 
      icon: Building
    },
    {
      number: 1000,
      suffix: "+", 
      label: "Parking Spaces Created",
      icon: MapPin
    },
    {
      number: 45,
      suffix: "+",
      label: "Satisfied Clients",
      icon: Users
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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up group" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-primary group-hover:animate-bounce" />
                  </div>
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300" 
                  />
                  <div className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Projects Grid */}
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
              {projects.map((project, index) => (
                <InteractiveCard 
                  key={index}
                  hoverEffect="lift" 
                  className="transform transition-all duration-700 hover:scale-105 hover:shadow-2xl animate-fade-in-up group bg-gradient-to-br from-white to-blue-50/30 border border-blue-100" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                      <Building className="h-8 w-8 text-primary group-hover:scale-110 group-hover:animate-pulse transition-all duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-500 text-slate-800">
                      {project.name}
                    </CardTitle>
                    <p className="text-lg font-medium text-primary group-hover:text-blue-600 transition-colors duration-500">
                      {project.client}
                    </p>
                  </CardHeader>
                </InteractiveCard>
              ))}
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
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 hover:scale-105 text-slate-900">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90 animate-slideInRight delay-200 text-zinc-500">
                Contact us today to discuss your parking solution requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link to="/contact">
                  <Button size="lg" className="btn-futuristic interactive-button transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                    Get Quote
                  </Button>
                </Link>
              </div>
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
