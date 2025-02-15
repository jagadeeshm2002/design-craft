"use client";

import Lenis from "lenis";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);
  useEffect(() => {
    if (pathRef.current) {
      pathRef.current.setAttribute("stroke", "url(#gradient)");
    }
  }, [pathLength]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  // Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-white text-black relative h-[2600px]"
      ref={containerRef}
      role="main"
    >
      <div className="w-full flex justify-center items-center h-screen">
        <p className="font-playwrite text-3xl uppercase">scroll</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 2580"
        fill="none"
        className="absolute top-0 left-0 h-full w-full"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ffff00" />
            <stop offset="100%" stopColor="#00ff00" />
          </linearGradient>
        </defs>
        <motion.path
          ref={pathRef}
          d="M3 0C164.528 25.0766 484.456 128.102 471.951 339.593C456.319 603.956 732.107 664.352 848.787 591.242C965.466 518.131 1264.7 480.516 1384.17 699.318C1479.75 874.359 1400.36 1051.63 1278.1 1099.31C1164.83 1143.48 993.085 1151.84 848.787 1173.29C724.291 1191.79 588.631 1270.43 588.631 1366.32C588.631 1462.29 628.817 1548.71 724.291 1580.35C836.687 1617.6 952.908 1564.47 1002.31 1461.68C1043.62 1375.74 1017.45 1301.62 962.675 1222.75C865.615 1082.99 660.648 1099.31 517.171 1152.29C237.798 1255.44 85.2789 1594.57 246.966 1834.12C383.728 2036.75 724.291 1834.12 875.026 1990.41C1025.76 2146.69 1002.31 2315.17 1196.03 2357.55C1389.76 2399.93 1440 2579 1440 2579"
          // stroke="url(#gradient)"
          strokeWidth="34"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathOffset}
        />
      </svg>
    </div>
  );
};

export default Page;
