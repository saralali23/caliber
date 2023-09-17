import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });
// const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Caliber fitness",
  icons: {
    icon: "/logo-500.webp",
  },
  description:
    "Welcome to Caliber Fitness, the leading gym in Puducherry offering state-of-the-art facilities and expert guidance to help you achieve your fitness goals. Join our vibrant fitness community today!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="mydark"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "4rem" }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
