
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Wrench, Leaf, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const advantages = [
    {
      title: "Stress-Free Maintenance",
      description: "Our systems are designed for minimal maintenance with robust components and proactive support services.",
      icon: Wrench,
      features: [
        "Preventive maintenance schedules",
        "24/7 technical support hotline",
        "Quick response time for repairs",
        "Genuine spare parts availability",
        "Trained technician network"
      ]
    },
    {
      title: "Long-term Relationships",
      description: "We build lasting partnerships with our clients through consistent service and continuous improvement.",
      icon: CheckCircle,
      features: [
        "Dedicated account management",
        "Regular system health checks",
        "Performance optimization reviews",
        "Upgrade consultation services",
        "Extended warranty options"
      ]
    },
    {
      title: "Quick Support Response",
      description: "Our technical team ensures rapid response to any service requests or technical issues.",
      icon: Clock,
      features: [
        "Same-day response guarantee",
        "Remote diagnostic capabilities",
        "Emergency service availability",
        "Mobile service units",
        "Real-time system monitoring"
      ]
    },
    {
      title: "End-to-End Service",
      description: "Complete project lifecycle management from initial consultation to ongoing maintenance.",
      icon: Shield,
      features: [
        "Site survey and consultation",
        "Custom design and engineering",
        "Professional installation",
        "Commissioning and testing",
        "Training and handover"
      ]
    },
    {
      title: "Sustainability Focus",
      description: "Environmentally conscious solutions that reduce carbon footprint and promote sustainable development.",
      icon: Leaf,
      features: [
        "Energy-efficient operations",
        "Reduced vehicle emissions",
        "Space optimization benefits",
        "Long-lasting materials",
        "Eco-friendly manufacturing"
      ]
    },
    {
      title: "Technology Advantage",
      description: "Advanced control systems and smart technology integration for superior performance.",
      icon: Phone,
      features: [
        "IoT-enabled monitoring",
        "Mobile app integration",
        "Predictive maintenance alerts",
        "Remote troubleshooting",
        "Data analytics and reporting"
      ]
    }
  ];

  const testimonials = [
    {
      client: "Nirmitee Developers",
      project: "Suman Apartments",
      quote: "Encanto Industries delivered an exceptional parking solution that perfectly fits our space constraints. The installation was smooth and the system has been running flawlessly.",
      rating: 5
    },
    {
      client: "Nadkarni Foundation",
      project: "21st Century Hospital",
      quote: "The tower parking system has significantly improved our patient experience by providing quick and convenient parking. The support team is always responsive.",
      rating: 5
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#36B5FF] to-[#36B5FF] opacity-90"></div>
          
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

        {/* Key Advantages */}
        <section className="py-16 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#36B5FF]">
                Our Competitive Advantages
              </h2>
              <p className="text-xl text-muted-foreground">
                What sets us apart in the parking solutions industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <InteractiveCard key={index} hoverEffect="tilt" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-lg flex items-center justify-center mb-4">
                      <advantage.icon className="h-6 w-6 text-[#36B5FF]" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 bg-[#F3F7FA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#36B5FF]">
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
              
              <InteractiveCard hoverEffect="glow" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Promise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-[#F5FBFF]/50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-[#36B5FF] mb-2">Reliability</h4>
                    <p className="text-muted-foreground">Systems designed for 99%+ uptime with minimal maintenance requirements.</p>
                  </div>
                  
                  <div className="bg-[#F5FBFF]/50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-[#36B5FF] mb-2">Safety</h4>
                    <p className="text-muted-foreground">Multiple safety features and fail-safe mechanisms protect vehicles and users.</p>
                  </div>
                  
                  <div className="bg-[#F5FBFF]/50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-[#36B5FF] mb-2">Support</h4>
                    <p className="text-muted-foreground">Comprehensive support throughout the system lifecycle with guaranteed response times.</p>
                  </div>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#36B5FF]">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from satisfied customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <InteractiveCard key={index} hoverEffect="lift" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <CheckCircle key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.client}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                    </div>
                  </CardContent>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default WhyChooseUs;
