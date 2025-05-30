"use client";

import React, { JSX } from "react";
import { cn } from "@/lib/utils";
import { EffectFloatNavbar } from "../effects/EffectFloat";

type FloatingNavbarProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  defaultClassName?: string;
};

export const FloatingNavbar = ({
  navItems,
  className,
  defaultClassName = "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
}: FloatingNavbarProps) => {
  return (
    <EffectFloatNavbar>
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(`${className || defaultClassName}`)}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
    </EffectFloatNavbar>
  );
};
