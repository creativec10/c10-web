import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../assets/images/arrow-up.svg";
import { Navbar } from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="header-style-01">
        <nav className="navbar navbar-area navbar-expand-lg nav-style-02">
          <div className="container nav-container startup-nav">
            <div className="responsive-mobile-menu">
              <div className="logo-wrapper">
                <a href="/" className="logo">
                  <Image src="/logo-02.png" width={100} height={70} alt="Logo" />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#bizcoxx_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
              <Navbar />
            </div>
          </div>
        </nav>
      </div>

      <div className="header-area header-startup header-bg">
        <div
          className="startup-bg-img wow animate__animated animate__zoomIn"
          data-parallax={`{"x": 220, "y": 150}`}
        ></div>
        <div className="shape"></div>
        <div className="shape-02"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-inner">
                <span>Our Motto </span>
                <h1 className="title">Blend, Design, Innovate, Strategize </h1>
                <p>
                  With our core principles at the helm, we seamlessly merge creativity with
                  technology to sculpt digital brilliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth color="#007bff" />
    </>
  );
};

export default Header;
