"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EffectShowProps = {
  children: React.ReactNode;
  initial_y?: number;
  animated_y?: number;
  initial_x?: number;
  animated_x?: number;
  initial_opacity?: number;
  animated_opacity?: number;
  transition_delay?: number;
  className?: string;
};

export const EffectShow = ({
  children,
  initial_y = 0,
  animated_y = 0,
  initial_x = 0,
  animated_x = 0,
  initial_opacity = 0,
  animated_opacity = 1,
  transition_delay = 0,
  className,
}: EffectShowProps) => {
  return (
    <motion.div
      initial={{
        y: initial_y,
        x: initial_x,
        opacity: initial_opacity,
      }}
      animate={{
        y: animated_y,
        x: animated_x,
        opacity: animated_opacity,
      }}
      transition={{
        delay: transition_delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
