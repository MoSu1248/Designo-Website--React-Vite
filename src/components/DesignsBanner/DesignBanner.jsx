import React from "react";
import "./designBanner.scss";
import ContactBack from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { motion } from "motion/react";

export default function DesignBanner({ title }) {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay },
    }),
  };
  return (
    <div className="banner">
      <div className="banner__content">
        <motion.h1
          className="card__wrapper"
          variants={fadeUpVariant}
          viewport={{ once: true }}
          initial="hidden"
          animate={"visible"}
        >
          {title}
        </motion.h1>
        <motion.p
          className="card__wrapper"
          variants={fadeUpVariant}
          viewport={{ once: true }}
          initial="hidden"
          animate={"visible"}
        >
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </motion.p>
      </div>
      <img src={ContactBack} alt="" className="banner__background" />
    </div>
  );
}
