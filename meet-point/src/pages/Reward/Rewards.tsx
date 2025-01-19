import { Card, CardContent } from "@/components/ui/card";
import { Crown, Sparkles, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import giftCard1 from "./../../assets/giftCard1.png";
import giftCard2 from "./../../assets/giftCard2.png";

import { RewardCard } from "./RewardCard";

const rewards = {
  featured: [
    {
      id: 1,
      title: "Amazon Gift Card",
      points: 500,
      value: "$10",
      description: "Redeem for an Amazon e-gift card",
      image: giftCard1,
      sponsor: "Amazon",
      demand: "high",
      stock: 50,
    },
    {
      id: 2,
      title: "VIP Concert Access",
      points: 2000,
      value: "Priority",
      description: "Skip the line at selected Ticketmaster events",
      image: giftCard2,
      sponsor: "Ticketmaster",
      demand: "medium",
      stock: 25,
    },
  ],
  giftCards: [
    {
      id: 3,
      title: "Temu Gift Card",
      points: 100,
      value: "$10",
      description: "Shop at Temu with this digital gift card",
      image: "/placeholder.svg?height=200&width=200",
      sponsor: "Temu",
      demand: "low",
      stock: 100,
    },
    // Add more gift cards...
  ],
  experiences: [
    {
      id: 4,
      title: "Local Food Tour",
      points: 1500,
      value: "$75",
      description: "3-hour guided food tour of local restaurants",
      image: "/placeholder.svg?height=200&width=200",
      sponsor: "Local Food Tours Co.",
      demand: "medium",
      stock: 10,
    },
  ],
};

export function Reward() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">
            Rewards Marketplace
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">
              Redeem your points for exclusive rewards
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">4,000</span> points
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Trophy className="text-yellow-500" />
                <span className="font-medium">Level 3 Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress to Next Level */}
        <Card className="mb-8 bg-[#1B4D3E]/20 border-[#1B4D3E]">
          <CardContent className="py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-white">
                  Progress to Level 4
                </h3>
                <p className="text-sm text-gray-400">
                  Attend 2 more events to level up
                </p>
              </div>
              <Crown className="text-yellow-500 h-6 w-6" />
            </div>
            <div className="bg-[#1B4D3E]/30 rounded-full h-2 w-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-300"
                style={{ width: "75%" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Level 3</span>
              <span>Level 4</span>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="bg-[#1B4D3E]/20 border border-[#1B4D3E]">
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-[#1B4D3E] data-[state=active]:text-white text-gray-300"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger
              value="giftCards"
              className="data-[state=active]:bg-[#1B4D3E] data-[state=active]:text-white text-gray-300"
            >
              Gift Cards
            </TabsTrigger>
            <TabsTrigger
              value="experiences"
              className="data-[state=active]:bg-[#1B4D3E] data-[state=active]:text-white text-gray-300"
            >
              Experiences
            </TabsTrigger>
          </TabsList>

          {Object.entries(rewards).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((reward) => (
                  <RewardCard key={reward.id} reward={reward} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
