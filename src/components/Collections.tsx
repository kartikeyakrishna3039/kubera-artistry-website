import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Crown, Heart, Sparkles, Star } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      title: "Bridal Collection",
      description: "Celebrate your forever with timeless engagement rings and wedding bands",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      title: "Heritage Necklaces",
      description: "Exquisite necklaces that embody generations of craftsmanship",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      title: "Diamond Earrings",
      description: "Brilliant diamonds that capture light and hearts alike",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      title: "Gold Bangles",
      description: "Traditional elegance meets contemporary design",
      icon: Star,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&q=80",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
              Collections
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of fine jewelry, each piece crafted with 
            precision and passion to celebrate life's most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title}
              className={`group cursor-pointer hover:shadow-luxury transition-all duration-500 hover:scale-105 glass-effect ${
                collection.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      collection.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <collection.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-glow group"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View All Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;