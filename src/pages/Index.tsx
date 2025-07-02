import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Collections />
      <Chatbot />
    </div>
  );
};

export default Index;
