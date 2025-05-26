import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Dumbbell, Watch, Brain } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-black-900/80 to-black z-10"></div>
      </div>

      {/* Floating tech/fitness icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut" 
          }}
          className="absolute top-[15%] left-[10%]"
        >
          <Dumbbell size={32} className="text-neon-green-400/40" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-[25%] right-[15%]"
        >
          <Watch size={32} className="text-neon-green-400/40" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-[20%] left-[20%]"
        >
          <Activity size={32} className="text-neon-green-400/40" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5.5,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-[25%] right-[10%]"
        >
          <Brain size={32} className="text-neon-green-400/40" />
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.postimg.cc/9MT2Vdmm/Flux-Dev-A-minimalist-techstyle-lion-head-logo-with-sharp-geom-3.jpg" 
              alt="LeoFit Lab Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">LeoFit Lab</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-orbitron">
            Where Fitness Meets Tech
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Discover the perfect fusion of cutting-edge technology and fitness expertise 
            to transform your workout routine and achieve optimal results.
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
              🎥 Subscribe to LeoFit Lab
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-neon-green-400"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
