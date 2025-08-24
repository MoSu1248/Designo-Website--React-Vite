import React from "react";
import { NavLink } from "react-router-dom";
import "./mobileMenuOverlay.scss";
import { motion } from "motion/react";

export default function MobileMenuOverlay({ onClose }) {
  const menuVariants = {
    open: {
      transition: {
        staggerChildren: 0.5, // each child delayed by 0.2s
        delayChildren: 0.1, // optional delay before the first child
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // reverse the order on exit
      },
    },
  };    

  const itemVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      className="mobileMenuOverlay"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 35 }}
    >
      <motion.ul
        className="mobileMenuOverlay__list"
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
      >
        <li className="mobileMenuOverlay__list-item" variants={itemVariants}>
          <NavLink
            to={"about"}
            className="mobileMenuOverlay__link"
            onClick={onClose}
          >
            Our Company
          </NavLink>
        </li>
        <li className="mobileMenuOverlay__list-item" variants={itemVariants}>
          <NavLink
            to={"location"}
            className="mobileMenuOverlay__link"
            onClick={onClose}
          >
            Locations
          </NavLink>
        </li>
        <li className="mobileMenuOverlay__list-item" variants={itemVariants}>
          <NavLink
            to={"contact"}
            className="mobileMenuOverlay__link"
            onClick={onClose}
          >
            Contact
          </NavLink>
        </li>
      </motion.ul>
    </motion.div>
  );
}
