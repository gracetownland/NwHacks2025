import React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-orange-500 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="h-8 w-8" />
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
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  )
}