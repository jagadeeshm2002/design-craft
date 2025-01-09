// "use client";
// import React, { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import image1 from "../../../public/images/mask-section-transition/image4.jpg";
// import image2 from "../../../public/images/mask-section-transition/image5.jpg";
// import image3 from "../../../public/images/mask-section-transition/image6.jpg";
// import Image from "next/image";
// import Lenis from "lenis";

// const StarMask = ({ scale, rotate }: { scale: any; rotate: any }) => (
//   <motion.path
//     viewBox={"0 0 200 100"}
//     d="M100 0C100 0 102.759 25.7497 113.505 36.4955C124.25 47.2412 150 50 150 50C150 50 124.25 52.7588 113.505 63.5045C102.759 74.2503 100 100 100 100C100 100 97.2412 74.2503 86.4955 63.5045C75.7497 52.7588 50 50 50 50C50 50 75.7497 47.2412 86.4955 36.4955C97.2412 25.7497 100 0 100 0Z"
//     fill="white"
//     transition={{
//       type: "spring",
//       stiffness: 50,
//       damping: 20,
//     }}
//     style={{
//       scale,
//       rotate,
//       transformOrigin: "50% 50%", // Ensure transformations are centered
//     }}
//   />
// );

// const Page = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const lenis = new Lenis();
//     const raf = (time: any) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };
//     requestAnimationFrame(raf);
//   }, []);

//   const maskScale1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 4, 6]);
//   const maskScale2 = useTransform(
//     scrollYProgress,
//     [0.35, 0.45, 0.65],
//     [0, 0.1, 6]
//   );
//   const maskScale3 = useTransform(
//     scrollYProgress,
//     [0.7, 0.8, 0.9],
//     [0, 0.1, 6]
//   );
//   const maskRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   return (
//     <div className="w-full bg-white">
//       {/* Intro Section */}
//       <section className="h-screen w-full flex items-center justify-center bg-white ">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-xl font-inter font-bold text-gray-900 text-center px-4"
//         >
//           scroll
//         </motion.h1>
//       </section>

//       {/* Main Animation Container */}
//       <div ref={containerRef} className="h-[500vh] w-full relative bg-white">
//         <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
//           {/* Reveal Layers */}
//           {[image1, image2, image3].map((image, index) => (
//             <svg
//               key={index}
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 200 100" // Match viewBox to the star shape
//               preserveAspectRatio="xMidYMid slice"
//             >
//               <defs>
//                 <mask id={`revealMask${index + 1}`}>
//                   <rect width="200" height="100" fill="black" />

//                   <StarMask
//                     scale={[maskScale1, maskScale2, maskScale3][index]}
//                     rotate={maskRotate}
//                   />
//                 </mask>
//               </defs>
//               <foreignObject
//                 width="100%"
//                 height="100%"
//                 mask={`url(#revealMask${index + 1})`}
//               >
//                 <Image
//                   src={image}
//                   alt={`Reveal ${index + 1}`}
//                   fill
//                   sizes="100vw"
//                   priority
//                   className="object-cover"
//                   quality={100}
//                 />
//               </foreignObject>
//             </svg>
//           ))}
//         </div>
//       </div>

//       {/* Outro Section */}
//       <section className="h-screen flex items-center justify-center bg-white"></section>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import image1 from "../../../public/images/mask-section-transition/image4.jpg";
import image2 from "../../../public/images/mask-section-transition/image5.jpg";
import image3 from "../../../public/images/mask-section-transition/image6.jpg";
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
