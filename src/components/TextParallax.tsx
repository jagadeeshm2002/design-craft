"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

interface TextParallaxProps {
  text: string;
  image: StaticImageData;
  className?: string;
  left?: string;
  direction: "left" | "right";
}

const TextParallax: React.FC<TextParallaxProps> = (props) => {
  const { text, image, left } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const direction = props.direction === "left" ? -1 : 1;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const leftMove = useTransform(
    scrollYProgress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      className={`flex relative whitespace-nowrap  left-[${left}] ${props.className} my-4`}
      ref={containerRef}
      style={{
        x: leftMove,
      }}
    >
      <Pharse text={text} image={image} />
      <Pharse text={text} image={image} />
      <Pharse text={text} image={image} />
    </motion.div>
  );
};
const Pharse = (props: { text: string; image: StaticImageData }) => {
  return (
    <div className="flex gap-5 ml-10 flex-row items-center">
      <p className="text-[7.5vw]  font-extrabold m-0 leading-6">{props.text}</p>
      <span className=" overflow-hidden h-[7.5vw] aspect-[4/2] relative rounded-full ">
        <Image
          src={props.image}
          fill
          alt="image"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </span>
    </div>
  );
};
export default TextParallax;
