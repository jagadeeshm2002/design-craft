"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import image1 from "../../../../../public/images/mask-section-transition/image4.jpg";
import image2 from "../../../../../public/images/mask-section-transition/image5.jpg";
import image3 from "../../../../../public/images/mask-section-transition/image6.jpg";
import Image from "next/image";
import Lenis from "lenis";
import ScrollRevealSection from "@/components/mask-section-transition/ScrollRevealSection";

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
        <ScrollRevealSection index={0} scrollYProgress={scrollYProgress}>
          <section className="w-full h-full">
            <Image src={image1} fill alt="image" className="object-cover" />
          </section>
        </ScrollRevealSection>
        <ScrollRevealSection index={1} scrollYProgress={scrollYProgress}>
          <section className="w-full h-full">
            <Image src={image2} fill alt="image" className="object-cover" />
          </section>
        </ScrollRevealSection>
        <ScrollRevealSection index={2} scrollYProgress={scrollYProgress}>
          <section className="w-full h-full">
            <Image src={image3} fill alt="image" className="object-cover" />
          </section>
        </ScrollRevealSection>
      </div>

      {/* Outro Section */}
      <section className="h-screen flex items-center justify-center bg-white"></section>
    </div>
  );
};

export default Page;
