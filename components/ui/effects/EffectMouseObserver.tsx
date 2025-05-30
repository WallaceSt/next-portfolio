"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type EffectLinkMouseObserverProps = {
  children: React.ReactNode;
  className?: string;
  rotationDegree?: number;
  boxShadowHover?: string;
  boxShaddowNotHover?: string;
};

export const EffectLinkMouseObserver = ({
  children,
  className,
  rotationDegree = 10,
  boxShadowHover = "5px rgba(255, 255, 255, 0.3)",
  boxShaddowNotHover = "0px 0px 0px rgba(0,0,0,0)",
}: EffectLinkMouseObserverProps) => {
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

    const rotateX = (deltaY / centerY) * -rotationDegree; // até -degree
    const rotateY = (deltaX / centerX) * rotationDegree; // até degree

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.boxShadow = `${-rotateY}px ${rotateX}px ${boxShadowHover}`;
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow = `${boxShaddowNotHover}`;
  };

  return (
    <a
      ref={buttonRef}
      className={cn(className)}
      href="#"
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateX(0deg) rotateY(0deg)",
        transition: "transfor 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {children}
    </a>
  );
};
