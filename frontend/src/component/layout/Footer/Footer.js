import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} alt="Logo" />
        <p>Copyrights 2024-25 by</p>
        <h5>&copy; Deep Kardani</h5>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/deep_patel_145">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://instagram.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;