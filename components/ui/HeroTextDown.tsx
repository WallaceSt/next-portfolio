"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroTextDown = ({ text }: { text: string }) => {
  return (
    <motion.p
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.8,
      }}
      className="uppercase text-xs md:text-sm text-center font-semibold tracking-widest text-neutral-500"
    >
      {text}
    </motion.p>
  );
};

export default HeroTextDown;
