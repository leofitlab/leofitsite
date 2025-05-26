import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-black-900 to-tech-black-700"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, #10FFA8 1px, transparent 1px), linear-gradient(to bottom, #10FFA8 1px, transparent 1px)',
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="card max-w-4xl mx-auto p-8 md:p-12 border-neon-green-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Join the LeoFit Tribe
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Get exclusive fitness tips, early access to videos, and personalized workout recommendations by subscribing to our YouTube channel.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="https://www.youtube.com/@LeoFitLab" 
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button text-lg animate-glow"
              >
                🎥 Subscribe Now – It's Free
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;