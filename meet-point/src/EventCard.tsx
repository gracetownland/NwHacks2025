import React from "react"

export function EventCard({ points, bannerTitle, bannerSubtitle, eventTitle, dateTime, host, cost }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Event Banner */}
      <div className="relative bg-teal-900 text-white text-sm px-4 py-2">
        <span className="font-bold">{bannerTitle}</span>
        <br />
        <span className="uppercase text-xs">{bannerSubtitle}</span>
        <span className="absolute top-2 right-2 bg-orange-500 px-2 py-1 text-xs font-semibold rounded-full">
          {points} pts
        </span>
      </div>

      {/* Event Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{eventTitle}</h3>
        <p className="text-sm text-gray-600 flex items-center mt-2">
          <span className="mr-2">📅 {dateTime}</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">👤 {host}</p>
        <p className="text-sm text-gray-600 mt-2">💰 {cost}</p>
      </div>
    </div>
  )
}