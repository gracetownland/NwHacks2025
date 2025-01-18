import "./App.css"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

function App() {
  return (
    <>
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 py-4 bg-orange-500 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold">meet.point</span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:underline">
                Events
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="hover:underline">
                Rewards
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <span className="bg-white text-orange-500 px-3 py-1 rounded-full font-semibold">
            4000 pts
          </span>
          <Avatar>
            <AvatarImage src="/profile.jpg" alt="Profile" /> {/* Replace with profile image */}
          </Avatar>
        </div>
      </header>

      {/* Carousel Section */}
      <div className="flex justify-center items-center py-8 bg-gray-100">
        <div className="w-3/4 h-64 bg-gray-300 rounded-lg border-2 border-blue-500 flex items-center justify-center">
          {/* Replace with a Carousel Component */}
          <p>Carousel Placeholder</p>
        </div>
      </div>

      {/* Community-Driven Events Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Community-Driven Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Event Card */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Event Banner */}
              <div className="bg-teal-900 text-white text-sm px-4 py-2">
                <span className="font-bold">gather</span>
                <br />
                <span className="uppercase text-xs">
                  Squamish Book Club
                </span>
                <span className="absolute top-2 right-2 bg-orange-500 px-2 py-1 text-xs font-semibold rounded-full">
                  4000 pts
                </span>
              </div>
              {/* Event Details */}
              <div className="p-4">
                <h3 className="font-semibold">
                  SQUAMISH BOOK CLUB WITH ANNIE: The God of the Woods
                </h3>
                <p className="text-sm text-gray-600 flex items-center mt-2">
                  <span className="mr-2">📅 Monday at 7:30 PM</span>
                  <span className="ml-auto">Mohit Events</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">Free</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App