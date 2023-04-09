import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possiblity">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false);
  return (
    <div className="gpt3-navbar">
      <div className="gpt3-navbar-links">
        <div className="gpt3-navbar-links-logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="gpt3-navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt3-navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={26}
            onClick={() => setTogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={26}
            onClick={() => setTogleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3-navbar-menu-container scale-up">
            <div className="gpt3-navbar-menu-container-links">
              <Menu />
              <div className="gpt3-navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
