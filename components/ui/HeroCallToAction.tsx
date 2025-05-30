"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";

const HeroCallToAction = ({ text }: { text: string }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (event: React.PointerEvent) => {
    const el = buttonRef.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * -10; // até -10deg
    const rotateY = (deltaX / centerX) * 10; // até 10 deg

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.boxShadow = `${-rotateY}px ${rotateX}px 5px rgba(255, 255, 255, 0.3)`;
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
  };

  return (
    <motion.section
      initial={{
        y: 15,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1.4,
        duration: 0.8,
      }}
      className="flex justify-center mt-12 z-10 antialiased"
    >
      <a
        ref={buttonRef} 
        href="#" 
        className="py-2 px-8 rounded-full bg-orange-600"
        onPointerMove={handleMouseMove}
        onPointerLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(0deg) rotateY(0deg)',
          transition: 'transfor 0.2s ease, box-shadow 0.2s ease',
        }}
      >
          <span className="text-white">{text}</span>
      </a>
    </motion.section>
  );
};

export default HeroCallToAction;
