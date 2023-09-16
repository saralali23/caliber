import Image from "next/image";
import React from "react";
import { MapPin, Phone, Mail, User2 } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="pt-5 md:pt-8 pb-3 text-sm">
      <div className="flex md:justify-between flex-col md:flex-row justify-center gap-5 xl:gap-0">
        <div className="flex items-center justify-center md:justify-start">
          <Link href="#home">
            <Image
              src="/logo-nobg.webp"
              alt="logo"
              className="bg-primary rounded-lg"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <nav className="lg:block hidden">
          <div>
            <p className="font-semibold">Links</p>
          </div>
          <ul className="flex flex-col font-medium mt-2">
            {links.map(({ href, label }) => (
              <li>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 flex-col lg:flex-row items-start">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <User2 />
              <p>
                Dr.C.Saravanan PhD <br />
                (Consultant Clinical Psychologist)
              </p>
            </div>
            <div className="flex gap-2">
              <MapPin />
              <p>
                Plot No.4, 1st Cross, <br />
                Bharathi Nagar, (Near Shivaji Statue), <br />
                Karuvadikuppam, <br />
                Lawspet, Pondicherry 605008.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Phone />
              <a href="tel:+917550151561">+91 7550151561</a>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <a href="mailto:caliberfitcenter@gmail.com">
                caliberfitcenter@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
      <p className="text-center">© 2023 - All rights reserved</p>
    </footer>
  );
};
