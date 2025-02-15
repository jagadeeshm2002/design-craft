"use client";
import Description from "@/components/imageparallax/Description";
import Intro from "@/components/imageparallax/Intro";
import Section from "@/components/imageparallax/Section";
import Lenis from "lenis";
import React, { useEffect } from "react";

const BackgroundImageParallaxPage: React.FC = (props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <main>
    <Intro/>
    <Description/>
    <Section/>


  </main>;
};

export default BackgroundImageParallaxPage;
