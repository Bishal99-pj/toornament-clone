import { X, Mail, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Logo from './Logo';
import PlayersDropdown from './PlayersDropdown';
import OrganizersDropdown from './OrganizersDropdown';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 text-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo size="large" className="w-64" />
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* For players and teams section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">For players and teams</h2>
          <PlayersDropdown isMobile={true} />
        </div>

        {/* For tournament organizers section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">For tournament organizers</h2>
          <OrganizersDropdown isMobile={true} />
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-8 pt-8 border-t border-gray-700">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;