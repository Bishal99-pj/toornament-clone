import { Users } from 'lucide-react';
import dropdownData from '../data/dropdownData.json';

interface PlayersDropdownProps {
  isMobile?: boolean;
}

const PlayersDropdown: React.FC<PlayersDropdownProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-red-500 rounded flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dropdownData.playersDropdown.mainItem.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {dropdownData.playersDropdown.mainItem.description}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {dropdownData.playersDropdown.links.map((link, index) => (
            <div key={index} className="text-gray-700 hover:text-blue-500 cursor-pointer text-sm p-2 hover:bg-sky-100 rounded transition-colors">
              {link}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded shadow-lg z-50">
      <div className="p-6 grid grid-cols-3 gap-8">
        <div className="col-span-2 flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-red-500 rounded flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {dropdownData.playersDropdown.mainItem.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {dropdownData.playersDropdown.mainItem.description}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {dropdownData.playersDropdown.links.map((link, index) => (
            <div 
              key={index} 
              className="text-gray-700 hover:text-blue-500 hover:bg-sky-100 cursor-pointer text-sm p-3 rounded transition-colors"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersDropdown;