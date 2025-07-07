import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleParking, ArrowUp, CircleParkingOff, Phone, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const values = [{
    title: "Innovation",
    description: "We constantly push the boundaries of parking technology, developing cutting-edge solutions that meet the evolving needs of urban spaces.",
    icon: CircleParking
  }, {
    title: "Efficiency",
    description: "Our systems are designed for maximum space utilization with minimal operational complexity, ensuring optimal performance.",
    icon: ArrowUp
  }, {
    title: "Reliability",
    description: "Built with robust engineering principles, our parking systems deliver consistent performance with minimal maintenance requirements.",
    icon: CircleParkingOff
  }, {
    title: "Service",
    description: "We provide comprehensive support from installation to maintenance, ensuring long-term satisfaction for our clients.",
    icon: Phone
  }];
  const stats = [{
    number: 1000,
    suffix: "+",
    label: "Parking Spaces Created"
  }, {
    number: 50,
    suffix: "+",
    label: "Projects Completed"
  }, {
    number: 45,
    suffix: "+",
    label: "Satisfied Clients"
  }, {
    number: 99,
    suffix: "%",
    label: "Uptime Reliability"
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-90 py-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-pulse-slow">
                About Encanto Industries
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slideInRight delay-300">
                Leading the revolution in smart parking solutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        

        {/* Company Overview */}
        

        {/* Vision & Mission */}
        

        {/* Core Values */}
        <section className="section-bg-light-gray py-[64px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="section-title-dark transform transition-all duration-700 hover:scale-105">
                Our Core Values
              </h2>
              <p className="section-subtitle-dark">
                The principles that drive our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <InteractiveCard key={index} hoverEffect="tilt" className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                      <value.icon className="h-8 w-8 text-primary group-hover:animate-bounce" />
                    </div>
                    <CardTitle className="text-xl card-title-dark group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-text-dark text-center group-hover:text-slate-600 transition-colors duration-300">{value.description}</p>
                  </CardContent>
                </InteractiveCard>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-bg-primary relative py-[6px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative py-[10px]">
            <h2 className="section-title-white animate-fade-in-up transform transition-all duration-700 hover:scale-105">Why Encanto Industries?</h2>
            <p className="section-subtitle-white mb-8 animate-slideInRight delay-200">
              Experience the difference with our comprehensive approach to parking solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up group" style={{
              animationDelay: '100ms'
            }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:animate-pulse">
                  <CheckCircle className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">Expertise & Experience</h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  Years of experience in designing and implementing parking solutions 
                  for diverse requirements and challenging spaces.
                </p>
              </div>
              <div className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up group" style={{
              animationDelay: '200ms'
            }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:animate-pulse">
                  <Phone className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">End-to-End Service</h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  From initial consultation and design to installation, commissioning, 
                  and ongoing maintenance support.
                </p>
              </div>
              <div className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up group" style={{
              animationDelay: '300ms'
            }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:animate-pulse">
                  <CircleParkingOff className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">Quality & Reliability</h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  High-quality components and robust engineering ensure long-lasting 
                  performance with minimal downtime.
                </p>
              </div>
            </div>

            <div className="mt-12 animate-fade-in-up delay-400">
              
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>;
};
export default About;