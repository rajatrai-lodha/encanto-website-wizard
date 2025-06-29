
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
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100">
                Get in touch for a free consultation and customized parking solution
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <InteractiveCard hoverEffect="glow" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          type="text" 
                          required 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Your full name" 
                          className="bg-[#F5FBFF]/50 border-slate-300" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="Your phone number" 
                          className="bg-[#F5FBFF]/50 border-slate-300" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="your.email@example.com" 
                        className="bg-[#F5FBFF]/50 border-slate-300" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your parking requirements..." 
                        rows={5} 
                        className="flex w-full rounded-md border border-slate-300 bg-[#F5FBFF]/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36B5FF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-[#36B5FF] hover:bg-[#36B5FF]/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </InteractiveCard>

              {/* Contact Information */}
              <div className="space-y-8">
                <InteractiveCard hoverEffect="lift" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-[#36B5FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone Numbers</h3>
                        <p className="text-muted-foreground">8097465332</p>
                        <p className="text-muted-foreground">7990047746</p>
                        <p className="text-muted-foreground">022 3561 1681</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-[#36B5FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-muted-foreground">info@encanto.co.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-[#36B5FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Emergency support only</p>
                      </div>
                    </div>
                  </CardContent>
                </InteractiveCard>

                {/* Office Address */}
                <InteractiveCard hoverEffect="tilt" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Office Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-[#36B5FF]" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
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
                <InteractiveCard hoverEffect="tilt" className="bg-[#F5FBFF]/80 backdrop-blur-sm border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Factory Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#36B5FF]/20 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-[#36B5FF]" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">
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
        <section className="py-16 bg-[#F3F7FA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-[#36B5FF]">
                Find Us
              </h2>
              <p className="text-xl text-muted-foreground">Visit our office for direct consultation</p>
            </div>
            
            <div className="bg-[#F5FBFF]/80 backdrop-blur-sm border border-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-[#36B5FF] mx-auto mb-4 animate-float" />
                <p className="text-muted-foreground">Interactive map will be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  308/B Moreshwar Krupa, Eksar Road, Borivali West, Mumbai - 400092
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#36B5FF] to-[#36B5FF] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 text-blue-100">
              Call us now for immediate assistance or to schedule a site visit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#36B5FF] hover:bg-white/90">
                Call: 8097465332
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#36B5FF]">
                WhatsApp: 8097465332
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Contact;
