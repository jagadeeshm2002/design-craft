"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MainFollowMouseProps {}

const MainFollowMouse: React.FC<MainFollowMouseProps> = (props) => {
  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };


  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className="">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed  w-5 h-5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      ></motion.div>
    </div>
  );
};

export default MainFollowMouse;
