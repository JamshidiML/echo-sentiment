
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlurBackground from './BlurBackground';

interface PhotoFrameProps {
  photoUrl?: string;
  isAnimating: boolean;
  className?: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ 
  photoUrl = "/placeholder-person.jpg", 
  isAnimating,
  className 
}) => {
  const photoRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Random subtle animation parameters for more natural movement
  const getRandomOffset = () => Math.random() * 4 - 2;
  const getRandomDuration = () => 0.5 + Math.random() * 1;
  
  // Mouth animation parameters
  const mouthVariants = {
    closed: { scaleY: 0.1, y: 0 },
    speaking: { 
      scaleY: [0.1, 0.7, 0.3, 0.6, 0.1], 
      y: [0, -1, 0, -2, 0],
      transition: { 
        duration: 1.2, 
        repeat: Infinity, 
        repeatType: "reverse" as const
      }
    }
  };
  
  // Head animation parameters
  const headVariants = {
    idle: { 
      rotate: 0,
      x: 0,
      y: 0
    },
    animate: {
      rotate: [0, 1, -1, 0.5, 0],
      x: [0, getRandomOffset(), getRandomOffset(), getRandomOffset(), 0],
      y: [0, getRandomOffset(), getRandomOffset(), getRandomOffset(), 0],
      transition: {
        duration: getRandomDuration(),
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  // Handle image loading
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <BlurBackground 
      intensity="light" 
      className={`p-6 flex flex-col items-center justify-center relative overflow-hidden max-w-[320px] ${className}`}
    >
      <div className="absolute -z-10 top-0 left-0 right-0 bottom-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-echo-50 to-echo-100 opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 h-12 bg-memorial-100"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-memorial-100"></div>
      </div>
      
      <div className="relative w-64 h-64 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
        <motion.div
          variants={headVariants}
          initial="idle"
          animate={isAnimating ? "animate" : "idle"}
          className="w-full h-full"
        >
          {!isLoaded && (
            <div className="w-full h-full bg-echo-200 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-echo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            ref={photoRef}
            src={photoUrl}
            alt="Remembered person"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
          
          {isAnimating && isLoaded && (
            <motion.div
              className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-16 h-4 bg-black opacity-60 rounded-full"
              variants={mouthVariants}
              initial="closed"
              animate="speaking"
            />
          )}
        </motion.div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-display font-medium text-memorial-900">John Smith</h3>
        <p className="text-sm text-memorial-600">1965 - 2023</p>
      </div>
    </BlurBackground>
  );
};

export default PhotoFrame;
