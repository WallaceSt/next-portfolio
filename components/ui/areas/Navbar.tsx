"use client";

import React, { JSX } from "react";
import { FloatingNavbar } from "../blocks/Navigation";

type FloatingNavbarProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element
  }[]
}

const Navbar = ({
  navItems
}: FloatingNavbarProps) => {
  return (
    <div className="relative  w-full">
      {navItems && (<FloatingNavbar navItems={navItems} />)}
    </div>
  );
}

export default Navbar;