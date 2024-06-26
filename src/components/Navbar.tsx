"use client";
import { Triangle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from 'next/link'

const Category = () => {
  return (
      <ul className="bg-red-500 flex justify-center gap-8 h-1/5">
        <li className="flex items-center">
          <Link href='/electric-guitars'>Electrics</Link>
        </li>
        <li className="flex items-center">
          <Link href='/acoustic-guitars'>Acoustics</Link>
        </li>
        <li className="flex items-center">
          <Link href='/electric-basses'>Basses</Link>
        </li>
        <li className="flex items-center">
          <Link href='/amps-audio'>Amps & Audio</Link>
        </li>
        <li className="flex items-center">
          <Link href='/accessories'>Accessories</Link>
        </li>
        <li className="flex items-center">
          <Link href='/effects-pedals'>Effects Pedals</Link>
        </li>
      </ul>
  );
}

const Navbar = () => {

  return (
    <nav className="bg-red-500 sticky top-0 z-[100] bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden border-b border-black">
      <div className="h-4/5 bg-blue-500 flex justify-evenly items-center ">
        <Link className='w-[250px] text-[2.5rem] text-center amplify-font' href="/">Gear Paradise</Link>
        <input
          type="text"
          placeholder="Search"
          className="sm:w-[450px] lg:w-[720px] bg-transparent px-6 py-2 font-medium text-base leading-none tracking-wider text-black rounded-full border border-gray-300 h-12 max-h-12"
        />
        <div className='text-center w-[250px]'>
          <div>Hamburger menu</div>
          <div>Sign In</div>
        </div>
      </div>
      <Category />
    </nav>
  );
};

export default Navbar;
