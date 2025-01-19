import { Link } from "react-router-dom";

// Navbar Component
export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-lg bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src="/api/placeholder/32/32"
                alt="meet.point"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">
                meet.point
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <a
              href="/events"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Events
            </a>
            <a
              href="/rewards"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Rewards
            </a>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1.5 rounded-full text-white font-medium">
                4000 pts
              </div>
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full ring-2 ring-orange-200"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
