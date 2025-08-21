import React from "react";
import "./locations.scss";
import Canada from "../../assets/shared/desktop/illustration-canada.svg";
import Australia from "../../assets/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Locations() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };
  return (
    <section className="locations">
      <article className="details__content">
        <div className="details__content-img canada">
          <img src={Canada} alt="" />
        </div>
        <motion.h3
          variants={fadeUpVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          Canada
        </motion.h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>

      <article className="details__content">
        <div className="details__content-img australia">
          <img src={Australia} alt="" />
        </div>
        <motion.h3
          variants={fadeUpVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          Australia
        </motion.h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>

      <article className="details__content">
        <div className="details__content-img unitedKingdom">
          <img src={UnitedKingdom} alt="" />
        </div>
        <motion.h3
          variants={fadeUpVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          United Kingdom
        </motion.h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>
    </section>
  );
}
