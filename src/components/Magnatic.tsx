"use client"
import { useRef, useState } from 'react'

import { motion } from 'framer-motion';

export default function Magnatic({children}: {children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x:0,y:0});
    

    const handleMouse= (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const rect = ref.current ? ref.current.getBoundingClientRect() : { height: 0, width: 0, left: 0, top: 0 };
        const { height, width, left, top } = rect;
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 12, mass: 0.15}}
        >
            {children}
        </motion.div>
    )
}