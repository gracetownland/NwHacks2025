import { Calendar, MapPin } from "lucide-react";

import { EventCard } from "./EventCard";

export function CommunityEvents() {
  const events = [
    {
      id: "squamish-book-club-1",
      points: 4000,
      bannerTitle: "Gather",
      bannerSubtitle: "Squamish Book Club",
      eventTitle: "SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods",
      dateTime: "Monday at 7:30 PM",
      host: "Mohit Events",
      cost: "Free"
    },
    {
      id: "squamish-book-club-2",
      points: 3500,
      bannerTitle: "Gather",
      bannerSubtitle: "Squamish Book Club",
      eventTitle: "SQUAMISH BOOK CLUB WITH ANNIE: The Lost City",
      dateTime: "Wednesday at 6:30 PM",
      host: "Mohit Events",
      cost: "Free"
    },
    {
      id: "basketball-tournament",
      points: 5000,
      bannerTitle: "Sports",
      bannerSubtitle: "Local Basketball Tournament",
      eventTitle: "3v3 Basketball Tournament - Sign Up Your Team!",
      dateTime: "Saturday at 10:00 AM",
      host: "City Sports Club",
      cost: "$10 per person"
    },
    {
      id: "yoga-session",
      points: 1500,
      bannerTitle: "Wellness",
      bannerSubtitle: "Morning Yoga",
      eventTitle: "Sunrise Yoga at Central Park",
      dateTime: "Thursday at 7:00 AM",
      host: "Wellness Warriors",
      cost: "Free"
    },
    {
      id: "coffee-meetup",
      points: 1000,
      bannerTitle: "Community",
      bannerSubtitle: "Coffee Chat",
      eventTitle: "Networking Over Coffee",
      dateTime: "Friday at 9:00 AM",
      host: "Downtown Café",
      cost: "$5"
    },
    {
      id: "coding-workshop",
      points: 2000,
      bannerTitle: "Education",
      bannerSubtitle: "Tech Workshop",
      eventTitle: "Intro to JavaScript Coding for Beginners",
      dateTime: "Sunday at 2:00 PM",
      host: "Tech Talks",
      cost: "Free"
    },
    {
      id: "local-farmers-market",
      points: 800,
      bannerTitle: "Community",
      bannerSubtitle: "Farmers Market",
      eventTitle: "Visit the Local Farmers Market",
      dateTime: "Saturday at 8:00 AM",
      host: "City Events",
      cost: "Free"
    },
    {
      id: "movie-night",
      points: 2500,
      bannerTitle: "Entertainment",
      bannerSubtitle: "Outdoor Movie",
      eventTitle: "Movie Under the Stars: The Greatest Showman",
      dateTime: "Friday at 7:30 PM",
      host: "City Park",
      cost: "Free"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Community-Driven Events
            </h2>
            <p className="text-white mt-2">
              Join events and connect with your community
            </p>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700">
              <Calendar className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700">
              <MapPin className="w-4 h-4" />
              Location
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}