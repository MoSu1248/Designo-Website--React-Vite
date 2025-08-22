import React, { useState } from "react";
import FooterNav from "./FooterNav";
import Layout from "../Layout/Layout";
import FooterSocial from "./FooterSocial";
import FooterInfo from "./FooterInfo";
import ContactBanner from "../ContactBanner/ContactBanner";
import { motion } from "framer-motion";

import "./footer.scss";

export default function Footer() {
  const [isChildInView, setIsChildInView] = useState(false);

  const fadeUpVariant = {
    hidden: { y: 50 },
    visible: (delay) => ({
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };
  return (
    <motion.footer
      className="footer"
      variants={fadeUpVariant}
      viewport={{ once: true }}
      initial="hidden"
      animate={isChildInView ? "visible" : "hidden"}
    >
      <motion.div
        className="footer-container"
        onViewportEnter={() => setIsChildInView(true)}
      >
        <ContactBanner />
        <FooterNav />
        <div className="footer__content">
          <FooterInfo />
          <FooterSocial />
        </div>
      </motion.div>
    </motion.footer>
  );
}
