import { Mail, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Logo from './Logo';
import footerLinks from '../data/footerLinks.json';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Logo size="large" className="mb-4 w-36" />
            <p className="text-gray-300 text-lg lg:text-xl mb-6">
              Everything you need for esports competitions
            </p>
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Toornament - All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Toornament</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.toornament.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Features & products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;