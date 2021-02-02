import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? "grid grid-rows-4 text-center items-center" : "hidden"
      }
      onClick={toggle}
    >
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
  );
};

export default Dropdown;
