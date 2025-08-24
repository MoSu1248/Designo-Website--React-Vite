import React, { useEffect, useState } from "react";
import CardBackground from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import MobileCardBackground from "../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import "./contactUsCard.scss";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
export default function ContactUsCard() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let backSrc;

  if (viewportWidth <= 650) {
    backSrc = MobileCardBackground;
  } else {
    backSrc = CardBackground;
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  const fadeUpVariant2 = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <div className="contactUs__card">
      <img src={backSrc} alt="" className="contactUs__card-background" />
      <div className="contactUs__text">
        <motion.h1
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeUpVariant2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </motion.p>
      </div>
      <ContactForm />
    </div>
  );
}
