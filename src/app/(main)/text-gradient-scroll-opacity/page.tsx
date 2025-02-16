"use client";
import Lenis from "lenis";
import { useScroll, motion, useTransform } from "motion/react";
import React, { use, useEffect, useRef } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const container2 = useRef<HTMLDivElement>(null);
  const container3 = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });
  const { scrollYProgress: scroll2 } = useScroll({
    target: container2,
    offset: ["start 0.9", "start 0.25"],
  });
  const { scrollYProgress: scroll3 } = useScroll({
    target: container3,
    offset: ["start 0.9", "start 0.25"],
  });
  const content =
    " It is a long established fact that  a reader will be distracted by the readable content of a page when looking at its layout.";
  const words = content.split(" ");
  

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full h-screen"></div>
      <div className="h-screen flex items-center  ">
        <motion.p
          className="text-6xl font-poppins p-10 leading-[1.1] max-w-screen-lg flex flex-wrap"
          ref={container}
          style={{ opacity: scroll1 }}
        >
          {content}
        </motion.p>
      </div>
      <div className="h-screen flex items-center">
        <p
          className="text-6xl font-poppins p-10 leading-[1.1] max-w-screen-lg flex flex-wrap"
          ref={container2}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scroll2} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
      <div className="h-screen flex items-center">
        <p
          className="text-6xl font-poppins p-10 leading-[1.1] max-w-screen-lg flex flex-wrap"
          ref={container3}
        >
          {words.map((char, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Words key={i} progress={scroll3} range={[start, end]}>
                {char}
              </Words>
            );
          })}
        </p>
      </div>
      <div className="w-full h-[200px]"></div>
    </div>
  );
};

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const Words = ({ children, progress, range }: any) => {
  const amount = range[1] - range[0];
  
  const step = amount / children.length;
  
  return (
    <span className="relative mt-3 mr-3">
      {children.split("").map((char:string,i:number) => {
        const start = range[0] + i * step;
        
        const end = range[0] + (i + 1) * step;
        
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};
const Char = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Page;