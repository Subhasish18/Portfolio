"use client";

import React, { useEffect, useRef } from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35; 
    }
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play(); 
    }
  };

  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        preload="auto"
        onCanPlay={() => videoRef.current?.play()}
        onEnded={handleVideoEnd} 
        className='rotate-180 absolute top-[-340px] left-0 z-[-1] w-full h-full object-cover'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;