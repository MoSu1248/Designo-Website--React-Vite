import React from "react";
import "./designCard.scss";
import { motion } from "framer-motion";

function Card({ title, images, desc }) {
  return (
    <div className="design">
      <motion.div 
        whileHover={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          scale: 1.05,
        }}
        className="design__card"
      >
        <img src={images} alt={title} />
        <div className="design__text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
