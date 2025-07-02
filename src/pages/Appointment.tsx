import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const { toast } = useToast();

  const services = [
    "Engagement Ring Consultation",
    "Custom Jewelry Design",
    "Jewelry Repair & Restoration",
    "Diamond Selection",
    "Appraisal Services",
    "Wedding Band Fitting",
    "General Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, phone, and service are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate appointment booking
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Book Your
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Schedule a personalized consultation with our jewelry experts. 
            Whether you're looking for the perfect engagement ring or custom design, 
            we're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="glass-effect shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    Appointment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center">
                          <User className="mr-2 h-4 w-4 text-primary" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-primary" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center">
                          <Phone className="mr-2 h-4 w-4 text-primary" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service" className="flex items-center">
                          <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                          Service Needed *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Appointment Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time" className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-primary" />
                          Preferred Time
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about what you're looking for..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      Schedule Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground">
                    Visit Our Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground mb-1">Address</p>
                      <p>123 Jewelry District<br />New York, NY 10001</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Hours</p>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                         Saturday: 10:00 AM - 5:00 PM<br />
                         Sunday: By Appointment Only</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Contact</p>
                      <p>Phone: (555) 123-4567<br />
                         Email: info@kuberajewelers.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Personal consultation with our jewelry experts</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>View our exclusive collections in our private showroom</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Discuss custom design options and pricing</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>No pressure, complimentary consultation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;