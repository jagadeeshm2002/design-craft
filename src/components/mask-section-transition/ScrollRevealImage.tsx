import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const ScrollRevealImage = ({ imageUrl, triggerPoint }:{ imageUrl: string|StaticImageData, triggerPoint: number}) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const maskScale = useTransform(
    scrollYProgress,
    [triggerPoint, triggerPoint + 0.3], // Adjust animation range
    [0.1, 5]
  );

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id={`revealMask-${imageUrl}`}>
              <motion.circle
                cx="50"
                cy="50"
                r="25"
                fill="white"
                style={{ scale: maskScale }}
              />
            </mask>
          </defs>
          
          <foreignObject width="100" height="100" mask={`url(#revealMask-${imageUrl})`}>
            <Image
              src={imageUrl}
              alt="Masked reveal image"
              className="w-full h-full object-cover"
            />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
export default ScrollRevealImage;