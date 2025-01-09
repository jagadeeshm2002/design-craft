'use client';
import React from 'react'
import Image from 'next/image';
import Background from '../../../public/images/mask-section-transition/image6.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden  bg-white ' >
        <motion.div style={{y}} className='relative h-full '>
          <Image src={Background} fill alt="image" style={{objectFit: "cover"}} className=' '/>
        </motion.div>
      </div>
    )
}