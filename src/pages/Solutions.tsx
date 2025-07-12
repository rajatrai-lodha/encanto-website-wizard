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
import { ArrowDown, ArrowUp, Puzzle, Building2, Layers3, CheckCircle, Settings, Zap, Shield, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const Solutions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const [selectedImages, setSelectedImages] = useState<{[key: number]: number}>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const parkingSolutions = [{
    title: "G+1 Stack Parking",
    summary: "Double your parking capacity with our efficient two-level stacking system.",
    icon: ArrowUp,
    color: "from-blue-500 to-blue-700",
    features: ["Space efficient", "Cost effective", "Easy operation", "Customizable for site requirements"],
    moreDetails: [
      "G+1 stack parking can be a cost-effective solution, especially when the cost of land is high. By maximizing the use of vertical space, it reduces the amount of land required for parking, potentially lowering overall project costs.",
      "G+1 stack parking systems can be designed to fit specific site requirements and constraints. This flexibility allows for customization based on available space and architectural considerations.",
      "Users of G+1 stack parking can generally enjoy quick and convenient access to their vehicles. The stack parking system is designed for efficient retrieval, minimizing the time required for users to get their cars.",
      "This system is also available in 4 pole model."
    ],
    images: [
      "/lovable-uploads/f0e7e380-c391-4fb6-bc87-5238f060265f.png",
      "/lovable-uploads/1881797d-6228-4b4d-b7ec-bb670d8201ef.png",
      "/lovable-uploads/99da3557-ee03-40c1-9c8c-b334304a4ed2.png",
      "/lovable-uploads/cf084950-875e-46ea-a986-c0dfc0a75dcc.png",
      "/lovable-uploads/352c61ee-2e4a-4740-b3fc-475b359ae2e6.png",
      "/lovable-uploads/be437f42-08ea-414d-9c61-f2529728a023.png"
    ]
  }, {
    title: "G+2 Stack Parking",
    summary: "Triple your parking space with our advanced three-level stacking solution.",
    icon: Layers3,
    color: "from-indigo-500 to-indigo-700",
    features: ["Maximum space utilization", "Advanced safety", "Quick retrieval", "Customizable design"],
    moreDetails: [
      "G+2 stack parking can be a cost-effective solution, especially when the cost of land is high. By maximizing the use of vertical space, it reduces the amount of land required for parking, potentially lowering overall project costs.",
      "G+2 stack parking systems can be designed to fit specific site requirements and constraints. This flexibility allows for customization based on available space and architectural considerations.",
      "Users of G+2 stack parking can generally enjoy quick and convenient access to their vehicles. The stack parking system is designed for efficient retrieval, minimizing the time required for users to get their cars.",
      "This system is also available in 4 pole model."
    ],
    images: [
      "/lovable-uploads/98e63056-5eb8-4001-b8a1-7c254510f749.png",
      "/lovable-uploads/cffffc37-0a89-40d2-80d3-fe8f92343747.png",
      "/lovable-uploads/bc5e830a-456e-4bc5-800b-7a0faf8c4430.png",
      "/lovable-uploads/161d2cb5-da8c-41f3-b4a5-bebdd6d3e869.png"
    ]
  }, {
    title: "Pit Stack Parking",
    summary: "Underground parking solution for areas with limited overhead space.",
    icon: ArrowDown,
    color: "from-purple-500 to-purple-700",
    features: ["Uses hydraulic lifts/platforms", "Maximizes space by storing vehicles below ground level", "Improved traffic flow in urban areas", "Suitable for densely populated locations"],
    moreDetails: [
      "These systems utilize hydraulic lifts or platforms to lower vehicles into the pits for storage and retrieval.",
      "Pit stack parking maximizes the use of available space by storing vehicles below ground level. This makes it suitable for areas with limited surface area for parking, allowing for more efficient land use.",
      "By utilizing both above-ground and below-ground levels for parking, pit stack systems can accommodate more vehicles compared to traditional parking methods. This is particularly beneficial in densely populated urban areas where parking demand is high.",
      "Pit stack parking systems can contribute to improved traffic flow in urban areas by reducing the time spent searching for parking spaces. Efficient storage and retrieval processes help minimize congestion and alleviate parking-related traffic.",
      "This system is also available in 4 pole model."
    ],
    images: [
      "/lovable-uploads/42ab4556-d1f5-42a8-b257-89907028baeb.png",
      "/lovable-uploads/c12d5f6a-b21b-496c-b6cd-7a361a6a8636.png",
      "/lovable-uploads/c6187bd1-23b8-461b-8e45-b78db9842cb3.png",
      "/lovable-uploads/0a6ed728-97e3-49d2-84ac-43eec70a9cf4.png",
      "/lovable-uploads/a1c377a4-6b46-48fa-b9ce-7fb9af3763cc.png"
    ]
  }, {
    title: "Puzzle Parking",
    summary: "Horizontal sliding puzzle system for maximum space efficiency.",
    icon: Puzzle,
    color: "from-cyan-500 to-cyan-700",
    features: ["Efficient use of vertical space", "User-friendly and automated", "Fast car retrieval", "Modular and flexible configuration"],
    moreDetails: [
      "They utilize vertical space efficiently, making them suitable for areas with limited horizontal space. Simple upkeep and dependable functionality for hassle-free maintenance.",
      "Puzzle parking systems are user-friendly and convenient. Users typically drop off their cars at a designated area, and the automated system takes care of the parking process.",
      "Automated parking systems can retrieve cars faster than traditional parking methods.",
      "Puzzle parking systems can be designed to fit specific site requirements and constraints. The modular nature of these systems allows for flexibility in configuration, making them suitable for various environments."
    ],
    images: [
      "/lovable-uploads/e676c6d0-b37a-469e-8883-d37e00bd0907.png",
      "/lovable-uploads/e8fa59a7-630b-4c9c-b382-0e603d0fef6f.png",
      "/lovable-uploads/961af773-d705-4c93-b7f6-b2f6ca2849f6.png",
      "/lovable-uploads/df8f85d4-faaa-42b5-a86a-58889d0e73fa.png"
    ]
  }, {
    title: "Tower Parking",
    summary: "Vertical automated parking towers for high-density needs.",
    icon: Building2,
    color: "from-teal-500 to-teal-700",
    features: ["Vertical storage", "Automated system", "High capacity", "Computer-controlled efficiency"],
    moreDetails: [
      "Accommodates parking for up to four cars within the space typically needed for three.",
      "Simple upkeep and dependable functionality for hassle-free maintenance.",
      "Can be set up as an independent structure, standing on its own.",
      "Design tailored to enhance user experience and human comfort.",
      "Incorporation of sophisticated computer-controlled systems for efficient operations."
    ],
    images: [
      "/lovable-uploads/588155db-38bf-4a12-bff7-963c3057b058.png",
      "/lovable-uploads/7f5e381d-7801-4bfe-a11d-f9a669b22003.png",
      "/lovable-uploads/cee14e77-478f-4ce3-a0b3-15c7923fcc5b.png",
      "/lovable-uploads/758613d7-e8de-408a-96a0-15ef61d82e65.png",
      "/lovable-uploads/25fa5630-6f45-45f7-8551-29de016500fa.png",
      "/lovable-uploads/352873fb-1d00-4053-90a2-f804d45cbccc.png"
    ]
  }];

  const handleImageSelect = (solutionIndex: number, imageIndex: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [solutionIndex]: imageIndex
    }));
  };

  const navigateImage = (solutionIndex: number, direction: 'prev' | 'next') => {
    const currentIndex = selectedImages[solutionIndex] || 0;
    const maxIndex = parkingSolutions[solutionIndex].images.length - 1;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    } else {
      newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    }
    
    setSelectedImages(prev => ({
      ...prev,
      [solutionIndex]: newIndex
    }));
  };
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
              {parkingSolutions.map((solution, index) => <div key={index} id={solution.title.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')} className={`scroll-mt-32 animate-fade-in-up delay-${index * 100}`}>
                  <InteractiveCard hoverEffect="lift" className="p-8 bg-white/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      {/* Image Gallery Section */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4">
                           {/* Main Image */}
                           <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openModal(solution.images[selectedImages[index] || 0])}>
                             <img 
                               src={solution.images[selectedImages[index] || 0]} 
                               alt={solution.title} 
                               className="w-full h-64 object-contain bg-slate-100 group-hover:scale-110 transition-transform duration-500" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                 <span className="text-white text-sm font-medium">Click to expand</span>
                               </div>
                             </div>
                            
                             {/* Navigation Arrows */}
                             <button 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 navigateImage(index, 'prev');
                               }}
                               className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                             >
                               <ChevronLeft className="h-5 w-5" />
                             </button>
                             <button 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 navigateImage(index, 'next');
                               }}
                               className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                             >
                               <ChevronRight className="h-5 w-5" />
                             </button>
                          </div>
                          
                          {/* Thumbnail Navigation */}
                          <div className="grid grid-cols-5 gap-2">
                            {solution.images.map((image, imageIndex) => (
                               <button
                                 key={imageIndex}
                                 onClick={(e) => {
                                   e.stopPropagation();
                                   handleImageSelect(index, imageIndex);
                                 }}
                                 onDoubleClick={() => openModal(image)}
                                 className={`relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer ${
                                   (selectedImages[index] || 0) === imageIndex 
                                     ? 'ring-2 ring-primary scale-105' 
                                     : 'hover:scale-105 opacity-70 hover:opacity-100'
                                 }`}
                               >
                                 <img 
                                   src={image} 
                                   alt={`${solution.title} ${imageIndex + 1}`} 
                                   className="w-full h-12 object-contain bg-slate-50"
                                 />
                               </button>
                            ))}
                          </div>
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
                            <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                              More Details
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                                <div className="prose prose-slate max-w-none">
                                  <div className="space-y-4">
                                    {solution.moreDetails.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                                          {detailIndex + 1}
                                        </div>
                                        <p className="text-slate-700 leading-relaxed">
                                          {detail}
                                        </p>
                                      </div>
                                    ))}
                                    
                                    {/* Tower Parking Capacity Table */}
                                    {solution.title === "Tower Parking" && (
                                      <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Capacity Table</h4>
                                        <div className="overflow-x-auto">
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
                                              {[
                                                { cars: 18, sedan: 14, suv: 4, height: 22100 },
                                                { cars: 20, sedan: 16, suv: 4, height: 23750 },
                                                { cars: 22, sedan: 18, suv: 4, height: 25400 },
                                                { cars: 24, sedan: 18, suv: 6, height: 27600 },
                                                { cars: 25, sedan: 20, suv: 6, height: 29250 },
                                                { cars: 28, sedan: 22, suv: 6, height: 30900 },
                                                { cars: 30, sedan: 24, suv: 6, height: 32550 },
                                                { cars: 32, sedan: 24, suv: 8, height: 24750 },
                                                { cars: 34, sedan: 26, suv: 8, height: 36400 },
                                                { cars: 36, sedan: 28, suv: 8, height: 38050 },
                                                { cars: 38, sedan: 30, suv: 8, height: 39700 },
                                                { cars: 40, sedan: 30, suv: 10, height: 41900 },
                                                { cars: 42, sedan: 32, suv: 10, height: 43550 },
                                                { cars: 44, sedan: 34, suv: 10, height: 45220 },
                                                { cars: 46, sedan: 36, suv: 10, height: 46850 },
                                                { cars: 48, sedan: 36, suv: 12, height: 49050 },
                                                { cars: 50, sedan: 38, suv: 12, height: 50700 }
                                              ].map((row, idx) => (
                                                <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                  <TableCell className="font-medium">{row.cars}</TableCell>
                                                  <TableCell>{row.sedan}</TableCell>
                                                  <TableCell>{row.suv}</TableCell>
                                                  <TableCell>{row.height}</TableCell>
                                                </TableRow>
                                              ))}
                                            </TableBody>
                                          </Table>
                                        </div>
                                      </div>
                                    )}
                                  </div>
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
        

        <Footer />
        <WhatsAppButton />
      </div>

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 bg-black border-none overflow-hidden flex items-center justify-center">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
          >
            <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </button>
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={modalImage}
              alt="Expanded view"
              className="object-contain"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Solutions;