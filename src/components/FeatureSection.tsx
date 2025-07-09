import { Gamepad2, Users } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div id="players" className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Gamepad2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                For players and teams
              </h2>
            </div>

            <div className="mb-8 overflow-hidden rounded-sm">
              <img
                src='/assets/toornament-feature-bg.webp'
                alt="Mobile app interface"
                className="w-full h-80 object-cover shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Thousands of tournaments every week, on all the best games, for all playing levels, all over the world
            </p>

            <button className="px-8 py-3 bg-blue-400 text-white rounded-sm hover:bg-blue-500 transition-colors font-semibold">
              Explore tournaments
            </button>
          </div>

          <div id="organizers" className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                For tournament organizers
              </h2>
            </div>

            <div className="mb-8 overflow-hidden rounded-sm">
              <img
                src='/assets/toornament-feature-bg.webp'
                alt="Desktop organizer interface"
                className="w-full h-80 object-cover shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Easily manage all your tournaments and leagues whatever the game and the format, with a wide choice of settings
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-400 text-white rounded-sm hover:bg-blue-500 transition-colors font-semibold">
                Discover organizer software
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-sm hover:bg-blue-400 hover:text-white transition-colors font-semibold">
                Start organizing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;