import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Gift, Sparkles, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function RewardCard({ reward }: { reward: any }) {
  const demandStyles = {
    high: {
      badge: "bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border-red-200",
      icon: "text-red-500",
      gradient: "from-red-500/10 to-transparent",
    },
    medium: {
      badge: "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-200",
      icon: "text-amber-500",
      gradient: "from-amber-500/10 to-transparent",
    },
    low: {
      badge: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200",
      icon: "text-green-500",
      gradient: "from-green-500/10 to-transparent",
    },
  };

  const style = demandStyles[reward.demand];

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
      <div className="relative">
        {/* Image with overlay gradient */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={reward.image || "/placeholder.svg"}
            alt={reward.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating badges */}
        <Badge className={`absolute top-3 right-3 shadow-lg backdrop-blur-sm ${style.badge}`}>
          <Star className={`w-3 h-3 mr-1 ${style.icon}`} />
          {reward.demand.charAt(0).toUpperCase() + reward.demand.slice(1)} Demand
        </Badge>
        
        {/* Points badge */}
        <div className="absolute -bottom-4 right-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform hover:translate-y-1 transition-transform">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">{reward.points}</span>
            <span className="text-orange-200">pts</span>
          </div>
        </div>
      </div>

      <CardContent className="pt-8 p-6">
        <div className="space-y-4">
          {/* Title and Sponsor */}
          <div>
            <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
              {reward.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-gray-500">
              <img
                src="/api/placeholder/20/20"
                alt={reward.sponsor}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm">Sponsored by {reward.sponsor}</span>
            </div>
          </div>

          {/* Value and Description */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 text-sm font-medium px-2 py-1 bg-orange-50 text-orange-800 rounded-full">
              <Star className="w-3 h-3" />
              Value: {reward.value}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{reward.description}</p>
          </div>

          {/* Stock and Progress */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{reward.stock} remaining</span>
            </div>
            <Progress 
              value={(reward.stock / 100) * 100} 
              className="w-24 h-2 bg-gray-100" 
            />
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg transition-all shadow-lg hover:shadow-orange-200/50 flex items-center justify-center gap-2 font-medium">
            <Gift className="w-4 h-4" />
            Redeem Reward
          </button>
        </div>
      </CardContent>
    </Card>
  );
}