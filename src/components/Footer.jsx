import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Footer.css";

const Footer = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Contact me
            </Link>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>Portfolio coded by Maryan Hussein</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
