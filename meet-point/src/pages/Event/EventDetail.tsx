import React, { useState } from "react";
import {
  BookmarkPlus,
  Calendar,
  MapPin,
  Share2,
  Star,
  Users,
} from "lucide-react";
import bookclub1 from "../../assets/bookclub1.jpg";
import bookclub2 from "../../assets/bookclub2.jpg";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Map from "@/Map";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast";
import "./Event.css"


export default function EventDetail() {
  const [isJoined, setIsJoined] = useState(false); // State to track button click
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const { toast } = useToast();
  const handleLocationRequest = () => {

  }


  return (
    <div className="min-h-screen bg-black">


      {/* Hero Section */}
      <div className="relative bg-[#1B4D3E] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/400"
            alt="Event Cover"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/80 to-black" />
        </div>

        <div className="container relative mx-auto px-4 pt-12 pb-24">
          {/* Event Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white">
                gather
              </Badge>
              <Badge className="bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white">
                4000 pts
              </Badge>
            </div>

            <h1 className="text-4xl font-bold text-white max-w-2xl">
              SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods
            </h1>

            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Monday at 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Squamish</span>
              </div>
              <div className="px-4 py-2 bg-black/30 rounded-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>15/25 attending</span>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-4">
              {!isJoined ? (
                <button
                  className="px-6 py-3 bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white rounded-lg flex items-center gap-2 transition-colors"
                  onClick={() => setIsJoined(true)}
                >
                  <Users className="w-4 h-4" />
                  Join Event
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-[#2767f3] hover:bg-[#2767f3]/80 text-white rounded-lg flex items-center gap-2 transition-colors"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Users className="w-4 h-4" />
                  Attend Event
                </button>
              )}
              <button className="px-6 py-3 bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white rounded-lg flex items-center gap-2 transition-colors">
                <BookmarkPlus className="w-4 h-4" />
                Save
              </button>
              <button className="px-6 py-3 bg-[#1B4D3E] hover:bg-[#1B4D3E]/80 text-white rounded-lg flex items-center gap-2 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-[#121212] border-gray-800">
              <div className="px-10 py-16">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About This Event
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Join us for an engaging discussion of "The God of the Woods"
                    at the Squamish Book Club. This month's selection takes us
                    through a fascinating journey of mystery and nature.
                  </p>

                  <p>
                    Our host Annie will guide the conversation as we explore
                    themes of environmentalism, community, and personal growth.
                    Whether you're a first-time visitor or a regular member,
                    you'll find a welcoming space for literary discussion.
                  </p>

                  <div>
                    <p className="font-medium text-white mb-2">
                      What to expect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Group discussion of the book</li>
                      <li>Light refreshments provided</li>
                      <li>Opportunity to suggest future readings</li>
                      <li>Connect with fellow book lovers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event Photos Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Event Photos</h2>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src={bookclub1}
                  alt="Event photo 1"
                  className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img
                  src={bookclub2}
                  alt="Event photo 2"
                  className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="bg-[#121212] border-gray-800">
              <div className="p-6 space-y-6">
                <h3 className="text-lg font-semibold text-white">
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4D3E]/30 flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div>Monday</div>
                      <div className="text-sm text-gray-400">7:30 PM</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4D3E]/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div>Squamish Public Library</div>
                      <div className="text-sm text-gray-400">
                        37907 Second Avenue
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4D3E]/30 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>Hosted by Mohit Events</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#121212] border-gray-800">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[#FF6B00]" />
                  <h3 className="text-lg font-semibold text-white">
                    Points Reward
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Attend this event to earn 4000 points. Points can be redeemed
                  for exclusive rewards in our marketplace.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="cardNamed"
          className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
            <h3 className="text-xl font-bold mb-4">Access Location</h3>
            <p className="text-gray-600 mb-6">Can you confirm if this is your location?</p>
            <div className="flex flex-col gap-4 items-center">
              <Map />
              <button
                onClick={() => {
                  setIsModalOpen(false); // Close the modal after obtaining location
                  toast({
                    title: "Verification Successful!",
                    description: "Do you want to start streaming?",
                    action: <ToastAction onClick={() => (window.location.href = "http://127.0.0.1:38080/live/stream-key")} altText="Start Streaming">Start Stream</ToastAction>,
                  })
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
              >
                Yes!
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-400 rounded-lg hover:bg-red-500  w-full"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}