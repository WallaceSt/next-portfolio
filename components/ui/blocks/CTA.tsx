"use client";
import React from "react";
import { EffectLinkMouseObserver } from "../effects/EffectMouseObserver";
import { EffectShow } from "../effects/EffectShow";

type CTAProps = {
  text: string;
  variant?: "primary" | "secondary";
};

const CTA = ({ text, variant = "primary" }: CTAProps) => {
  const styles = {
    primary: "py-2 px-4 md:py-2 md:px-8 rounded-full bg-orange-600 text-white",
    secondary: "py-2 px-4 md:py-2 md:px-8 rounded-full bg-gray-600 text-white",
  };

  return (
    <EffectShow
      initial_y={15}
      animated_y={0}
      transition_delay={1.4}
      className="flex justify-center mt-4 md:mt-12 z-10 antialiased"
    >
      <EffectLinkMouseObserver className={styles[variant]}>
        {text}
      </EffectLinkMouseObserver>
    </EffectShow>
  );
};

export default CTA;
