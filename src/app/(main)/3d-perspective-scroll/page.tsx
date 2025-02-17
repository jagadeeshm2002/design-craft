"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

import Picture from "../../../../public/images/image2.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.5],
    [0, 1, 0]
  );
  const text2Scale = useTransform(scrollYProgress, [0.2, 0.35], [0.8, 1]);
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.49, 0.6, 0.8],
    [0, 1, 0]
  );
  const text4Opacity = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    [0, 1, 0.8]
  );
  const text3Scale = useTransform(scrollYProgress, [0.45, 0.6], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const imageRotate = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.9],
    [0, 30, 180]
  );
  const imageScale = useTransform(scrollYProgress, [0.2, 0.4, 1], [0.5, 1, 4]);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="min-h-screen h-[4500px] relative" ref={containerRef}>
        <div className="h-screen flex justify-center items-center fixed top-0 w-full">
          <motion.p
            className="text-9xl font-poppins font-medium"
            style={{ opacity: text1Opacity, scale: text1Scale }}
          >
            Smooth Scroll
          </motion.p>
        </div>
        <div className="h-screen flex justify-center items-center fixed top-0 w-full">
          <motion.p
            className="text-2xl font-poppins font-medium"
            style={{ opacity: text2Opacity, scale: text2Scale }}
          >
            So Smooooth
          </motion.p>
        </div>
        <div className="h-screen flex justify-center items-center fixed top-0 w-full">
          <motion.p
            className="text-2xl font-poppins font-medium"
            style={{ opacity: text3Opacity, scale: text3Scale }}
          >
            ahwww
          </motion.p>
        </div>

        <div className="fixed w-screen h-screen  flex justify-center items-center   ">
          <motion.div
            className="absolute "
            style={{
              width: "calc(130vh + 10vw)",
              height: "calc(130vh + 10vw)",
              opacity: imageOpacity,
              rotate: imageRotate,
              scale: imageScale,
            }}
          >
            <div
              className="absolute inset-0  w-[60vh] h-[60vh] bottom-auto m-auto"
              style={{
                transform: `perspective(1000px) rotateX(-60deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={Picture}
                alt="image"
                style={{
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                }}
                className="object-cover rounded-xl"
              />
            </div>

            <div
              className="absolute inset-0  w-[60vh] h-[60vh] top-auto m-auto"
              style={{
                transform: `perspective(1000px) rotateY(-60deg)`,
                transformStyle: "preserve-3d",
                rotate: "90deg",
              }}
            >
              <Image
                src={Picture}
                alt="image"
                style={{
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                }}
                className="rounded-xl"
              />
            </div>
            <div
              className="absolute inset-0  w-[60vh] h-[60vh] left-auto m-auto"
              style={{
                transform: `perspective(1000px) rotateX(60deg)`,
                transformStyle: "preserve-3d",
                rotate: "-90deg",
              }}
            >
              <Image
                src={Picture}
                alt="image"
                style={{
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                }}
                className=" rounded-xl"
              />
            </div>
            <div
              className="absolute inset-0  w-[60vh] h-[60vh] right-auto m-auto"
              style={{
                transform: `perspective(1000px) rotateY(60deg)`,

                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={Picture}
                alt="image"
                style={{
                  objectFit: "contain",
                  transformStyle: "preserve-3d",
                }}
                className=" rounded-xl"
              />
            </div>
          </motion.div>
        </div>
        <div className="h-screen flex justify-center items-center w-full fixed">
          <motion.p
            className="text-xl font-playwrite"
            style={{ opacity: text4Opacity }}
          >
            End
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Page;
