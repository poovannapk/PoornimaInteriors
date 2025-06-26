
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Phone, MapPin, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    service: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
    otp: ""
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { toast } = useToast();

  const services = [
    "Kitchen Renovation",
    "Living Room Interiors",
    "Bedroom Interiors",
    "Bathroom Renovation",
    "False Ceiling",
    "Complete Home Renovation",
    "Interior Design Consultation",
    "Other"
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"
  ];

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendOtp = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    // Simulate OTP sending
    setIsOtpSent(true);
    toast({
      title: "OTP Sent!",
      description: "We've sent a verification code to your mobile number",
    });
  };

  const verifyOtp = () => {
    if (formData.otp === "1234") { // Mock OTP verification
      setStep(2);
      toast({
        title: "Mobile Verified!",
        description: "Your mobile number has been verified successfully",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct OTP",
        variant: "destructive"
      });
    }
  };

  const submitForm = () => {
    // Validate required fields
    if (!formData.name || !formData.city || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setStep(3);
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you shortly to confirm your appointment",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Free Consultation</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get expert advice and detailed estimate for your home renovation project
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {step > 1 ? <CheckCircle className="h-5 w-5" /> : '1'}
                </div>
                <span className="ml-2 hidden sm:inline">Mobile Verification</span>
              </div>
              <div className="w-12 h-1 bg-gray-200 rounded">
                <div className={`h-1 rounded transition-all duration-300 ${step >= 2 ? 'bg-blue-600 w-full' : 'bg-gray-200 w-0'}`}></div>
              </div>
              <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {step > 2 ? <CheckCircle className="h-5 w-5" /> : '2'}
                </div>
                <span className="ml-2 hidden sm:inline">Booking Details</span>
              </div>
              <div className="w-12 h-1 bg-gray-200 rounded">
                <div className={`h-1 rounded transition-all duration-300 ${step >= 3 ? 'bg-blue-600 w-full' : 'bg-gray-200 w-0'}`}></div>
              </div>
              <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {step > 3 ? <CheckCircle className="h-5 w-5" /> : '3'}
                </div>
                <span className="ml-2 hidden sm:inline">Confirmation</span>
              </div>
            </div>
          </div>

          {/* Step 1: Mobile Verification */}
          {step === 1 && (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Verify Your Mobile Number</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    maxLength={10}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                {!isOtpSent ? (
                  <Button onClick={sendOtp} className="w-full bg-blue-900 hover:bg-blue-800">
                    Send OTP
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        placeholder="Enter 4-digit OTP"
                        value={formData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value)}
                        maxLength={4}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        OTP sent to +91-{formData.mobile}. Use 1234 for demo.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={verifyOtp} className="flex-1 bg-blue-900 hover:bg-blue-800">
                        Verify OTP
                      </Button>
                      <Button onClick={sendOtp} variant="outline" className="flex-1">
                        Resend OTP
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Booking Details */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Consultation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Preferred Service</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange('date', date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Requirements (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, budget, timeline, etc."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button onClick={submitForm} className="w-full bg-blue-900 hover:bg-blue-800">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <Card className="max-w-md mx-auto text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Booked!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for booking a consultation with us. Our team will contact you within 24 hours to confirm your appointment.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold mb-3">Booking Summary:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      {formData.name}
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      +91-{formData.mobile}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      {formData.city}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      {formData.date && format(formData.date, "PPP")} at {formData.time}
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = '/'} 
                  className="w-full bg-blue-900 hover:bg-blue-800"
                >
                  Back to Home
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      {step !== 3 && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get in Free Consultation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                <p className="text-gray-600">Get personalized recommendations from our experienced interior designers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Estimate</h3>
                <p className="text-gray-600">Receive accurate cost estimates for your renovation project</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600">Our team will contact you within 24 hours to schedule your visit</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultation;
