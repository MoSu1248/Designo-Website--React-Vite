import React from "react";
import "./contactForm.scss";
import { motion } from "motion/react";

export default function ContactForm() {
  const fadeUpVariant = {
    hidden: { width: "30%" },
    visible: (delay) => ({
      width: "100%",
      transition: { duration: 1, delay },
    }),
  };
  return (
    <form className="contactUs__form">
      <motion.input
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="conntactUs__form-input"
        type="text"
        placeholder="Name"
      />
      <motion.input
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="conntactUs__form-input"
        type="text"
        placeholder="Email Address"
      />
      <motion.input
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="conntactUs__form-input"
        type="text"
        placeholder="Phone"
      />
      <motion.textarea
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="conntactUs__form-input text-area"
        name=""
        id=""
        placeholder="Your message"
      ></motion.textarea>

      <button>Submit</button>
    </form>
  );
}
