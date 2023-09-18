import Image from "next/image";
import React from "react";
import { MapPin, Phone, Mail, User2, Facebook } from "lucide-react";
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
        <div className="flex gap-4  lg:gap-8 flex-col lg:flex-row items-start">
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
              <a href="tel:+917550151561">+91 75501 51561</a>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28px"
                  height="28px"
                >
                  <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                </svg>
              </div>
              <a href="https://wa.me/9789644521">+91 97896 44521</a>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <a href="mailto:caliberfitcentre@gmail.com">
                caliberfitcentre@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <Facebook />
              <a href="https://www.facebook.com/people/Caliber-Fitness-Center/61550637602600/">
                Caliber Fitness Center
              </a>
            </div>
            {/* </div>
          <div className="flex flex-col gap-1"> */}
            <div className="flex gap-2 items-center justify-start">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                  className="fill-current"
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
                </svg>
              </div>
              <a href="https://www.instagram.com/caliber_fitness_center/">
                caliber_fitness_center
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
