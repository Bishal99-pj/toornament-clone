import Button from './Button';
import Logo from './Logo';

const Hero = () => {
  const games = [
    {
      name: 'League of Legends',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'LEAGUE OF LEGENDS'
    },
    {
      name: 'Counter-Strike',
      image: 'https://images.pexels.com/photos/159204/game-controller-video-game-play-gamepad-159204.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'COUNTER-STRIKE'
    },
    {
      name: 'FIFA',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'FIFA'
    },
    {
      name: 'Mobile Legends',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'MOBILE LEGENDS'
    },
    {
      name: 'Fortnite',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'FORTNITE'
    },
    {
      name: 'Valorant',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'VALORANT'
    },
    {
      name: 'PUBG',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'BATTLEGROUNDS'
    },
    {
      name: 'Rocket League',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'ROCKET LEAGUE'
    }
  ];

  return (
    <section className="text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <Logo size="large" className="items-center mb-6" />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 text-center font-semibold">
            Everything you need for esports competitions
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-12 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-sm overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="aspect-[3/4]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold leading-tight drop-shadow-lg">
                    {game.logo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="px-8 py-3 border-2" href="#products">
          All competitions and games
        </Button>
      </div>
    </section>
  );
};

export default Hero;