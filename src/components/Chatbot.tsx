import { useState } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  jewelry: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Kubera Jewelers. I'm here to help you find the perfect jewelry or schedule an appointment. What type of jewelry are you looking for today?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isCollectingAppointment, setIsCollectingAppointment] = useState(false);
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: "",
    email: "",
    phone: "",
    jewelry: ""
  });
  const [currentStep, setCurrentStep] = useState(0);

  const jewelryCategories = [
    { name: "Engagement Rings", link: "/collections#rings" },
    { name: "Wedding Bands", link: "/collections#bands" },
    { name: "Necklaces", link: "/collections#necklaces" },
    { name: "Earrings", link: "/collections#earrings" },
    { name: "Bangles & Bracelets", link: "/collections#bangles" },
    { name: "Custom Jewelry", link: "/appointment" }
  ];

  const addMessage = (text: string, isBot: boolean = false) => {
    setMessages(prev => [...prev, { id: Date.now(), text, isBot }]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, false);
    setInputValue("");

    // Simple bot logic
    setTimeout(() => {
      handleBotResponse(userMessage.toLowerCase());
    }, 1000);
  };

  const handleBotResponse = (userInput: string) => {
    if (isCollectingAppointment) {
      handleAppointmentFlow(userInput);
      return;
    }

    if (userInput.includes("appointment") || userInput.includes("schedule") || userInput.includes("book")) {
      setIsCollectingAppointment(true);
      setCurrentStep(0);
      addMessage("I'd be happy to help you schedule an appointment! First, what type of jewelry are you interested in?", true);
    } else if (userInput.includes("ring") || userInput.includes("engagement")) {
      addMessage("Wonderful! Our engagement rings and wedding bands are crafted with the finest diamonds and precious metals. Would you like to see our bridal collection or schedule a consultation?", true);
      setTimeout(() => {
        addMessage("Here are some quick options:\n• View Bridal Collection\n• Custom Ring Design\n• Schedule Appointment", true);
      }, 1500);
    } else if (userInput.includes("necklace")) {
      addMessage("Our heritage necklaces combine traditional craftsmanship with modern elegance. We have gold, diamond, and pearl collections available.", true);
    } else if (userInput.includes("earring")) {
      addMessage("Our diamond earrings collection features brilliant cuts that capture light beautifully. From studs to drop earrings, we have styles for every occasion.", true);
    } else if (userInput.includes("bangle") || userInput.includes("bracelet")) {
      addMessage("Our gold bangles represent the perfect blend of tradition and contemporary design. Would you prefer traditional or modern styles?", true);
    } else if (userInput.includes("price") || userInput.includes("cost")) {
      addMessage("Our jewelry ranges from $500 to $50,000+ depending on the piece. For accurate pricing, I'd recommend scheduling a consultation where we can show you options within your budget.", true);
    } else {
      addMessage("I understand you're looking for jewelry! Here are our main categories:\n• Engagement Rings & Wedding Bands\n• Heritage Necklaces\n• Diamond Earrings\n• Gold Bangles\n\nWhich interests you most?", true);
    }
  };

  const handleAppointmentFlow = (userInput: string) => {
    const steps = ["jewelry", "name", "email", "phone"];
    const currentField = steps[currentStep];

    if (currentField === "jewelry") {
      setAppointmentData(prev => ({ ...prev, jewelry: userInput }));
      setCurrentStep(1);
      addMessage("Perfect! Now, may I have your full name?", true);
    } else if (currentField === "name") {
      setAppointmentData(prev => ({ ...prev, name: userInput }));
      setCurrentStep(2);
      addMessage("Thank you! What's your email address?", true);
    } else if (currentField === "email") {
      setAppointmentData(prev => ({ ...prev, email: userInput }));
      setCurrentStep(3);
      addMessage("Great! And your phone number?", true);
    } else if (currentField === "phone") {
      setAppointmentData(prev => ({ ...prev, phone: userInput }));
      addMessage(`Perfect! I have all your details:\n\n• Jewelry Interest: ${appointmentData.jewelry}\n• Name: ${appointmentData.name}\n• Email: ${appointmentData.email}\n• Phone: ${userInput}\n\nOur team will contact you within 24 hours to schedule your appointment. Thank you for choosing Kubera Jewelers!`, true);
      setIsCollectingAppointment(false);
      setCurrentStep(0);
      setAppointmentData({ name: "", email: "", phone: "", jewelry: "" });
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="luxury"
          size="icon"
          className="h-14 w-14 rounded-full shadow-gold-glow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] z-50 animate-slide-up">
          <Card className="glass-effect shadow-luxury">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-primary">
                <Bot className="mr-2 h-5 w-5" />
                Kubera Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Messages */}
              <div className="h-64 overflow-y-auto space-y-3 pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isBot ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        {message.isBot ? (
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <User className="h-4 w-4 text-secondary-foreground" />
                        )}
                      </div>
                      <div
                        className={`px-3 py-2 rounded-lg whitespace-pre-line ${
                          message.isBot
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  variant="luxury" 
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              {!isCollectingAppointment && (
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => {
                      setInputValue("I want to schedule an appointment");
                      handleSendMessage();
                    }}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => {
                      setInputValue("Show me engagement rings");
                      handleSendMessage();
                    }}
                  >
                    Engagement Rings
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;