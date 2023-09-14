import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caliber fitness",
  description:
    "Welcome to Caliber Fitness, the leading gym in Puducherry offering state-of-the-art facilities and expert guidance to help you achieve your fitness goals. Join our vibrant fitness community today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
