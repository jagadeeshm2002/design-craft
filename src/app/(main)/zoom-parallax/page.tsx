"use client";
import React, { useEffect, useRef } from "react";
import Picture1 from "../../../../public/images/mask-section-transition/image1.jpg";
import Picture2 from "../../../../public/images/mask-section-transition/image2.jpg";
import Picture3 from "../../../../public/images/mask-section-transition/image3.jpg";
import Picture4 from "../../../../public/images/mask-section-transition/image4.jpg";
import Picture5 from "../../../../public/images/mask-section-transition/image5.jpg";
import Picture6 from "../../../../public/images/mask-section-transition/image6.jpg";
import Lenis from "lenis";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const contanerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contanerRef,
    offset: ["start start", "end end"],
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [0.9, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [0.9, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [0.9, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [0.89, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [0.9, 4]);
  const images: Array<{
    readonly src: StaticImageData;
    readonly scale: MotionValue<number>;
    readonly style: React.CSSProperties;
  }> = [
    {
      src: Picture5,
      scale: scale1,
      style: { top: "0", left: "0", width: "30vw", height: "30vh" },
    },
    {
      src: Picture2,
      scale: scale2,
      style: { top: "-30vh", left: "-30vw", width: "25vw", height: "30vh" },
    },
    {
      src: Picture3,
      scale: scale3,
      style: { top: "-30vh", left: "0vw", width: "30vw", height: "25vh" },
    },
    {
      src: Picture1,
      scale: scale4,
      style: { top: "30vh", left: "25vw", width: "35vw", height: "25vh" },
    },
    {
      src: Picture4,
      scale: scale5,
      style: { top: "-15vh", left: "30vw", width: "25vw", height: "60vh" },
    },
    {
      src: Picture6,
      scale: scale6,
      style: { top: "32vh", left: "-4vw", width: "20vw", height: "30vh" },
    },
    {
      src: Picture6,
      scale: scale7,
      style: { top: "20vh", left: "-30vw", width: "28vw", height: "60vh" },
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({});
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="w-full bg-white text-black ">
      <div className="flex justify-center items-center w-full h-screen">
        <p className="text-xl font-mono">Zoom Parallax</p>
      </div>
      <div className="w-full h-[300vh] relative" ref={contanerRef}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {images.map(({ src, scale, style }, i) => (
            <motion.div
              className="absolute top-0 flex justify-center items-center w-full h-full"
              key={i}
              style={{ scale }}
            >
              <div
                className="relative w-[25vw] h-[25vh] "
                style={{
                  top: style.top,
                  left: style.left,
                  width: style.width,
                  height: style.height,
                }}
              >
                <Image
                  src={src}
                  alt="image"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={src.blurDataURL}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <p className="text-xl font-mono">End</p>
      </div>
    </div>
  );
};

export default Page;
