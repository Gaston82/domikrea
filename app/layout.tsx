import type { Metadata } from "next";

import "./globals.css";
import { bodoni, poppins } from "./fonts/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Domikrea",
  description: "Domikrea Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${bodoni.variable} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
