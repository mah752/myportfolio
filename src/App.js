import React from "react";
import { Outlet, Link } from "react-router-dom";
import Intro from "./components/Intro";
//import Navbar from "./components/navbar/navbar";
//import About from "./components/About";
//import Projects from "./components/Projects";
//import Blog from "./components/Blog";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import { FormText } from "react-bootstrap";

const App = () => {
  return (
    <div className="portfolio-app">
      <header>
        <nav
          style={{
            paddingBottom: "1rem",
            MarginRight: 0,
          }}
        >
           <Link to="/"> <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> </Link>
          <Link to="/intro">Home</Link>{" "} 
          <Link to="/about">About me</Link>{" "}
          <Link to="/projects">Projects</Link> <Link to="/blog">Blog</Link>{" "}
          <Link to="/contact">Contact</Link>{" "}
        </nav>
        <Outlet />
      </header>
      <Intro />
      <Footer />
    </div>
  );
};

export default App;
