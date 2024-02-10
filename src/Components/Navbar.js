import React from "react";

export const Navbar = () => {
  return (
    <ul className="navbar-nav">
      <li className="current-menu-item">
        <a href="/">Home</a>
      </li>
      <li className="">
        <a href="/about">About us</a>
      </li>
      {/* <li className="">
        <a href="/services">our services </a>
      </li> */}

      <li className="menu-item-has-children">
        <a href="/services">our services </a>
        <ul className="sub-menu">
          <li>
            <a href="digitaltransformation">Digital Transformation </a>
          </li>
          <li>
            <a href="Futuristic">Futuristic Techvolution</a>
          </li>
          <li>
            <a href="Frontier ">Frontier Techvolution</a>
          </li>
        </ul>
      </li>
      <li className="">
        <a href="/contact">Contact Us</a>
      </li>
    </ul>
  );
};
