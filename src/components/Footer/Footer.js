import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="footer" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
    <span>Loteria Memoria</span>
  </footer>
);

export default Footer;
