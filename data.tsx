import { IoPerson, IoBuildSharp } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

// Hero Section

export const nav_links = [
  {
    name: "About",
    link: "/",
    icon: <IoPerson className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/",
    icon: <IoBuildSharp className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Habilities",
    link: "/",
    icon: <FaPencilRuler className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/",
    icon: <MdContactPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
