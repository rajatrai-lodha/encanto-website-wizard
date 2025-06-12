
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Wrench, Leaf, Phone } from "lucide-react";

const WhyChooseUs = () => {
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Encanto Industries?</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Experience the difference with our comprehensive approach to parking solutions
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in the parking solutions industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <advantage.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Commitment to Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Rigorous testing and quality control processes ensure reliable performance 
                      and longevity of our parking systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer-Centric Approach</h3>
                    <p className="text-gray-600">
                      We prioritize customer satisfaction through personalized service, 
                      transparent communication, and responsive support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">
                      Investment in research and development keeps us at the forefront 
                      of parking technology and industry best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Promise</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Reliability</h4>
                  <p className="text-gray-600">Systems designed for 99%+ uptime with minimal maintenance requirements.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Safety</h4>
                  <p className="text-gray-600">Multiple safety features and fail-safe mechanisms protect vehicles and users.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Support</h4>
                  <p className="text-gray-600">Comprehensive support throughout the system lifecycle with guaranteed response times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.client}</p>
                    <p className="text-sm text-gray-600">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyChooseUs;
