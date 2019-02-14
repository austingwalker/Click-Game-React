import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <div className="pictures">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.pictureClicked(props.id)}/>
    </div>
  </div>
);

export default PictureCard;
