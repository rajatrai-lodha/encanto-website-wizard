
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleParking, ArrowUp, CircleParkingOff, Phone } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of parking technology, developing cutting-edge solutions that meet the evolving needs of urban spaces.",
      icon: CircleParking
    },
    {
      title: "Efficiency",
      description: "Our systems are designed for maximum space utilization with minimal operational complexity, ensuring optimal performance.",
      icon: ArrowUp
    },
    {
      title: "Reliability",
      description: "Built with robust engineering principles, our parking systems deliver consistent performance with minimal maintenance requirements.",
      icon: CircleParkingOff
    },
    {
      title: "Service",
      description: "We provide comprehensive support from installation to maintenance, ensuring long-term satisfaction for our clients.",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Encanto Industries</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Leading the revolution in smart parking solutions across India
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Encanto Industries, your premier destination for innovative parking solutions 
                tailored to modern urban living. We are committed to revolutionizing parking with 
                space-efficient systems, optimizing convenience, efficiency, and sustainability.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the parking industry, we have established ourselves as 
                a trusted partner for residential complexes, commercial buildings, and healthcare 
                facilities across India.
              </p>
              <p className="text-lg text-gray-600">
                Our focus: making parking hassle-free for everyone while maximizing space utilization 
                and minimizing environmental impact.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Established parking solution provider</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multiple successful installations across India</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Specialized in automated parking systems</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Comprehensive maintenance and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading provider of innovative parking solutions in India, 
                  transforming urban mobility through smart, sustainable, and efficient 
                  parking systems that enhance the quality of life in cities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To revolutionize parking with space-efficient, technologically advanced 
                  systems that optimize convenience, efficiency, and sustainability while 
                  providing exceptional service and support to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Encanto Industries?</h2>
            <p className="text-xl opacity-90">
              Experience the difference with our comprehensive approach to parking solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Expertise & Experience</h3>
              <p className="opacity-90">
                Years of experience in designing and implementing parking solutions 
                for diverse requirements and challenging spaces.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">End-to-End Service</h3>
              <p className="opacity-90">
                From initial consultation and design to installation, commissioning, 
                and ongoing maintenance support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quality & Reliability</h3>
              <p className="opacity-90">
                High-quality components and robust engineering ensure long-lasting 
                performance with minimal downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
