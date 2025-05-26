import React from 'react';
import { LONDON_AREAS } from '../assets';

type FiltersProps = {
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
};

const GymFilters: React.FC<FiltersProps> = ({
  selectedArea,
  setSelectedArea,
  priceRange,
  setPriceRange,
  maxPrice
}) => {
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div className="card p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 font-orbitron gradient-text">
        Filter Gym Memberships
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Area Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Area
          </label>
          <select
            value={selectedArea}
            onChange={handleAreaChange}
            className="w-full px-3 py-2 bg-tech-black-900 border border-tech-black-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-neon-green-400"
          >
            {LONDON_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        
        {/* Price Range */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Price Range: £{priceRange[0]} - £{priceRange[1]}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Min Price</label>
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[0]}
                onChange={handleMinPriceChange}
                className="w-full h-2 bg-tech-black-600 rounded-lg appearance-none cursor-pointer accent-neon-green-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>£0</span>
                <span>£{maxPrice/2}</span>
                <span>£{maxPrice}</span>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Max Price</label>
              <input
                type="range"
                min={0}
                max={maxPrice}
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
                className="w-full h-2 bg-tech-black-600 rounded-lg appearance-none cursor-pointer accent-neon-green-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>£0</span>
                <span>£{maxPrice/2}</span>
                <span>£{maxPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-tech-black-600">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center bg-neon-green-500/20 text-neon-green-300 px-3 py-1 rounded-full text-xs">
            24/7 access
            <button className="ml-1 text-neon-green-300 hover:text-white">×</button>
          </span>
          <span className="inline-flex items-center bg-tech-black-800 text-gray-300 px-3 py-1 rounded-full text-xs">
            Pool
            <button className="ml-1 text-gray-400 hover:text-white">+</button>
          </span>
          <span className="inline-flex items-center bg-tech-black-800 text-gray-300 px-3 py-1 rounded-full text-xs">
            Yoga
            <button className="ml-1 text-gray-400 hover:text-white">+</button>
          </span>
          <span className="inline-flex items-center bg-tech-black-800 text-gray-300 px-3 py-1 rounded-full text-xs">
            Strength training
            <button className="ml-1 text-gray-400 hover:text-white">+</button>
          </span>
          <span className="inline-flex items-center bg-tech-black-800 text-gray-300 px-3 py-1 rounded-full text-xs">
            Smart equipment
            <button className="ml-1 text-gray-400 hover:text-white">+</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GymFilters;