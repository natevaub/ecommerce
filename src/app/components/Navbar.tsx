import { Triangle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 sticky top-0 z-[100] bg-white/75 backdrop-blur-lg transition-all h-[10rem] overflow-hidden border-b border-black">
      <div className="h-4/5 bg-blue-500 flex justify-center items-center ">
        {/* <div>Logo</div> */}
        <input
          type="text"
          placeholder="Search"
          className="sm:w-[450px] lg:w-[720px] bg-transparent px-6 py-2 font-medium text-base leading-none tracking-wider text-black rounded-full border border-gray-300 h-12 max-h-12"
        />
        {/* <div>
          <div>Hamburger menu</div>
          <div>Finder Dealers</div>
        </div> */}
      </div>
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
    </nav>
  );
};

export default Navbar;
