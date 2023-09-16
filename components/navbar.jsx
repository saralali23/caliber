import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Hamburger } from "./hamburger";

const links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="bg-base-300">
      <header className="flex justify-between  items-center max-w-5xl mx-auto py-3 px-3">
        <h1 className="text-2xl">Caliber Fitness</h1>
        <div className="gap-4 items-center hidden md:flex">
          <nav>
            <ul className="flex space-x-4">
              {links.map(({ href, label }) => (
                <li>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <ThemeToggle /> */}
        </div>

        <div className="flex md:hidden items-center gap-2 h-full">
          {/* <div>
          <ThemeToggle />
        </div> */}
          <div>
            <Hamburger links={links} />
          </div>
        </div>
      </header>
    </div>
  );
};
