import Image from "next/image";
import React from "react";
import logo from "@/public/domikrea-logo.jpg";
import { routes } from "./routes";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between font-bodoni text-xl px-10">
      <Image src={logo} alt="Domikrea logo" width={236} height={126} />
      <nav className="flex">
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
