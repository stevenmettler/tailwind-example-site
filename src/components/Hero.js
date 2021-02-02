import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-serif mb-14 text-green">
        welcome
      </h1>
      <Link
        className="py-6 px-10 bg-gradient-to-r from-indigo-700 to-red-200 rounded-full text-3xl transition duration-300 ease-in-out flex items-center animate-bounce"
        to="/"
      >
        pls buy my things
      </Link>
    </div>
  );
};

export default Hero;
