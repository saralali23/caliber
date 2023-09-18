import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Hamburger } from "./hamburger";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="fixed bg-nav w-full z-50 text-white">
      <header className="flex font-bold justify-between  items-center max-w-5xl mx-auto py-3 px-3">
        <h1 className="text-2xl md:text-3xl">Caliber Fitness Center</h1>
        <div className="gap-4 items-center hidden md:flex">
          <nav>
            <ul className="flex space-x-4 text-lg font-semibold">
              {links.map(({ href, label }) => (
                <li>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2 h-full">
          <div>
            <ThemeToggle />
          </div>
          <div>
            <Hamburger links={links} />
          </div>
        </div>
      </header>
    </div>
  );
};
