import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HK Motion Media",
  description: "Content creation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
