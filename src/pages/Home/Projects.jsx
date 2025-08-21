import React, { useRef, useState } from "react";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import "./projects.scss";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function Projects() {
  const scrollRef = useRef(null);
  const [isChildInView, setIsChildInView] = useState(false);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  return (
    <section className="projects">
      <motion.div
        className="card__wrapper"
        variants={fadeUpVariant}
        viewport={{ once: true }}
        initial="hidden"
        animate={isChildInView ? "visible" : "hidden"}
      >
        <NavLink to={"web-designs"} className="card card_web">
          <motion.h2 onViewportEnter={() => setIsChildInView(true)}>
            Web design
          </motion.h2>
          <p to={"web-designs"}>
            view projects{" "}
            <span>
              <img src={RightArrow} />
            </span>
          </p>
        </NavLink>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        viewport={{ once: true }}
        animate={isChildInView ? "visible" : "hidden"}
      >
        <NavLink to={"app-designs"} className="card card_graphic">
          <h2>App design</h2>
          <p to={"app-designs"}>
            view projects{" "}
            <span>
              <img src={RightArrow} />
            </span>
          </p>
        </NavLink>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        viewport={{ once: true }}
        animate={isChildInView ? "visible" : "hidden"}
      >
        <NavLink className="card card_app" to={"graphic-designs"}>
          <h2>Graphic design</h2>
          <p to={"graphic-designs"}>
            view projects{" "}
            <span ref={scrollRef}>
              <img src={RightArrow} />
            </span>
          </p>
        </NavLink>
      </motion.div>
    </section>
  );
}
