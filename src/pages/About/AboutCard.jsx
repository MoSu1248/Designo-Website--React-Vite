import React, { useState, useEffect } from "react";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import "./aboutCard.scss";
import { motion } from "framer-motion";

export default function AboutCard({ content, title, images }) {
  const [isChildInView, setIsChildInView] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const newTitle = title.toLowerCase().trim().replace(/\s+/g, "-");

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imgSrc;

  if (viewportWidth <= 600) {
    imgSrc = images.mobile;
  } else if (viewportWidth <= 900) {
    imgSrc = images.tablet;
  } else {
    imgSrc = images.desktop;
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }),
  };
  return (
    <motion.section
      className={`about-card ${newTitle}`}
      variants={fadeUpVariant}
      viewport={{ once: true }}
      initial="hidden"
      animate={isChildInView ? "visible" : "hidden"}
    >
      <div className={`about-card__content`}>
        <h1>{title}</h1>
        <p>{content.text_1}</p>
        <motion.p onViewportEnter={() => setIsChildInView(true)}>
          {content.text_2}
        </motion.p>
        <img
          src={images.background}
          alt=""
          className={`about-card__text-background ${newTitle}__text-background`}
        />
      </div>
      <div className={` about-card__img`}>
        <img src={imgSrc} alt="" />
      </div>
    </motion.section>
  );
}
