import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {

  return (
    <Link to="test">
      <li
        title="event"
        onClick={(e) => {
         
        }}
      >
        <div className="hover">
          <p>VER EVENTO</p>
        </div>
        <img src={props.imagePath} width="100%" height="215" alt="" srcSet="" />

        <div className="list__content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </li>
     
    </Link>
  );
}

export default Card;
