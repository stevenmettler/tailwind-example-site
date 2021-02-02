import React from "react";
import ImageOne from "../images/image1.jpeg";
import ImageTwo from "../images/image2.jpeg";
import ImageThree from "../images/image3.jpeg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="image1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">blah blah blah</h2>
          <p className="mb-2">yeet yeet yeet</p>
          <span>$999</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="image2"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">blah blah blah</h2>
          <p className="mb-2">yeet yeet yeet</p>
          <span>$999</span>
        </div>
      </div>
    </>
  );
};

export default Content;
