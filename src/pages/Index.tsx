
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowDown, ArrowUp, CircleParking, CircleParkingOff } from "lucide-react";

const Index = () => {
  const solutions = [
    {
      title: "G+1 Stack Parking",
      description: "Double your parking capacity with our efficient two-level stacking system.",
      icon: ArrowUp,
      features: ["Space efficient", "Cost effective", "Easy operation"]
    },
    {
      title: "G+2 Stack Parking",
      description: "Triple your parking space with our advanced three-level stacking solution.",
      icon: ArrowUp,
      features: ["Maximum space utilization", "Advanced safety", "Quick retrieval"]
    },
    {
      title: "Pit Stack Parking",
      description: "Underground parking solution for limited overhead space areas.",
      icon: ArrowDown,
      features: ["Underground solution", "Weather protected", "Space optimization"]
    },
    {
      title: "Puzzle Parking",
      description: "Horizontal sliding puzzle system for maximum space efficiency.",
      icon: CircleParking,
      features: ["Horizontal movement", "No pit required", "Modular design"]
    },
    {
      title: "Tower Parking",
      description: "Vertical automated parking towers for high-density parking needs.",
      icon: CircleParkingOff,
      features: ["Vertical storage", "Automated system", "High capacity"]
    }
  ];

  const projects = [
    "Suman Apartments (Nirmitee Developers)",
    "Kamal Nivas (ESKAY ELEVATORS LTD)",
    "Hawa Mahal (H. RISHABRAJ)",
    "21st Century Hospital, Vapi (Nadkarni Foundation)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionizing Urban Parking with Smart Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Welcome to Encanto Industries, your premier destination for innovative parking solutions tailored to modern urban living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Encanto Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to revolutionizing parking with space-efficient systems, 
              optimizing convenience, efficiency, and sustainability. Our focus: making parking hassle-free for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleParking className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge parking technology solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">Maximum space utilization with minimal footprint</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleParkingOff className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Robust systems with minimal maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Parking Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of automated parking systems for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading developers and institutions across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project}</CardTitle>
                  <CardDescription>
                    Advanced parking solution with reliable performance
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Parking Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and customized parking solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Get Free Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Call: 8097465332
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
