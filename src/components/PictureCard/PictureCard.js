import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <div className="pictures">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.countPicture()} className="count">
    </span>
  </div>
);

export default PictureCard;
