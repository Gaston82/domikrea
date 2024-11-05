import { Poppins, Bodoni_Moda } from "next/font/google";

export const poppins = Poppins({
  weight: ["200", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});
