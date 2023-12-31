import React from "react";
//import icons
import { BiHomeAlt } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
//Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-5">
      <div className="container mx-auto">
        <div
          className="w-full bg-bg1/70 h-[96px] backdrop-blur-2x1 rounded-full 
        max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex flex-col items-center justify-center 
            hover:bg-[#b2c5b2b9] hover:text-white rounded-full transition-all"
            title="Home"
          >
            <BiHomeAlt />
            <div className="text-[10px] font-tertiary">HOME</div>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex flex-col items-center justify-center 
            hover:bg-[#b2c5b2b9] rounded-full transition-all hover:text-white"
            title="About"
          >
            {/* <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          > */}
            <BsBriefcase />
            <div className="text-[10px] font-tertiary">ABOUT</div>
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex flex-col items-center justify-center 
            hover:bg-[#b2c5b2b9] rounded-full transition-all hover:text-white"
            title="Projects"
          >
            <BsClipboardData />
            <div className="text-[10px] font-tertiary">PROJECTS</div>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[64px] h-[64px] flex flex-col items-center justify-center 
            hover:bg-[#b2c5b2b9] rounded-full transition-all hover:text-white"
            title="Contact"
          >
            <BsChatSquareText />
            <div className="text-[10px] font-tertiary">CONTACT</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
