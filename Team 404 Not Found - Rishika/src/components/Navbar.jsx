import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { MdOutlineSchool, MdOutlineContactPage } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { GiStarFormation } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo + Brand */}
        <NavLink to="/" className="navbar-left" onClick={closeMenu}>
          <img src="/logo2.png" alt="Logo" className="logo" />
        </NavLink>

        {/* Nav Links */}
        <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            <AiOutlineHome className="icon" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            <BiUserVoice className="icon" />
            <span>About Us</span>
          </NavLink>
          <NavLink to="/programs" className="nav-link" onClick={closeMenu}>
            <MdOutlineSchool className="icon" />
            <span>Programs</span>
          </NavLink>
          <NavLink to="/verify" className="nav-link" onClick={closeMenu}>
            <BsCheck2Circle className="icon" />
            <span>Verify Certificate</span>
          </NavLink>
          <NavLink to="/special" className="nav-link" onClick={closeMenu}>
            <GiStarFormation className="icon" />
            <span>What’s Special</span>
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            <MdOutlineContactPage className="icon" />
            <span>Contact Us</span>
          </NavLink>

          <NavLink
            to="/login"
            className="nav-link login-link"
            onClick={closeMenu}
          >
            <span className="login-btn">Login to Portal</span>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon mobile-only" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
