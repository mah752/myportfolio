import React from "react";
//import { Link } from "react-scroll";

import "./Footer.css";

const Footer = () => {
 

  return (
    <div className="footer">
      <div class="contact-box justify-content-between mb-5 d-none d-md-flex ">
        <div>
          <h3>Work Inquiry</h3>
          <p class="text-muted ">Let's work together</p>
        </div>
        <div>
          <a
            href="/contact.html "
            class="btn btn-branding mt-3 "
            title="Contact Patricia "
          >
            Contact me
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center mb-5 ">
        <a
          href="mailto:patricia@gmail.com "
          class="email-link "
          title="Email Patricia "
        >
          patricia@gmail.com
        </a>
      </div>
      <div class="social-links d-flex justify-content-center ">
        <a
          href="https://www.github.com/patricia "
          target="_blank "
          title="GitHub Profile "
        >
          <i class="fab fa-github "></i>
        </a>
        <a
          href="https://www.instragram.com/patricia "
          target="_blank "
          title="instragram Profile "
        >
          <i class="fab fa-instagram "></i>
        </a>
        <a
          href="https://www.twitter.com/patricia "
          target="_blank "
          title="Twitter Profile "
        >
          <i class="fab fa-twitter "></i>
        </a>
      </div>
      <p class="text-center mt-5 ">
        ✌️ This website was coded by Maryan Hussein, and is
        <a
          href="https://github.com/matthieua/portfolio-project "
          target="_blank "
        >
          open-sourced
        </a>
      </p>
    </div>
  );
};

export default Footer;
