import { Settings, Zap, Award, Globe, Code } from 'lucide-react';
import dropdownData from '../data/dropdownData.json';

interface OrganizersDropdownProps {
  isMobile?: boolean;
}

const OrganizersDropdown: React.FC<OrganizersDropdownProps> = ({ isMobile = false }) => {
  const getIconComponent = (title: string) => {
    const iconProps = { className: "w-6 h-6 text-white" };
    
    switch (title) {
      case 'Organizer software':
        return <Settings {...iconProps} />;
      case 'Tournament Boost':
        return <Zap {...iconProps} />;
      case 'Professional Circuit':
        return <Award {...iconProps} />;
      case 'White-label Platform':
        return <Globe {...iconProps} />;
      case 'Developer API':
        return <Code {...iconProps} />;
      default:
        return <Settings {...iconProps} />;
    }
  };

  const getIconBgColor = (title: string) => {
    switch (title) {
      case 'Organizer software':
        return 'bg-blue-500';
      case 'Tournament Boost':
        return 'bg-purple-500';
      case 'Professional Circuit':
        return 'bg-pink-500';
      case 'White-label Platform':
        return 'bg-orange-500';
      case 'Developer API':
        return 'bg-teal-500';
      default:
        return 'bg-blue-500';
    }
  };

  if (isMobile) {
    return (
      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="space-y-4 mb-4">
          {dropdownData.organizersDropdown.products.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 hover:bg-sky-100 p-2 rounded cursor-pointer transition-colors">
              <div className={`w-10 h-10 ${getIconBgColor(item.title)} rounded flex items-center justify-center flex-shrink-0`}>
                {getIconComponent(item.title)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 pt-4">
          {dropdownData.organizersDropdown.links.map((link, index) => (
            <div key={index} className="text-gray-700 hover:text-blue-500 cursor-pointer text-sm p-2 hover:bg-sky-100 rounded transition-colors">
              {link}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded shadow-lg z-50">
      <div className="p-6 flex">
        <div className="flex-1 pr-8">
          <div className="space-y-4">
            {dropdownData.organizersDropdown.products.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 hover:bg-sky-100 p-3 rounded cursor-pointer transition-colors"
              >
                <div className={`w-10 h-10 ${getIconBgColor(item.title)} rounded flex items-center justify-center flex-shrink-0`}>
                  {getIconComponent(item.title)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-48 pl-8 border-l border-gray-200">
          <div className="space-y-2">
            {dropdownData.organizersDropdown.links.map((item, index) => (
              <div 
                key={index} 
                className="text-gray-700 hover:text-blue-500 hover:bg-sky-100 cursor-pointer text-sm p-3 rounded transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizersDropdown;