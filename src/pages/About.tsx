
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleParking, ArrowUp, CircleParkingOff, Phone, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of parking technology, developing cutting-edge solutions that meet the evolving needs of urban spaces.",
      icon: CircleParking
    },
    {
      title: "Efficiency",
      description: "Our systems are designed for maximum space utilization with minimal operational complexity, ensuring optimal performance.",
      icon: ArrowUp
    },
    {
      title: "Reliability",
      description: "Built with robust engineering principles, our parking systems deliver consistent performance with minimal maintenance requirements.",
      icon: CircleParkingOff
    },
    {
      title: "Service",
      description: "We provide comprehensive support from installation to maintenance, ensuring long-term satisfaction for our clients.",
      icon: Phone
    }
  ];

  const stats = [
    { number: 1000, suffix: "+", label: "Parking Spaces Created" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 45, suffix: "+", label: "Satisfied Clients" },
    { number: 99, suffix: "%", label: "Uptime Reliability" }
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                About Encanto Industries
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Leading the revolution in smart parking solutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 section-bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    className="text-4xl md:text-6xl font-bold text-primary"
                  />
                  <p className="text-slate-700 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 section-bg-light-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title-dark">
                  Our Company
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-700">
                    Welcome to Encanto Industries, your premier destination for innovative parking solutions 
                    tailored to modern urban living. We are committed to revolutionizing parking with 
                    space-efficient systems, optimizing convenience, efficiency, and sustainability.
                  </p>
                  <p className="text-lg text-slate-700">
                    With years of experience in the parking industry, we have established ourselves as 
                    a trusted partner for residential complexes, commercial buildings, and healthcare 
                    facilities across India.
                  </p>
                  <p className="text-lg text-slate-700">
                    Our focus: making parking hassle-free for everyone while maximizing space utilization 
                    and minimizing environmental impact.
                  </p>
                </div>
              </div>
              <InteractiveCard hoverEffect="glow" className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl card-title-dark">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                      <span className="card-text-dark">Established parking solution provider</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                      <span className="card-text-dark">Multiple successful installations across India</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                      <span className="card-text-dark">Specialized in automated parking systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                      <span className="card-text-dark">Comprehensive maintenance and support</span>
                    </li>
                  </ul>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 section-bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveCard hoverEffect="lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="card-text-dark">
                    To be the leading provider of innovative parking solutions in India, 
                    transforming urban mobility through smart, sustainable, and efficient 
                    parking systems that enhance the quality of life in cities.
                  </p>
                </CardContent>
              </InteractiveCard>

              <InteractiveCard hoverEffect="lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="card-text-dark">
                    To revolutionize parking with space-efficient, technologically advanced 
                    systems that optimize convenience, efficiency, and sustainability while 
                    providing exceptional service and support to our clients.
                  </p>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 section-bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title-dark">
                Our Core Values
              </h2>
              <p className="section-subtitle-dark">
                The principles that drive our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <InteractiveCard key={index} hoverEffect="tilt">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl card-title-dark">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-text-dark text-center">{value.description}</p>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 section-bg-primary relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="section-title-white">
              Why Choose Encanto Industries?
            </h2>
            <p className="section-subtitle-white mb-8">
              Experience the difference with our comprehensive approach to parking solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Expertise & Experience</h3>
                <p className="text-white/90">
                  Years of experience in designing and implementing parking solutions 
                  for diverse requirements and challenging spaces.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">End-to-End Service</h3>
                <p className="text-white/90">
                  From initial consultation and design to installation, commissioning, 
                  and ongoing maintenance support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleParkingOff className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Quality & Reliability</h3>
                <p className="text-white/90">
                  High-quality components and robust engineering ensure long-lasting 
                  performance with minimal downtime.
                </p>
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

export default About;
