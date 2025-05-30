"Use client";
import React from "react";
import { EffectBackgroundBeans } from "@/components/ui/effects/EffectBackground";
import CTA from "@/components/ui/blocks/CTA";
import { HeroDevName, HeroHeading, HeroText } from "../blocks/Text";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        {/* Developer name section */}
        <HeroDevName name={"Wallace Santos"}  />

        {/* Heading section */}
        <HeroHeading text={"Full Stack Developer"} />

        {/* Presentation text section */}
        <HeroText />
      </div>

      {/* Call to action section */}
      <CTA text={"Get in touch"} />

      {/* Background section */}
      <EffectBackgroundBeans />
    </div>
  );
};

export default Hero;
