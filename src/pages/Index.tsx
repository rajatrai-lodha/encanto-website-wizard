import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import HeroImageSlider from "@/components/HeroImageSlider";
import HeroFloatingActions from "@/components/HeroFloatingActions";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff, CheckCircle, Building, Users, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = ['/lovable-uploads/e00c7cb2-90a7-4240-811a-85243021b9bd.png', '/lovable-uploads/6458eff2-4014-47e2-9cd0-7ca81b6afb38.png', '/lovable-uploads/ad25aa1a-6441-4e51-80a0-02404b5c8d06.png'];
  useEffect(() => {
    setIsLoaded(true);

    // Background image slider - changed to 4000ms (4 seconds)
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [heroImages.length]);
  const solutions = [{
    title: "G+1 Stack Parking",
    description: "Double your parking capacity with our efficient two-level stacking system.",
    icon: ArrowUp,
    features: ["Space efficient", "Cost effective", "Easy operation"],
    image: "/lovable-uploads/3cc7effc-535b-4d6c-be6a-5e472af9953e.png"
  }, {
    title: "G+2 Stack Parking",
    description: "Triple your parking space with our advanced three-level stacking solution.",
    icon: ArrowUp,
    features: ["Maximum space utilization", "Advanced safety", "Quick retrieval"],
    image: "/lovable-uploads/826245bf-1f4b-448f-a12e-785d57b060a2.png"
  }, {
    title: "Pit Stack Parking",
    description: "Underground parking solution for limited overhead space areas.",
    icon: ArrowDown,
    features: ["Underground solution", "Weather protected", "Space optimization"],
    image: "/lovable-uploads/be55bfe9-cbd4-433a-8f77-45064dc16a47.png"
  }, {
    title: "Puzzle Parking",
    description: "Horizontal sliding puzzle system for maximum space efficiency.",
    icon: CircleParking,
    features: ["Horizontal movement", "No pit required", "Modular design"],
    image: "/lovable-uploads/ca0c39e6-ee18-421c-8c60-308c9635f405.png"
  }, {
    title: "Tower Parking",
    description: "Vertical automated parking towers for high-density parking needs.",
    icon: CircleParkingOff,
    features: ["Vertical storage", "Automated system", "High capacity"],
    image: "/lovable-uploads/58f1bdec-0d74-4a16-9de1-636f4aa046b6.png"
  }];
  const projects = [{
    name: "Suman Apartments",
    client: "Nirmitee Developers",
    description: "Advanced stack parking solution for modern residential complex",
    image: "/lovable-uploads/43aa289b-6da1-4e50-be48-1a08832804e6.png"
  }, {
    name: "Tower Parking Installation",
    client: "Commercial Complex",
    description: "Multi-level automated parking tower for urban spaces",
    image: "/lovable-uploads/f98454ef-8973-4a8a-bd1c-7c47b86b4e35.png"
  }, {
    name: "Puzzle System Setup",
    client: "Residential Building",
    description: "Horizontal sliding puzzle parking system implementation",
    image: "/lovable-uploads/e42c0120-3dbf-43b8-b97a-ab71474d4cc7.png"
  }, {
    name: "Underground Platform",
    client: "Housing Society",
    description: "Pit stack parking solution for space-constrained areas",
    image: "/lovable-uploads/1e5e40d0-2411-45d5-947b-ff24aecc2b92.png"
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
  const whyChooseUs = [{
    icon: Shield,
    title: "Expert Engineering",
    desc: "15+ years of experience in automated parking solutions"
  }, {
    icon: CheckCircle,
    title: "Quality Assured",
    desc: "ISO certified manufacturing and installation processes"
  }, {
    icon: Zap,
    title: "24/7 Support",
    desc: "Round-the-clock maintenance and technical support"
  }, {
    icon: Building,
    title: "Cost Effective",
    desc: "Maximize space utilization while minimizing operational costs"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section with Background Image Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden sm:mobile-hero-center">
        {/* Background Images with Slider */}
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={image} alt={`Parking solution ${index + 1}`} className="w-full h-full object-cover" />
          </div>)}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Hero Floating Actions */}
        <HeroFloatingActions />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mobile-safe-padding">
          <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="mobile-headline-responsive md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-8 drop-shadow-2xl animate-pulse-heartbeat">
              Revolutionizing Urban Parking
            </h1>
            <h2 className={`text-lg sm:text-xl md:text-2xl font-medium text-center text-slate-200 mb-12 drop-shadow-xl transition-all duration-1000 delay-300 ${isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              PARKING EXCELLENCE THROUGH SMART TECHNOLOGY
            </h2>
            
            <div className={`flex justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link to="/projects">
                <Button className="interactive-button text-white px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 relative overflow-hidden group bg-sky-700 hover:bg-sky-600">
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Scroll Animation */}
      <section id="stats" data-animate className={`section-padding section-bg-light-blue transition-all duration-1000 ${visibleSections.has('stats') ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className={`text-center group hover:scale-105 transition-all duration-300 hover:-translate-y-2 cursor-pointer delay-${index * 100}`}>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2000}
                  className="stat-number group-hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-primary to-blue-600 bg-clip-text text-transparent"
                />
                <p className="stat-label group-hover:text-primary transition-colors duration-300">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Scroll Animation */}
      <section id="about" data-animate className={`section-padding section-bg-white transition-all duration-1000 ${visibleSections.has('about') ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">About Encanto Industries</h2>
            <p className="section-subtitle">
              We are committed to revolutionizing parking with space-efficient systems, 
              optimizing convenience, efficiency, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => <Card key={index} className="professional-card text-center group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white cursor-pointer">
                <CardHeader>
                  <div className="solution-icon mx-auto group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced Solutions Showcase with Scroll Animation */}
      <section id="solutions" data-animate className="">
        <div className="max-w-7xl mx-auto bg-zinc-50">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Parking Solutions</h2>
            <p className="section-subtitle">
              Comprehensive range of automated parking systems for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <Link key={index} to={`/solutions#${solution.title.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')}`}>
                <Card className="professional-card group overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                <div className="project-image mb-6 overflow-hidden">
                  <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="solution-icon group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => <li key={idx} className="flex items-center text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="font-medium">{feature}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Scroll Animation */}
      <section id="projects" data-animate className="">
        
      </section>

      {/* Enhanced CTA Section with Scroll Animation */}
      <section id="cta" data-animate className={`section-padding cta-gradient text-white relative overflow-hidden transition-all duration-1000 ${visibleSections.has('cta') ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute inset-0 opacity-10 bg-brand-lighter">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
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
              <Button className="bg-white text-primary hover:bg-gray-100 text-xl px-10 py-5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 relative overflow-hidden group">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <WhatsAppButton />
    </div>;
};
export default Index;