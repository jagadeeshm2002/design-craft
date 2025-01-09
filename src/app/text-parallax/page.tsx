"use client"
import Lenis from "lenis";
import React, { useEffect } from "react";


interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    const lenis = new Lenis();
    function time(time: any) {
      lenis.raf(time);
      requestAnimationFrame(time);
    }
    requestAnimationFrame(time);
  }, []);
  return <></>;
};

export default Page;
