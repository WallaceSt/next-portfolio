import React from "react";
import { navigation } from "@/data/data";

const Navigation = () => {
  return (
    <section>
      <nav className="md:flex md:justify-center md:mt-2">
        <ul className="flex gap-6 justify-center md:rounded-full p-5 md:max-w-[80vw] bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-fuchsia-900/30 via-15% to-150% backdrop-blur-xl border-b-indigo-800 md:border-indigo-800 border-b-2 md:border-1">
          {navigation.links.map((_, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-md text-orange-500 md:text-white font-semibold tracking-wide cursor-pointer hover:text-teal-300 transition duration-300"
              >
                {_.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
