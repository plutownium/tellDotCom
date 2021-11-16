import React from "react";

import "./Card.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <div className={`all ${props.completed ? "completed" : "active"}`}>
        <div>
          <p>
            For user: <span>{props.userId}</span>
          </p>
        </div>
        <div className="activityDiv">
          <p>
            Activity: <span>{props.title}</span>
          </p>
        </div>
        <div>
          <p>
            Status: <span>{props.completed ? "completed!" : "active!"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
