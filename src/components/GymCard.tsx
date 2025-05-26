import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FEATURE_ICONS } from '../assets';

type GymProps = {
  name: string;
  price: number;
  area: string;
  address: string;
  website: string;
  features: string[];
  image: string;
};

const GymCard: React.FC<GymProps> = ({ 
  name, 
  price, 
  area, 
  address, 
  website, 
  features,
  image
}) => {
  return (
    <div className="card h-full flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex justify-between items-end">
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <span className="bg-neon-green-500 text-black px-2 py-1 rounded text-sm font-bold">
              £{price}/mo
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-tech-black-600 text-white px-2 py-1 rounded text-xs mb-2">
            {area}
          </span>
          <p className="text-gray-300 text-sm">{address}</p>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span 
                key={index} 
                className="inline-flex items-center bg-tech-black-800 text-gray-300 px-2 py-1 rounded text-xs"
              >
                <span className="mr-1">{FEATURE_ICONS[feature as keyof typeof FEATURE_ICONS]}</span>
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto neon-button text-center text-sm w-full"
        >
          Visit Official Page <ExternalLink size={14} className="inline ml-1" />
        </a>
      </div>
    </div>
  );
};

export default GymCard;