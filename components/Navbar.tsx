import React from 'react';
import { routes } from './routes';
import ActiveLink from './ActiveLink';

const Navbar = () => {
  return (
    <nav className="font-bodoni flex justify-center">
      <ul className="flex justify-center items-center gap-10 px-12">
        {routes.map((route) => (
          <li key={route.path}>
            <ActiveLink {...route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
