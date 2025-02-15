"use client";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Picture from "../../../public/images/mask-section-transition/image4.jpg";
import Picture2 from "../../../public/images/mask-section-transition/image5.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import { MotionValue } from "motion";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const containerRef = useRef<HTMLElement>(null);

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
  return (
    <main
      className="w-full min-h-screen relative h-[200vh] "
      ref={containerRef}
    >
      <SectionOne scrollYProgress={scrollYProgress} />
      <SectionTwo scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Page;

const SectionOne: React.FC<{ scrollYProgress: any }> = ({
  scrollYProgress,
}) => {
  const rotateValue = useTransform(
    scrollYProgress,
    [0, 1],
    [0 + `deg`, -5 + "deg"]
  );
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.section
      className="h-[100vh] w-full bg-white sticky top-0"
      style={{
        rotate: rotateValue,
        scale: scaleValue,
      }}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="font-doto text-6xl text-center text-black">
          <p className="py-2">Scroll Perspective</p>

          <p className="flex justify-center items-center">
            Section
            <span className="overflow-hidden inline-flex mx-3 justify-center items-center">
              <Image src={Picture2} alt="" className="object-cover w-44 h-14" />
            </span>
            Transition
          </p>
        </div>
      </div>
    </motion.section>
  );
};
const SectionTwo: React.FC<{ scrollYProgress: any }> = ({
  scrollYProgress,
}) => {
  const rotateValue = useTransform(
    scrollYProgress,
    [0, 1],
    [7 + `deg`, 0 + "deg"]
  );
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.section
      className=" h-[100vh] w-full relative"
      style={{ rotate: rotateValue, scale: scaleValue }}
    >
      <Image
        src={Picture}
        alt="section transition image "
        placeholder="blur"
        blurDataURL={Picture.blurDataURL}
        className="w-full h-screen object-cover"
      />
    </motion.section>
  );
};
