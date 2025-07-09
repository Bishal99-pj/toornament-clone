import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import PlayersDropdown from './PlayersDropdown';
import OrganizersDropdown from './OrganizersDropdown';
import MobileMenu from './MobileMenu';
import { useDropdown } from '../hooks/useDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeDropdown, toggleDropdown, closeDropdown } = useDropdown();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [closeDropdown]);

  return (
    <header className="text-white relative">
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo size="medium" showText={false} />

            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative dropdown-container">
                <div 
                  className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                  onClick={() => toggleDropdown('players')}
                >
                  <span>For players and teams</span>
                  <ChevronDown size={16} />
                </div>
                
                {activeDropdown === 'players' && (
                  <PlayersDropdown />
                )}
              </div>

              <div className="relative dropdown-container">
                <div 
                  className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors"
                  onClick={() => toggleDropdown('organizers')}
                >
                  <span>For tournament organizers</span>
                  <ChevronDown size={16} />
                </div>
                
                {activeDropdown === 'organizers' && (
                  <OrganizersDropdown />
                )}
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button href="#players">Play</Button>
            <Button href="#organizers">Organize</Button>
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Logo size="small" showText={false} />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button className="text-sm px-4 py-2" href="#players">Play</Button>
            <Button className="text-sm px-4 py-2" href="#organizers">Organize</Button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;