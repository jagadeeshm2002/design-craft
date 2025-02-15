"use client";
import TextParallax from "@/components/TextParallax";
import Lenis from "lenis";
import React, { useEffect } from "react";
import image1 from "../../../../public/images/mask-section-transition/image4.jpg";
import image3 from "../../../../public/images/mask-section-transition/image3.jpg";
import image2 from "../../../../public/images/mask-section-transition/image6.jpg";
interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white text-black overflow-hidden">
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-xl text-center max-w-[50vw] leading-none font-inter text-black">
          Scroll
        </p>
      </div>
      <div>
        <TextParallax
          text="Devloper"
          image={image1}
          direction="right"
          left="-20%"
          className="font-doto"
        />
        <TextParallax
          text="Designer"
          image={image2}
          direction="left"
          left="-40%"
          className=" font-doto"
        />
        <TextParallax
          text="Creator"
          image={image3}
          direction="right"
          left="70%"
          className="font-doto"
        />
      </div>
      <div className="h-screen w-full flex items-center justify-center"></div>
    </div>
  );
};

export default Page;
