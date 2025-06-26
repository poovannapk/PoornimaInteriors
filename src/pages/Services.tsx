
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Clock, Users, Award } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      category: "kitchen",
      title: "Kitchen Renovation",
      description: "Complete kitchen makeover with modular designs, premium appliances, and smart storage solutions.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹2,50,000 - ₹8,00,000",
      duration: "3-6 weeks",
      features: [
        "Modular kitchen design",
        "Premium appliances",
        "Smart storage solutions",
        "Granite/Quartz countertops",
        "Electrical & plumbing work",
        "3-year warranty"
      ]
    },
    {
      id: 2,
      category: "living",
      title: "Living Room Interiors",
      description: "Transform your living space with contemporary designs, premium furniture, and ambient lighting.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,80,000 - ₹5,50,000",
      duration: "2-4 weeks",
      features: [
        "Custom furniture design",
        "Premium upholstery",
        "Ambient lighting",
        "Wall treatments",
        "Entertainment unit",
        "2-year warranty"
      ]
    },
    {
      id: 3,
      category: "bedroom",
      title: "Bedroom Interiors",
      description: "Create serene and comfortable bedrooms with custom wardrobes, luxury bedding, and mood lighting.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,20,000 - ₹4,00,000",
      duration: "2-3 weeks",
      features: [
        "Custom wardrobe design",
        "Luxury bedding solutions",
        "Mood lighting",
        "Study/dressing area",
        "Premium flooring",
        "2-year warranty"
      ]
    },
    {
      id: 4,
      category: "ceiling",
      title: "False Ceiling",
      description: "Elegant false ceiling designs with integrated lighting, AC ducts, and architectural elements.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹80,000 - ₹2,50,000",
      duration: "1-2 weeks",
      features: [
        "Gypsum board ceiling",
        "Integrated LED lighting",
        "AC duct concealment",
        "Architectural elements",
        "Paint & finishing",
        "1-year warranty"
      ]
    },
    {
      id: 5,
      category: "bathroom",
      title: "Bathroom Renovation",
      description: "Luxury bathroom designs with premium fixtures, tiles, and modern amenities.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987282b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1,50,000 - ₹4,50,000",
      duration: "2-3 weeks",
      features: [
        "Premium sanitaryware",
        "Designer tiles",
        "Modern fixtures",
        "Waterproofing",
        "Exhaust & ventilation",
        "3-year warranty"
      ]
    },
    {
      id: 6,
      category: "complete",
      title: "Complete Home Renovation",
      description: "End-to-end home transformation with premium finishes, furniture, and interior design.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹8,50,000 - ₹25,00,000",
      duration: "8-12 weeks",
      features: [
        "Complete interior design",
        "Premium materials",
        "Custom furniture",
        "Electrical & plumbing",
        "Flooring & painting",
        "5-year warranty"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "kitchen", label: "Kitchen" },
    { id: "living", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "bathroom", label: "Bathroom" },
    { id: "ceiling", label: "False Ceiling" },
    { id: "complete", label: "Complete Home" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive interior design and renovation solutions for every room in your home
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Poornima Interiors?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring 10+ years of experience and premium quality to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We use only the finest materials and work with skilled craftsmen to ensure exceptional quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">We respect your time and ensure project completion within the committed timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Our experienced designers and craftsmen bring your vision to life with precision.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-black font-semibold">
                    {service.price}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and detailed quote for your home renovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              <Link to="/cost-estimator">Get Cost Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
