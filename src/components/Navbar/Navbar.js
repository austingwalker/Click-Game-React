import React from "react";
import "./Navbar.css";
import NavMessage from ".././NavMessage";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar">
  <ul>
    <li className="brand">
      <a href="/">Loteria Memoria</a>
    </li>
    <NavMessage score={props.score} topScore={props.topScore} />
    <li>
      Score: {props.score} | Top Score: {props.topScore}
    </li>
  </ul>
</nav>
);

export default Navbar;
