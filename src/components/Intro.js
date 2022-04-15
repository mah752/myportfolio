import React from "react";
import "./intro.css";
import intropic from "../img/intropic.png";
import Contactbutton from "./ContactButton";


//import workTogetherButton from "./workTogetherButton";
//This is my intro section
const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          {" "}
          <h2 className="i-intro">Hi, my name is </h2>
          <h2 className="i-name">Maryan Hussein</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Front-End Developer</div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Based in the UK</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="intro-pic"src={intropic} alt="intro-pic" />
        <div className="contact-button">
          <Contactbutton />
        </div> 
      </div>
    </div>
  );
};

export default Intro;
