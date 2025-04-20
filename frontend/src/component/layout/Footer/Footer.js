import React from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      <img src={logo} alt="Logo" />
      </div>
      <div className="midFooter">
        <p>Copyrights 2025-26 by</p>
        <p className="copy">&copy; Deep Kardani</p>
      </div>
    </footer>
  );
};

export default Footer;