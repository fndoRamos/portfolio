import React from "react";
//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
//Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-8">
      <div className="container mx auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full 
        max-w-[460px] max-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
