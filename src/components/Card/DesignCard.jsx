import React from "react";
import "./designCard.scss";

function Card({ title, images, desc }) {
  return (
    <div className="design">
      <div className="design__card">
        <img src={images} alt={title} />
        <div className="design__text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
