
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Home, Ruler, IndianRupee, CheckCircle } from "lucide-react";

const CostEstimator = () => {
  const [formData, setFormData] = useState({
    rooms: 1,
    sqft: 500,
    homeType: "",
    services: [] as string[],
    finishType: "",
    timeline: ""
  });
  
  const [estimate, setEstimate] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);

  const homeTypes = [
    { value: "1bhk", label: "1 BHK", multiplier: 1 },
    { value: "2bhk", label: "2 BHK", multiplier: 1.5 },
    { value: "3bhk", label: "3 BHK", multiplier: 2 },
    { value: "4bhk", label: "4+ BHK", multiplier: 2.5 },
    { value: "villa", label: "Villa/Independent House", multiplier: 3 }
  ];

  const services = [
    { id: "kitchen", label: "Kitchen Renovation", basePrice: 200000 },
    { id: "living", label: "Living Room", basePrice: 150000 },
    { id: "bedroom", label: "Bedroom Interiors", basePrice: 100000 },
    { id: "bathroom", label: "Bathroom Renovation", basePrice: 120000 },
    { id: "ceiling", label: "False Ceiling", basePrice: 80000 },
    { id: "flooring", label: "Flooring", basePrice: 60000 },
    { id: "painting", label: "Painting", basePrice: 40000 },
    { id: "electrical", label: "Electrical Work", basePrice: 50000 },
    { id: "plumbing", label: "Plumbing", basePrice: 45000 }
  ];

  const finishTypes = [
    { value: "basic", label: "Basic", multiplier: 0.8 },
    { value: "standard", label: "Standard", multiplier: 1 },
    { value: "premium", label: "Premium", multiplier: 1.5 },
    { value: "luxury", label: "Luxury", multiplier: 2 }
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(id => id !== serviceId)
    }));
  };

  const calculateEstimate = () => {
    let totalCost = 0;
    
    // Base cost calculation
    const selectedServices = services.filter(service => 
      formData.services.includes(service.id)
    );
    
    selectedServices.forEach(service => {
      totalCost += service.basePrice;
    });

    // Apply multipliers
    const homeTypeMultiplier = homeTypes.find(type => type.value === formData.homeType)?.multiplier || 1;
    const finishMultiplier = finishTypes.find(type => type.value === formData.finishType)?.multiplier || 1;
    
    // Adjust for square footage
    const sqftMultiplier = formData.sqft > 1000 ? 1.2 : formData.sqft < 500 ? 0.8 : 1;
    
    totalCost = totalCost * homeTypeMultiplier * finishMultiplier * sqftMultiplier;
    
    setEstimate(Math.round(totalCost));
    setShowEstimate(true);
  };

  const resetForm = () => {
    setFormData({
      rooms: 1,
      sqft: 500,
      homeType: "",
      services: [],
      finishType: "",
      timeline: ""
    });
    setShowEstimate(false);
    setEstimate(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cost Estimator</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get an instant estimate for your home renovation project
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="h-6 w-6 mr-2" />
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Home Type */}
                  <div>
                    <Label htmlFor="homeType">Home Type</Label>
                    <Select value={formData.homeType} onValueChange={(value) => setFormData(prev => ({ ...prev, homeType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select home type" />
                      </SelectTrigger>
                      <SelectContent>
                        {homeTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Square Footage */}
                  <div>
                    <Label>Total Area: {formData.sqft} sq ft</Label>
                    <div className="mt-2">
                      <Slider
                        value={[formData.sqft]}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, sqft: value[0] }))}
                        max={3000}
                        min={200}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>200 sq ft</span>
                        <span>3000 sq ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <Label className="text-base font-semibold">Select Services</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="text-sm font-normal">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finish Type */}
                  <div>
                    <Label htmlFor="finishType">Finish Type</Label>
                    <Select value={formData.finishType} onValueChange={(value) => setFormData(prev => ({ ...prev, finishType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select finish type" />
                      </SelectTrigger>
                      <SelectContent>
                        {finishTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                        <SelectItem value="normal">Normal (1-2 months)</SelectItem>
                        <SelectItem value="flexible">Flexible (2-3 months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      onClick={calculateEstimate} 
                      className="flex-1 bg-blue-900 hover:bg-blue-800"
                      disabled={!formData.homeType || !formData.finishType || formData.services.length === 0}
                    >
                      Calculate Estimate
                    </Button>
                    <Button onClick={resetForm} variant="outline" className="flex-1">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Estimate Result */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <IndianRupee className="h-6 w-6 mr-2" />
                    Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!showEstimate ? (
                    <div className="text-center py-8">
                      <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Fill in the details to get your estimate</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-900 mb-2">
                          ₹{estimate.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Estimated Total Cost</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Project Summary:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Home Type:</span>
                            <span>{homeTypes.find(t => t.value === formData.homeType)?.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Area:</span>
                            <span>{formData.sqft} sq ft</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Services:</span>
                            <span>{formData.services.length} selected</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Finish:</span>
                            <span>{finishTypes.find(t => t.value === formData.finishType)?.label}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full bg-blue-900 hover:bg-blue-800">
                          Get Detailed Quote
                        </Button>
                        <Button variant="outline" className="w-full">
                          Book Consultation
                        </Button>
                      </div>

                      <p className="text-xs text-gray-500 text-center">
                        * This is an approximate estimate. Final cost may vary based on specific requirements and site conditions.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our Cost Estimator?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Estimates</h3>
              <p className="text-gray-600">Based on real project data and current market rates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">Get cost estimates in seconds, not days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Breakdown</h3>
              <p className="text-gray-600">Understand exactly what you're paying for</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
