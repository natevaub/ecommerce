"use client";
import { Triangle } from "lucide-react";
import { useState, useEffect } from "react";

const Category = () => {
  return (
      <ul className="bg-red-500 flex justify-center gap-8 h-1/5">
        <li className="flex items-center">
          Electrics 
        </li>
        <li className="flex items-center">
          Acoustic
        </li>
        <li className="flex items-center">
          Bass
        </li>
        <li className="flex items-center">
          Amps & Audio
        </li>
        <li className="flex items-center">
          Accessories
        </li>
        <li className="flex items-center">
          Effects Pedals
        </li>
      </ul>

  );
}

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(windowWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-red-500 sticky top-0 z-[100] bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden border-b border-black">
      <div className="h-4/5 bg-blue-500 flex justify-evenly items-center ">
        <div className='w-[250px] text-center'>Logo</div>
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
     {windowWidth >= 1280 && <Category />}
    </nav>
  );
};

export default Navbar;
