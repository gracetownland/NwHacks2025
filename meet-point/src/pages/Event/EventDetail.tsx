import {
  BookmarkPlus,
  Calendar,
  MapPin,
  Share2,
  Star,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// import { useParams } from "react-router-dom";

export default function EventDetail() {
//   const { eventId } = useParams();
//   const similarEvents = [
//     {
//       id: "mystery-book-club",
//       title: "Mystery Novels Book Club: Sharp Objects",
//       points: 4000,
//       bannerTitle: "gather",
//       bannerSubtitle: "Book Discussion",
//       dateTime: "Thursday at 6:30 PM",
//       host: "Squamish Library",
//       cost: "Free",
//     },
//     {
//       id: "fantasy-book-club",
//       title: "Fantasy Book Club: The Name of the Wind",
//       points: 4000,
//       bannerTitle: "gather",
//       bannerSubtitle: "Book Discussion",
//       dateTime: "Friday at 5:30 PM",
//       host: "Squamish Library",
//       cost: "Free",
//     },
//     {
//       id: "sci-fi-book-club",
//       title: "Sci-Fi Book Club: Project Hail Mary",
//       points: 4000,
//       bannerTitle: "gather",
//       bannerSubtitle: "Book Discussion",
//       dateTime: "Saturday at 4:30 PM",
//       host: "Squamish Library",
//       cost: "Free",
//     },
//   ];
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with teal gradient */}
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
          {/* Event header content */}
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

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white rounded-lg flex items-center gap-2 transition-colors">
                <Users className="w-4 h-4" />
                Join Event
              </button>
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

      {/* Main content */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - About & Photos */}
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

            {/* Photos section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Event Photos</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((photo, index) => (
                  <img
                    key={index}
                    src={`/api/placeholder/400/300`}
                    alt={`Event photo ${index + 1}`}
                    className="rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Event Details & Points */}
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
    </div>
  );
}
