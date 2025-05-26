import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/9MT2Vdmm/Flux-Dev-A-minimalist-techstyle-lion-head-logo-with-sharp-geom-3.jpg" 
                alt="LeoFit Lab Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="font-orbitron text-lg md:text-xl font-bold gradient-text">
                LeoFit Lab
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/' 
                    ? 'text-neon-green-400 border-b-2 border-neon-green-400' 
                    : 'text-gray-300 hover:text-neon-green-300'
                }`}
              >
                Home
              </Link>
              <Link
                to="/gyms"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === '/gyms' 
                    ? 'text-neon-green-400 border-b-2 border-neon-green-400' 
                    : 'text-gray-300 hover:text-neon-green-300'
                }`}
              >
                Gym Memberships
              </Link>
              <a
                href="https://www.youtube.com/@LeoFitLab"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button ml-4 text-sm"
              >
                🎥 Subscribe
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neon-green-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 max-h-60' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-tech-black-800/95 backdrop-blur-sm">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/' 
                ? 'text-neon-green-400 bg-tech-black-700' 
                : 'text-gray-300 hover:text-neon-green-300 hover:bg-tech-black-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/gyms"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === '/gyms' 
                ? 'text-neon-green-400 bg-tech-black-700' 
                : 'text-gray-300 hover:text-neon-green-300 hover:bg-tech-black-700'
            }`}
          >
            Gym Memberships
          </Link>
          <a
            href="https://www.youtube.com/@LeoFitLab"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-neon-green-400 hover:bg-tech-black-700"
          >
            🎥 Subscribe to YouTube
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
