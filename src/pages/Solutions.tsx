import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDown, ArrowUp, Puzzle, Building2, Layers3, CheckCircle, Settings, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Solutions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const parkingSolutions = [{
    title: "G+1 Stack Parking",
    summary: "Double your parking capacity with our efficient two-level stacking system.",
    icon: ArrowUp,
    color: "from-blue-500 to-blue-700",
    features: ["Space efficient", "Cost effective", "Easy operation", "Customizable for site requirements"],
    moreDetails: `Can be designed to fit specific site requirements and constraints, allowing for customization based on available space and architectural considerations.

Offers quick and convenient access to vehicles, minimizing the time required for retrieval.

This system is also available in 4 pole model.`,
    image: "/lovable-uploads/3cc7effc-535b-4d6c-be6a-5e472af9953e.png"
  }, {
    title: "G+2 Stack Parking",
    summary: "Triple your parking space with our advanced three-level stacking solution.",
    icon: Layers3,
    color: "from-indigo-500 to-indigo-700",
    features: ["Maximum space utilization", "Advanced safety", "Quick retrieval", "Customizable design"],
    moreDetails: `Can be designed to fit specific site requirements and constraints, allowing for customization based on available space and architectural considerations.

Offers quick and convenient access to vehicles, minimizing the time required for retrieval.

This system is also available in 4 pole model.`,
    image: "/lovable-uploads/826245bf-1f4b-448f-a12e-785d57b060a2.png"
  }, {
    title: "Pit Stack Parking",
    summary: "Underground parking solution for areas with limited overhead space.",
    icon: ArrowDown,
    color: "from-purple-500 to-purple-700",
    features: ["Uses hydraulic lifts/platforms", "Maximizes space by storing vehicles below ground level", "Improved traffic flow in urban areas", "Suitable for densely populated locations"],
    moreDetails: `By utilizing both above-ground and below-ground levels for parking, pit stack systems can accommodate more vehicles compared to traditional methods.

Efficient storage and retrieval processes help minimize congestion and parking-related traffic.

This system is also available in 4 pole model.`,
    image: "/lovable-uploads/be55bfe9-cbd4-433a-8f77-45064dc16a47.png"
  }, {
    title: "Puzzle Parking",
    summary: "Horizontal sliding puzzle system for maximum space efficiency.",
    icon: Puzzle,
    color: "from-cyan-500 to-cyan-700",
    features: ["Efficient use of vertical space", "User-friendly and automated", "Fast car retrieval", "Modular and flexible configuration"],
    moreDetails: `Users typically drop off their cars at a designated area, and the automated system takes care of parking and retrieval.

Simple upkeep and dependable functionality for hassle-free maintenance.`,
    image: "/lovable-uploads/ca0c39e6-ee18-421c-8c60-308c9635f405.png"
  }, {
    title: "Tower Parking",
    summary: "Vertical automated parking towers for high-density needs.",
    icon: Building2,
    color: "from-teal-500 to-teal-700",
    features: ["Vertical storage", "Automated system", "High capacity", "Computer-controlled efficiency"],
    moreDetails: `Accommodates parking for up to four cars within the space typically needed for three.

Simple upkeep and dependable functionality for hassle-free maintenance.

Can be set up as an independent structure.

Design tailored to enhance user experience and human comfort.

Incorporation of sophisticated computer-controlled systems for efficient operations.

## Capacity Table:
- **18 Cars:** 14 Sedan, 4 SUV, Total Height: 22100mm
- **20 Cars:** 16 Sedan, 4 SUV, Total Height: 23750mm  
- **22 Cars:** 18 Sedan, 4 SUV, Total Height: 25400mm
- **24 Cars:** 18 Sedan, 6 SUV, Total Height: 27600mm
- **25 Cars:** 20 Sedan, 6 SUV, Total Height: 29250mm
- **28 Cars:** 22 Sedan, 6 SUV, Total Height: 30900mm
- **30 Cars:** 24 Sedan, 6 SUV, Total Height: 32550mm
- **32 Cars:** 24 Sedan, 8 SUV, Total Height: 24750mm
- **34 Cars:** 26 Sedan, 8 SUV, Total Height: 36400mm
- **36 Cars:** 28 Sedan, 8 SUV, Total Height: 38050mm
- **38 Cars:** 30 Sedan, 8 SUV, Total Height: 39700mm
- **40 Cars:** 30 Sedan, 10 SUV, Total Height: 41900mm
- **42 Cars:** 32 Sedan, 10 SUV, Total Height: 43550mm
- **44 Cars:** 34 Sedan, 10 SUV, Total Height: 45220mm
- **46 Cars:** 36 Sedan, 10 SUV, Total Height: 46850mm
- **48 Cars:** 36 Sedan, 12 SUV, Total Height: 49050mm
- **50 Cars:** 38 Sedan, 12 SUV, Total Height: 50700mm`,
    image: "/lovable-uploads/58f1bdec-0d74-4a16-9de1-636f4aa046b6.png"
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient opacity-30"></div>
      <div className="fixed inset-0 grid-bg opacity-10"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-95"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text animate-pulse-heartbeat text-white">
                Parking Solutions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Innovative automated parking systems that maximize space efficiency and transform urban parking challenges into smart solutions
              </p>
            </div>
          </div>
        </section>

        {/* Parking Solutions Gallery */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50/80"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Solutions Portfolio
              </h2>
              
            </div>
            
            <div className="space-y-12">
              {parkingSolutions.map((solution, index) => <div key={index} className={`animate-fade-in-up delay-${index * 100}`}>
                  <InteractiveCard hoverEffect="lift" className="p-8 bg-white/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      {/* Image Section */}
                      <div className="lg:col-span-1">
                        <div className="relative group overflow-hidden rounded-xl shadow-lg">
                          <img src={solution.image} alt={solution.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                            <solution.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                              {solution.title}
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                              {solution.summary}
                            </p>
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {solution.features.map((feature, idx) => <Badge key={idx} variant="secondary" className="text-sm p-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default justify-start">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </Badge>)}
                          </div>
                        </div>
                        
                        {/* Expandable Details */}
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value={`item-${index}`} className="border-primary/20">
                            <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              More Details
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                                <div className="prose prose-slate max-w-none">
                                  {solution.moreDetails.split('\n\n').map((paragraph, pIdx) => {
                                if (paragraph.startsWith('## ')) {
                                  return <h4 key={pIdx} className="text-lg font-semibold text-slate-800 mt-6 mb-3">
                                          {paragraph.replace('## ', '')}
                                        </h4>;
                                }
                                if (paragraph.startsWith('- **')) {
                                  // Special handling for Tower Parking capacity table
                                  if (solution.title === "Tower Parking" && paragraph.includes('18 Cars:')) {
                                    const capacityData = [{
                                      cars: 18,
                                      sedan: 14,
                                      suv: 4,
                                      height: 22100
                                    }, {
                                      cars: 20,
                                      sedan: 16,
                                      suv: 4,
                                      height: 23750
                                    }, {
                                      cars: 22,
                                      sedan: 18,
                                      suv: 4,
                                      height: 25400
                                    }, {
                                      cars: 24,
                                      sedan: 18,
                                      suv: 6,
                                      height: 27600
                                    }, {
                                      cars: 25,
                                      sedan: 20,
                                      suv: 6,
                                      height: 29250
                                    }, {
                                      cars: 28,
                                      sedan: 22,
                                      suv: 6,
                                      height: 30900
                                    }, {
                                      cars: 30,
                                      sedan: 24,
                                      suv: 6,
                                      height: 32550
                                    }, {
                                      cars: 32,
                                      sedan: 24,
                                      suv: 8,
                                      height: 24750
                                    }, {
                                      cars: 34,
                                      sedan: 26,
                                      suv: 8,
                                      height: 36400
                                    }, {
                                      cars: 36,
                                      sedan: 28,
                                      suv: 8,
                                      height: 38050
                                    }, {
                                      cars: 38,
                                      sedan: 30,
                                      suv: 8,
                                      height: 39700
                                    }, {
                                      cars: 40,
                                      sedan: 30,
                                      suv: 10,
                                      height: 41900
                                    }, {
                                      cars: 42,
                                      sedan: 32,
                                      suv: 10,
                                      height: 43550
                                    }, {
                                      cars: 44,
                                      sedan: 34,
                                      suv: 10,
                                      height: 45220
                                    }, {
                                      cars: 46,
                                      sedan: 36,
                                      suv: 10,
                                      height: 46850
                                    }, {
                                      cars: 48,
                                      sedan: 36,
                                      suv: 12,
                                      height: 49050
                                    }, {
                                      cars: 50,
                                      sedan: 38,
                                      suv: 12,
                                      height: 50700
                                    }];
                                    return <div key={pIdx} className="mt-4 overflow-x-auto">
                                        <Table className="w-full">
                                          <TableHeader>
                                            <TableRow className="bg-primary/5">
                                              <TableHead className="font-bold text-slate-800">No. of Cars</TableHead>
                                              <TableHead className="font-bold text-slate-800">No. of Sedan</TableHead>
                                              <TableHead className="font-bold text-slate-800">No. of SUV</TableHead>
                                              <TableHead className="font-bold text-slate-800">Total Height (mm)</TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {capacityData.map((row, idx) => <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                <TableCell className="font-medium">{row.cars}</TableCell>
                                                <TableCell>{row.sedan}</TableCell>
                                                <TableCell>{row.suv}</TableCell>
                                                <TableCell>{row.height}</TableCell>
                                              </TableRow>)}
                                          </TableBody>
                                        </Table>
                                      </div>;
                                  }
                                  return <div key={pIdx} className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                                          {paragraph.split('\n').map((line, lIdx) => <div key={lIdx} className="text-sm bg-white p-3 rounded border border-slate-200">
                                              {line.replace('- **', '').replace('**', ': ')}
                                            </div>)}
                                        </div>;
                                }
                                return <p key={pIdx} className="text-slate-700 leading-relaxed mb-4">
                                        {paragraph}
                                      </p>;
                              })}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </InteractiveCard>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent"></div>
          
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Parking Space?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Get expert consultation and discover the perfect parking solution for your specific requirements. 
              Our team will help you optimize space, reduce costs, and enhance user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 interactive-button">
                  <Shield className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 interactive-button">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>;
};
export default Solutions;