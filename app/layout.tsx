import type { Metadata } from "next";
import "./globals.css";
import { bodoni, poppins } from "./fonts/fonts";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
