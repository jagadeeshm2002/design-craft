"use client";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import Picture1 from "../../../../public/images/mask-section-transition/image6.jpg";
import Picture2 from "../../../../public/images/mask-section-transition/image4.jpg";
import Picture3 from "../../../../public/images/mask-section-transition/image5.jpg";
import Image, { StaticImageData } from "next/image";

import { useScroll, useTransform, motion } from "motion/react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  const images: Array<{
    readonly src: StaticImageData;
    readonly translate: any;
    readonly style: React.CSSProperties;
  }> = [
    {
      src: Picture1,
      translate: sm,
      style: {
        top: "10vh",
        left: "8vw",
        width: "30vw",
        height: "40vh",
        zIndex: 2,
      },
    },
    {
      src: Picture2,
      translate: md,
      style: {
        top: "5vh",
        left: "35vw",
        width: "25vw",
        height: "60vh",
        zIndex: 1,
      },
    },
    {
      src: Picture3,
      translate: lg,
      style: {
        top: "10vh",
        left: "58vw",
        width: "20vw",
        height: "40vh",
        zIndex: 3,
      },
    },
  ];
  return (
    <div
      className=" w-full min-h-[100vh] pt-[10vh] bg-slate-300 text-slate-950"
      ref={containerRef}
    >
      <div className="w-full h-[100px]"></div>
      <div className=" w-full flex justify-start flex-col items-start pl-[10vw]">
        <h1 className="text-7xl font-playwrite m-0 mt-3 uppercase leading-[5vw]">
          Parallax
        </h1>
        <h1 className="text-7xl font-playwrite m-0 mt-3 uppercase leading-[5vw] ">
          Scroll
        </h1>
        <div>
          <p className="uppercase text-3xl font-inter m-0 mt-3 text-slate-50">
            {"with Framer_motion".split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span key={i} className="inline-block" style={{ y }}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center items-center relative mt-[20vh]">
        {images.map((item, i) => {
          return (
            <motion.div
              className="absolute w-full"
              key={i}
              style={{
                top: item.style.top,
                left: item.style.left,
                width: item.style.width,
                height: item.style.height,
                zIndex: item.style.zIndex,
                y: item.translate,
              }}
            >
              <Image
                src={item.src}
                alt="image"
                placeholder="blur"
                className="object-cover w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
};

export default Page;
