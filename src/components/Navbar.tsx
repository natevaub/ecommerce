"use client";
import { Menu, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface CategoryProps {
  onHover: (category: string) => void;
  hoveredCategory: string;
  onFlyout: (active: boolean) => void;
  isActive: boolean;
}

const HoveredCategory: React.FC<CategoryProps> = ({
  onHover,
  // hoveredCategory,
  onFlyout,
  // isActive,
}) => {
  const handleMouseEnter = (event: React.MouseEvent) => {
    onFlyout(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    onFlyout(false);
    onHover("");
  };

  return (
    <div className="fixed h-full w-full bg-black bg-opacity-50 z-[100] font-futura-medium">
      <div
        className="bg-white h-[25%] flex justify-evenly py-8"
        style={{ boxShadow: "0px 25px 35px -4px rgba(0,0,0,0.49)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Featured Item</h1>
        <h1>Shop by Category</h1>
        <h1>Shop by Model</h1>
        <h1>Shop by Series</h1>
      </div>
    </div>
  );
};

const CategoryLargeScreen: React.FC<CategoryProps> = ({
  onHover,
  hoveredCategory,
  onFlyout,
  isActive,
}) => {
  const handleMouseEnter = (category: string) => {
    onHover(category);
    onFlyout(true);
  };

  const handleMouseLeave = () => {
    if (isActive === true) {
      return;
    }
    onHover("");
    setTimeout(() => onFlyout(false), 100);
  };

  return (
    <ul className="flex justify-center gap-8 h-2/6 max-xl:hidden font-futura-medium">
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Electrics")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Electrics"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
        <Link href="/electric-guitars">Electrics</Link>
      </li>
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Acoustics")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Acoustics"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
        <Link href="/acoustic-guitars">Acoustics</Link>
      </li>
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Basses")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Basses"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
        <Link href="/electric-basses">Basses</Link>
      </li>
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Amps & Audio")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Amps & Audio"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
        <Link href="/amps-audio">Amps & Audio</Link>
      </li>
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Accessories")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Accessories"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
        <Link href="/accessories">Accessories</Link>
      </li>
      <li
        className="flex items-center"
        onMouseEnter={() => handleMouseEnter("Effects Pedals")}
        onMouseLeave={handleMouseLeave}
        style={
          hoveredCategory === "Effects Pedals"
            ? { color: "red", borderBottom: "solid red 1px" }
            : {}
        }
      >
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
          <Link href="/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryHovered, setCategoryHovered] = useState("");
  const [flyoutActive, setFlyoutActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCategoryHover = (category: string) => {
    setCategoryHovered(category);
  };

  const handleActiveFlyout = (isActive: boolean) => {
    setFlyoutActive(isActive);
  };

  return (
    <div
      className="sticky z-[100] top-0"
      style={{ boxShadow: "0px 8px 13px -5px #000000" }}
    >
      <nav
        className="top-0 bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden flex-col"
        style={{ border: "1px solid rgba(0, 0, 0, .1)" }}
      >
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
              <div className="hidden xl:block">
                <Link href="/sign-up">Sign in</Link>
                </div>
            </div>
          </div>
        </div>
        <CategoryLargeScreen
          onHover={handleCategoryHover}
          hoveredCategory={categoryHovered}
          onFlyout={handleActiveFlyout}
          isActive={flyoutActive}
        />
      </nav>
      {sidebarOpen && (
        <NavigationMenuSmallScreen
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      )}
      {flyoutActive && categoryHovered !== "" ? (
        <HoveredCategory
          onHover={handleCategoryHover}
          hoveredCategory={categoryHovered}
          onFlyout={handleActiveFlyout}
          isActive={flyoutActive}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
