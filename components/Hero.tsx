import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeans";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import HeroTextDown from "./ui/HeroTextDown";
import HeroTextUp from "./ui/HeroTextUp";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        {/* Developer name section */}
        <HeroTextDown text="Wallace Santos" />
        {/* Heading section */}
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
          <TextGenerateEffect words={"Full Stack Developer"} />
        </h1>
        {/* Presentation text section */}
        <HeroTextUp>
          <span>
            Experienced in{' '}
            <span className="font-medium text-neutral-300">
              React, Node.js, Python, PostgreSQL, Docker, AWS, Jenkins
            </span>
            , and more. With a degree in{" "}
            <span className="font-medium text-neutral-300">
              Systems Analysis and Development
            </span>
            , I build scalable, efficient digital solutions that drive impact.
            🚀 Let&apos;s create something outstanding—get in touch today!
          </span>
        </HeroTextUp>
      </div>
      {/* Background section */}
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
