import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GymCard from '../components/GymCard';
import GymFilters from '../components/GymFilters';
import { LONDON_GYMS } from '../assets';

const GymMemberships: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [filteredGyms, setFilteredGyms] = useState(LONDON_GYMS);
  
  // Find the maximum price in the gym data
  const maxPrice = Math.max(...LONDON_GYMS.map(gym => gym.price));
  
  // Filter gyms based on selected filters
  useEffect(() => {
    let filtered = LONDON_GYMS;
    
    // Filter by area
    if (selectedArea !== 'All Areas') {
      filtered = filtered.filter(gym => gym.area === selectedArea);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      gym => gym.price >= priceRange[0] && gym.price <= priceRange[1]
    );
    
    setFilteredGyms(filtered);
  }, [selectedArea, priceRange]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="pt-16">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 bg-tech-black-800">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, #10FFA8 1px, transparent 1px), linear-gradient(to bottom, #10FFA8 1px, transparent 1px)',
            backgroundSize: '20px 20px' 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              London Gym Memberships
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find the perfect gym membership in London to complement your 
              LeoFit Lab training program.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters and listing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <GymFilters
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPrice={maxPrice}
          />
          
          {filteredGyms.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredGyms.map((gym) => (
                <motion.div key={gym.id} variants={itemVariants}>
                  <GymCard
                    name={gym.name}
                    price={gym.price}
                    area={gym.area}
                    address={gym.address}
                    website={gym.website}
                    features={gym.features}
                    image={gym.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="card p-8 text-center">
              <p className="text-lg text-gray-300 mb-4">
                No gyms found matching your current filters.
              </p>
              <button
                onClick={() => {
                  setSelectedArea('All Areas');
                  setPriceRange([0, maxPrice]);
                }}
                className="neon-button"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-tech-black-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Looking for workout ideas for your gym?
            </h2>
            <p className="text-gray-300 mb-8">
              Check out our YouTube channel for smart workout routines, equipment guides, 
              and tech-enhanced training techniques.
            </p>
            <a 
              href="https://www.youtube.com/@LeoFitLab" 
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button"
            >
              Watch Workout Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymMemberships;