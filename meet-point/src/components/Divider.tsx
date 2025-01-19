import { Sparkles, Star, Users } from "lucide-react";

function Divider() {
  return (
    <div className="relative">
      {/* Wave SVG */}
      <div className="absolute inset-x-0 -top-1">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 transform rotate-180"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 37.3C384 42.7 480 37.3 576 32C672 26.7 768 21.3 864 21.3C960 21.3 1056 26.7 1152 29.3C1248 32 1344 32 1392 32H1440V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Active Members */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1,234+</h3>
                <p className="text-gray-600">Active Members</p>
              </div>
            </div>

            {/* Events Hosted */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Events This Month</p>
              </div>
            </div>

            {/* Total Points Earned */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-white p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">150K+</h3>
                <p className="text-gray-600">Points Earned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-orange-50 rounded-full -translate-x-12 -translate-y-12 opacity-50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-50 rounded-full translate-x-16 translate-y-16 opacity-50" />
      </div>

      {/* Bottom Wave */}
      <div className="absolute inset-x-0 -bottom-1">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 37.3C384 42.7 480 37.3 576 32C672 26.7 768 21.3 864 21.3C960 21.3 1056 26.7 1152 29.3C1248 32 1344 32 1392 32H1440V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Divider;