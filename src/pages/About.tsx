import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in craftsmanship and quality, ensuring every piece meets our exacting requirements."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our clients through transparency, honesty, and exceptional service."
    },
    {
      icon: Clock,
      title: "Heritage",
      description: "Honoring traditional jewelry-making techniques while embracing modern innovation and design."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for fine jewelry drives us to create pieces that celebrate life's most precious moments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Heritage
                <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
                  Redefined
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over three decades, Kubera Jewelers has been synonymous with 
                exceptional craftsmanship, timeless designs, and unparalleled customer service 
                in the heart of the jewelry industry.
              </p>
              <Button variant="luxury" size="lg">
                Our Story
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Kubera Jewelers Heritage"
                className="rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Our Journey
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 1985, Kubera Jewelers began as a small family business with a 
              simple mission: to create jewelry that captures the essence of life's most 
              meaningful moments. Our founder, inspired by ancient Indian traditions and 
              modern American craftsmanship, established a legacy of excellence that 
              continues to this day.
            </p>
            <p>
              Today, we stand as one of the most trusted names in fine jewelry, serving 
              customers across the United States with our unique blend of traditional 
              techniques and contemporary designs. Every piece that leaves our workshop 
              carries with it the weight of our heritage and the promise of our commitment 
              to quality.
            </p>
            <p>
              At Kubera Jewelers, we believe that jewelry is more than just adornment—it's 
              a celebration of love, achievement, and the moments that define our lives. 
              This philosophy guides everything we do, from the selection of our materials 
              to the final polish of each finished piece.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our work and define our relationship with 
              every client who walks through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center glass-effect hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Master Craftsmen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of skilled artisans brings decades of experience and 
              passion to every piece they create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Master Goldsmith",
                experience: "35+ Years",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Priya Sharma",
                role: "Design Director",
                experience: "20+ Years",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Johnson",
                role: "Diamond Specialist",
                experience: "25+ Years",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <Card key={member.name} className="text-center glass-effect hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-elegant"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Experience the Kubera Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Visit our showroom to experience our craftsmanship firsthand and discover 
            why families have trusted us with their most precious moments for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              Schedule a Visit
            </Button>
            <Button variant="elegantOutline" size="lg">
              View Our Collections
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;