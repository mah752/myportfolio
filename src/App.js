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
            
          }}
        >
         <ul><li><Link to="/intro">Home</Link></li>{" "} 
          <li><Link to="/about">About</Link></li>{" "}
          <li><Link to="/projects">Projects</Link></li> 
          <li><Link to="/blog">Blog</Link></li>{" "}
          <li><Link to="/contact">Contact</Link></li>{" "}</ul> 
        </nav>
        <Outlet />
      </header>
      <Intro />
      <Footer />
    </div>
  );
};

export default App;
