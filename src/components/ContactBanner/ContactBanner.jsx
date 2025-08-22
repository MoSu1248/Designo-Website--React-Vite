import React from "react";
import ContactBack from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { NavLink } from "react-router-dom";
import "./contactBanner.scss";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUpVariant = {
    hidden: { opacity: 0, top: -0 },
    visible: (delay) => ({
      opacity: 1,
      top: -80,
      transition: { duration: 0.5, delay },
    }),
  };

  return (
    <motion.div
      className="contact"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="contact__content">
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <img src={ContactBack} alt="" className="banner__background" />

      <NavLink className="contact__btn-styling">Get in touch</NavLink>
    </motion.div>
  );
}
