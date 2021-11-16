import React from "react";

import "./Card.css";

function Card(props) {
  return (
    <div className={`all ${props.completed ? "completed" : "active"}`}>
      <div>{props.userId}</div>
      <div>{props.title}</div>
      <div>{props.completed ? "completed!" : "active!"}</div>
    </div>
  );
}

export default Card;
