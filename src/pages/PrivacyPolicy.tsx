import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../assets';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-black-800 border-t border-tech-black-700">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src="/logo.png" alt="LeoFit Lab Logo" className="h-10 w-auto mr-2" />
              <span className="font-orbitron text-xl font-bold gradient-text">
                LeoFit Lab
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Train Smarter. Live Stronger.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green-400 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green-400 transition-colors duration-300"
                aria-label="TikTok"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LeoFit Lab. All rights reserved.
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-tech-black-700">
          <div className="flex flex-col md:flex-row justify-between text-xs text-gray-500">
            <div className="mb-4 md:mb-0">
              <Link to="/privacy-policy" className="hover:text-neon-green-400 mr-4">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-neon-green-400 mr-4">Terms of Service</Link>
              <Link to="/contact" className="hover:text-neon-green-400">Contact</Link>
            </div>
            <div>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Get smart fitness tips" 
                  className="px-3 py-2 bg-tech-black-900 border border-tech-black-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-neon-green-400 text-sm"
                />
                <button 
                  type="submit" 
                  className="px-3 py-2 bg-neon-green-600 text-black font-medium rounded-r-md hover:bg-neon-green-500 transition-colors duration-300 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
