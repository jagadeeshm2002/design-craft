"use client";
import React from "react";
import { motion, useTransform } from "framer-motion";

const StarMask = ({ scale, rotate }: { scale: any; rotate: any }) => (
  <motion.path
    viewBox={"0 0 200 100"}
    d="M100 0C100 0 102.759 25.7497 113.505 36.4955C124.25 47.2412 150 50 150 50C150 50 124.25 52.7588 113.505 63.5045C102.759 74.2503 100 100 100 100C100 100 97.2412 74.2503 86.4955 63.5045C75.7497 52.7588 50 50 50 50C50 50 75.7497 47.2412 86.4955 36.4955C97.2412 25.7497 100 0 100 0Z"
    fill="white"
    transition={{
      type: "spring",
      stiffness: 50,
      damping: 20,
    }}
    style={{
      scale,
      rotate,
      transformOrigin: "50% 50%", // Ensure transformations are centered
    }}
  />
);

interface pageProps {
  children?: React.ReactNode | React.HTMLElementType;
  className?: string;
  index?: number;
  scrollYProgress?: any;
}

const ScrollRevealSection: React.FC<pageProps> = ({
  children,
  className,
  index = 0,
  scrollYProgress,
}) => {
  const maskScale1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 4, 6]);
  const maskScale2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.65],
    [0, 0.1, 6]
  );
  const maskScale3 = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 0.1, 6]
  );
  const maskRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 100" // Match viewBox to the star shape
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id={`revealMask${index + 1}`}>
            <rect width="200" height="100" fill="black" />

            <StarMask
              scale={[maskScale1, maskScale2, maskScale3][index]}
              rotate={maskRotate}
            />
          </mask>
        </defs>
        <foreignObject
          width="100%"
          height="100%"
          mask={`url(#revealMask${index + 1})`}
        >
          {children}
        </foreignObject>
      </svg>
    </div>
  );
};


export default ScrollRevealSection;
