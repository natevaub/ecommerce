"use client";
import { Menu, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const HoveredCategory = () => {
  return (
    <div className="fixed h-full w-full bg-black bg-opacity-25 z-[100]">
      <h1>Featured Item</h1>
      <h1>Shop by Category</h1>
      <h1>Shop by Model</h1>
      <h1>Shop by Series</h1>
    </div>
  )
}

const CategoryLargeScreen = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <ul className="flex justify-center gap-8 h-1/5 max-xl:hidden">
      <li className="flex items-center" >
        <Link href="/electric-guitars">Electrics</Link>
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

const NavigationMenuSmallScreen = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={`fixed h-full w-full bg-black bg-opacity-25 z-[100] transition-opacity duration-500 ease-in-out /*${
        isOpen ? "slide-down" : "-translate-y-full"
      }*/`}
      style={{
        boxShadow: "-5px 0px 27px 3px rgba(0, 0, 0, 0.66)",
        transitionDuration: "0.5s",
      }}
    >
      <ul
        className={`px-8 bg-gray-300 fixed right-0 top-0 w-[400px] h-full z-[100] uppercase `}
        // style={{ boxShadow: '-5px 0px 27px 3px rgba(0, 0, 0, 0.66)', transitionDuration: '0.5s' }}
      >
        <div className="flex justify-between items-center mb-4">
          <Link
            className="text-[2.5rem] text-center amplify-font normal-case"
            href="/"
          >
            Gear Paradise
          </Link>
          <X onClick={toggleSidebar} />
        </div>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/electric-guitars">Electrics</Link>
          <ChevronRight />
        </li>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/acoustic-guitars">Acoustics</Link>
          <ChevronRight />
        </li>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/electric-basses">Basses</Link>
          <ChevronRight />
        </li>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/amps-audio">Amps & Audio</Link>
          <ChevronRight />
        </li>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/accessories">Accessories</Link>
          <ChevronRight />
        </li>
        <li
          className="flex justify-between cursor-pointer px-10 mb-4 font-semibold"
          onClick={toggleSidebar}
        >
          <Link href="/effects-pedals">Effects Pedals</Link>
          <ChevronRight />
        </li>
        <li className="flex my-10 border-y border-gray-800 cursor-pointer px-10 py-8 ">
          Sign in
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sticky z-[100] top-0">
      <nav className="top-0 bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden border-b border-black flex-col">
        <div className="xl:h-4/6 max-xl:h-full flex justify-center">
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
              className="sm:w-[450px] lg:w-[500px] bg-transparent px-6 py-2 font-medium text-base leading-none tracking-wider text-black rounded-full border border-gray-600 h-12 max-h-12"
            />
            <div className="text-center w-[250px] flex justify-center">
              <div>
                <Menu className="xl:hidden" onClick={toggleSidebar} />
              </div>
              <div className="hidden xl:block">Sign in</div>
            </div>
          </div>
        </div>
        <CategoryLargeScreen />
        
      </nav>
      {sidebarOpen && (
        <NavigationMenuSmallScreen
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      {/* <HoveredCategory /> */}
    </div>
  );
};

export default Navbar;
