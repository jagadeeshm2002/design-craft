"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../../../public/images/mask-section-transition/image4.jpg";
import image2 from "../../../public/images/mask-section-transition/image5.jpg";
import image3 from "../../../public/images/mask-section-transition/image6.jpg";
import Image from "next/image";
import Lenis from "lenis";

const StarMask = ({ scale, rotate }: { scale: any; rotate: any }) => (
  <motion.path
    viewBox={"0 0 200 100"}
    // d="M195 0C195 0 199.36 57.8089 223.765 81.6259C248.347 105.615 308 109.5 308 109.5C308 109.5 248.347 113.385 223.765 137.374C199.36 161.191 195 219 195 219C195 219 190.64 161.191 166.235 137.374C141.653 113.385 82 109.5 82 109.5C82 109.5 141.653 105.615 166.235 81.6259C190.64 57.8089 195 0 195 0Z"
    // d="M104.609 1.48707C105.229 -0.310791 107.771 -0.310785 108.391 1.48707L134.309 76.6977C134.511 77.2831 134.972 77.7421 135.559 77.9405L211.402 103.606C213.214 104.219 213.214 106.781 211.402 107.394L135.559 133.059C134.972 133.258 134.511 133.717 134.309 134.302L108.391 209.513C107.771 211.311 105.229 211.311 104.609 209.513L78.6911 134.302C78.4894 133.717 78.0279 133.258 77.4414 133.059L1.59838 107.394C-0.213514 106.781 -0.213517 104.219 1.59837 103.606L77.4413 77.9405C78.0279 77.7421 78.4894 77.2831 78.6911 76.6977L104.609 1.48707Z"
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

const Page = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

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
    <div className="w-full bg-white">
      {/* Intro Section */}
      <section className="h-screen w-full flex items-center justify-center bg-white ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-inter font-bold text-gray-900 text-center px-4"
        >
          scroll
        </motion.h1>
      </section>

      {/* Main Animation Container */}
      <div ref={containerRef} className="h-[500vh] w-full relative bg-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Reveal Layers */}
          {[image1, image2, image3].map((image, index) => (
            <svg
              key={index}
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
                <Image
                  src={image}
                  alt={`Reveal ${index + 1}`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                  quality={100}
                />
              </foreignObject>
            </svg>
          ))}
        </div>
      </div>

      {/* Outro Section */}
      <section className="h-screen flex items-center justify-center bg-white"></section>
    </div>
  );
};

export default Page;
