import React from "react";

function Card(props) {
  return (
    <div className={props.completed ? "completed" : "active"}>
      <div>{props.userId}</div>
      <div>{props.title}</div>
      <div>{props.completed}</div>
    </div>
  );
}

export default Card;
