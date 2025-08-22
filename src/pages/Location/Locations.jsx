import React, { useState, useEffect } from "react";
import "./location.scss";
import { info } from "../../data/LocationsData.js";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import { motion } from "framer-motion";

export default function Locations() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };

  return (
    <div className="location">
      <div className="location__cards">
        {info[0].destinations.map((destination, index) => {
          return (
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="location__card"
              key={index}
            >
              <div className="location__info">
                <h2>{destination.name}</h2>
                <div className="location__info-container">
                  <div className="location__info_text">
                    <p className="location__header">
                      {destination.location.office}
                    </p>
                    <p>{destination.location.address}</p>
                    <p>{destination.location.area}</p>
                  </div>
                  <div className="location__info_text">
                    <p className="location__header">Contact</p>
                    <p>{destination.contact.phone}</p>
                    <p>{destination.contact.email}</p>
                  </div>
                </div>
                <img
                  src={InformationBack}
                  alt=""
                  className="location__text-background"
                />
              </div>
              <motion.div
                className="location__img-container"
                whileHover={
                  viewportWidth > 900
                    ? {
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        scale: 1.1,
                      }
                    : {}
                }
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={
                    viewportWidth <= 900
                      ? destination.urlTablet
                      : destination.url
                  }
                  alt=""
                  className="location__img"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
