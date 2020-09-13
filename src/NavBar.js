import React from "react";
import "./NavBar.css";
import LoginPanel from "./login-components/LoginPanel";
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">logo</div>
      <div className="navbar__signin">
        <LoginPanel />
      </div>
    </div>
  );
}

export default NavBar;
