import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
// from "react-router-dom";
//import { Link } from "react-scroll";
//import Intro from '../Intro';
//import About from '../About';
//import Projects from '../Projects';
//import Blog from '../Blog';
//import Contact from '../Contact';

function NavbarElement() {
  return (
      <div>
        <nav>
          <Link to="./" className="logo">
            MH
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-btn" for="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="./" className="logo">
                Home
              </Link>
            </li>
            <li>
              <ScrollLink to="about" smooth={true}>
                About me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="blogs" smooth={true}>
                Blogs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true}>
                Contact me
              </ScrollLink>
            </li>
          </ul>
          <ScrollLink to="#" className="burger">
            <span> 🍔</span>
          </ScrollLink>
        </nav>
      </div>
  );
}

export default NavbarElement;
