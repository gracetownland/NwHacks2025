import React from "react"
import { EventCard } from "./EventCard"

export function CommunityEvents() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Community-Driven Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <EventCard
          points={4000}
          bannerTitle="gather"
          bannerSubtitle="Squamish Book Club"
          eventTitle="SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods"
          dateTime="Monday at 7:30 PM"
          host="Mohit Events"
          cost="Free"
        />
        <EventCard
          points={4000}
          bannerTitle="gather"
          bannerSubtitle="Squamish Book Club"
          eventTitle="SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods"
          dateTime="Monday at 7:30 PM"
          host="Mohit Events"
          cost="Free"
        />
        <EventCard
          points={4000}
          bannerTitle="gather"
          bannerSubtitle="Squamish Book Club"
          eventTitle="SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods"
          dateTime="Monday at 7:30 PM"
          host="Mohit Events"
          cost="Free"
        />
        <EventCard
          points={4000}
          bannerTitle="gather"
          bannerSubtitle="Squamish Book Club"
          eventTitle="SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods"
          dateTime="Monday at 7:30 PM"
          host="Mohit Events"
          cost="Free"
        />
      </div>
    </section>
  )
}