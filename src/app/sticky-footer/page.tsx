"use client";
import Footer from "@/components/Footer";
import Lenis from "lenis";


import React, { useEffect } from "react";

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
    <div className="w-full bg-white text-black">
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-xl font-inter">scroll</p>
      </div>

      <Footer />
    </div>
  );
};
export default Page;

