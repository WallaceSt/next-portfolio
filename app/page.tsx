import Hero from "@/components/ui/areas/Hero";
import Navbar from "@/components/ui/areas/Navbar";
import { nav_links } from "@/data";

export default function Home() {
  return (
    <>
      <Navbar navItems={nav_links} />
      <Hero />
    </>
  );
}
