"use client";
import { Menu, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const CategoryLargeScreen = () => {
  return (
    <ul className="bg-red-500 flex justify-center gap-8 h-1/5 max-xl:hidden">
      <li className="flex items-center">
        <Link href="/electric-guitars">Electrics<ChevronRight /></Link>
      </li>
      <li className="flex items-center">
        <Link href="/acoustic-guitars">Acoustics</Link>
      </li>
      <li className="flex items-center">
        <Link href="/electric-basses">Basses</Link>
      </li>
      <li className="flex items-center">
        <Link href="/amps-audio">Amps & Audio</Link>
      </li>
      <li className="flex items-center">
        <Link href="/accessories">Accessories</Link>
      </li>
      <li className="flex items-center">
        <Link href="/effects-pedals">Effects Pedals</Link>
      </li>
    </ul>
  );
};

const CategorySmallScreen = () => {
  return (
    <ul className="px-12 bg-gray-300 fixed right-0 top-0 w-[400px] h-full z-[100] uppercase"
    style={{ boxShadow: '-5px 0px 27px 3px rgba(0, 0, 0, 0.66)' }}>
      <Link
        className="text-[2.5rem] text-center amplify-font normal-case"
        href="/"
      >
        Gear Paradise
      </Link>
      <li className="flex justify-between cursor-pointer">
        <Link href="/electric-guitars">Electrics</Link>
        <ChevronRight />
      </li>
      <li className="flex items-center">
        <Link href="/acoustic-guitars">Acoustics</Link>
      </li>
      <li className="flex items-center">
        <Link href="/electric-basses">Basses</Link>
      </li>
      <li className="flex items-center">
        <Link href="/amps-audio">Amps & Audio</Link>
      </li>
      <li className="flex items-center">
        <Link href="/accessories">Accessories</Link>
      </li>
      <li className="flex items-center">
        <Link href="/effects-pedals">Effects Pedals</Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="bg-red-500 sticky top-0 z-[100] bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden border-b border-black flex-col">
        <div className="xl:h-4/5 max-xl:h-full bg-blue-500 flex justify-center">
          <div className=" flex justify-between items-center max-w-[100rem] w-full">
            <Link
              className="w-[250px] text-[2.5rem] text-center amplify-font"
              href="/"
            >
              Gear Paradise
            </Link>
            <input
              type="text"
              placeholder="Search"
              className="sm:w-[450px] lg:w-[720px] bg-transparent px-6 py-2 font-medium text-base leading-none tracking-wider text-black rounded-full border border-gray-300 h-12 max-h-12"
            />
            <div className="text-center w-[250px] flex justify-center">
              <div>
                <Menu className="xl:hidden" />
              </div>
            </div>
          </div>
        </div>
        <CategoryLargeScreen />
      </nav>
      {/* <div className="bg-black fixed right-0 top-0 w-[800px]"></div> */}
      <CategorySmallScreen />
    </div>
  );
};

export default Navbar;
