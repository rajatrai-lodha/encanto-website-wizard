import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden text-base">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-800">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text animate-pulse-slow text-white">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100 animate-slideInRight delay-300">
                Get in touch for a free consultation and customized parking solution
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <InteractiveCard hoverEffect="glow" className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="transform transition-all duration-300 hover:scale-105">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="glass-effect transition-all duration-300 focus:scale-105" />
                      </div>
                      <div className="transform transition-all duration-300 hover:scale-105">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="Your phone number" className="glass-effect transition-all duration-300 focus:scale-105" />
                      </div>
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="glass-effect transition-all duration-300 focus:scale-105" />
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Label htmlFor="message">Message *</Label>
                      <textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about your parking requirements..." rows={5} className="flex w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass-effect transition-all duration-300 focus:scale-105" />
                    </div>
                    
                    <Button type="submit" className="w-full btn-futuristic interactive-button transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </InteractiveCard>

              {/* Contact Information */}
              <div className="space-y-8">
                <InteractiveCard hoverEffect="lift" className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200 group">
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
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">8097465332</p>
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">7990047746</p>
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">022 3561 1681</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                        <Mail className="h-6 w-6 text-primary group-hover:animate-bounce" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Email Address</h3>
                        <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">info@encanto.co.in</p>
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

                {/* Office Address */}
                <InteractiveCard hoverEffect="tilt" className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up delay-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Office Address</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </InteractiveCard>

                {/* Factory Address */}
                <InteractiveCard hoverEffect="tilt" className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up delay-400 group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">Factory Address</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </InteractiveCard>
              </div>
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
                <Button size="lg" className="btn-futuristic interactive-button transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  Call: 8097465332
                </Button>
                <Button size="lg" variant="outline" className="btn-futuristic interactive-button transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  WhatsApp: 8097465332
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
export default Contact;