import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Get in
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're here to help you find the perfect jewelry for your special moments. 
            Visit our showroom, give us a call, or chat with us online.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="glass-effect shadow-luxury hover:shadow-gold-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <MapPin className="mr-3 h-6 w-6 text-primary" />
                    Visit Our Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-lg">
                      123 Jewelry District<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <p className="text-sm">
                      Located in the heart of Manhattan's diamond district, 
                      our elegant showroom features our complete collection 
                      of fine jewelry in a comfortable, private setting.
                    </p>
                    <Button variant="luxury" size="sm">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-luxury hover:shadow-gold-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Phone className="mr-3 h-6 w-6 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-lg font-semibold text-primary">
                      (555) 123-4567
                    </p>
                    <p className="text-sm">
                      Speak directly with our jewelry consultants for 
                      personalized assistance, appointment scheduling, 
                      or any questions about our collections.
                    </p>
                    <Button variant="elegantOutline" size="sm">
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-luxury hover:shadow-gold-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Mail className="mr-3 h-6 w-6 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-lg font-semibold text-primary">
                      info@kuberajewelers.com
                    </p>
                    <p className="text-sm">
                      Send us your inquiries, custom design requests, 
                      or any questions. We typically respond within 
                      24 hours during business days.
                    </p>
                    <Button variant="elegantOutline" size="sm">
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-luxury hover:shadow-gold-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-sm">
                      Chat with our jewelry experts in real-time. 
                      Get instant answers about our collections, 
                      pricing, and schedule appointments.
                    </p>
                    <Button variant="luxury" size="sm">
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hours and Additional Info */}
            <div className="space-y-6">
              <Card className="glass-effect shadow-luxury">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="mr-3 h-6 w-6 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Monday - Friday</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Saturday</p>
                        <p className="text-muted-foreground">10:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sunday</p>
                        <p className="text-muted-foreground">By Appointment</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Holidays</p>
                        <p className="text-muted-foreground">Special Hours</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> We recommend scheduling 
                        an appointment for personalized consultations, especially 
                        for engagement rings and custom designs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Services We Offer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Engagement Ring Consultations",
                      "Custom Jewelry Design",
                      "Jewelry Repair & Restoration",
                      "Diamond Selection & Education",
                      "Appraisal Services",
                      "Wedding Band Sizing",
                      "Jewelry Cleaning & Maintenance",
                      "Insurance Consultations"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-luxury">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Stay connected with Kubera Jewelers for the latest 
                      collections, special offers, and jewelry inspiration.
                    </p>
                    <div className="flex space-x-4">
                      <Button variant="elegantOutline" size="sm">
                        Facebook
                      </Button>
                      <Button variant="elegantOutline" size="sm">
                        Instagram
                      </Button>
                      <Button variant="elegantOutline" size="sm">
                        Pinterest
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in Manhattan's prestigious diamond district
            </p>
          </div>
          
          <Card className="glass-effect shadow-luxury">
            <CardContent className="p-0">
              <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Interactive Map
                  </p>
                  <p className="text-muted-foreground">
                    123 Jewelry District, New York, NY 10001
                  </p>
                  <Button variant="luxury" size="sm" className="mt-4">
                    View in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;