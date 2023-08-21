import React from "react";
// Link
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="header">Fernando Ramos</Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            className="flex items-center justify-center cursor-pointer btn btn-sm"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
