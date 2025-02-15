"use client";
import Image from "next/image";
import React, {useEffect, useRef } from "react";
import Picture1 from "../../../../public/images/mask-section-transition/image1.jpg";
import Picture2 from "../../../../public/images/mask-section-transition/image2.jpg";
import Picture3 from "../../../../public/images/mask-section-transition/image3.jpg";
import Picture4 from "../../../../public/images/mask-section-transition/image4.jpg";
import Picture5 from "../../../../public/images/mask-section-transition/image5.jpg";
import Picture6 from "../../../../public/images/mask-section-transition/image6.jpg";
import Lenis from "lenis";
import { useScroll, motion, useTransform } from "motion/react";

interface PageProps {}

const images = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6];

const Page: React.FC<PageProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      className="
    w-full h-full  bg-white text-black p-10 flex flex-col justify-between min-h-screen"
    >
      <section className="flex justify-center items-center w-full gap-10 h-screen">
        <div className="w-1/2 ">
          <Image
            src={Picture1}
            alt="hero image"
            className="rounded-xl"
            placeholder="blur"
          />
        </div>
        <div className="w-1/2 flex justify-center  items-start h-full flex-col self-start ">
          <h2 className="text-4xl font-playwrite">heading</h2>
          <p className="text-lg font-inter font-light py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            voluptatem libero! Deserunt facilis corrupti aperiam eius soluta
            totam reiciendis itaque quod perferendis, voluptate molestias!
            Quidem quos repellat laboriosam adipisci quaerat!
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-lg justify-self-end">
            Button
          </button>
        </div>
      </section>
      <div className="h-[320vh] relative" ref={container}>
        <div className="h-screen sticky top-0 flex justify-center items-center  overflow-x-hidden">
          <motion.div
            className="flex  flex-row items-center gap-10 "
            style={{ x }}
          >
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={images[index]}
                alt={`Image ${index}`}
                className="rounded-xl max-h-[22vw] "
                placeholder="blur"
                blurDataURL={Picture1.blurDataURL}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <section className="flex justify-center items-center flex-row-reverse w-full gap-10 h-screen ">
        <div className="w-1/2 ">
          <Image
            src={Picture1}
            alt="hero image"
            className="rounded-xl"
            placeholder="blur"
          />
        </div>
        <div className="w-1/2 flex justify-center  items-start h-full flex-col self-start ">
          <h2 className="text-4xl font-playwrite">heading</h2>
          <p className="text-lg font-inter font-light py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            voluptatem libero! Deserunt facilis corrupti aperiam eius soluta
            totam reiciendis itaque quod perferendis, voluptate molestias!
            Quidem quos repellat laboriosam adipisci quaerat!
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-lg justify-self-end">
            Button
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
