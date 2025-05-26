import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { FEATURED_VIDEOS } from '../assets';

const VideoSection: React.FC = () => {
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Latest YouTube Videos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out our most recent content exploring the intersection of fitness and technology.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FEATURED_VIDEOS.map((video, index) => (
            <motion.div key={video.id} variants={itemVariants}>
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                description={video.description}
                embedId={video.embedId}
                views={video.views}
                date={video.date}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@LeoFitLab" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-green-400 hover:text-neon-green-300 transition-colors duration-300 font-medium"
          >
            View all videos on our YouTube channel
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;