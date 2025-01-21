import React from 'react';
import Image from 'next/image';
import logo from '@/public/domikrea-logo.jpg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-14">
        <Image
          priority
          src={logo}
          alt="Domikrea logo"
          width="236"
          height="126"
          className="w-auto h-auto"
        />
        <Navbar />
      </header>
      <div className="w-full h-[1px] bg-gray-300"></div>
    </>
  );
};

export default Header;
