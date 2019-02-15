import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="footer" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
    <span>Austin Walker</span>
  </footer>
);

export default Footer;
