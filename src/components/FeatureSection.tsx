import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Heart, LineChart, Lightbulb } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-neon-green-400" />,
      title: 'Smart Workouts',
      description: 'Data-driven workout routines optimized for your body type, goals, and available equipment.'
    },
    {
      icon: <Heart className="h-8 w-8 text-neon-green-400" />,
      title: 'Biohacking',
      description: 'Science-backed techniques to optimize your body\'s performance, recovery, and overall well-being.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-neon-green-400" />,
      title: 'Wearable Tech',
      description: 'Get the most from your fitness trackers with expert analysis and actionable insights.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-neon-green-400" />,
      title: 'Recovery Tools',
      description: 'Innovative approaches to accelerate recovery and prevent injuries for sustainable progress.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-16 md:py-24 bg-tech-black-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About LeoFit Lab
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our channel combines cutting-edge fitness technology with practical workout advice.
            We break down complex concepts into actionable steps you can apply right away.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card p-6 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-4 bg-tech-black-900 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-orbitron">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <div className="card p-6 md:p-8 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="https://i.postimg.cc/9MT2Vdmm/Flux-Dev-A-minimalist-techstyle-lion-head-logo-with-sharp-geom-3.jpg" 
                  alt="LeoFit Lab" 
                  className="h-32 w-auto"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Join the LeoFit Tribe
                </h3>
                <p className="text-gray-300 mb-6">
                  LeoFit Lab is more than just a YouTube channel—it's a community of tech-savvy fitness enthusiasts pushing the boundaries of what's possible. Whether you're a beginner or advanced, our content helps you train smarter, recover faster, and live stronger.
                </p>
                <a 
                  href="https://www.youtube.com/@LeoFitLab" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
