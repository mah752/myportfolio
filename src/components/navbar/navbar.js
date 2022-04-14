import Layout from "./layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Blog from '../Blog';
import Contact from '../Contact';

function Navbar() {
  return (
      <Router>
    <Layout>
      <Routes>
        <Route path="/intro" exact>
          <Intro />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Routes>
    </Layout>
    </Router>
  );
}

export default Navbar;
