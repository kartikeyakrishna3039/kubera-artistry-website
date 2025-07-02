import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Heart, Sparkles, Star, Diamond, Gem } from "lucide-react";

const CollectionsPage = () => {
  const collections = [
    {
      title: "Bridal Collection",
      description: "Celebrate your forever with timeless engagement rings and wedding bands crafted with the finest diamonds",
      icon: Heart,
      items: ["Engagement Rings", "Wedding Bands", "Bridal Sets", "Anniversary Rings"],
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Heritage Necklaces",
      description: "Exquisite necklaces that embody generations of craftsmanship and traditional elegance",
      icon: Crown,
      items: ["Gold Chains", "Pearl Necklaces", "Diamond Pendants", "Traditional Sets"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      title: "Diamond Earrings",
      description: "Brilliant diamonds that capture light and hearts alike in stunning earring designs",
      icon: Sparkles,
      items: ["Diamond Studs", "Drop Earrings", "Hoops", "Chandelier Earrings"],
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      title: "Gold Bangles",
      description: "Traditional elegance meets contemporary design in our exclusive bangle collection",
      icon: Star,
      items: ["Traditional Bangles", "Modern Cuffs", "Kada Collections", "Stackable Sets"],
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      title: "Precious Gemstones",
      description: "Rare and beautiful gemstones set in exquisite jewelry pieces",
      icon: Gem,
      items: ["Ruby Collection", "Emerald Pieces", "Sapphire Jewelry", "Mixed Gemstones"],
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      title: "Custom Designs",
      description: "Bring your vision to life with our bespoke jewelry design services",
      icon: Diamond,
      items: ["Custom Rings", "Personalized Pendants", "Family Heirlooms", "Redesign Services"],
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53db9d?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Our
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
              Collections
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our curated selection of fine jewelry, each piece crafted with 
            precision and passion to celebrate life's most precious moments.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <Card 
                key={collection.title}
                className="group cursor-pointer hover:shadow-luxury transition-all duration-500 glass-effect overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80"></div>
                    <div className="absolute top-6 right-6">
                      <collection.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        {collection.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                        Featured Items
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {collection.items.map((item) => (
                          <div key={item} className="text-sm text-muted-foreground">
                            • {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="luxury" size="sm">
                        View Collection
                      </Button>
                      <Button variant="elegantOutline" size="sm">
                        Schedule Viewing
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our master craftsmen can create custom jewelry pieces tailored to your exact specifications. 
            From engagement rings to family heirlooms, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              Custom Design Consultation
            </Button>
            <Button variant="elegantOutline" size="lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;