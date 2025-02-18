"use client";
import Lenis from "lenis";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useVelocity,
} from "motion/react";
import React, { useEffect, useRef } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  const colors = ["#FA5C40", "#FAF6EF", "#C4A173", "#FA5C40", "#E0DBD4"];
  const containerRef = useRef(null);

  //   const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 0.3], [0, 1000]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], ["500px", "3000px"]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const scrollVelocity = useVelocity(scrollY);

  const rawTranslateY = useTransform(scrollVelocity, [-100, 100], [-20, 20]);
  const translateY = useSpring(rawTranslateY, { stiffness: 150, damping: 30 });
  useEffect(() => {
    console.log("scrollY", scrollY);
    console.log("scrollVelocity", scrollVelocity);
    console.log("rawTranslateY", rawTranslateY);
    console.log("translateY", translateY);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen w-full flex justify-center items-center bg-gray-200">
        <p className="text-2xl font-poppins text-black">SVG Mask Scroll</p>
      </div>
      <div className="flex justify-center items-center pt-20  px-12 relative">
        <p className="text-[40px] font-poppins text-black font-medium  text-center">
          We have a bold vision for the future of travel where you can better
          connect with the outdoors and each other. Lightship’s electric travel
          trailers allow you to visit new corners of the world while doing your
          part to preserve it.
        </p>
      </div>

      <div className="h-[300vh] w-full relative " ref={containerRef}>
        <div className="sticky top-0 h-screen w-full ">
          <div className="absolute top-0 h-screen  flex justify-center items-center  w-full">
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <motion.div
                  key={i}
                  className=" absolute"
                  style={{
                    zIndex: i + 1,
                    y: useTransform(
                      translateY,
                      (value) => value * (i + 1) * 0.5
                    ),
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="602"
                    height="602"
                    viewBox="0 0 602 602"
                    fill={colors[i]}
                    className="h-[66vh]"
                    style={{ fill: colors[i] }}
                  >
                    <path d="M280.203 10.943C283.77 -2.9848 318.23 -2.98479 321.797 10.943C337.947 73.9945 365.175 149.102 409.036 192.964C452.898 236.825 528.006 264.053 591.057 280.203C604.985 283.77 604.985 318.23 591.057 321.797C528.006 337.947 452.898 365.175 409.036 409.036C365.175 452.898 337.947 528.006 321.797 591.057C318.23 604.985 283.77 604.985 280.203 591.057C264.053 528.006 236.825 452.898 192.964 409.036C149.102 365.175 73.9944 337.947 10.943 321.797C-2.9848 318.23 -2.98479 283.77 10.943 280.203C73.9945 264.053 149.102 236.825 192.964 192.964C236.825 149.102 264.053 73.9944 280.203 10.943Z" />
                  </svg>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="relative h-full w-full overflow-hidden z-[5]"
            style={{
              maskImage: "url(/svg/star.svg)",
              maskRepeat: "no-repeat",
              maskPosition: "center center",
              maskSize: scale,

              y: useTransform(translateY, (value) => value * 2.3),
            }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/car.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            className="absolute top-0 w-full h-full bg-white z-10"
            style={{ opacity: opacity }}
          ></motion.div>
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-2xl font-poppins text-black">End</p>
      </div>
    </div>
  );
};

export default Page;
