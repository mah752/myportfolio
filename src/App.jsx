import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

//import { FormText } from "react-bootstrap";

const App = () => {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Blog />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
