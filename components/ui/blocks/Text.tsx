import { EffectTextGenerate } from "../effects/EffectGenerate";
import { EffectShow } from "../effects/EffectShow";

type HeroDevNameProps = {
  name: string;
};
export const HeroDevName = ({ name }: HeroDevNameProps) => {
  return (
    <EffectShow initial_y={-20} animated_y={0} transition_delay={0.8}>
      <p className="uppercase text-xs md:text-sm text-center font-semibold tracking-widest text-neutral-500">
        {name}
      </p>
    </EffectShow>
  );
};

type HeroHeadingProps = {
  text: string
}
export const HeroHeading = ({text}: HeroHeadingProps) => {
  return (
    <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
      <EffectTextGenerate words={text} />
    </h1>
  );
};

export const HeroText = () => {
  return (
    <EffectShow initial_y={20} animated_y={0} transition_delay={1.2}>
      <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Experienced in{" "}
        <span className="font-medium text-neutral-300">
          React, Node.js, Python, PostgreSQL, Docker, AWS, Jenkins
        </span>
        , and more. With a degree in{" "}
        <span className="font-medium text-neutral-300">
          Systems Analysis and Development
        </span>
        , I build scalable, efficient digital solutions that drive impact. 🚀
        Let&apos;s create something outstanding!
      </p>
    </EffectShow>
  );
};
