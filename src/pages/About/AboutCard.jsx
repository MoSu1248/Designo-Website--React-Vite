import React, { useState, useEffect } from "react";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import "./aboutCard.scss";
import { motion } from "framer-motion";

export default function AboutCard({ content, title, images, order }) {
  const [isChildInView, setIsChildInView] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const newTitle = title.toLowerCase().trim().replace(/\s+/g, "-");

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imgSrc;
  let backSrc;

  if (viewportWidth <= 650) {
    imgSrc = images.mobile;
    backSrc = images.mobilebackground;
  } else if (viewportWidth <= 900) {
    imgSrc = images.tablet;
    backSrc = images.background;
  } else {
    backSrc = images.background;

    imgSrc = images.desktop;
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, x: -20 },
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
      viewport={{ once: true, margin: "500px" }}
      initial="hidden"
      animate={isChildInView ? "visible" : "hidden"}
    >
      <motion.div
        className={`about-card__content`}
        onViewportEnter={() => setIsChildInView(true)}
      >
        <h1>{title}</h1>
        <p>{content.text_1}</p>
        <p>{content.text_2}</p>
        <img
          src={backSrc}
          alt=""
          className={`about-card__text-background ${newTitle}__text-background`}
        />
      </motion.div>
      <div className={` about-card__img`}>
        <img src={imgSrc} alt="" />
      </div>
    </motion.section>
  );
}
