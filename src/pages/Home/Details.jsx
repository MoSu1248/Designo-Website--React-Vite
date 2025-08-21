import React from "react";
import Passionate__img from "../../assets/home/desktop/illustration-passionate.svg";
import Resourceful__img from "../../assets/home/desktop/illustration-resourceful.svg";
import Friendly__img from "../../assets/home/desktop/illustration-friendly.svg";
import { motion } from "motion/react";
import "./details.scss";

export default function Details() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 2, delay },
    }),
  };

  return (
    <section className="details">
      <div className="details__content">
        <div className="details__content-img passion-img">
          <img src={Passionate__img} alt="" />
        </div>
        <div>
          <h3>Passionate</h3>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </motion.p>
        </div>
      </div>

      <div className="details__content">
        <div className="details__content-img resourceful-img">
          <img src={Resourceful__img} alt="" />
        </div>
        <div>
          <h3>Resourceful</h3>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </motion.p>
        </div>
      </div>

      <div className="details__content">
        <div className="details__content-img friendly-img">
          <img src={Friendly__img} alt="" />
        </div>
        <div>
          <h3>Friendly</h3>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
