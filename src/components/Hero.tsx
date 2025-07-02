import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-glow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Timeless
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              Elegance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            at Kubera Jewelers USA
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Tradition meets modern artistry for your special moments. ✨
            <br />
            <span className="text-primary font-medium">Heritage Redefined</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="xl" className="group">
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="elegantOutline" size="xl">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;