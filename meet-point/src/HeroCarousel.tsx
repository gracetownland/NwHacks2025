import { Calendar, Heart, MapPin, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";




const carouselItems = [
  {
    title: "Discover Community Events",
    subtitle: "Connect & Grow",
    description: "Join local gatherings and connect with like-minded people in your area. Build lasting relationships through shared interests and experiences.",
    icon: <Calendar className="w-8 h-8" />,
    accent: "from-teal-500 to-cyan-500",
    pattern: "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.1) 0%, transparent 50%)",
    illustration: [
      { icon: <Calendar className="w-6 h-6" />, label: "Book Club" },
      { icon: <Users className="w-6 h-6" />, label: "Social Meetups" },
      { icon: <MapPin className="w-6 h-6" />, label: "Local Events" },
    ]
  },
  {
    title: "Earn Amazing Rewards",
    subtitle: "Participate & Earn",
    description: "Get rewarded for being an active community member. Unlock exclusive perks, experiences, and rewards as you participate and engage.",
    icon: <Sparkles className="w-8 h-8" />,
    accent: "from-purple-500 to-indigo-500",
    pattern: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)",
    illustration: [
      { icon: <Sparkles className="w-6 h-6" />, label: "Gift Cards" },
      { icon: <MapPin className="w-6 h-6" />, label: "Local Experiences" },
      { icon: <Heart className="w-6 h-6" />, label: "Exclusive Access" },
    ]
  }
];

const HeroCarousel = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-teal-500/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <Carousel opts={{ loop: true, align: "center" }} className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-gray-900/50 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content Section */}
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.accent} text-white font-medium neon-border`}>
                            {item.icon}
                            <span>{item.subtitle}</span>
                          </div>
                          <h1 className={`text-5xl font-bold bg-gradient-to-r ${item.accent} bg-clip-text text-transparent neon-text`}>
                            {item.title}
                          </h1>
                          <p className="text-xl text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                          <button className={`px-8 py-3 bg-gradient-to-r ${item.accent} text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2 neon-border`}>
                            Get Started
                            <Sparkles className="w-4 h-4" />
                          </button>
                          <button className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium border border-gray-700 hover:border-teal-500/50 hover:bg-gray-700 transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>

                      {/* Visual Section */}
                      <div className="relative">
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-teal-500/50 transition-all">
                          {/* Floating Elements */}
                          {item.illustration.map((element, idx) => (
                            <div 
                              key={idx}
                              className={`absolute bg-gray-900/90 p-4 rounded-lg shadow-xl animate-float-${idx % 2 ? 'slow' : 'slower'} neon-border`}
                              style={{
                                top: `${20 + idx * 30}%`,
                                left: idx % 2 ? '70%' : '10%',
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${item.accent} text-white`}>
                                  {element.icon}
                                </div>
                                <span className="font-medium text-gray-100">{element.label}</span>
                              </div>
                            </div>
                          ))}
                          
                          {/* Center Design Element */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-32 h-32 bg-gradient-to-r ${item.accent} rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse-glow`}>
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-gray-900/80 text-white backdrop-blur hover:bg-gray-800" />
          <CarouselNext className="right-4 bg-gray-900/80 text-white backdrop-blur hover:bg-gray-800" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-700 hover:bg-teal-500 transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;