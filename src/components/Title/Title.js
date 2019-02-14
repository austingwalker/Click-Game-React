import React from "react";
import "./Title.css";

const Title = props => 

<div className="title" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
{props.children}
</div>;

export default Title;

