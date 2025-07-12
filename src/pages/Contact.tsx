import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect } from "react";
const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:mobile-section-center flex items-center justify-center overflow-hidden text-base">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-800 mobile-safe-padding">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text animate-pulse-slow text-white">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100 animate-slideInRight delay-300">
                Get in touch for a free consultation and customized parking solution
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Get in Touch */}
              <InteractiveCard hoverEffect="lift" className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                      <Phone className="h-6 w-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Phone Numbers</h3>
                      <a href="tel:8097465332" className="block text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline">8097465332</a>
                      <a href="tel:7990047746" className="block text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline">7990047746</a>
                      <a href="tel:022-3561-1681" className="block text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline">022 3561 1681</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                      <Mail className="h-6 w-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Email Address</h3>
                      <a href="mailto:info@encanto.co.in" className="text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline">info@encanto.co.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                      <Clock className="h-6 w-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Business Hours</h3>
                      <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">Sunday: Emergency support only</p>
                    </div>
                  </div>
                </CardContent>
              </InteractiveCard>

              {/* Combined Address Card */}
              <InteractiveCard hoverEffect="tilt" className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200 group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Office Address */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Office Address</h3>
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                        <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                      </div>
                      <div>
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                          308/B Moreshwar Krupa<br />
                          Eksar Road, Borivali West<br />
                          Mumbai - 400092<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Factory Address */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Factory Address</h3>
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                        <MapPin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                      </div>
                      <div>
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                          Umar Compound Industrial<br />
                          Sopara Phata, Nallasopara East<br />
                          Palghar - 401209<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Map Section */}
        

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 bg-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 hover:scale-105 text-zinc-900">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 animate-slideInRight delay-200 text-gray-500">
                Call us now for immediate assistance or to schedule a site visit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <a href="tel:8097465332" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Call: 8097465332
                </a>
                
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>;
};
export default Contact;