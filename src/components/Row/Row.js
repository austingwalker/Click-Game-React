import React from "react";
import "./Row.css";

const Row = props =>
  <div className="row picBox">
  {props.children}
  </div>

export default Row;
