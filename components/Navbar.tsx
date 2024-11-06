import Image from "next/image";
import React from "react";
import logo from "@/public/domikrea-logo.jpg";
import { routes } from "./routes";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <header className="flex flex-col items-center font-bodoni text-2xl">
      <Image src={logo} alt="Domikrea logo" width={300} height={172} />
      <nav className="flex justify-center">
        <ul className="flex justify-center items-center gap-10 px-12">
          {routes.map((route) => (
            <li key={route.path}>
              <ActiveLink {...route} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
