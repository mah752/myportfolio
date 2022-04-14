import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
//import { Link as ScrollLink } from "react-scroll";
import classes from "./NavbarElement.scss";
import { Link, useNavigate } from "react-router-dom";
// from "react-router-dom";
//import { Link } from "react-scroll";
//import Intro from '../Intro';
//import About from '../About';
//import Projects from '../Projects';
//import Blog from '../Blog';
//import Contact from '../Contact';

const NavbarElement = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate.push("/contact");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="./" className={classes.header__content__logo}>
          MH
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/intro" onClick={menuToggleHandler}>
                PageOne
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={menuToggleHandler}>
                PageOne
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={menuToggleHandler}>
                PageTwo
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={menuToggleHandler}>
                PageThree
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={menuToggleHandler}>
                PageThree
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Let's work together</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarElement;
