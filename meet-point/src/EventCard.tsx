import { Calendar, Clock, DollarSign, Sparkles, User, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Common styles for neon effects
const neonEffects = {
  teal: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
  orange: "shadow-[0_0_20px_rgba(251,146,60,0.3)]",
  purple: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
};

export function EventCard({
  id = "default-event",
  points,
  bannerTitle,
  bannerSubtitle,
  eventTitle,
  dateTime,
  host,
  cost,
}) {
  const navigate = useNavigate();

  return (
    <Card 
      className={`group overflow-hidden transition-all duration-300 hover:scale-[1.02] 
      bg-gray-900/50 backdrop-blur-xl border-gray-800 hover:border-teal-500/50
      ${neonEffects.teal} hover:shadow-[0_0_10px_rgba(45,212,191,0.4)]`}
    >
      {/* Event Banner */}
      <div className="relative bg-gradient-to-r from-gray-900 via-teal-900/50 to-gray-900 text-white p-4 overflow-hidden">
        <div className="relative z-10 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-teal-400">#</span>
              <span className="font-medium tracking-wide">{bannerTitle}</span>
            </div>
            <div className="text-sm text-teal-200 uppercase tracking-wider font-medium">
              {bannerSubtitle}
            </div>
          </div>
          <Badge 
            className={`bg-gradient-to-r from-orange-500 to-rose-500 
            hover:from-orange-400 hover:to-rose-400 text-white border-none
            ${neonEffects.orange} animate-pulse`}
          >
            <Sparkles className="w-3 h-3 mr-1" />
            {points} pts
          </Badge>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -top-16 -right-16 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -bottom-16 -left-16 animate-pulse delay-300" />
        </div>
      </div>

      {/* Event Details */}
      <CardContent className="p-6 space-y-4 bg-gray-900/50">
        <h3 className="font-semibold text-lg text-gray-100 group-hover:text-teal-400 transition-colors line-clamp-2">
          {eventTitle}
        </h3>

        <div className="space-y-3">
          {/* DateTime */}
          <div className="flex items-center gap-3 text-gray-300">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-teal-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{dateTime.split(" at ")[0]}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {dateTime.split(" at ")[1]}
              </span>
            </div>
          </div>

          {/* Host */}
          <div className="flex items-center gap-3 text-gray-300">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-teal-400">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm">{host}</span>
          </div>

          {/* Cost */}
          <div className="flex items-center gap-3 text-gray-300">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-teal-400">
              <DollarSign className="w-4 h-4" />
            </div>
            <span className="text-sm">{cost}</span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => navigate(`/events/${id}`)}
          className={`w-full mt-2 bg-gradient-to-r from-teal-500 to-emerald-500 
          text-white py-3 rounded-lg font-medium transition-all
          hover:from-teal-400 hover:to-emerald-400 ${neonEffects.teal}
          flex items-center justify-center gap-2 group-hover:scale-[1.02]`}
        >
          <Users className="w-4 h-4" />
          Join Event
        </button>
      </CardContent>
    </Card>
  );
}