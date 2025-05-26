import React from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import FeatureSection from '../components/FeatureSection';
import CtaSection from '../components/CtaSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeatureSection />
      <CtaSection />
    </>
  );
};

export default Home;