
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "G+1 Stack Parking",
      description: "Double your parking capacity with our efficient two-level stacking system perfect for residential and commercial spaces.",
      icon: ArrowUp,
      features: [
        "Doubles parking capacity",
        "Cost-effective solution",
        "Easy operation with remote control",
        "Suitable for all car types",
        "Quick installation",
        "Minimal maintenance required"
      ],
      benefits: [
        "50% space saving compared to conventional parking",
        "ROI within 2-3 years",
        "Weather protection for vehicles",
        "Enhanced security"
      ]
    },
    {
      title: "G+2 Stack Parking",
      description: "Triple your parking space with our advanced three-level stacking solution for maximum space optimization.",
      icon: ArrowUp,
      features: [
        "Triples parking capacity",
        "Advanced safety systems",
        "Quick retrieval time (90 seconds)",
        "Remote monitoring capability",
        "Customizable dimensions",
        "Emergency manual operation"
      ],
      benefits: [
        "200% increase in parking capacity",
        "Automated operation reduces human error",
        "Suitable for high-traffic areas",
        "Long-term cost savings"
      ]
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution designed for areas with limited overhead space but available ground excavation.",
      icon: ArrowDown,
      features: [
        "Underground space utilization",
        "No overhead structure required",
        "Weather-proof parking",
        "Hydraulic lifting system",
        "Safety sensors and alarms",
        "Compact design"
      ],
      benefits: [
        "Ideal for low-ceiling areas",
        "Complete weather protection",
        "Aesthetic appeal maintained",
        "Energy-efficient operation"
      ]
    },
    {
      title: "Puzzle Parking System",
      description: "Horizontal sliding puzzle system that maximizes space efficiency through intelligent movement patterns.",
      icon: CircleParking,
      features: [
        "Horizontal sliding mechanism",
        "No pit excavation required",
        "Modular design for easy expansion",
        "Multiple size configurations",
        "User-friendly operation",
        "Minimal structural requirements"
      ],
      benefits: [
        "Flexible installation options",
        "Lower installation costs",
        "Quick vehicle retrieval",
        "Suitable for retrofit projects"
      ]
    },
    {
      title: "Tower Parking System",
      description: "Vertical automated parking towers for high-density parking needs in minimal ground space.",
      icon: CircleParkingOff,
      features: [
        "Vertical storage up to 20+ levels",
        "Fully automated operation",
        "High-capacity parking solution",
        "Advanced control systems",
        "Multiple entry/exit points",
        "24/7 operational capability"
      ],
      benefits: [
        "Maximum space utilization",
        "Minimal ground footprint",
        "Faster parking and retrieval",
        "Suitable for commercial complexes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Parking Solutions</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive range of automated parking systems designed for every space and requirement
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <solution.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-lg">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <div className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={`bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <solution.icon className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">System Diagram</p>
                    <p className="text-sm text-gray-500 mt-2">{solution.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our engineering team can design and implement customized parking solutions 
            tailored to your specific requirements and space constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;
