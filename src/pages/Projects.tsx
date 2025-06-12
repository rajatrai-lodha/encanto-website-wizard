import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Suman Apartments",
      client: "Nirmitee Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+1 Stack Parking",
      capacity: "24 Cars",
      year: "2023",
      description: "Advanced stack parking solution for modern residential complex with space optimization."
    },
    {
      name: "Kamal Nivas",
      client: "ESKAY ELEVATORS LTD",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+2 Stack Parking",
      capacity: "36 Cars",
      year: "2023",
      description: "Triple-level stacking system providing maximum parking capacity in limited space."
    },
    {
      name: "Hawa Mahal",
      client: "H. RISHABRAJ",
      location: "Rajasthan",
      type: "Commercial",
      system: "Puzzle Parking",
      capacity: "20 Cars",
      year: "2023",
      description: "Horizontal sliding puzzle system designed for heritage area with space constraints."
    },
    {
      name: "Sagar Darshan",
      client: "Anmol Nirmitee Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "G+1 Stack Parking",
      capacity: "28 Cars",
      year: "2023",
      description: "Efficient two-level parking solution for premium residential development."
    },
    {
      name: "21st Century Hospital",
      client: "Nadkarni Foundation",
      location: "Vapi, Gujarat",
      type: "Healthcare",
      system: "Tower Parking",
      capacity: "50 Cars",
      year: "2023",
      description: "Automated tower parking system for high-traffic healthcare facility."
    },
    {
      name: "Hemgiri Apartments",
      client: "Pyramid Developers",
      location: "Mumbai, Maharashtra",
      type: "Residential",
      system: "Pit Stack Parking",
      capacity: "32 Cars",
      year: "2023",
      description: "Underground parking solution optimized for limited overhead space."
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Building },
    { label: "Parking Spaces Created", value: "1000+", icon: MapPin },
    { label: "Satisfied Clients", value: "45+", icon: Users }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential": return "bg-blue-100 text-blue-800";
      case "Commercial": return "bg-green-100 text-green-800";
      case "Healthcare": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Trusted by leading developers and institutions across India
          </p>
        </div>
      </section>

      {/* Interactive Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Interactive showcase of our completed parking systems - click to explore
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise across different sectors and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                  </div>
                  <CardDescription className="font-medium text-blue-600">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">System:</span>
                        <p className="text-gray-600">{project.system}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Capacity:</span>
                        <p className="text-gray-600">{project.capacity}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-gray-500">Completed: {project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Providing parking solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Residential Complexes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apartment buildings, housing societies, and residential towers requiring 
                  efficient parking solutions for residents and visitors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Commercial Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Office complexes, shopping centers, and commercial establishments 
                  needing high-capacity parking for employees and customers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Healthcare Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hospitals, clinics, and medical centers requiring organized parking 
                  for patients, visitors, and medical staff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
