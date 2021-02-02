import React from "react";
import { Link } from "react-router-dom";
import ImageOne from "../images/image4.png";

const Navbar = ({ toggle }) => {
  return (
    <div className="fixed w-full">
      <nav
        class="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          portfolio
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">
            home
          </Link>
          <Link className="p-4" to="/projects">
            projects
          </Link>
          <Link className="p-4" to="/about">
            about
          </Link>
          <Link className="p-4" to="/contact">
            contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
