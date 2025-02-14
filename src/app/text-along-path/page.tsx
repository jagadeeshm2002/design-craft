"use client";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + v * 40 + "%");
      });
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="w-full bg-white ">
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p className="text-xl font-inter text-black">scroll</p>
      </div>
      <div ref={container}>
        <div className="">
          <svg className="w-full mb-40" viewBox="0 0 250 90">
            <path
              fill="none"
              id="curve"
              stroke="none"
              d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
            />
            <text className="text-[4px] font-playwrite" style={{ fill: "red" }}>
              {[...Array(3)].map((_, i) => {
                return (
                  <textPath
                    key={i}
                    href="#curve"
                    ref={(element) => {
                      if (element) {
                        paths.current[i] = element;
                      }
                    }}
                    startOffset={`${i * 40}%`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </textPath>
                );
              })}
            </text>
          </svg>
        </div>
        <FooterBottom scrollYProgress={scrollYProgress} />
      </div>
    </main>
  );
};

const FooterBottom = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  return (
    <div className="overflow-hidden w-full h-[300px] bg-black">
      <motion.div
        className="h-full bg-black flex justify-center items-center gap-7 "
        style={{ y }}
      >
        <p className="font-playwrite text-5xl text-white">Text Along Path</p>
      </motion.div>
    </div>
  );
};
export default Page;
