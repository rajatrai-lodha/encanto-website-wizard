import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Wrench, Leaf, Phone, Building, Eye, Star } from "lucide-react";
import { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const advantages = [{
    title: "Stress-Free Maintenance",
    description: "Our systems are designed for minimal maintenance with robust components and proactive support services.",
    icon: Wrench,
    features: ["Preventive maintenance schedules", "24/7 technical support hotline", "Quick response time for repairs", "Genuine spare parts availability", "Trained technician network"]
  }, {
    title: "Long-term Relationships",
    description: "We build lasting partnerships with our clients through consistent service and continuous improvement.",
    icon: CheckCircle,
    features: ["Dedicated account management", "Regular system health checks", "Performance optimization reviews", "Upgrade consultation services", "Extended warranty options"]
  }, {
    title: "Quick Support Response",
    description: "Our technical team ensures rapid response to any service requests or technical issues.",
    icon: Clock,
    features: ["Same-day response guarantee", "Remote diagnostic capabilities", "Emergency service availability", "Mobile service units", "Real-time system monitoring"]
  }, {
    title: "End-to-End Service",
    description: "Complete project lifecycle management from initial consultation to ongoing maintenance.",
    icon: Shield,
    features: ["Site survey and consultation", "Custom design and engineering", "Professional installation", "Commissioning and testing", "Training and handover"]
  }, {
    title: "Sustainability Focus",
    description: "Environmentally conscious solutions that reduce carbon footprint and promote sustainable development.",
    icon: Leaf,
    features: ["Energy-efficient operations", "Reduced vehicle emissions", "Space optimization benefits", "Long-lasting materials", "Eco-friendly manufacturing"]
  }, {
    title: "Technology Advantage",
    description: "Advanced control systems and smart technology integration for superior performance.",
    icon: Phone,
    features: ["IoT-enabled monitoring", "Mobile app integration", "Predictive maintenance alerts", "Remote troubleshooting", "Data analytics and reporting"]
  }];
  
  const testimonials = [{
    client: "Nirmitee Developers",
    project: "Suman Apartments",
    quote: "Encanto Industries delivered an exceptional parking solution that perfectly fits our space constraints. The installation was smooth and the system has been running flawlessly.",
    rating: 5
  }, {
    client: "Nadkarni Foundation",
    project: "21st Century Hospital",
    quote: "The tower parking system has significantly improved our patient experience by providing quick and convenient parking. The support team is always responsive.",
    rating: 5
  }];

  const highlightedProjects = [
    { name: "Suman Apartments", client: "Nirmitee Developers" },
    { name: "Kamal Nivas", client: "Eskay Elevators Ltd" },
    { name: "Hawa Mahal", client: "H. Rishabraj" },
    { name: "Sagar Darshan", client: "Anmol Nirmitee Developers" },
    { name: "21st Century Hospital, Vapi", client: "Nadkarni Foundation" }
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
                Why Choose Encanto Industries?
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100">
                Experience the difference with our comprehensive approach to parking solutions
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                About Encanto Industries
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <InteractiveCard hoverEffect="lift" className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Welcome to <span className="font-semibold text-blue-600">Encanto Industries</span>, your premier destination for innovative parking solutions tailored to the demands of modern urban living.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  At Encanto, we are committed to revolutionizing the way cities approach parking. Our space-efficient systems are designed to optimize convenience, efficiency, and sustainability. Discover a new era in parking with our cutting-edge technology and unwavering commitment to excellence. Say goodbye to parking woes and hello to a seamless parking experience with Stack Parking.
                </p>
              </CardContent>
            </InteractiveCard>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto rounded-full"></div>
            </div>
            
            <InteractiveCard hoverEffect="glow" className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center border border-white/30">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-white/90 leading-relaxed">
                  Encanto Industries is driven by a singular mission: to revolutionize urban parking and create a better parking experience for all. With a focus on innovation, efficiency, and sustainability, we're building a future where finding parking is hassle-free and cities are free to thrive without parking congestion.
                </p>
              </CardContent>
            </InteractiveCard>
          </div>
        </section>

        {/* Highlighted Projects Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Highlighted Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 mt-6">
                Showcasing our successful partnerships and innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlightedProjects.map((project, index) => (
                <InteractiveCard key={index} hoverEffect="lift" className="bg-white/80 backdrop-blur-sm border border-blue-100">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-center text-slate-800">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 font-medium">{project.client}</p>
                    <div className="mt-4 px-4 py-2 bg-blue-50 rounded-full">
                      <span className="text-blue-600 text-sm font-medium">Completed Project</span>
                    </div>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Competitive Advantages
              </h2>
              <p className="text-xl text-muted-foreground">
                What sets us apart in the parking solutions industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => <InteractiveCard key={index} hoverEffect="tilt">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 neon-blue">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>)}
                    </ul>
                  </CardContent>
                </InteractiveCard>)}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 relative bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Commitment to Excellence
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-muted-foreground">
                        Rigorous testing and quality control processes ensure reliable performance 
                        and longevity of our parking systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Customer-Centric Approach</h3>
                      <p className="text-muted-foreground">
                        We prioritize customer satisfaction through personalized service, 
                        transparent communication, and responsive support.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Continuous Innovation</h3>
                      <p className="text-muted-foreground">
                        Investment in research and development keeps us at the forefront 
                        of parking technology and industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <InteractiveCard hoverEffect="glow" className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Promise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-effect rounded-lg p-4 neon-blue">
                    <h4 className="font-semibold text-primary mb-2">Reliability</h4>
                    <p className="text-muted-foreground">Systems designed for 99%+ uptime with minimal maintenance requirements.</p>
                  </div>
                  
                  <div className="glass-effect rounded-lg p-4 neon-blue">
                    <h4 className="font-semibold text-primary mb-2">Safety</h4>
                    <p className="text-muted-foreground">Multiple safety features and fail-safe mechanisms protect vehicles and users.</p>
                  </div>
                  
                  <div className="glass-effect rounded-lg p-4 neon-blue">
                    <h4 className="font-semibold text-primary mb-2">Support</h4>
                    <p className="text-muted-foreground">Comprehensive support throughout the system lifecycle with guaranteed response times.</p>
                  </div>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16">
          
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default WhyChooseUs;
