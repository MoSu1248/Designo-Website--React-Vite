import React, { useState } from "react";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import "./objective.scss";
import { motion } from "framer-motion";

export default function Objective() {
  const [isChildInView, setIsChildInView] = useState(false);

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
      className="objective"
      variants={fadeUpVariant}
      viewport={{ once: true }}
      initial="hidden"
      animate={isChildInView ? "visible" : "hidden"}
    >
      <div className="objective__content">
        <h2>The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <motion.p onViewportEnter={() => setIsChildInView(true)}>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </motion.p>
        <img
          src={InformationBack}
          alt=""
          className="objective__text-background"
        />
      </div>
      <div className="objective__img"></div>
    </motion.section>
  );
}
