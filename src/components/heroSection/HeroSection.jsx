import React from 'react';
import motion from '../../assets/mp4/motion.mp4'; // Adjust based on file location

function HeroSection() {
  return (
    <div className="relative w-full h-60">
      <video
        src={motion}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to Pk-Mart</h1>
      </div>
    </div>
  );
}

export default HeroSection;
