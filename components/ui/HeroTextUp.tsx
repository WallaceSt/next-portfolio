"use client";
import React from "react";
import { motion } from "motion/react";

type HeroTextUpProps = {
  children: React.ReactNode;
}

const HeroTextUp: React.FC<HeroTextUpProps> = ({children}) => {
  return (
    <motion.p
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
    >{children}</motion.p>
  );
};

export default HeroTextUp;
