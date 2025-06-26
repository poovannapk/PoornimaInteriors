
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Eye } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      category: "kitchen",
      title: "Modern Kitchen Renovation",
      location: "Mumbai, Maharashtra",
      date: "2024",
      budget: "₹4,50,000",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete kitchen transformation with modular design, premium appliances, and smart storage solutions."
    },
    {
      id: 2,
      category: "living",
      title: "Contemporary Living Room",
      location: "Delhi, NCR",
      date: "2024",
      budget: "₹3,20,000",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant living space with contemporary furniture, ambient lighting, and premium finishes."
    },
    {
      id: 3,
      category: "bedroom",
      title: "Master Bedroom Suite",
      location: "Bangalore, Karnataka",
      date: "2024",
      budget: "₹2,80,000",
      beforeImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxurious master bedroom with custom wardrobe, study area, and sophisticated lighting."
    },
    {
      id: 4,
      category: "bathroom",
      title: "Luxury Bathroom Renovation",
      location: "Pune, Maharashtra",
      date: "2023",
      budget: "₹2,10,000",
      beforeImage: "https://images.unsplash.com/photo-1584622781564-1d987282b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1584622781564-1d987282b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern bathroom with premium fixtures, designer tiles, and spa-like ambiance."
    },
    {
      id: 5,
      category: "complete",
      title: "Complete Home Makeover",
      location: "Hyderabad, Telangana",
      date: "2023",
      budget: "₹12,50,000",
      beforeImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete 3BHK apartment renovation with contemporary design and premium finishes."
    },
    {
      id: 6,
      category: "ceiling",
      title: "Designer False Ceiling",
      location: "Chennai, Tamil Nadu",
      date: "2023",
      budget: "₹1,80,000",
      beforeImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant false ceiling design with integrated lighting and architectural elements."
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchen" },
    { id: "living", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "bathroom", label: "Bathroom" },
    { id: "ceiling", label: "False Ceiling" },
    { id: "complete", label: "Complete Home" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our stunning collection of completed projects and get inspired for your dream home
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.afterImage} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-black font-semibold">
                    {project.budget}
                  </Badge>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="opacity-90">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-900 hover:bg-blue-800" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Get Similar Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-900 mb-6 italic">
              "Poornima Interiors completely transformed our home beyond our expectations. The attention to detail and quality of work was exceptional. We couldn't be happier with the results!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Priya Sharma</div>
                <div className="text-gray-600">Mumbai, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and bring your vision to life
          </p>
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3">
            Start Your Project Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
