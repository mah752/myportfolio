import React from "react";
import NavbarElement from "./navbarElement";

import classes from "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarElement />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
